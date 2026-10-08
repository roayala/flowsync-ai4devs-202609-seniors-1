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

---

## Prompt 1

**Modelo:** Sonnet 5.5 (`claude-sonnet-5-5`)
**Herramienta:** Claude Code

```
Pasted text #1 +8 lines]
```

## Prompt 2

**Modelo:** Sonnet 5.5 (`claude-sonnet-5-5`)
**Herramienta:** Claude Code

```
Estoy en el repo flowsync-ai4devs, en mi fork. Verifica el entorno sin modificar código:
1. Node >= 24 (node -v) y make (make --version).
2. git remote -v: origin debe ser mi fork y upstream el repo del curso.
3. Rama actual y estado de git.
4. Si no he ejecutado make setup, dímelo antes de hacer nada.
5. Ejecuta (cd backend && npm test) y reporta cuántos tests pasan o fallan.
6. Lista los archivos de .claude/agents/ (o dime que no hay).
No instales ni arregles nada sin preguntarme. Dame un informe corto con lo que está bien y lo que falla.
```

## Prompt 3

**Modelo:** Sonnet 5.5 (`claude-sonnet-5-5`)
**Herramienta:** Claude Code

```
tienes instalad openspec en tus skills?
```

## Prompt 4

**Modelo:** Sonnet 5.5 (`claude-sonnet-5-5`)
**Herramienta:** Claude Code

```
Lee openspec/specs/tasks/spec.md. Trabajamos SOLO el requisito «Lo que cada tarea muestra de su responsable»; ignora el resto de la capability aunque quieras ofrecerte a cubrirla.
Dame: (a) el texto literal del requisito, (b) cuántos scenarios tiene, (c) cada scenario en UNA línea (cuándo/entonces). Si alguno no cabe en una línea, dime que son dos y sepáralos.
No leas tests todavía ni escribas nada.
```

## Prompt 5

**Modelo:** Sonnet 5.5 (`claude-sonnet-5-5`)
**Herramienta:** Claude Code

```
Ahora busca en backend/tests/ qué tests podrían cubrir cada scenario del requisito «Lo que cada tarea muestra de su responsable».
Reglas:
- El nombre de un test NO es prueba de cobertura. Abre cada test candidato y lee sus aserciones.
- Para cada scenario devuelve: nombre EXACTO del test (archivo + título tal como sale en la suite), qué afirma realmente, y si cubre todo el scenario o solo una parte.
- Estado: Cubierto / No cubierto / No lo sé. «No lo sé» es válido: úsalo si encuentras algo parecido que no dice exactamente lo mismo o no encuentras dónde se comprueba, y explica en media línea qué te faltó.
- Si no hay nombre concreto de test, la columna queda vacía. Nada de «seguro que alguno lo cubre».
No modifiques ningún archivo.
```

## Prompt 6

**Modelo:** Sonnet 5.5 (`claude-sonnet-5-5`)
**Herramienta:** Claude Code

```
Crea docs/verificacion/<MIS-INICIALES>.md con la matriz. Formato fijo:
Primera línea: «Scenarios en el requisito: N · Cubiertos: M»
Tabla de 4 columnas, una fila por scenario: Scenario (una línea) | Test que lo cubre (nombre exacto) | Estado (Cubierto / No cubierto / No lo sé) | Qué te faltó (solo si «No lo sé», media línea).
Usa exactamente lo que concluiste antes; no completes nada de memoria ni «mejores» estados. No añadas otras secciones. La matriz debe caber en una pantalla.
```

## Prompt 7

**Modelo:** Sonnet 5.5 (`claude-sonnet-5-5`)
**Herramienta:** Claude Code

```
mis iniciales son roas
```

## Prompt 8

**Modelo:** Sonnet 5.5 (`claude-sonnet-5-5`)
**Herramienta:** Claude Code

```
Para cada fila «No cubierto» escribe UN test que cubra ese scenario, en backend/tests/functional/tasks/, imitando el estilo de backend/tests/functional/auth/ (estructura, helpers, nombres).
Restricciones:
- No toques nada fuera de backend/tests/.
- No cambies código de producción.
- Antes de escribir cada test, dime en una línea qué valores concretos vas a elegir (datos, límites, caso vacío) y marca los que el scenario NO determinaba. Los necesito para la Parte B.
```

## Prompt 9

**Modelo:** Sonnet 5.5 (`claude-sonnet-5-5`)
**Herramienta:** Claude Code

```
Para cada fila «No cubierto» escribe UN test que cubra ese scenario, en backend/tests/functional/tasks/, imitando el estilo de backend/tests/functional/auth/ (estructura, helpers, nombres).
Restricciones:
- No toques nada fuera de backend/tests/.
- No cambies código de producción.
- Antes de escribir cada test, dime en una línea qué valores concretos vas a elegir (datos, límites, caso vacío) y marca los que el scenario NO determinaba. Los necesito para la Parte B.
```

## Prompt 10

**Modelo:** Sonnet 5.5 (`claude-sonnet-5-5`)
**Herramienta:** Claude Code

```
Ejecuta los tests nuevos (y luego la suite completa) desde backend/. Reporta qué pasa y qué falla, con el mensaje de error.
REGLA: si algo falla, NO arregles el código ni modifiques el test para que pase. Quien verifica no arregla. Solo explícame por qué crees que falla: ¿bug en el código, test mal planteado o regla ambigua en la spec? Distingue una cosa de otra.
```

## Prompt 11

**Modelo:** Sonnet 5.5 (`claude-sonnet-5-5`)
**Herramienta:** Claude Code

```
Sin escribir mi archivo, dime:
1. Cuántos scenarios quedaron cubiertos al final (cuenta honesta).
2. ¿Hubo algún scenario donde no se pudiera saber si faltaba un test o faltaba la regla en la spec? Cuál y por qué.
3. De los tests que escribiste, ¿qué valores o decisiones salieron de ti y no del scenario?
Sé incómodo y específico; no suavices.
```

## Prompt 12

**Modelo:** Sonnet 5.5 (`claude-sonnet-5-5`)
**Herramienta:** Claude Code

```
Pega en el archivo, debajo de la matriz, tres líneas escritas por ti:

- Línea 1: tu número del paso 0 y el real, sin explicar.
- Línea 2: el scenario donde dudaste entre test o spec.
- Línea 3: lo que decidiste tú al escribir el test.
```

## Prompt 13

**Modelo:** Sonnet 5.5 (`claude-sonnet-5-5`)
**Herramienta:** Claude Code

```
Prepara la entrega sin hacer push: muéstrame git status y git diff --stat, y confirma que solo hay cambios en docs/verificacion/, backend/tests/ y prompts.md (nada más). Si hay algo extra, avísame. Después dame los comandos exactos de commit y push para la rama trazabilidad-<iniciales>.
```
