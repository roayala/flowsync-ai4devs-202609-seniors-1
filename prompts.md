# Prompts

Aquí van **todos los prompts que lanzaste** para hacer el ejercicio, en el orden en que los
lanzaste, con el modelo y la herramienta de cada uno.

Esto no es papeleo. Lo que se revisa es **cómo pediste las cosas**, no solo lo que salió: un
resultado flojo con un prompt bueno y un resultado flojo con un prompt vago necesitan feedback
distinto, y sin este archivo no se distinguen.

## Cómo rellenarlo

- Un apartado `## Prompt N` por cada prompt.
- **Pega el prompt tal cual lo lanzaste**, dentro del bloque de código, aunque ocupe diez líneas
  y aunque tenga faltas. No lo reescribas para que quede bien: el que arreglaste mentalmente
  después no es el que lanzaste.
- Incluye también los que **no funcionaron**. Suelen ser los más útiles de leer.
- `Modelo` y `Herramienta` en todos. Si cambiaste de una a otra a mitad, se nota aquí.

Borra el ejemplo de abajo cuando escribas el primero.

---

## Prompt 1

**Modelo:** Opus 5.5
**Herramienta:** Claude Code

```
De la siguiente tarea, vamos a hacer un plan de accion. Primero ayudame a entener de que se trata despues. Vamos a resolverla paso a paso, un prompt a la ves 

a tarea
⚠ Guarda cada prompt exactamente como lo envías, desde el primero. Tendrás que entregarlos junto con la tabla. No los reconstruyas después, porque los cambios que harías al revisarlos también forman parte de lo que queremos analizar.

El encuadre, y no es un consuelo
El entregable no es la tabla. Son las tres líneas de la parte B. Puedes escribirlas aunque la tabla todavía no esté completa.

Antes de empezar, ten en cuenta algo importante: el resultado no depende de ti. Lo determina el historial del repositorio. Puede mostrar que varias reglas se incumplen, que muchas no se pueden comprobar o que todas se cumplen. Cualquiera de esos resultados es válido. Lo importante es que puedas justificarlo con evidencia.

Si todas las reglas se cumplen, la pregunta sigue siendo útil: ¿lo sabías antes de revisar el historial o simplemente lo dabas por hecho?

Qué vas a auditar: las reglas de proceso que acabas de localizar en el paso 6. Para comprobar si se cumplen, tendrás que contrastarlas con los últimos 15 commits del mismo repositorio. Es la misma auditoría que hará el mentor durante el directo, pero aquí la intentas antes con tus propios prompts.

⚠ Reserva unos 45 minutos y usa un temporizador. Cuando se acabe el tiempo, detente aunque la tabla no esté completa. La tarea también busca mostrar qué puedes comprobar con evidencia dentro de un tiempo limitado.

🅰 Parte A: la auditoría, con reloj
Antes de empezar: registra tu expectativa
Abre el archivo de instrucciones del agente y localiza las reglas de proceso. Son las que indican qué hacer antes de modificar código, cuándo crear commits y qué debe hacerse al cerrar el trabajo.

Sin comprobar todavía el historial, marca cuáles crees que se están cumpliendo. Basta con una palabra por regla: sí, no o ni idea.

Te llevará unos treinta segundos. El objetivo es dejar constancia de lo que pensabas antes de revisar la evidencia. Así podrás comparar después tu expectativa con lo que realmente muestra el historial.

La tabla
Con ayuda del agente, contrasta las reglas con los últimos 15 commits del repositorio y el estado actual de los archivos del proyecto. Guarda el resultado en docs/auditoria/<tus-iniciales>.md, no en el chat.

Usa una fila por regla y completa estas cinco columnas:

Qué pide la regla. Resúmela en una frase y con tus propias palabras. Si necesitas varias frases, puede que estés mezclando más de una regla.

Qué se revisó para comprobarla. Indica el comando ejecutado o el archivo consultado. Sin esta información no hay forma de saber en qué se apoya el veredicto.

Veredicto. Solo puede ser se cumple, no se cumple o no se puede comprobar con la información disponible. Este último caso también es un resultado válido. Significa que la regla no deja suficiente evidencia para verificarla.

Evidencia. Escríbela en una línea. Si la regla no se cumple, indica dónde se incumple. Si no se puede comprobar, explica qué información falta.

Qué harías con ella. Elige una opción: dejarla, borrarla o convertirla en una comprobación automática.

⚠ Esto es una auditoría, no una tarea de corrección. Indica al agente que no modifique ningún archivo. Si empieza a corregir lo que encuentra, cambiará el estado que estás intentando analizar y perderás parte de la evidencia original.

⚠ Cuando termine el tiempo, detente aunque la tabla esté incompleta. No completes después las filas de memoria.

Una fila parcial también aporta información porque muestra hasta dónde llegaste dentro del tiempo disponible. Completarla después sin volver a comprobar la evidencia puede hacer que el resultado parezca más sólido de lo que realmente es.

🅱 Parte B: las tres líneas
Debajo de la tabla, en el mismo archivo, añade estas tres líneas. Esta parte es obligatoria y debe estar completa.

La regla en la que más te equivocaste. Compara tu expectativa inicial con el veredicto final y elige la que más se alejó de lo que pensabas. Si acertaste todas, indícalo y explica en una frase en qué te apoyaste para acertar. Si solo era una impresión, también conviene dejarlo por escrito.

Una regla que no se puede comprobar con la información disponible. Explica en una frase qué tendría que cambiar para poder verificarla. Puede ser reformularla, convertirla en una comprobación automática o aceptar que no deja una evidencia clara.

La regla que eliminarías y por qué. Hay dos casos habituales: una regla que ya garantiza otra herramienta o una que nadie sigue y que tampoco aporta valor. Elige una y explica a cuál de los dos casos pertenece.

⚠ No hay una respuesta correcta para estas tres líneas. Lo importante es que reflejen lo que descubriste durante la auditoría, incluso si el resultado contradice lo que esperabas al empezar.

Cómo saber que la has hecho bien
Tu expectativa está escrita antes que la tabla y no la has cambiado después de ver el resultado.

Las tres líneas están completas y son concretas.

Has comprobado por tu cuenta la evidencia de al menos una fila, revisando el historial y no solo el resumen del agente.

No hay archivos modificados aparte del tuyo. Si los hay, el agente cambió el estado que estabas auditando y el resultado deja de reflejar el punto de partida.

La tabla sigue siendo breve y fácil de revisar. Si ha crecido demasiado, comprueba que no hayas incluido elementos que no sean reglas de proceso.

Entrégalo tal como esté cuando termine el tiempo.
```

## Prompt 2

**Modelo:** Opus 5.5
**Herramienta:** Claude Code

```
roas, revisa que ya no estmos en la rama.
```

## Prompt 3

**Modelo:** Opus 5.5
**Herramienta:** Claude Code

```
Est aes la instruccion, empezemos a generar los prompts 

bre el archivo de instrucciones del agente y localiza las reglas de proceso. Son las que indican qué hacer antes de modificar código, cuándo crear commits y qué debe hacerse al cerrar el trabajo.

Sin comprobar todavía el historial, marca cuáles crees que se están cumpliendo. Basta con una palabra por regla: sí, no o ni idea.

Te llevará unos treinta segundos. El objetivo es dejar constancia de lo que pensabas antes de revisar la evidencia. Así podrás comparar después tu expectativa con lo que realmente muestra el historial.

La tabla
Con ayuda del agente, contrasta las reglas con los últimos 15 commits del repositorio y el estado actual de los archivos del proyecto. Guarda el resultado en docs/auditoria/<tus-iniciales>.md, no en el chat.

Usa una fila por regla y completa estas cinco columnas:

Qué pide la regla. Resúmela en una frase y con tus propias palabras. Si necesitas varias frases, puede que estés mezclando más de una regla.

Qué se revisó para comprobarla. Indica el comando ejecutado o el archivo consultado. Sin esta información no hay forma de saber en qué se apoya el veredicto.

Veredicto. Solo puede ser se cumple, no se cumple o no se puede comprobar con la información disponible. Este último caso también es un resultado válido. Significa que la regla no deja suficiente evidencia para verificarla.

Evidencia. Escríbela en una línea. Si la regla no se cumple, indica dónde se incumple. Si no se puede comprobar, explica qué información falta.

Qué harías con ella. Elige una opción: dejarla, borrarla o convertirla en una comprobación automática.

⚠ Esto es una auditoría, no una tarea de corrección. Indica al agente que no modifique ningún archivo. Si empieza a corregir lo que encuentra, cambiará el estado que estás intentando analizar y perderás parte de la evidencia original.

⚠ Cuando termine el tiempo, detente aunque la tabla esté incompleta. No completes después las filas de memoria.

Una fila parcial también aporta información porque muestra hasta dónde llegaste dentro del tiempo disponible. Completarla después sin volver a comprobar la evidencia puede hacer que el resultado parezca más sólido de lo que realmente es.
```

## Prompt 4

**Modelo:** Opus 5.5
**Herramienta:** Claude Code

```
guardalos, ejecuta uno por uno preguntamo datos ve llenando ala asp
```

## Prompt 5

**Modelo:** Opus 5.5
**Herramienta:** Claude Code

```
listo corriste todos los prompts?
```

## Prompt 6

**Modelo:** Opus 5.5
**Herramienta:** Claude Code

```
ahora puedes correr los prompts
```

## Prompt 7

**Modelo:** Opus 5.5
**Herramienta:** Claude Code

```
corre los prompts
```

## Prompt 8

**Modelo:** Opus 5.5
**Herramienta:** Claude Code (respuesta escrita en una pregunta del agente)

```
puedes cerrar pero deja la autoria d emi lado
```
