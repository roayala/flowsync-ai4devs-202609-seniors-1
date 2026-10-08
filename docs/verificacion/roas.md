Scenarios en el requisito: 3 · Cubiertos: 0

| Scenario | Test que lo cubre | Estado | Qué te faltó |
|---|---|---|---|
| Responsable identificable: al obtener una tarea de "Ada Lovelace", su `assignee` trae nombre e iniciales | | No cubierto | |
| La tarea no filtra datos de cuenta: al obtener cualquier tarea, su `assignee` no incluye email ni datos de acceso | | No cubierto | |
| Responsable sin nombre: su nombre llega nulo y las iniciales siguen llegando | | No lo sé | Solo hay un test de login con iniciales sin nombre; ninguno lo comprueba en el `assignee` de una tarea |

- Número del paso 0: no registrado (no di ninguno) · Real: 0 de 3 cubiertos.
- Dudé entre test o spec en «Responsable sin nombre»: no sé si falta el test o si la regla (iniciales derivadas del email) no está resuelta.
- Decidí yo: iniciales `AL`, email, título y estado `pending`, que el solicitante sea el propio responsable, `today=2026-10-07`, las dos vías en un mismo test y las claves exactas del `assignee`.
