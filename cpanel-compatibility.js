// ===== COMPATIBILIDAD PARA CPANEL Y HOSTING COMPARTIDO =====

// Detectar si el navegador soporta transiciones complejas
function supportsComplexTransitions() {
    const testEl = document.createElement('div');
    const style = testEl.style;
    
    style.cssText = 'transition:all 0.1s cubic-bezier(0.25,0.46,0.45,0.94);';
    
    return style.transition === 'all 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)' ||
           style.transition === 'all 0.1s cubic-bezier(0.25,0.46,0.45,0.94)';
}

// Optimizar transiciones para hosting compartido
function optimizeTransitions() {
    if (!supportsComplexTransitions()) {
        // Reemplazar transiciones complejas por simples
        const style = document.createElement('style');
        style.textContent = `
            * {
                transition: all 0.3s ease !important;
                animation-duration: 0.3s !important;
            }
            .btn:hover {
                transform: translateY(-1px) !important;
                box-shadow: 0 4px 12px rgba(15, 43, 91, 0.2) !important;
            }
        `;
        document.head.appendChild(style);
    }
}

// Mejorar rendimiento en dispositivos lentos
function optimizePerformance() {
    // Detectar dispositivos lentos
    const isSlowDevice = navigator.hardwareConcurrency < 4 || 
                        navigator.deviceMemory < 4;
    
    if (isSlowDevice) {
        // Reducir animaciones
        const style = document.createElement('style');
        style.textContent = `
            * {
                transition-duration: 0.2s !important;
                animation-duration: 0.2s !important;
            }
            .btn:hover {
                transform: none !important;
            }
        `;
        document.head.appendChild(style);
    }
}

// Optimizar imágenes para cPanel
function optimizeImages() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        // Forzar carga optimizada
        img.style.imageRendering = 'auto';
        img.style.objectFit = 'contain';
        
        // Lazy loading fallback
        if (!img.loading) {
            img.loading = 'lazy';
        }
    });
}

// Inicializar optimizaciones cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    optimizeTransitions();
    optimizePerformance();
    optimizeImages();
    
    // Forzar repaint para evitar problemas de rendering
    setTimeout(() => {
        document.body.style.display = 'none';
        document.body.offsetHeight; // Trigger reflow
        document.body.style.display = '';
    }, 100);
});

// Optimizar para conexiones lentas
if ('connection' in navigator) {
    const connection = navigator.connection;
    if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
        const style = document.createElement('style');
        style.textContent = `
            * {
                transition: none !important;
                animation: none !important;
            }
        `;
        document.head.appendChild(style);
    }
}

console.log('🚀 Optimizaciones para cPanel cargadas correctamente');
