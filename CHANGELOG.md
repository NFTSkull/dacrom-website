# CHANGELOG

## [1.0.8] - 2025-01-27

### Unificación de Servicios - Una Sola Casilla para Anexo 24 y 31

**Solicitud del cliente:**
- Cambiar de 2 casillas separadas a solo 1 casilla
- Unificar "Anexo 24" y "Anexo 31" en una sola tarjeta
- Contener toda la información en una sola casilla
- Simplificar la presentación de servicios

**Cambios implementados:**

**Unificación de servicios:**
- Eliminadas las 2 casillas separadas
- Creada 1 sola casilla: "Anexo 24 y 31"
- Descripción unificada: "Certificación de Operador Económico Autorizado (OEA) y Gestión de Anexo 31"
- Tag unificado: "Certificación y Gestión"

**Archivos modificados:**
- `index.html`: Unificación de servicios en sección "Anexo 24-31"

**Resultado:**
- ✅ Una sola casilla para ambos anexos
- ✅ Información unificada y clara
- ✅ Presentación simplificada
- ✅ Mejor organización visual

### Corrección del Botón de Información

**Problema identificado:**
- El botón de información (i) no funcionaba al hacer clic
- Faltaba la información correspondiente a "anexo24-31" en el JavaScript

**Solución implementada:**
- Agregada información completa para "anexo24-31" en script.js
- Título: "Anexo 24 y 31 - Certificación OEA y Gestión"
- Descripción unificada de ambos servicios
- 8 beneficios específicos combinados

**Archivos modificados:**
- `script.js`: Información del servicio "anexo24-31"

**Resultado:**
- ✅ Botón de información funcional
- ✅ Información completa y detallada
- ✅ Beneficios específicos de ambos anexos

### Corrección de Efectos Hover y Funcionalidad

**Problema identificado:**
- Las casillas se movían demasiado al pasar el mouse
- El botón de información no era completamente funcional
- Efectos hover excesivos causaban problemas visuales

**Solución implementada:**
- Efecto hover sutil y controlado para las tarjetas de servicios
- Movimiento reducido a solo 2px hacia arriba
- Efecto hover mejorado para el botón de información
- Agregado z-index para asegurar clickeabilidad
- Debugging agregado al JavaScript para verificar funcionalidad

**Archivos modificados:**
- `styles.css`: Efectos hover controlados
- `script.js`: Mejoras en funcionalidad del botón

**Resultado:**
- ✅ Efectos hover sutiles y profesionales
- ✅ Botón de información completamente funcional
- ✅ Movimiento controlado y elegante
- ✅ Mejor experiencia de usuario

### Rediseño del Hero - Logo y Texto Profesional

**Solicitud del cliente:**
- Logo más grande y proporcional al espacio
- Texto "DACROM" más grande y prominente
- Texto "Asesores" más pequeño y elegante
- Estructura profesional y muy elegante
- Mejor proporción al espacio disponible

**Cambios implementados:**

**Logo del Hero:**
- Tamaño aumentado de 80-120px a 120-180px
- Mejor proporción con el espacio disponible
- Efecto hover mejorado

**Texto "DACROM":**
- Tamaño aumentado a clamp(3rem, 8vw, 5rem)
- Font-weight aumentado a 800
- Letter-spacing mejorado a 0.15em
- Text-shadow más pronunciado
- Text-transform uppercase para mayor impacto

**Texto "Asesores":**
- Tamaño reducido a clamp(0.9rem, 2.5vw, 1.2rem)
- Font-weight ajustado a 400
- Letter-spacing aumentado a 0.25em
- Color más sutil con opacity 0.85
- Mejor espaciado con margin-top

**Contenedor del Logo:**
- Fondo semitransparente con blur
- Border radius de 24px
- Box-shadow elegante
- Padding aumentado para mejor espaciado
- Gap mejorado entre elementos

**Líneas Profesionales:**
- Ancho aumentado a 300px
- Altura aumentada a 3px
- Colores más vibrantes
- Animaciones más suaves
- Mejor espaciado

**Archivos modificados:**
- `styles.css`: Rediseño completo del hero logo

**Resultado:**
- ✅ Logo más grande y proporcional
- ✅ "DACROM" prominente y elegante
- ✅ "Asesores" sutil y profesional
- ✅ Estructura visual mejorada
- ✅ Apariencia más profesional y elegante

### Optimización del Hero - Eliminación del Recuadro y Mejora de Proporciones

**Solicitud del cliente:**
- Eliminar solo el recuadro/rectángulo del contenedor del logo
- Mantener logo y texto sin cambios
- Hacer el logo más grande y mejor proporcionado
- Mejorar el texto principal para que se vea más grande
- Abarcar mejor el espacio en la versión web
- No tocar nada del móvil

**Cambios implementados:**

**Eliminación del Recuadro:**
- Removido fondo semitransparente del contenedor
- Eliminado border-radius y border
- Removido backdrop-filter y box-shadow
- Mantenido solo el padding básico

**Logo Más Grande:**
- Tamaño aumentado de 120-180px a 150-220px
- Mejor proporción con el espacio disponible
- Mantenida la responsividad

**Texto Principal Mejorado:**
- Título: aumentado a clamp(3rem, 6vw, 4.5rem)
- Font-weight aumentado a 800
- Max-width aumentado a 800px
- Text-shadow más pronunciado
- Mejor espaciado con margin 1.5rem

**Subtítulo Mejorado:**
- Tamaño aumentado a clamp(1.3rem, 3vw, 1.8rem)
- Font-weight aumentado a 400
- Max-width aumentado a 700px
- Text-shadow mejorado
- Mejor letter-spacing

**Archivos modificados:**
- `styles.css`: Optimización del hero sin afectar móvil

**Resultado:**
- ✅ Recuadro eliminado, diseño más limpio
- ✅ Logo más grande y proporcionado
- ✅ Texto principal más prominente
- ✅ Mejor aprovechamiento del espacio web
- ✅ Diseño más elegante y profesional

### Estilo Institucional para Texto Principal del Hero

**Solicitud del cliente:**
- Diferenciar el texto principal del estilo de "DACROM"
- Crear un subtítulo más elegante y profesional
- Estilo institucional y corporativo
- Mejor presentación del mensaje de la empresa

**Cambios implementados:**

**Texto Principal (Título):**
- Tamaño ajustado a clamp(2.2rem, 4.5vw, 3.2rem)
- Font-weight reducido a 600 para elegancia
- Color más sutil: rgba(255, 255, 255, 0.95)
- Letter-spacing aumentado a 0.02em
- Line-height mejorado a 1.3
- Max-width aumentado a 900px

**Subtítulo Institucional:**
- Tamaño ajustado a clamp(1.1rem, 2.5vw, 1.5rem)
- Font-weight reducido a 300 para sutileza
- Color más sutil: rgba(255, 255, 255, 0.85)
- Letter-spacing aumentado a 0.03em
- Line-height mejorado a 1.5
- Max-width aumentado a 800px

**Contenedor del Texto:**
- Fondo semitransparente sutil
- Border-radius de 16px
- Backdrop-filter blur(5px)
- Border sutil con rgba(255, 255, 255, 0.08)
- Box-shadow elegante
- Padding aumentado para mejor espaciado

**Líneas Decorativas:**
- Ancho aumentado a 120px
- Color más sutil: rgba(255, 255, 255, 0.3)
- Animación más lenta (3s)
- Mejor espaciado

**Archivos modificados:**
- `styles.css`: Estilo institucional del texto principal

**Resultado:**
- ✅ Texto principal más elegante y profesional
- ✅ Diferenciación clara del estilo "DACROM"
- ✅ Apariencia institucional y corporativa
- ✅ Mejor legibilidad y presentación
- ✅ Diseño más sofisticado y refinado

### Aumento de Tamaño del Logo en Sección "Cuidado al Cliente"

**Solicitud del cliente:**
- Hacer más grande el logo tanto en versión web como móvil
- Mejor aprovechamiento del espacio disponible
- Logo más atractivo y centrado
- Mejor presencia visual

**Cambios implementados:**

**Variable CSS Principal:**
- `--logo-values-w`: Cambiado de `clamp(200px, 25vw, 280px)` a `clamp(280px, 35vw, 400px)`
- Aumento significativo del tamaño base del logo

**Estilo Base del Logo:**
- Opacity aumentada de 0.85 a 0.9 para mejor visibilidad
- Drop-shadow mejorado: `0 4px 8px rgba(0, 0, 0, 0.2)`
- Border-radius de 8px para suavizar bordes
- Max-width: 100% para responsividad
- Mejor centrado automático

**Efecto Hover Mejorado:**
- Scale aumentado de 1.02 a 1.05
- Drop-shadow más pronunciado: `0 8px 16px rgba(0, 0, 0, 0.4)`
- Opacity completa en hover

**Responsividad Optimizada:**
- **Tablet (768px)**: Multiplicador de 0.8 → 0.9 (más grande)
- **Móvil (480px)**: Multiplicador de 0.6 → 0.75 (más grande)
- Opacity mejorada en todos los breakpoints

**Archivos modificados:**
- `styles.css`: Aumento de tamaño del logo en todas las versiones

**Resultado:**
- ✅ Logo significativamente más grande en web
- ✅ Logo más grande en versión móvil
- ✅ Mejor aprovechamiento del espacio disponible
- ✅ Logo más atractivo y centrado
- ✅ Mejor presencia visual y profesional
- ✅ Responsividad optimizada para todos los dispositivos

### Aumento de Tamaño del Logo del Header

**Solicitud del cliente:**
- Hacer más grande el logo del header (logo-image)
- Restaurar tamaño como estaba antes
- Sin modificar nada más

**Cambios implementados:**

**Variable CSS del Header:**
- `--logo-header-h`: Cambiado de `clamp(28px, 3vw, 36px)` a `clamp(36px, 4vw, 48px)`
- Aumento del tamaño mínimo: 28px → 36px (+28.6%)
- Aumento del tamaño máximo: 36px → 48px (+33.3%)
- Aumento del viewport width: 3vw → 4vw (+33.3%)

**Archivos modificados:**
- `styles.css`: Aumento de la variable --logo-header-h

**Resultado:**
- ✅ Logo del header más grande como estaba antes
- ✅ Mejor visibilidad del logo en el header
- ✅ Cambio aplicado automáticamente a todas las versiones (web, tablet, móvil)
- ✅ Sin afectar otros elementos del diseño

### Diferenciación Profesional del Texto Principal del Hero

**Solicitud del cliente:**
- El texto "Impulsamos tu negocio más allá de las fronteras" tenía el mismo estilo que "DACROM"
- Necesitaba diferenciarse para verse más profesional
- Crear un estilo más institucional y elegante

**Cambios implementados:**

**Texto Principal (Título):**
- Font-family cambiado a 'Georgia', 'Times New Roman', serif (más elegante)
- Font-style: italic para sofisticación
- Font-size reducido: clamp(1.8rem, 3.5vw, 2.8rem)
- Font-weight reducido: 600 → 400 (más sutil)
- Color más sutil: rgba(255, 255, 255, 0.88)
- Letter-spacing reducido: 0.01em
- Text-shadow más sutil: 0 1px 3px rgba(0, 0, 0, 0.4)
- Max-width reducido: 850px

**Comillas Decorativas Elegantes:**
- Comillas grandes antes y después del texto
- Font-size: clamp(3rem, 6vw, 4rem)
- Color sutil: rgba(255, 255, 255, 0.3)
- Posicionamiento absoluto para elegancia
- Misma fuente serif para consistencia

**Subtítulo Profesional:**
- Font-size ajustado: clamp(1rem, 2.2vw, 1.3rem)
- Color más sutil: rgba(255, 255, 255, 0.75)
- Letter-spacing aumentado: 0.05em
- Text-transform: uppercase para profesionalismo
- Opacity: 0.9 para sutileza
- Max-width reducido: 750px

**Líneas Decorativas Refinadas:**
- Ancho reducido: 120px → 100px
- Color más sutil: rgba(255, 255, 255, 0.2)
- Animación más lenta: 3s → 4s
- Opacity: 0.6 para elegancia
- Margin aumentado: 2rem para mejor espaciado

**Archivos modificados:**
- `styles.css`: Estilo profesional diferenciado del texto principal

**Resultado:**
- ✅ Texto principal completamente diferenciado del estilo "DACROM"
- ✅ Apariencia más profesional e institucional
- ✅ Comillas decorativas elegantes
- ✅ Subtítulo con estilo corporativo
- ✅ Líneas decorativas más refinadas
- ✅ Diseño más sofisticado y distinguido

### Aumento del Logo del Header Solo en Versión Móvil

**Solicitud del cliente:**
- Aumentar el tamaño del logo del header solo en la versión móvil
- Mantener el tamaño actual en web y tablet

**Cambios implementados:**

**Breakpoint Móvil (480px):**
- Multiplicador del logo-image: 0.9 → 1.1
- Aumento del 22% en el tamaño del logo
- Solo afecta la versión móvil (480px y menos)
- Web y tablet mantienen sus tamaños originales

**Archivos modificados:**
- `styles.css`: Aumento del multiplicador en breakpoint móvil

**Resultado:**
- ✅ Logo del header más grande solo en versión móvil
- ✅ Mejor visibilidad del logo en dispositivos móviles
- ✅ Web y tablet mantienen sus tamaños originales
- ✅ Cambio específico y dirigido

## [1.0.7] - 2025-01-03

### Ajuste de Proporciones de Logos

**Solicitud del cliente:**
- Ajustar las proporciones de los logos para que se vean mejor en relación al espacio disponible
- Optimizar el logo del HERO y el logo de la sección "Cuidado al Cliente"

**Cambios implementados:**

**Logo del HERO:**
- Tamaño anterior: 120x120px
- Tamaño nuevo: 100x100px
- Mejor proporción con el texto "DACROM Asesores"

**Logo de la sección "Cuidado al Cliente":**
- Tamaño anterior: 366x250px
- Tamaño nuevo: 300x200px
- Mejor proporción con el contenido de la sección

**Archivos modificados:**
- `index.html`: Ajuste de dimensiones de logos

**Resultado:**
- ✅ Logos con mejor proporción al espacio disponible
- ✅ Mejor balance visual en ambas secciones
- ✅ Apariencia más profesional y equilibrada

## [1.0.6] - 2025-01-03

### Corrección Final del Hamburger Menu - Barras Dentro del Contenedor

**Problema crítico identificado:**
- Las barras del hamburger menu se salían del contenedor de 45x40px
- El `position: absolute` con `left: 10px` y `right: 10px` causaba overflow
- Las barras se veían fuera de los límites del botón, no profesional

**Solución implementada:**
- Regreso a `flex-direction: column` con `justify-content: space-between`
- Eliminación completa del `position: absolute` problemático
- Uso de `translateY` simple para mover las barras al centro
- Mantenimiento de las barras dentro del contenedor

**Cambios específicos:**

**Sistema de layout:**
- Contenedor: `flex-direction: column` + `justify-content: space-between`
- Barras: `width: 100%` sin posicionamiento absoluto
- Eliminación de `left`, `right`, `top`, `bottom` problemáticos

**Transformaciones activas:**
- Barra 1: `rotate(45deg) translateY(8px)` (768px) / `translateY(9px)` (480px) / `translateY(6px)` (base)
- Barra 2: `scale(0)` + `opacity: 0`
- Barra 3: `rotate(-45deg) translateY(-8px)` (768px) / `translateY(-9px)` (480px) / `translateY(-6px)` (base)

**Archivos modificados:**
- `styles.css`: Sistema de layout flexbox para hamburger menu

**Resultado:**
- ✅ Barras completamente dentro del contenedor
- ✅ X perfecta y simétrica
- ✅ Apariencia profesional y limpia
- ✅ Funcionamiento correcto en todos los dispositivos

## [1.0.5] - 2025-01-03

### Solución Definitiva del Hamburger Menu - X Perfecta

**Problema persistente:**
- A pesar de los intentos anteriores, la X del hamburger menu seguía sin verse correcta
- Las barras no se posicionaban correctamente al rotar
- Necesidad de una solución más robusta y precisa

**Solución implementada:**
- Cambio completo del sistema de posicionamiento a `position: absolute`
- Posicionamiento preciso de cada barra con coordenadas específicas
- Todas las barras se centran en el mismo punto (50%) cuando están activas
- Uso de `translateY(-50%)` para centrado perfecto antes de la rotación

**Cambios específicos:**

**Sistema de posicionamiento:**
- Todas las barras: `position: absolute` con `left` y `right` definidos
- Barra 1: `top: 12px` (768px) / `top: 13px` (480px) / `top: 4px` (base)
- Barra 2: `top: 50%` con `translateY(-50%)`
- Barra 3: `bottom: 12px` (768px) / `bottom: 13px` (480px) / `bottom: 4px` (base)

**Transformaciones activas:**
- Barra 1: `top: 50%` + `translateY(-50%) rotate(45deg)`
- Barra 2: `translateY(-50%) scale(0)` + `opacity: 0`
- Barra 3: `top: 50%` + `translateY(-50%) rotate(-45deg)`

**Archivos modificados:**
- `styles.css`: Sistema completo de posicionamiento del hamburger menu

**Resultado:**
- ✅ X perfecta y simétrica en todos los dispositivos
- ✅ Posicionamiento preciso y consistente
- ✅ Animación suave y profesional
- ✅ Solución definitiva y robusta

## [1.0.4] - 2025-01-03

### Corrección del Hamburger Menu - X Perfecta

**Problema identificado:**
- La X del hamburger menu se veía "chueca" (torcida) cuando estaba activo
- Los valores de `translate` estaban causando desalineación
- La transformación no formaba una X perfecta y simétrica

**Solución implementada:**
- Eliminación de valores `translate` problemáticos
- Simplificación de las transformaciones a solo `rotate`
- Añadido `position: relative` a las barras para mejor control
- Mejora de la animación de la barra central con `scale(0)`
- Aplicación consistente en todos los breakpoints

**Cambios específicos:**
- `.hamburger.active .bar:nth-child(1)`: `rotate(45deg)` sin translate
- `.hamburger.active .bar:nth-child(2)`: `opacity: 0` + `scale(0)`
- `.hamburger.active .bar:nth-child(3)`: `rotate(-45deg)` sin translate
- Añadido `position: relative` a todas las barras

**Archivos modificados:**
- `styles.css`: Estilos del hamburger menu en todos los breakpoints

**Resultado:**
- ✅ X perfecta y simétrica cuando el menu está activo
- ✅ Animación suave y profesional
- ✅ Consistencia visual en todos los dispositivos
- ✅ Mejor experiencia de usuario

## [1.0.3] - 2025-01-03

### Optimización del Header Móvil

**Problema identificado:**
- Los textos del header en versión móvil eran demasiado pequeños
- Falta de atractivo visual en dispositivos móviles
- Necesidad de mejorar la legibilidad y estética del header

**Solución implementada:**
- Aumento significativo de tamaños de fuente en móvil
- Optimización del logo y textos para mejor visibilidad
- Mejora del hamburger menu con efectos hover
- Ajuste de espaciado y proporciones para mejor estética

**Cambios específicos:**

**Para pantallas de 768px:**
- Logo brand: 1.1rem → 1.2rem
- Logo subtitle: 0.75rem → 0.8rem
- Logo tagline: 0.6rem → 0.65rem
- Logo image: 40px → 42px
- Añadido letter-spacing y text-transform

**Para pantallas de 480px:**
- Logo brand: 0.9rem → 1.3rem
- Logo subtitle: 0.65rem → 0.85rem
- Logo tagline: 0.5rem → 0.65rem
- Logo image: 30px → 45px
- Header height: 35px → 50px
- Hamburger menu: 40x35px → 48x42px

**Archivos modificados:**
- `styles.css`: Media queries para header móvil

**Resultado:**
- ✅ Textos más grandes y legibles en móvil
- ✅ Header más atractivo y profesional
- ✅ Mejor experiencia de usuario en dispositivos móviles
- ✅ Mantenimiento de funcionalidad desktop

## [1.0.2] - 2025-01-03

### Corrección de Visualización de Imagen en Móvil

**Problema identificado:**
- La imagen en la sección "Tu aliado en Comercio Exterior" no se mostraba completa en versión móvil
- El `object-fit: cover` estaba recortando partes importantes de la imagen
- La imagen no mantenía las proporciones correctas

**Solución implementada:**
- Cambio de `object-fit: cover` a `object-fit: contain` para mostrar la imagen completa
- Añadido `object-position: center` para centrar la imagen
- Aumento de altura del contenedor de 300px a 350px en móvil (768px)
- Aumento de altura del contenedor de 260px a 320px en móvil pequeño (480px)
- Aplicación de `border-radius: 20px` a la imagen para consistencia visual

**Archivos modificados:**
- `styles.css`: Media queries para móvil (líneas 1760-1860)

**Resultado:**
- ✅ Imagen completa y visible en dispositivos móviles
- ✅ Mantenimiento de proporciones originales
- ✅ Mejor presentación visual profesional
- ✅ Consistencia con el diseño desktop

## [1.0.1] - 2025-01-03

### Cambios Realizados

#### Mejoras en Responsive Design - Sección "Tu aliado en Comercio Exterior"

**Problema identificado:**
- En versión móvil, la sección "Tu aliado en Comercio Exterior" no se veía bien estructurada
- El texto no estaba centrado
- La imagen no se mostraba completa debajo del texto

**Solución implementada:**
- Reestructuración del layout móvil para la sección `.about`
- Cambio de `flex-direction: column-reverse` a `flex-direction: column`
- Centrado completo del texto en dispositivos móviles
- Reposicionamiento de la imagen debajo del texto con `order: 2`
- Aplicación de `text-align: center` a todos los elementos de texto
- Optimización para pantallas de 768px y 480px

**Archivos modificados:**
- `styles.css`: Líneas 1720-1819 (Media queries para móvil)

**Resultado:**
- Texto completamente centrado en versión móvil
- Imagen completa y bien estructurada debajo del texto
- Mejor experiencia de usuario en dispositivos móviles
- Mantenimiento de la funcionalidad en versión desktop

### Detalles técnicos

**Media Query @768px:**
- Cambio de layout a `display: flex; flex-direction: column`
- Texto con `order: 1` y `text-align: center`
- Imagen con `order: 2` y `margin-top: 2rem`
- Centrado de elementos `.feature-item`

**Media Query @480px:**
- Optimización adicional para pantallas más pequeñas
- Reducción de espaciado y tamaños de fuente
- Mantenimiento del centrado y estructura

### Próximos pasos
- Verificación en diferentes dispositivos móviles
- Testing de rendimiento
- Posibles optimizaciones adicionales según feedback
