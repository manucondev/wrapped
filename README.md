# Fantasy Wrapped

Un «Wrapped» al estilo Spotify para una liga de fantasy entre amigos: coge los datos de toda la temporada y los convierte en una experiencia navegable de historias, personalizada para cada participante.

<!-- SUSTITUIR: gif o captura de la secuencia de historias -->
<!-- ![Secuencia de historias](docs/demo.gif) -->

**[Ver en vivo →](#)** <!-- SUSTITUIR con la URL de Vercel -->

---

## La idea

Al terminar la temporada de fantasy, los datos existen pero no dicen nada: hojas de cálculo con puntos por jornada, alineaciones y capitanes. El resumen de Spotify funciona porque no te enseña una tabla, te cuenta una historia sobre ti.

Fantasy Wrapped hace lo mismo con la temporada: cada participante entra, se selecciona, y recorre una secuencia de pantallas animadas con **sus** números — su mejor jornada, sus jugadores más rentables, sus decisiones de capitán, su estilo como manager — y termina con los premios de la liga y una tarjeta para compartir.

---

## Qué incluye

- **Selector de participante**: cada manager ve su propio recorrido.
- **Secuencia tipo historias** con barra de progreso y navegación, al estilo de Instagram o del Wrapped de Spotify.
- **Métricas personales**: puntos totales, mejores jugadores, apariciones, rendimiento como capitán (puntos base frente a puntos doblados).
- **Mejor jornada reconstruida**: la alineación de tu mejor jornada, animada jugador a jugador.
- **Estilo de manager**: una lectura del perfil de cada participante a partir de sus decisiones.
- **Clasificación y premios de liga**, incluidos premios personalizados con guiños internos del grupo.
- **Tarjeta final compartible** para mandar al chat.

---

## Decisiones técnicas

**Formato historia, no dashboard.** La navegación es secuencial y a pantalla completa, con barra de progreso, en vez de una página con gráficas. Cambia por completo cómo se consume: se ve entero de una sentada.

**Animación como parte del contenido.** Los números no aparecen, se cuentan hacia arriba; los jugadores se revelan con una ruleta; la alineación de la mejor jornada se monta pieza a pieza. Está hecho con `framer-motion` y es lo que separa esto de una tabla bonita.

**Datos reales, tipados.** Los datos salen de los CSV de la temporada (managers y alineaciones) y se transforman a un modelo tipado en TypeScript: `ManagerWrapped`, `PlayerMetric`, `MatchdayPlayer`, `LeagueAwards`, `CustomLeagueAward`. Tipar el modelo evita que una pantalla reciba datos que no espera, que es el fallo típico cuando cada slide consume una forma distinta.

**Componentes por tipo de pantalla.** Cada tipo de slide es su propio componente (`award-slide`, `champion-slide`, `league-ranking-slide`, `manager-style-slide`, `matchday-sequence`…) sobre una carcasa común (`wrapped-slide`, `app-shell`, `story-progress`). Añadir una pantalla nueva es añadir un componente, no tocar la lógica de navegación.

---

## Stack

- **Next.js 16** (App Router) y **React 19**
- **TypeScript**
- **framer-motion** para las animaciones
- **Recharts** para visualización de datos
- **Tailwind CSS** y **shadcn/ui** (sobre Radix UI)
- Desplegado en **Vercel**, con Vercel Analytics

---

## Ejecutar en local

```bash
npm install
npm run dev
```

Los datos de la temporada viven en `data/mock-data.ts`. Para adaptarlo a otra liga, basta con sustituir ese fichero respetando los tipos exportados.

---

## Estado

Proyecto personal, terminado y desplegado. Construido para una liga concreta, pero el modelo de datos está separado de la presentación, así que se puede reutilizar cambiando el fichero de datos.
