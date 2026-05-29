# Reversing Words

#  📝 Descripción
Este proyecto consiste en el desarrollo de una función modular en JavaScript orientada a la manipulación de cadenas de texto (*strings*).

El objetivo principal es invertir el orden de las palabras contenidas en una cadena de entrada, asegurando una limpieza profunda de los datos al eliminar espacios en blanco innecesarios (tanto al principio y al final como los espacios múltiples intermedios).

Adicionalmente, el proyecto incluye una suite de pruebas unitarias automatizadas para garantizar la robustez y el correcto funcionamiento del algoritmo ante diversos escenarios de datos (*edge cases*).

#  🔍 Análisis

* **Definición de palabra:** Cualquier secuencia de caracteres que no contenga espacios. Los signos de puntuación se consideran parte de la palabra a la que acompañan.
* **Sanitización de entrada:** Se deben ignorar los espacios iniciales y finales (*leading/trailing spaces*).
* **Normalización de espacios:** Cualquier secuencia de múltiples espacios intermedios debe reducirse a un único espacio separador en el resultado final.
* **Casos base:** Si la cadena de entrada está vacía o contiene únicamente espacios en blanco, la función debe retornar una cadena completamente vacía (`""`).

### Ejemplos de Comportamiento (Input --> Output):
* `"Hello World"` --> `"World Hello"`
* `"  espacios al rededor   "` --> `"rededor al espacios"` 
* `"Muchos      espacios        intermedios"` --> `"intermedios espacios Muchos"` 

#  🛠️ Planificación

El desarrollo del proyecto se estructurará en las siguientes fases cronológicas para garantizar un entorno limpio y modular:

1. **Configuración del Entorno:**
   * Inicialización de Node.js (`npm init -y`) y configuración del archivo `.gitignore`.
   * Instalación y configuración de **Vitest** como framework de testing nativo de Vite para cubrir los requerimientos de pruebas unitarias.
   * Configuración de Tailwind CSS y el compilador de SASS para la estructura de estilos modulares bajo la metodología BEM.
2. **Arquitectura Modular de Git:**
   * Creación de una rama específica para el desarrollo del algoritmo (`feature/word-reverser-algorithm`).
   * Implementación de la lógica en un archivo modular con nomenclatura *kebab-case*.
   * Pruebas y mezcla (*merge*) hacia la rama de desarrollo (`dev`).
3. **Implementación de Tests:**
   * Creación del archivo de pruebas unitarias para validar todos los casos expuestos en los requisitos.
4. **Desarrollo del Algoritmo:**
   * Codificación de la función en JavaScript utilizando métodos nativos de manipulación de arrays y strings.


#  💻 Tecnologías Utilizadas

* **JavaScript (ES6+):** Lenguaje de programación principal, utilizado de forma modular.
* **SASS:** Preprocesador CSS para la gestión modular de estilos mediante componentes.
* **Tailwind CSS:** Framework de CSS utilitario para el diseño ágil de la interfaz de usuario.
* **Vitest:** Framework de testing ultra-rápido, compatible con Vite, utilizado para la ejecución de las pruebas unitarias obligatorias.
* **Git:** Control de versiones bajo flujo de trabajo ramificado.

# 🧮 Explicación del Algoritmo

La solución técnica se diseñó utilizando un enfoque funcional y declarativo, aprovechando los métodos nativos del prototipo de `String` y `Array` en JavaScript. El flujo de transformación de los datos sigue los siguientes pasos conceptuales:

1. **`trim()`**: Elimina los espacios en blanco sobrantes al principio y al final de la cadena de texto, cumpliendo con el requisito de limpieza de *leading/trailing spaces*.
2. **`split(/\s+/)`**: Divide la cadena de texto en un array de palabras[cite: 65]. Se utiliza una expresión regular (`/\s+/`) como separador, la cual detecta uno o más espacios en blanco contiguos. Esto soluciona automáticamente el problema de los espacios intermedios múltiples, evitando que se introduzcan elementos vacíos en el array.
3. **`reverse()`**: Invierte el orden de los elementos del array (la última palabra pasa a ser la primera), cumpliendo directamente con el requisito de inversión.
4. **`join(' ')`**: Concatena todos los elementos del array invertido en una nueva cadena de texto, insertando exactamente un único espacio en blanco entre cada palabra.

