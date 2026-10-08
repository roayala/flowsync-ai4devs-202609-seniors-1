import Task from '#models/task'
import User from '#models/user'
import { test } from '@japa/runner'
import testUtils from '@adonisjs/core/services/test_utils'

/**
 * Lo que cada tarea muestra de su responsable. Cubre los scenarios
 * «Responsable identificable» y «La tarea no filtra datos de cuenta» del
 * requisito «Lo que cada tarea muestra de su responsable» de
 * `openspec/specs/tasks/spec.md`.
 */
test.group('Tareas | responsable', (group) => {
  group.each.setup(() => testUtils.db().withGlobalTransaction())

  async function tareaDeAda(client: any) {
    const ada = await User.create({
      fullName: 'Ada Lovelace',
      email: 'ada@example.com',
      password: 'secreto123',
    })
    const tarea = await Task.create({
      title: 'Escribir el informe',
      status: 'pending',
      assigneeId: ada.id,
    })

    const login = await client
      .post('/api/v1/auth/login')
      .json({ email: 'ada@example.com', password: 'secreto123' })

    return { tarea, token: login.body().data.token as string }
  }

  /** Las dos vías por las que se obtiene una tarea: suelta y dentro de la lista. */
  async function responsables(client: any, token: string, id: number) {
    const suelta = await client
      .get(`/api/v1/tasks/${id}?today=2026-10-07`)
      .header('Authorization', `Bearer ${token}`)
    const lista = await client.get('/api/v1/tasks').header('Authorization', `Bearer ${token}`)

    suelta.assertStatus(200)
    lista.assertStatus(200)

    return {
      suelta: suelta.body().data.assignee,
      lista: lista.body().data.find((t: any) => t.id === id).assignee,
    }
  }

  test('el responsable llega con su nombre y sus iniciales', async ({ client, assert }) => {
    const { tarea, token } = await tareaDeAda(client)

    const { suelta, lista } = await responsables(client, token, tarea.id)

    for (const assignee of [suelta, lista]) {
      assert.equal(assignee.fullName, 'Ada Lovelace')
      assert.equal(assignee.initials, 'AL')
    }
  })

  test('el responsable de una tarea no incluye el email ni otro dato de la cuenta', async ({
    client,
    assert,
  }) => {
    const { tarea, token } = await tareaDeAda(client)

    const { suelta, lista } = await responsables(client, token, tarea.id)

    for (const assignee of [suelta, lista]) {
      assert.notProperty(assignee, 'email')
      assert.deepEqual(Object.keys(assignee).sort(), ['fullName', 'id', 'initials'])
    }
  })
})
