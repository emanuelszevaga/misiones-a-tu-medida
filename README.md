# 🌿 Misiones a tu medida

**Plataforma de turismo inteligente basada en IA para personalizar y descentralizar el turismo en la provincia de Misiones, Argentina.**

> Este repositorio contiene, por ahora, el **prototipo de interfaz (front end)** del producto. No incluye backend, IA ni lógica funcional: es una maqueta navegable para validar la propuesta visual.

---

## 💡 La idea

Misiones recibe más de 2 millones de turistas al año, pero casi 3 de cada 4 se concentran en un puñado de atractivos consolidados (como las Cataratas del Iguazú). Mientras tanto, más de 110 emprendimientos de turismo rural —saltos menos conocidos, ferias, comunidades guaraníes, la Ruta de la Yerba Mate— compiten por escasa visibilidad.

**Misiones a tu medida** propone resolver esto con una consulta simple en lenguaje natural (por ejemplo: *"quiero una escapada tranquila con naturaleza y comida típica, gastando poco"*). A partir de ahí, el sistema interpretaría intereses, presupuesto, tiempo disponible y clima para generar un itinerario personalizado que combine lo tradicional con oferta descentralizada.

## 🎯 Objetivo del prototipo

Este repo muestra **cómo se vería y sentiría** la plataforma: el tono visual, la propuesta de valor y los flujos principales (consulta → itinerario → destinos → los dos públicos: turistas y emprendedores). Sirve como base de discusión y como punto de partida para una futura implementación funcional.

## 🗂️ Estructura del proyecto

```
misiones-a-tu-medida/
├── index.html          # Página principal (landing) del prototipo
├── css/
│   └── style.css       # Estilos: paleta, tipografía, layout responsive
├── js/
│   └── main.js         # Interacción mínima (menú móvil) — sin lógica de negocio
└── README.md
```

## 🎨 Sistema visual

| Elemento | Detalle |
|---|---|
| Paleta | Verde selva, naranja ceibo, amarillo mango, turquesa salto, tierra colorada, crema |
| Tipografía | [Baloo 2](https://fonts.google.com/specimen/Baloo+2) (títulos) + [Nunito](https://fonts.google.com/specimen/Nunito) (texto) |
| Tono | Cercano, aventurero, nada corporativo — pensado para un turista que busca algo distinto a lo masivo |

## 🚀 Cómo probarlo localmente

No requiere instalación ni dependencias: es HTML/CSS/JS puro.

1. Cloná el repositorio o descargá los archivos.
2. Abrí `index.html` directamente en el navegador, **o** serví la carpeta con una extensión tipo *Live Server* en VS Code para recargar en caliente.
3. Probá el diseño responsive achicando la ventana o desde las herramientas de desarrollador (modo dispositivo móvil).

## 🧭 Qué NO incluye (todavía)

- Procesamiento de lenguaje natural real ni motor de recomendación
- Conexión a bases de datos de oferta turística
- Mapa interactivo funcional ni cálculo real de rutas/costos
- Backend, autenticación o panel para emprendedores

## 🌱 Próximos pasos posibles

- Definir la arquitectura del motor de recomendación (NLP + reglas + datos de clima)
- Diseñar el flujo de carga de oferta para emprendedores con baja conectividad
- Encuesta a turistas para validar demanda e intención de uso real
- Prototipo funcional del asistente conversacional

---

Proyecto desarrollado en el marco de una materia de Proyectos de Inversión — Posadas, Misiones.
