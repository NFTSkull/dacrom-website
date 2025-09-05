// DOM Elements
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const header = document.getElementById('header');
const contactForm = document.getElementById('contactForm');

// Mobile Navigation Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Header Scroll Effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed header
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add scroll animation class to elements
const animateElements = document.querySelectorAll('.service-card, .testimonial-card, .about-content, .section-header');
animateElements.forEach(element => {
    element.classList.add('scroll-animation');
    observer.observe(element);
});

// Stats Counter Animation
const statsNumbers = document.querySelectorAll('.stat-number');
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target;
            const finalNumber = target.textContent;
            const isPercentage = finalNumber.includes('%');
            const isPlusSign = finalNumber.includes('+');
            
            let numericValue = parseInt(finalNumber.replace(/[^0-9]/g, ''));
            
            animateCounter(target, 0, numericValue, 2000, isPercentage, isPlusSign);
            statsObserver.unobserve(target);
        }
    });
}, { threshold: 0.5 });

statsNumbers.forEach(stat => {
    statsObserver.observe(stat);
});

function animateCounter(element, start, end, duration, isPercentage, isPlusSign) {
    const startTime = performance.now();
    
    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(start + (end - start) * easeOutQuart);
        
        let displayValue = current.toString();
        if (isPlusSign) displayValue += '+';
        if (isPercentage) displayValue += '%';
        
        element.textContent = displayValue;
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        }
    }
    
    requestAnimationFrame(updateCounter);
}

// Contact Form Handling
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const formObject = {};
    
    formData.forEach((value, key) => {
        formObject[key] = value;
    });
    
    // Show loading state
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Enviando...';
    submitButton.disabled = true;
    
    try {
        // Simulate form submission (replace with actual endpoint)
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Show success message
        showNotification('¡Mensaje enviado correctamente! Te contactaremos pronto.', 'success');
        contactForm.reset();
        
    } catch (error) {
        // Show error message
        showNotification('Error al enviar el mensaje. Por favor, inténtalo de nuevo.', 'error');
    } finally {
        // Reset button state
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }
});

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
    
    // Add slide-in animation
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
}

// Add notification styles dynamically
const notificationStyles = `
    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        background: white;
        border-radius: 12px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        padding: 1rem 1.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        z-index: 10000;
        transform: translateX(100%);
        transition: all 0.3s ease;
        border-left: 4px solid #0F2B5B;
        min-width: 300px;
        max-width: 500px;
    }
    
    .notification.show {
        transform: translateX(0);
    }
    
    .notification-success {
        border-left-color: #22c55e;
    }
    
    .notification-error {
        border-left-color: #ef4444;
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        flex: 1;
    }
    
    .notification-content i {
        font-size: 1.2rem;
    }
    
    .notification-success .notification-content i {
        color: #22c55e;
    }
    
    .notification-error .notification-content i {
        color: #ef4444;
    }
    
    .notification-close {
        background: none;
        border: none;
        cursor: pointer;
        color: #666;
        font-size: 1rem;
        padding: 0.25rem;
        border-radius: 4px;
        transition: all 0.2s ease;
    }
    
    .notification-close:hover {
        background-color: #f3f4f6;
        color: #333;
    }
    
    @media (max-width: 768px) {
        .notification {
            top: 10px;
            right: 10px;
            left: 10px;
            min-width: auto;
            max-width: none;
        }
    }
`;

// Inject notification styles
const styleSheet = document.createElement('style');
styleSheet.textContent = notificationStyles;
document.head.appendChild(styleSheet);

// Lazy Loading for Images (if implemented later)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
}

// Service Cards Advanced Hover Effects
document.querySelectorAll('.service-card').forEach(card => {
    const icon = card.querySelector('.service-icon');
    
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
        if (icon) {
            icon.style.transform = 'scale(1.1) rotate(5deg)';
        }
        
        // Add subtle glow effect
        this.style.boxShadow = `
            0 20px 60px rgba(15, 43, 91, 0.2),
            0 8px 16px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.8)
        `;
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        if (icon) {
            icon.style.transform = 'scale(1) rotate(0deg)';
        }
        
        // Reset shadow
        this.style.boxShadow = `
            0 10px 30px rgba(15, 43, 91, 0.1),
            0 4px 8px rgba(0, 0, 0, 0.05),
            inset 0 1px 0 rgba(255, 255, 255, 0.6)
        `;
    });
    
    // Add mouse move effect for cards
    card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        this.style.transform = `
            translateY(-10px) 
            scale(1.02) 
            rotateX(${y / 10}deg) 
            rotateY(${x / 10}deg)
        `;
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1) rotateX(0) rotateY(0)';
    });
});



// WhatsApp Button Animation
const whatsappBtn = document.querySelector('.whatsapp-btn');
if (whatsappBtn) {
    // Pulse animation every 3 seconds
    setInterval(() => {
        whatsappBtn.style.animation = 'pulse 1s ease-in-out';
        setTimeout(() => {
            whatsappBtn.style.animation = '';
        }, 1000);
    }, 3000);
}

// Add pulse animation styles
const pulseStyles = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
    }
`;

const pulseStyleSheet = document.createElement('style');
pulseStyleSheet.textContent = pulseStyles;
document.head.appendChild(pulseStyleSheet);

// Form Validation Enhancement
const formInputs = document.querySelectorAll('#contactForm input, #contactForm select, #contactForm textarea');
formInputs.forEach(input => {
    input.addEventListener('blur', validateField);
    input.addEventListener('input', clearValidation);
});

function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    
    // Remove previous validation
    clearValidation(e);
    
    let isValid = true;
    let message = '';
    
    // Required field validation
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        message = 'Este campo es requerido';
    }
    
    // Email validation
    if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
            message = 'Ingresa un email válido';
        }
    }
    
    // Phone validation
    if (field.type === 'tel' && value) {
        const phoneRegex = /^[\+]?[\d\s\-\(\)]{10,}$/;
        if (!phoneRegex.test(value)) {
            isValid = false;
            message = 'Ingresa un teléfono válido';
        }
    }
    
    if (!isValid) {
        showFieldError(field, message);
    }
}

function clearValidation(e) {
    const field = e.target;
    const errorElement = field.parentElement.querySelector('.field-error');
    if (errorElement) {
        errorElement.remove();
    }
    field.classList.remove('field-invalid');
}

function showFieldError(field, message) {
    field.classList.add('field-invalid');
    
    const errorElement = document.createElement('span');
    errorElement.className = 'field-error';
    errorElement.textContent = message;
    
    field.parentElement.appendChild(errorElement);
}

// Add form validation styles
const validationStyles = `
    .field-invalid {
        border-color: #ef4444 !important;
    }
    
    .field-error {
        color: #ef4444;
        font-size: 0.875rem;
        margin-top: 0.25rem;
        display: block;
    }
`;

const validationStyleSheet = document.createElement('style');
validationStyleSheet.textContent = validationStyles;
document.head.appendChild(validationStyleSheet);

// Loading Screen (optional)
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Add loading screen styles if needed
    const loadingStyles = `
        body:not(.loaded) {
            overflow: hidden;
        }
        
        .loading-screen {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #0F2B5B;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            transition: opacity 0.5s ease;
        }
        
        .loading-screen.fade-out {
            opacity: 0;
            pointer-events: none;
        }
        
        .loader {
            width: 50px;
            height: 50px;
            border: 3px solid rgba(255, 255, 255, 0.3);
            border-top: 3px solid white;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    
    const loadingStyleSheet = document.createElement('style');
    loadingStyleSheet.textContent = loadingStyles;
    document.head.appendChild(loadingStyleSheet);
});

// Performance optimization - Debounced scroll handler
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        clearTimeout(scrollTimeout);
    }
    
    scrollTimeout = setTimeout(() => {
        // Perform expensive scroll operations here if needed
    }, 16); // ~60fps
});

// Service modal functionality (for future expansion)
function openServiceModal(serviceTitle) {
    // This can be expanded to show detailed service information
    showNotification(`Más información sobre ${serviceTitle} próximamente disponible.`, 'info');
}

// Add click handlers to service links
document.querySelectorAll('.service-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const serviceTitle = link.closest('.service-card').querySelector('.service-title').textContent;
        openServiceModal(serviceTitle);
    });
});



// Enhanced scroll animations with stagger effect
function addStaggeredAnimation() {
    const animatedElements = document.querySelectorAll('.service-card, .testimonial-card');
    
    animatedElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.1}s`;
    });
}

// Text typing effect for hero title
function typeWriterEffect() {
    const heroTitle = document.querySelector('.hero-title');
    if (!heroTitle) return;
    
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    heroTitle.style.opacity = '1';
    
    let i = 0;
    const typeTimer = setInterval(() => {
        if (i < text.length) {
            heroTitle.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typeTimer);
        }
    }, 50);
}

// Magnetic buttons effect
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        btn.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.05)`;
    });
    
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0px, 0px) scale(1)';
    });
});

// Globo Terráqueo Interactivo - Información de Servicios
const servicesData = {
    'immex': {
        title: 'IMMEX',
        fullTitle: 'Programa de la Industria Manufacturera, Maquiladora y de Servicios de Exportación',
        description: 'Facilitamos el registro y operación bajo el programa IMMEX para importar temporalmente mercancías destinadas a la exportación.',
        icon: 'fas fa-industry',
        features: [
            { icon: 'fas fa-cogs', title: 'Registro IMMEX', text: 'Tramitación completa del registro ante la SE' },
            { icon: 'fas fa-chart-line', title: 'Optimización Fiscal', text: 'Aprovechamiento de beneficios fiscales' },
            { icon: 'fas fa-shield-alt', title: 'Cumplimiento Normativo', text: 'Aseguramos el cumplimiento de todas las obligaciones' }
        ]
    },
    'iva-ieps': {
        title: 'Certificación IVA-IEPS',
        fullTitle: 'Certificación en materia de IVA e IEPS',
        description: 'Obtenemos la certificación que permite a las empresas el manejo preferencial en operaciones de comercio exterior.',
        icon: 'fas fa-certificate',
        features: [
            { icon: 'fas fa-check-circle', title: 'Certificación', text: 'Tramitación ante el SAT' },
            { icon: 'fas fa-money-bill-wave', title: 'Beneficios Fiscales', text: 'Aplicación de IVA e IEPS' },
            { icon: 'fas fa-clock', title: 'Renovación', text: 'Renovación periódica de certificaciones' }
        ]
    },
    'prosec': {
        title: 'PROSEC',
        fullTitle: 'Programa de Promoción Sectorial',
        description: 'Registro en programas sectoriales para reducir aranceles de importación en insumos específicos.',
        icon: 'fas fa-handshake',
        features: [
            { icon: 'fas fa-percentage', title: 'Reducción Arancelaria', text: 'Aprovechamiento de aranceles preferenciales' },
            { icon: 'fas fa-industry', title: 'Sectores Específicos', text: 'Aplicable a diversos sectores industriales' },
            { icon: 'fas fa-globe', title: 'Competitividad', text: 'Mejora la competitividad internacional' }
        ]
    },
    'regla-octava': {
        title: 'Permisos Regla Octava',
        fullTitle: 'Permisos y Autorizaciones Especiales',
        description: 'Tramitación de permisos especiales para operaciones que requieren autorización específica.',
        icon: 'fas fa-file-alt',
        features: [
            { icon: 'fas fa-file-signature', title: 'Permisos Especiales', text: 'Tramitación de autorizaciones específicas' },
            { icon: 'fas fa-search', title: 'Análisis Normativo', text: 'Revisión de requisitos normativos' },
            { icon: 'fas fa-clock', title: 'Seguimiento', text: 'Monitoreo del proceso de autorización' }
        ]
    },
    'avisos': {
        title: 'Avisos Automáticos',
        fullTitle: 'Gestión de Avisos Automáticos',
        description: 'Administración de avisos automáticos para importaciones y exportaciones que requieren notificación.',
        icon: 'fas fa-bell',
        features: [
            { icon: 'fas fa-robot', title: 'Automatización', text: 'Gestión automatizada de avisos' },
            { icon: 'fas fa-calendar-check', title: 'Programación', text: 'Programación de avisos periódicos' },
            { icon: 'fas fa-check-double', title: 'Cumplimiento', text: 'Aseguramos el cumplimiento normativo' }
        ]
    },
    'origen': {
        title: 'Certificación de Origen',
        fullTitle: 'Certificados de Origen y Preferencias Arancelarias',
        description: 'Obtención de certificados de origen para aprovechar los beneficios de tratados comerciales internacionales.',
        icon: 'fas fa-award',
        features: [
            { icon: 'fas fa-certificate', title: 'Certificados', text: 'Tramitación de certificados de origen' },
            { icon: 'fas fa-handshake', title: 'Tratados Comerciales', text: 'Aprovechamiento de acuerdos internacionales' },
            { icon: 'fas fa-calculator', title: 'Ahorro Arancelario', text: 'Reducción significativa de aranceles' }
        ]
    },
    'cupos': {
        title: 'Cupos de Importación/Exportación',
        fullTitle: 'Gestión de Cupos y Contingentes',
        description: 'Administración de cupos de importación y exportación para mercancías sujetas a restricciones cuantitativas.',
        icon: 'fas fa-chart-line',
        features: [
            { icon: 'fas fa-balance-scale', title: 'Cupos Asignados', text: 'Gestión de cupos gubernamentales' },
            { icon: 'fas fa-calendar-alt', title: 'Planificación', text: 'Programación de importaciones/exportaciones' },
            { icon: 'fas fa-chart-bar', title: 'Monitoreo', text: 'Seguimiento de utilización de cupos' }
        ]
    },
    'oea': {
        title: 'Certificación OEA',
        fullTitle: 'Operador Económico Autorizado',
        description: 'Certificación OEA (anteriormente NEEC) para obtener beneficios de seguridad y facilitación comercial.',
        icon: 'fas fa-shield-alt',
        features: [
            { icon: 'fas fa-shield-check', title: 'Seguridad', text: 'Certificación de seguridad en la cadena logística' },
            { icon: 'fas fa-tachometer-alt', title: 'Facilitación', text: 'Agilización de procesos aduaneros' },
            { icon: 'fas fa-award', title: 'Reconocimiento', text: 'Reconocimiento internacional de confiabilidad' }
        ]
    },
    'c-tpat': {
        title: 'C-TPAT',
        fullTitle: 'Customs-Trade Partnership Against Terrorism',
        description: 'Certificación C-TPAT para operaciones comerciales seguras con Estados Unidos.',
        icon: 'fas fa-truck',
        features: [
            { icon: 'fas fa-flag-usa', title: 'Acceso EE.UU.', text: 'Facilitación comercial con Estados Unidos' },
            { icon: 'fas fa-shield-virus', title: 'Seguridad', text: 'Protección contra terrorismo' },
            { icon: 'fas fa-stopwatch', title: 'Agilización', text: 'Procesos aduaneros más rápidos' }
        ]
    },
    'permisos': {
        title: 'Permisos Previos',
        fullTitle: 'Permisos Previos y Autorizaciones',
        description: 'Tramitación de permisos previos para importación y exportación de mercancías reguladas.',
        icon: 'fas fa-clipboard-check',
        features: [
            { icon: 'fas fa-file-medical', title: 'COFEPRIS', text: 'Permisos sanitarios y medicamentos' },
            { icon: 'fas fa-radiation-alt', title: 'CNSNS', text: 'Permisos para material radiactivo' },
            { icon: 'fas fa-seedling', title: 'SENASICA', text: 'Permisos fitozoosanitarios' }
        ]
    },
    'sanitarias': {
        title: 'Regulaciones Sanitarias',
        fullTitle: 'Gestión de Regulaciones Sanitarias',
        description: 'Tramitación de permisos y certificaciones sanitarias ante SAGARPA, SEMARNAT y otras dependencias.',
        icon: 'fas fa-leaf',
        features: [
            { icon: 'fas fa-seedling', title: 'SAGARPA', text: 'Trámites agrícolas y ganaderos' },
            { icon: 'fas fa-tree', title: 'SEMARNAT', text: 'Permisos ambientales' },
            { icon: 'fas fa-microscope', title: 'Laboratorios', text: 'Certificaciones de laboratorio' }
        ]
    },
    'tramites': {
        title: 'Trámites de Comercio Exterior',
        fullTitle: 'Gestión Integral de Trámites',
        description: 'Manejo completo de todos los trámites necesarios para operaciones de comercio exterior.',
        icon: 'fas fa-cogs',
        features: [
            { icon: 'fas fa-tasks', title: 'Gestión Completa', text: 'Todos los trámites en un solo lugar' },
            { icon: 'fas fa-clock', title: 'Eficiencia', text: 'Optimización de tiempos y procesos' },
            { icon: 'fas fa-user-tie', title: 'Especialización', text: 'Equipo especializado en cada área' }
        ]
    },
    'asesoria': {
        title: 'Asesoría Comercial',
        fullTitle: 'Consultoría Estratégica en Comercio Exterior',
        description: 'Asesoría personalizada para optimizar sus operaciones de comercio exterior y maximizar beneficios.',
        icon: 'fas fa-user-tie',
        features: [
            { icon: 'fas fa-lightbulb', title: 'Estrategia', text: 'Desarrollo de estrategias comerciales' },
            { icon: 'fas fa-chart-line', title: 'Optimización', text: 'Mejora de procesos existentes' },
            { icon: 'fas fa-handshake', title: 'Personalizada', text: 'Soluciones a medida' }
        ]
    },
    'proyectos': {
        title: 'Coordinación de Proyectos',
        fullTitle: 'Gestión y Coordinación de Proyectos Comerciales',
        description: 'Coordinación integral de proyectos de comercio exterior desde la planeación hasta la implementación.',
        icon: 'fas fa-project-diagram',
        features: [
            { icon: 'fas fa-project-diagram', title: 'Planificación', text: 'Diseño y planificación de proyectos' },
            { icon: 'fas fa-users', title: 'Coordinación', text: 'Gestión de equipos multidisciplinarios' },
            { icon: 'fas fa-flag-checkered', title: 'Implementación', text: 'Ejecución y seguimiento de proyectos' }
        ]
    },
    'auditorias': {
        title: 'Auditorías Especializadas',
        fullTitle: 'Auditorías y Revisiones de Cumplimiento',
        description: 'Auditorías especializadas para verificar el cumplimiento normativo y optimizar operaciones.',
        icon: 'fas fa-search',
        features: [
            { icon: 'fas fa-clipboard-list', title: 'Due Diligence', text: 'Revisión exhaustiva de procesos' },
            { icon: 'fas fa-balance-scale', title: 'Cumplimiento', text: 'Verificación de cumplimiento normativo' },
            { icon: 'fas fa-tools', title: 'Correctivos', text: 'Implementación de medidas correctivas' }
        ]
    },
    'inteligencia': {
        title: 'Inteligencia Comercial',
        fullTitle: 'Análisis de Inteligencia Comercial',
        description: 'Análisis de mercados, tendencias y oportunidades comerciales para la toma de decisiones estratégicas.',
        icon: 'fas fa-brain',
        features: [
            { icon: 'fas fa-chart-area', title: 'Análisis de Mercado', text: 'Estudios de mercados internacionales' },
            { icon: 'fas fa-eye', title: 'Tendencias', text: 'Identificación de tendencias comerciales' },
            { icon: 'fas fa-bullseye', title: 'Oportunidades', text: 'Identificación de oportunidades de negocio' }
        ]
    },
    'consultoria': {
        title: 'Consultoría Comercial',
        fullTitle: 'Consultoría Personalizada en Comercio Exterior',
        description: 'Consultoría especializada para desarrollar estrategias comerciales exitosas y sostenibles.',
        icon: 'fas fa-comments',
        features: [
            { icon: 'fas fa-route', title: 'Estrategia', text: 'Desarrollo de estrategias comerciales' },
            { icon: 'fas fa-graduation-cap', title: 'Capacitación', text: 'Formación de equipos comerciales' },
            { icon: 'fas fa-compass', title: 'Orientación', text: 'Guía en decisiones comerciales' }
        ]
    }
};



// Initialize enhanced effects
document.addEventListener('DOMContentLoaded', () => {
    addStaggeredAnimation();
    
    // Delay typewriter effect to ensure visibility
    setTimeout(typeWriterEffect, 1000);
    
    // Add intersection observer for better performance
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const performanceObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe all animated elements
    document.querySelectorAll('.service-card, .testimonial-card, .about-content').forEach(el => {
        performanceObserver.observe(el);
    });
});

// Add animate-in styles
const animateInStyles = `
    .animate-in {
        animation: slideInUp 0.6s ease-out forwards;
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(50px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

const animateInStyleSheet = document.createElement('style');
animateInStyleSheet.textContent = animateInStyles;
document.head.appendChild(animateInStyleSheet);

console.log('DACROM Asesores website loaded successfully with Clean Dashboard Services! 🚀✨');

// ===== SERVICIOS DASHBOARD =====
document.addEventListener('DOMContentLoaded', function() {
    // Dashboard Navigation
    const navTabs = document.querySelectorAll('.nav-tab');
    const serviceGrids = document.querySelectorAll('.services-grid');
    const infoPanel = document.getElementById('info-panel');
    const infoBtns = document.querySelectorAll('.info-btn');
    const closeInfoBtn = document.getElementById('close-info');

    // Tab Navigation
    navTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetCategory = this.dataset.category;
            
            // Remove active class from all tabs and grids
            navTabs.forEach(t => t.classList.remove('active'));
            serviceGrids.forEach(grid => grid.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding grid
            this.classList.add('active');
            const targetGrid = document.getElementById(targetCategory);
            if (targetGrid) {
                targetGrid.classList.add('active');
            }

            // Add smooth transition effect
            targetGrid.style.animation = 'fadeInUp 0.4s ease-out';
            setTimeout(() => {
                targetGrid.style.animation = '';
            }, 400);
        });
    });

    // Service Information
    const serviceInfo = {
        'immex': {
            title: 'Programa IMMEX',
            description: 'El Programa de la Industria Manufacturera, Maquiladora y de Servicios de Exportación permite importar temporalmente insumos para ser incorporados en productos de exportación.',
            benefits: [
                'Suspensión del pago de aranceles e IVA',
                'Importación temporal de maquinaria y equipo',
                'Flexibilidad en procesos productivos',
                'Reducción significativa de costos operativos',
                'Cumplimiento simplificado de obligaciones'
            ]
        },
        'prosec': {
            title: 'Programa PROSEC',
            description: 'Programa de Promoción Sectorial que permite reducir el pago de aranceles de importación de insumos utilizados para la elaboración de productos específicos.',
            benefits: [
                'Reducción de aranceles hasta 0%',
                'Aplicable a múltiples sectores industriales',
                'Mejora la competitividad de productos',
                'Facilita integración con cadenas globales',
                'Proceso de solicitud simplificado'
            ]
        },
        'tramites': {
            title: 'Tramitología Aduanera',
            description: 'Gestión integral de todos los trámites y procedimientos aduaneros necesarios para sus operaciones de comercio exterior.',
            benefits: [
                'Gestión completa de documentación',
                'Seguimiento personalizado de trámites',
                'Asesoría en cumplimiento normativo',
                'Optimización de tiempos de proceso',
                'Soporte técnico especializado'
            ]
        },
        'cupos': {
            title: 'Cupos y Aranceles',
            description: 'Gestión especializada de cupos arancelarios y optimización de clasificaciones para reducir costos de importación.',
            benefits: [
                'Aprovechamiento de cupos disponibles',
                'Clasificación arancelaria óptima',
                'Reducción de costos de importación',
                'Monitoreo continuo de oportunidades',
                'Estrategias de planificación anual'
            ]
        },
        'avisos': {
            title: 'Avisos Automáticos',
            description: 'Implementación de sistemas de avisos automáticos para cumplir con obligaciones de comercio exterior de manera eficiente.',
            benefits: [
                'Automatización de procesos de aviso',
                'Cumplimiento oportuno de obligaciones',
                'Reducción de riesgos por omisiones',
                'Sistema de alertas personalizadas',
                'Integración con sistemas internos'
            ]
        },
        'drawback': {
            title: 'Programa Drawback',
            description: 'Recuperación de impuestos pagados en la importación de mercancías que se incorporan a productos de exportación.',
            benefits: [
                'Recuperación de impuestos pagados',
                'Mejora del flujo de efectivo',
                'Incremento de competitividad',
                'Proceso de solicitud especializado',
                'Seguimiento hasta la devolución'
            ]
        },
        'iva-ieps': {
            title: 'Certificación IVA-IEPS',
            description: 'Certificación especializada en materia de IVA e IEPS para operaciones de comercio exterior conforme a las disposiciones fiscales.',
            benefits: [
                'Cumplimiento de obligaciones fiscales',
                'Optimización de beneficios tributarios',
                'Asesoría en aspectos fiscales complejos',
                'Reducción de riesgos fiscales',
                'Estrategias de planeación fiscal'
            ]
        },
        'cert-origen': {
            title: 'Certificados de Origen',
            description: 'Tramitación y gestión de certificados de origen para aprovechamiento de preferencias arancelarias en tratados comerciales.',
            benefits: [
                'Acceso a preferencias arancelarias',
                'Cumplimiento de reglas de origen',
                'Reducción de costos de exportación',
                'Facilitación del comercio internacional',
                'Asesoría en requisitos específicos'
            ]
        },
        'oea': {
            title: 'Certificación OEA',
            description: 'Certificación como Operador Económico Autorizado para garantizar la seguridad de la cadena de suministro internacional.',
            benefits: [
                'Reconocimiento como operador confiable',
                'Facilitación aduanera preferencial',
                'Reducción de inspecciones físicas',
                'Mejora de la seguridad operativa',
                'Ventaja competitiva en el mercado'
            ]
        },
        'anexo24-31': {
            title: 'Anexo 24 y 31 - Certificación OEA y Gestión',
            description: 'Servicios integrales que incluyen la Certificación de Operador Económico Autorizado (OEA) y la Gestión especializada del Anexo 31 para optimizar las operaciones de comercio exterior.',
            benefits: [
                'Certificación OEA para facilitación aduanera preferencial',
                'Reducción de inspecciones físicas en aduanas',
                'Reconocimiento internacional como operador confiable',
                'Gestión especializada del Anexo 31',
                'Optimización de tiempos de despacho aduanero',
                'Mejora de la competitividad en el mercado global',
                'Acceso a programas de seguridad comercial',
                'Asesoría integral en cumplimiento normativo'
            ]
        },
        'ctpat': {
            title: 'Programa C-TPAT',
            description: 'Customs-Trade Partnership Against Terrorism, programa de seguridad voluntario para facilitar el comercio con Estados Unidos.',
            benefits: [
                'Acceso preferencial a mercado estadounidense',
                'Reducción de inspecciones en frontera',
                'Mejora de la seguridad operativa',
                'Reconocimiento internacional',
                'Ventajas competitivas significativas'
            ]
        },
        'permisos': {
            title: 'Permisos y Autorizaciones',
            description: 'Gestión integral de permisos y autorizaciones especiales ante diferentes autoridades para operaciones de comercio exterior.',
            benefits: [
                'Gestión ante múltiples autoridades',
                'Seguimiento especializado de trámites',
                'Asesoría en requisitos específicos',
                'Optimización de tiempos de proceso',
                'Cumplimiento regulatorio integral'
            ]
        },
        'sanitarias': {
            title: 'Regulaciones Sanitarias',
            description: 'Asesoría especializada en cumplimiento de regulaciones sanitarias y fitosanitarias para importación y exportación.',
            benefits: [
                'Cumplimiento de normas sanitarias',
                'Prevención de rechazos en frontera',
                'Asesoría en certificaciones requeridas',
                'Gestión ante autoridades sanitarias',
                'Protocolos de seguridad alimentaria'
            ]
        },
        'regla-octava': {
            title: 'Regla Octava',
            description: 'Análisis y aplicación especializada de la regla octava para determinación correcta del valor en aduana de mercancías.',
            benefits: [
                'Determinación correcta de valores',
                'Optimización de base gravable',
                'Reducción de riesgos aduaneros',
                'Asesoría técnica especializada',
                'Cumplimiento de regulaciones'
            ]
        },
        'asesoria': {
            title: 'Asesoría Especializada',
            description: 'Consultoría integral en comercio exterior con enfoque personalizado para optimizar sus operaciones internacionales.',
            benefits: [
                'Consultoría personalizada',
                'Análisis integral de operaciones',
                'Estrategias de optimización',
                'Soporte técnico continuo',
                'Soluciones innovadoras'
            ]
        },
        'proyectos': {
            title: 'Desarrollo de Proyectos',
            description: 'Planificación, desarrollo e implementación de proyectos estratégicos de comercio exterior adaptados a sus necesidades.',
            benefits: [
                'Planificación estratégica integral',
                'Implementación paso a paso',
                'Seguimiento y control de avances',
                'Adaptación a necesidades específicas',
                'Resultados medibles y sostenibles'
            ]
        },
        'auditorias': {
            title: 'Auditorías Especializadas',
            description: 'Revisión exhaustiva de operaciones de comercio exterior para garantizar cumplimiento normativo y optimización de procesos.',
            benefits: [
                'Identificación de oportunidades de mejora',
                'Verificación de cumplimiento normativo',
                'Detección de riesgos operativos',
                'Recomendaciones de optimización',
                'Informes detallados y ejecutivos'
            ]
        },
        'inteligencia': {
            title: 'Inteligencia Comercial',
            description: 'Análisis profundo de mercados internacionales y oportunidades comerciales para toma de decisiones estratégicas.',
            benefits: [
                'Análisis de mercados objetivo',
                'Identificación de oportunidades',
                'Estudios de competitividad',
                'Información estratégica actualizada',
                'Soporte en toma de decisiones'
            ]
        }
    };

    // Info Panel Functionality
    console.log('Botones de información encontrados:', infoBtns.length); // Debug
    
    // Función de prueba directa
    function testInfoPanel() {
        console.log('Probando panel de información...');
        const testInfo = {
            title: 'Prueba - Anexo 24 y 31',
            description: 'Esta es una prueba del panel de información.',
            benefits: ['Beneficio 1', 'Beneficio 2', 'Beneficio 3']
        };
        showServiceInfo(testInfo);
    }
    
    // Agregar evento de prueba a todos los botones
    infoBtns.forEach((btn, index) => {
        console.log(`Botón ${index}:`, btn.dataset.info); // Debug
        
        // Evento principal
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const serviceKey = this.dataset.info;
            console.log('Botón clickeado:', serviceKey); // Debug
            console.log('Panel de información:', infoPanel); // Debug
            
            const info = serviceInfo[serviceKey];
            
            if (info) {
                console.log('Información encontrada:', info); // Debug
                showServiceInfo(info);
            } else {
                console.log('No se encontró información para:', serviceKey); // Debug
                console.log('Servicios disponibles:', Object.keys(serviceInfo)); // Debug
                // Usar información de prueba si no se encuentra
                testInfoPanel();
            }
        });
        
        // Evento de prueba adicional
        btn.addEventListener('click', function(e) {
            console.log('Evento de prueba activado');
        });
    });
    
    // Agregar evento global para debugging
    document.addEventListener('click', function(e) {
        if (e.target.closest('.info-btn')) {
            console.log('Click detectado en botón de información');
        }
    });

    function showServiceInfo(info) {
        console.log('Mostrando información:', info); // Debug
        
        const titleElement = document.getElementById('info-title');
        const descriptionElement = document.getElementById('info-description');
        const benefitsElement = document.getElementById('info-benefits');
        
        console.log('Elementos encontrados:', {
            title: titleElement,
            description: descriptionElement,
            benefits: benefitsElement,
            panel: infoPanel
        }); // Debug
        
        // Update content
        if (titleElement) titleElement.textContent = info.title;
        if (descriptionElement) descriptionElement.textContent = info.description;
        
        // Clear and populate benefits
        if (benefitsElement) {
            benefitsElement.innerHTML = '';
            if (info.benefits && info.benefits.length > 0) {
                const benefitsList = document.createElement('ul');
                info.benefits.forEach(benefit => {
                    const listItem = document.createElement('li');
                    listItem.textContent = benefit;
                    benefitsList.appendChild(listItem);
                });
                benefitsElement.appendChild(benefitsList);
            }
        }
        
        // Show panel with animation
        if (infoPanel) {
            console.log('Activando panel...'); // Debug
            infoPanel.classList.add('active');
            document.body.style.overflow = 'hidden';
            console.log('Panel activado, clases:', infoPanel.classList.toString()); // Debug
        } else {
            console.error('Panel de información no encontrado!'); // Debug
        }
    }

    function hideServiceInfo() {
        infoPanel.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Close info panel
    closeInfoBtn.addEventListener('click', hideServiceInfo);
    
    // Close on backdrop click
    infoPanel.addEventListener('click', function(e) {
        if (e.target === this) {
            hideServiceInfo();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && infoPanel.classList.contains('active')) {
            hideServiceInfo();
        }
    });

    // Add hover effects to service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Initialize first tab as active
    if (navTabs.length > 0 && serviceGrids.length > 0) {
        navTabs[0].classList.add('active');
        serviceGrids[0].classList.add('active');
    }
});

// ===== FUNCIONALIDADES PROFESIONALES AVANZADAS =====

// Initialize AOS (Animate On Scroll) Library
document.addEventListener('DOMContentLoaded', function() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100
        });
    }
});

// ===== CALCULADORA DE AHORROS INTERACTIVA =====
class SavingsCalculator {
    constructor() {
        this.calculateBtn = document.getElementById('calculateBtn');
        this.resultsContainer = document.getElementById('resultsContainer');
        this.savingsChart = null;
        
        if (this.calculateBtn) {
            this.calculateBtn.addEventListener('click', () => this.calculateSavings());
            this.initializeChart();
        }
    }

    calculateSavings() {
        const monthlyImports = parseFloat(document.getElementById('monthlyImports').value) || 0;
        const currentTariff = parseFloat(document.getElementById('currentTariff').value) || 0;
        const serviceType = document.getElementById('serviceType');
        const importType = document.getElementById('importType').value;
        const selectedOption = serviceType.options[serviceType.selectedIndex];
        
        if (!monthlyImports || !currentTariff || !selectedOption.dataset.saving) {
            this.showError('Por favor, completa todos los campos para calcular tus ahorros.');
            return;
        }

        const savingPercentage = parseFloat(selectedOption.dataset.saving);
        const serviceName = selectedOption.textContent;
        const serviceDescription = selectedOption.dataset.description;
        
        // Cálculos base actualizados 2025
        const currentMonthlyCost = (monthlyImports * currentTariff) / 100;
        
        // IVA aplicable (16% en México 2025)
        const ivaRate = 16;
        const currentIVA = (monthlyImports * ivaRate) / 100;
        
        // Calcular nuevos costos según el tipo de servicio
        let newMonthlyCost, monthlySavings, additionalBenefits;
        
        if (selectedOption.value.includes('immex')) {
            // IMMEX: Suspensión total de aranceles en importación temporal
            if (importType === 'temporal') {
                newMonthlyCost = 0; // Suspensión total
                monthlySavings = currentMonthlyCost;
                additionalBenefits = `Suspensión total de aranceles. Aplica solo para importación temporal que se re-exporte.`;
            } else {
                newMonthlyCost = currentMonthlyCost;
                monthlySavings = 0;
                additionalBenefits = `IMMEX solo aplica para importación temporal. Para importación definitiva considera otros programas.`;
            }
        } else if (selectedOption.value.includes('prosec')) {
            // PROSEC: Reducción específica por sector
            const newTariffRate = this.getPROSECTariff(selectedOption.value);
            newMonthlyCost = (monthlyImports * newTariffRate) / 100;
            monthlySavings = currentMonthlyCost - newMonthlyCost;
            additionalBenefits = `Arancel reducido a ${newTariffRate}% para insumos específicos del sector.`;
        } else if (selectedOption.value.includes('tlc')) {
            // TLC: Eliminación total con certificado de origen
            if (this.qualifiesForTLC(selectedOption.value, importType)) {
                newMonthlyCost = 0;
                monthlySavings = currentMonthlyCost;
                additionalBenefits = `Eliminación total de aranceles con certificado de origen válido.`;
            } else {
                newMonthlyCost = currentMonthlyCost;
                monthlySavings = 0;
                additionalBenefits = `Verifica que tu producto califique para origen preferencial.`;
            }
        } else if (selectedOption.value.includes('iva-ieps')) {
            // IVA-IEPS: Manejo preferencial del IVA
            newMonthlyCost = currentMonthlyCost; // Aranceles igual
            const ivaSavings = currentIVA * 0.8; // 80% de beneficio en manejo de IVA
            monthlySavings = ivaSavings;
            additionalBenefits = `Diferimiento y manejo preferencial del IVA (${ivaRate}%). Facilita flujo de efectivo.`;
        } else if (selectedOption.value.includes('drawback')) {
            // Drawback: Devolución de impuestos
            if (importType === 'exportacion') {
                monthlySavings = currentMonthlyCost * 0.20; // Hasta 20% de devolución
                newMonthlyCost = currentMonthlyCost - monthlySavings;
                additionalBenefits = `Devolución de hasta 20% de impuestos pagados en importación de insumos exportados.`;
            } else {
                monthlySavings = 0;
                newMonthlyCost = currentMonthlyCost;
                additionalBenefits = `Drawback solo aplica para operaciones de exportación con insumos importados.`;
            }
        } else if (selectedOption.value.includes('recinto')) {
            // Recinto Fiscalizado: Diferimiento de impuestos
            const deferredAmount = currentMonthlyCost * 0.30;
            monthlySavings = deferredAmount * 0.05; // 5% de beneficio financiero por diferimiento
            newMonthlyCost = currentMonthlyCost - monthlySavings;
            additionalBenefits = `Diferimiento de pago de impuestos. Beneficio financiero por flujo de efectivo.`;
        } else {
            // Cálculo genérico
            const newTariffRate = currentTariff * (1 - savingPercentage / 100);
            newMonthlyCost = (monthlyImports * newTariffRate) / 100;
            monthlySavings = currentMonthlyCost - newMonthlyCost;
            additionalBenefits = serviceDescription;
        }
        
        const annualSavings = monthlySavings * 12;
        const savingsPercentageReal = currentMonthlyCost > 0 ? ((monthlySavings / currentMonthlyCost) * 100) : 0;
        const roi = currentMonthlyCost > 0 ? (annualSavings / (monthlyImports * 0.001)) : 0; // ROI estimado

        this.displayResults({
            serviceName,
            serviceDescription,
            monthlyImports,
            currentMonthlyCost,
            currentIVA,
            newMonthlyCost,
            monthlySavings,
            annualSavings,
            savingsPercentage: savingsPercentageReal,
            additionalBenefits,
            roi,
            importType
        });
    }

    getPROSECTariff(serviceValue) {
        const prosecTariffs = {
            'prosec-auto': 2, // Automotriz: 0-5%, promedio 2%
            'prosec-textil': 5, // Textil: 0-8%, promedio 5%
            'prosec-electronico': 1 // Electrónico: 0-3%, promedio 1%
        };
        return prosecTariffs[serviceValue] || 5;
    }

    qualifiesForTLC(tlcType, importType) {
        // Simplificado: asumimos que califica si es importación definitiva o exportación
        return importType === 'definitiva' || importType === 'exportacion';
    }

    displayResults(data) {
        const resultsHTML = `
            <div class="results-display active">
                <div class="results-header">
                    <h3>Estimación de Ahorros - ${data.serviceName.split(' - ')[0]}</h3>
                    <p class="service-description">${data.serviceDescription}</p>
                </div>
                
                <div class="results-summary">
                    <div class="result-item primary">
                        <div class="result-value">$${this.formatCurrency(data.monthlySavings)}</div>
                        <div class="result-label">Ahorro Mensual</div>
                    </div>
                    <div class="result-item">
                        <div class="result-value">$${this.formatCurrency(data.annualSavings)}</div>
                        <div class="result-label">Ahorro Anual</div>
                    </div>
                    <div class="result-item">
                        <div class="result-value">${data.savingsPercentage.toFixed(1)}%</div>
                        <div class="result-label">% de Reducción</div>
                    </div>
                    <div class="result-item">
                        <div class="result-value">${this.formatCurrency(data.roi)}%</div>
                        <div class="result-label">ROI Estimado</div>
                    </div>
                </div>

                <div class="cost-breakdown">
                    <h4>Desglose de Costos (Mensual)</h4>
                    <div class="cost-comparison">
                        <div class="cost-before">
                            <span class="cost-label">Costo Actual:</span>
                            <span class="cost-amount">$${this.formatCurrency(data.currentMonthlyCost)}</span>
                        </div>
                        <div class="cost-after">
                            <span class="cost-label">Costo Optimizado:</span>
                            <span class="cost-amount">$${this.formatCurrency(data.newMonthlyCost)}</span>
                        </div>
                        ${data.currentIVA ? `
                        <div class="cost-iva">
                            <span class="cost-label">IVA Aplicable:</span>
                            <span class="cost-amount">$${this.formatCurrency(data.currentIVA)}</span>
                        </div>` : ''}
                    </div>
                </div>
                
                <div class="results-details">
                    <h4>Análisis Detallado</h4>
                    <div class="analysis-grid">
                        <div class="analysis-item">
                            <i class="fas fa-chart-line"></i>
                            <div>
                                <strong>Impacto Financiero:</strong>
                                <p>Ahorro de <strong>$${this.formatCurrency(data.monthlySavings)} USD mensuales</strong> 
                                (${data.savingsPercentage.toFixed(1)}% de reducción en costos arancelarios)</p>
                            </div>
                        </div>
                        
                        <div class="analysis-item">
                            <i class="fas fa-clock"></i>
                            <div>
                                <strong>Beneficio Temporal:</strong>
                                <p>En 12 meses: <strong>$${this.formatCurrency(data.annualSavings)} USD</strong> de ahorro acumulado</p>
                            </div>
                        </div>
                        
                        <div class="analysis-item">
                            <i class="fas fa-info-circle"></i>
                            <div>
                                <strong>Consideraciones Importantes:</strong>
                                <p>${data.additionalBenefits}</p>
                            </div>
                        </div>
                        
                        <div class="analysis-item">
                            <i class="fas fa-cogs"></i>
                            <div>
                                <strong>Tipo de Operación:</strong>
                                <p>${this.getOperationDescription(data.importType)}</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="results-actions">
                    <a href="#contacto" class="btn btn-primary">
                        <i class="fas fa-calculator"></i>
                        Solicitar Análisis Detallado
                    </a>
                    <button class="btn btn-outline" onclick="window.print()">
                        <i class="fas fa-print"></i>
                        Imprimir Estimación
                    </button>
                </div>
            </div>
        `;

        this.resultsContainer.innerHTML = resultsHTML;
        this.updateChart(data);
    }

    getOperationDescription(importType) {
        const descriptions = {
            'temporal': 'Importación temporal para manufactura y re-exportación',
            'definitiva': 'Importación definitiva para consumo nacional',
            'exportacion': 'Operación de exportación con insumos importados'
        };
        return descriptions[importType] || 'Operación de comercio exterior';
    }

    showError(message) {
        this.resultsContainer.innerHTML = `
            <div class="results-error">
                <i class="fas fa-exclamation-triangle"></i>
                <h3>Error en el cálculo</h3>
                <p>${message}</p>
            </div>
        `;
    }

    formatCurrency(amount) {
        return new Intl.NumberFormat('en-US', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(amount);
    }

    initializeChart() {
        const canvas = document.getElementById('savingsChart');
        if (canvas && typeof Chart !== 'undefined') {
            const ctx = canvas.getContext('2d');
            this.savingsChart = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: ['Costo Actual', 'Ahorro Potencial'],
                    datasets: [{
                        data: [70, 30],
                        backgroundColor: [
                            'rgba(255, 255, 255, 0.3)',
                            'rgba(232, 232, 232, 0.8)'
                        ],
                        borderColor: [
                            'rgba(255, 255, 255, 0.8)',
                            'rgba(232, 232, 232, 1)'
                        ],
                        borderWidth: 2
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: {
                                color: 'white',
                                font: {
                                    size: 14
                                }
                            }
                        }
                    }
                }
            });
        }
    }

    updateChart(data) {
        if (this.savingsChart) {
            const currentCost = data.currentMonthlyCost;
            const savings = data.monthlySavings;
            
            this.savingsChart.data.datasets[0].data = [currentCost - savings, savings];
            this.savingsChart.data.labels = ['Costo tras optimización', 'Ahorro mensual'];
            this.savingsChart.update();
        }
    }
}

// Initialize Calculator
const savingsCalculator = new SavingsCalculator();

// ===== EFECTOS AVANZADOS DE SCROLL =====
class AdvancedScrollEffects {
    constructor() {
        this.init();
    }

    init() {
        this.parallaxElements();
        this.scrollProgress();
        this.sectionHighlight();
    }

    parallaxElements() {
        const parallaxElements = document.querySelectorAll('[data-parallax]');
        
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            
            parallaxElements.forEach(element => {
                const rate = scrolled * -0.5;
                element.style.transform = `translateY(${rate}px)`;
            });
        });
    }

    scrollProgress() {
        const progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress-bar';
        progressBar.innerHTML = '<div class="scroll-progress-fill"></div>';
        document.body.appendChild(progressBar);

        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            
            const progressFill = progressBar.querySelector('.scroll-progress-fill');
            progressFill.style.width = scrollPercent + '%';
        });

        // Add styles
        const progressStyles = `
            .scroll-progress-bar {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 4px;
                background: rgba(15, 43, 91, 0.1);
                z-index: 10001;
                transition: opacity 0.3s ease;
            }
            
            .scroll-progress-fill {
                height: 100%;
                background: linear-gradient(90deg, #0F2B5B, #2e4a85);
                width: 0%;
                transition: width 0.1s ease;
            }
        `;
        
        const styleSheet = document.createElement('style');
        styleSheet.textContent = progressStyles;
        document.head.appendChild(styleSheet);
    }

    sectionHighlight() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        window.addEventListener('scroll', () => {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (window.pageYOffset >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
    }
}



// ===== SISTEMA DE NOTIFICACIONES AVANZADO =====
class NotificationSystem {
    constructor() {
        this.container = this.createContainer();
    }

    createContainer() {
        const container = document.createElement('div');
        container.className = 'notification-container';
        container.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            z-index: 10000;
            display: flex;
            flex-direction: column;
            gap: 10px;
        `;
        document.body.appendChild(container);
        return container;
    }

    show(message, type = 'info', duration = 5000) {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        
        const icons = {
            success: 'fa-check-circle',
            error: 'fa-exclamation-circle',
            warning: 'fa-exclamation-triangle',
            info: 'fa-info-circle'
        };

        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas ${icons[type]}"></i>
                <span>${message}</span>
            </div>
            <button class="notification-close">
                <i class="fas fa-times"></i>
            </button>
        `;

        notification.style.cssText = `
            background: white;
            border-radius: 12px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
            padding: 15px 20px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 15px;
            min-width: 300px;
            max-width: 500px;
            transform: translateX(100%);
            transition: all 0.3s ease;
            border-left: 4px solid ${this.getTypeColor(type)};
        `;

        this.container.appendChild(notification);

        // Show animation
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Close button
        notification.querySelector('.notification-close').addEventListener('click', () => {
            this.remove(notification);
        });

        // Auto remove
        if (duration > 0) {
            setTimeout(() => {
                this.remove(notification);
            }, duration);
        }
    }

    remove(notification) {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }

    getTypeColor(type) {
        const colors = {
            success: '#28a745',
            error: '#dc3545',
            warning: '#ffc107',
            info: '#0F2B5B'
        };
        return colors[type] || colors.info;
    }
}

// ===== INICIALIZACIÓN DE CARACTERÍSTICAS PROFESIONALES =====
document.addEventListener('DOMContentLoaded', function() {
    // Initialize loading screen (this will handle all other initializations)
    new LoadingScreen();
    
    // Performance monitoring
    monitorPerformance();
});

function validateForm(form) {
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;

    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.classList.add('error');
            isValid = false;
        } else {
            field.classList.remove('error');
        }
    });

    return isValid;
}

function enhanceInteractivity() {
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: translate(${x}px, ${y}px) scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add ripple animation styles
    const rippleStyles = `
        @keyframes ripple {
            to {
                transform: translate(var(--x), var(--y)) scale(2);
                opacity: 0;
            }
        }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = rippleStyles;
    document.head.appendChild(styleSheet);
}

// ===== LOADING SCREEN MANAGEMENT =====
class LoadingScreen {
    constructor() {
        this.loadingScreen = document.getElementById('loadingScreen');
        this.progressFill = document.getElementById('progressFill');
        this.progressPercent = document.getElementById('progressPercent');
        this.loadingSubtitle = document.getElementById('loadingSubtitle');
        
        this.messages = [
            'Conectando tu negocio con el mundo...',
            'Preparando soluciones de comercio exterior...',
            'Cargando experiencia en IMMEX y PROSEC...',
            'Optimizando tus operaciones internacionales...',
            'Verificando certificaciones y permisos...',
            'Finalizando configuración profesional...'
        ];
        
        this.currentProgress = 0;
        this.messageIndex = 0;
        this.isLoaded = false;
        
        this.init();
    }
    
    init() {
        // Start loading animation
        this.simulateLoading();
        this.rotateMessages();
        
        // Monitor actual page load
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.markDOMReady());
            window.addEventListener('load', () => this.markFullyLoaded());
        } else if (document.readyState === 'interactive') {
            this.markDOMReady();
            window.addEventListener('load', () => this.markFullyLoaded());
        } else {
            this.markFullyLoaded();
        }
    }
    
    simulateLoading() {
        const duration = 3000; // 3 seconds minimum loading
        const steps = 100;
        const interval = duration / steps;
        
        const progressInterval = setInterval(() => {
            if (this.currentProgress < 90) {
                // Simulate realistic loading with varying speeds
                const increment = Math.random() * 3 + 0.5;
                this.currentProgress = Math.min(this.currentProgress + increment, 90);
                this.updateProgress(this.currentProgress);
            }
            
            if (this.isLoaded && this.currentProgress >= 90) {
                this.currentProgress = 100;
                this.updateProgress(100);
                clearInterval(progressInterval);
                this.finishLoading();
            }
        }, interval);
    }
    
    rotateMessages() {
        setInterval(() => {
            if (this.currentProgress < 100) {
                this.messageIndex = (this.messageIndex + 1) % this.messages.length;
                this.loadingSubtitle.textContent = this.messages[this.messageIndex];
            }
        }, 2000);
    }
    
    updateProgress(percent) {
        const roundedPercent = Math.round(percent);
        this.progressFill.style.width = `${roundedPercent}%`;
        this.progressPercent.textContent = `${roundedPercent}%`;
    }
    
    markDOMReady() {
        // DOM is ready, continue progress
        if (this.currentProgress < 60) {
            this.currentProgress = 60;
        }
    }
    
    markFullyLoaded() {
        // Page fully loaded
        this.isLoaded = true;
        
        // Initialize all other features
        this.initializePageFeatures();
    }
    
    finishLoading() {
        // Show completion message
        this.loadingSubtitle.textContent = '¡Listo! Bienvenido a DACROM Asesores';
        
        // Wait a moment then fade out
        setTimeout(() => {
            this.loadingScreen.classList.add('fade-out');
            
            // Remove from DOM after transition
            setTimeout(() => {
                if (this.loadingScreen.parentNode) {
                    this.loadingScreen.remove();
                }
                
                // Initialize AOS animations after loading screen
                if (typeof AOS !== 'undefined') {
                    AOS.init({
                        duration: 800,
                        easing: 'ease-in-out',
                        once: true,
                        offset: 100
                    });
                }
            }, 800);
        }, 500);
    }
    
    initializePageFeatures() {
        // Initialize advanced features after loading
        try {
            // Clean up any old theme data
            localStorage.removeItem('theme');
            document.documentElement.removeAttribute('data-theme');
            
            // Remove any existing theme toggle button
            const existingToggle = document.querySelector('.theme-toggle');
            if (existingToggle) {
                existingToggle.remove();
            }
            
            new AdvancedScrollEffects();
            window.notificationSystem = new NotificationSystem();

            // Enhanced form validation
            const forms = document.querySelectorAll('form');
            forms.forEach(form => {
                form.addEventListener('submit', function(e) {
                    if (!validateForm(this)) {
                        e.preventDefault();
                        window.notificationSystem.show('Por favor, completa todos los campos correctamente.', 'error');
                    }
                });
            });

            // Interactive elements enhancement
            enhanceInteractivity();
            
        } catch (error) {
            console.log('Some features could not be initialized:', error);
        }
    }
}

function monitorPerformance() {
    // Simple performance monitoring without notification
    window.addEventListener('load', function() {
        const loadTime = performance.now();
        console.log(`Página cargada en ${Math.round(loadTime)}ms`);
    });
}