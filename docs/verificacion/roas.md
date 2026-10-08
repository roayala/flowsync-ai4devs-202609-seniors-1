Scenarios en el requisito: 3 · Cubiertos: 0

| Scenario | Test que lo cubre | Estado | Qué te faltó |
|---|---|---|---|
| Responsable identificable: al obtener una tarea de "Ada Lovelace", su `assignee` trae nombre e iniciales | | No cubierto | |
| La tarea no filtra datos de cuenta: al obtener cualquier tarea, su `assignee` no incluye email ni datos de acceso | | No cubierto | |
| Responsable sin nombre: su nombre llega nulo y las iniciales siguen llegando | | No lo sé | Solo hay un test de login con iniciales sin nombre; ninguno lo comprueba en el `assignee` de una tarea |

- Creía: que hacian falta algunas pero si las ejecuto entonces decidi llevar los test al siguiente nivel · Estaban: 0 de 3
- Dudé en «Responsable sin nombre»: la spec de tasks dice que las iniciales «siguen llegando» pero no cuáles, y la regla está en auth (salen del email), así que no supe si faltaba el test o una decisión en la spec sobre si derivarlas del email respeta «sin recurrir a su email».
- En el test, el solicitante es el propio responsable de la tarea; lo decidió el agente, no el scenario, y si el email solo se filtrara cuando mira otro usuario, el test no lo detectaría.
