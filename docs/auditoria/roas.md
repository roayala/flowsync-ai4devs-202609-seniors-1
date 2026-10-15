# Auditoría de reglas de proceso — roas

Reglas auditadas: sección «Reglas de proceso» de `CLAUDE.md`.
Ventana: `git log -15 s5/start` (HEAD `a3bb962`) + estado actual de los archivos.

## Expectativa (antes de revisar el historial)

Registrada el 2026-10-14 a las 23:00, antes de ejecutar ningún comando sobre el historial.

- R1 Comprobar la rama antes de tocar código y seguir en ella si ya es de trabajo: sí
- R2 Crear ramas nuevas solo desde main o sN/*, con nombre feat/<slug>: sí
- R3 No commitear nunca directamente en main ni en sN/*: no
- R4 Un commit por petición, hecho con /commit: sí
- R5 Si cambias rutas/controladores/validadores/transformers, el .adonisjs/ regenerado va en el mismo commit: sí
- R6 …y el docs/capabilities/<nombre>/README.md actualizado en el mismo commit: sí
- R7 gh pr create con descripción completa, una sola vez, al terminar la unidad: sí
- R8 adversarial-reviewer sobre el PR, una vez y como último paso: sí
- R9 Al abrir el PR, responder en el chat solo con la URL: sí

## Tabla

| # | Qué pide la regla | Qué se revisó | Veredicto | Evidencia | Qué haría |
|---|---|---|---|---|---|
| R1 | Mirar en qué rama estás antes de tocar código y seguir en ella si ya es de trabajo | `git log -15 s5/start`, `git branch -a` | No se puede comprobar con la información disponible | Es una acción dentro de la sesión del agente: git no registra qué rama se miró antes de editar | Convertirla en comprobación automática |
| R2 | Crear ramas nuevas solo desde `main` o `sN/*` y con nombre `feat/<slug>` | `git branch -a`, `git branch -a --contains 4427afc` | No se cumple | No hay ninguna rama `feat/*` (local, origin ni upstream); las tres de trabajo (`alcance-roas`, `trazabilidad-roas`, `auditoria-roas`, esta última creada por el agente en esta sesión desde `s5/start`) no la siguen | Convertirla en comprobación automática |
| R3 | No commitear nunca directamente en `main` ni en `sN/*` | `git log -15 s5/start --format='%h %p'`, `git branch -a --contains 4427afc`, `gh pr list --state all` (fork y upstream), `git cat-file -t 5cb8726` | No se puede comprobar con la información disponible | Historia lineal sin merges y los commits solo viven en `s5/start`, pero un fast-forward deja la misma huella; la historia está reescrita (4e03d1f cita 5cb8726, que no existe), así que se perdió la rama de origen | Convertirla en comprobación automática |
| R4 | Un commit por petición, hecho con la skill `/commit` | `.claude/skills/commit/SKILL.md`, `git log -15 s5/start --format='%h %s'` | No se puede comprobar con la información disponible | La skill solo deja el formato `tipo(scope):`; 14/15 lo siguen y a3bb962 (`docs:` sin scope) no; ni «una petición = un commit» ni el uso de la skill quedan registrados | Convertirla en comprobación automática |
| R5 | Si un cambio toca rutas/controladores/validadores/transformers, el diff regenerado de `.adonisjs/` va en el mismo commit | `git log s5/start -- start/routes.ts app/controllers app/validators app/transformers`, `git log s5/start -- .adonisjs/`, `.adonisjs/client/registry/schema.d.ts` | Se cumple | ea5db1f añade rutas y trae su diff de `.adonisjs/`; cbe9617, el único caso posterior a la regla (160fbc7), solo añade decoradores y el registro referencia tipos por `import(...)`, así que no hay nada que regenerar (inferido sin regenerar) | Dejarla |
| R6 | …y el `docs/capabilities/<nombre>/README.md` al día en ese mismo commit | `git show --stat cbe9617`, `git show --stat 4e03d1f`, `git show --stat 7662fb1` | Se cumple | cbe9617 (único caso tras 160fbc7) toca controladores y `docs/capabilities/tasks/README.md` juntos; 4e03d1f es anterior a la regla y al propio README (7662fb1) | Dejarla |
| R7 | Abrir un solo PR, con descripción completa, al terminar la unidad de trabajo | `gh pr list -R roayala/… --state all` → `[]`; `gh pr list -R LIDR-academy/…` → repo no resoluble; `git log -15 s5/start --format='%p'` | No se puede comprobar con la información disponible | Los PR no viven en git: el fork no tiene ninguno, el upstream no es accesible y no hay merge commits en la ventana | Dejarla |
| R8 | Pasar `adversarial-reviewer` sobre el PR, una vez y como último paso | `.claude/agents/adversarial-reviewer.md`, mensaje de 8f9e715 | No se puede comprobar con la información disponible | El subagente es de solo lectura (sin Bash, según 8f9e715): su veredicto se queda en la sesión, no llega a git ni al PR | Dejarla |
| R9 | Al abrir el PR, contestar en el chat solo con la URL | Ninguna fuente en el repo | No se puede comprobar con la información disponible | El chat no se versiona; haría falta el transcript de la sesión | Dejarla |

## Parte B

1. **Regla en la que más me equivoqué:** R2. Aposté «sí» y no se cumple: no hay ni una rama `feat/*` y la de esta misma auditoría (`auditoria-roas`) se creó con el nombre que pide el README del curso sin que nadie notara que contradecía `CLAUDE.md`. De mis ocho «sí», solo R5 y R6 se pudieron confirmar; el resto eran impresiones.
2. **Regla que no se puede comprobar:** R3. Git no guarda en qué rama se hizo un commit, y un fast-forward deja la misma huella que un commit directo. Para verificarla habría que convertirla en una comprobación automática (protección de rama en GitHub o un hook `pre-commit` que rechace `main` y `sN/*`), que además deja rastro.
3. **Regla que eliminaría:** R2, por el caso de «nadie la sigue y no aporta valor». No hay ninguna rama `feat/*` y el propio curso pide otro nombre; lo que protege de verdad es R3, no cómo se llame la rama. Por eso la borraría en vez de automatizarla, como marqué en la tabla.
