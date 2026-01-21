const appConfig = {
    chapters: [
        { 
            file: 'chapters/00_cover.html', 
            title: 'Manual Mestre',
            label: 'Capa', 
            icon: '<svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>'
        },
        { 
            file: 'chapters/01_intro.html', 
            title: 'O Som e a Música',
            label: 'Capítulo 1', 
            icon: `<div class="rays-container">
                <div class="visualizer-rays">
                    <div class="ray"></div><div class="ray"></div><div class="ray"></div><div class="ray"></div>
                    <div class="ray"></div><div class="ray"></div><div class="ray"></div><div class="ray"></div>
                    <div class="ray"></div><div class="ray"></div><div class="ray"></div><div class="ray"></div>
                    <div class="ray"></div><div class="ray"></div><div class="ray"></div><div class="ray"></div>
                    <div class="ray"></div><div class="ray"></div><div class="ray"></div><div class="ray"></div>
                    <div class="ray"></div><div class="ray"></div><div class="ray"></div><div class="ray"></div>
                    <div class="ray"></div><div class="ray"></div><div class="ray"></div><div class="ray"></div>
                    <div class="ray"></div><div class="ray"></div><div class="ray"></div><div class="ray"></div>
                </div>
                <div class="rounded-full w-[70%] h-[70%] border border-current opacity-40 flex items-center justify-center overflow-hidden">
                    <div class="sound-bars w-full">
                        <div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div>
                    </div>
                </div>
            </div>`
        },
        { 
            file: 'chapters/02_piano.html', 
            title: 'Engenharia do Piano',
            label: 'Capítulo 2', 
            icon: '<svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="14" rx="2" stroke-width="1.5"/><line x1="7" y1="4" x2="7" y2="13" stroke-width="1.5"/><line x1="12" y1="4" x2="12" y2="13" stroke-width="1.5"/><line x1="17" y1="4" x2="17" y2="13" stroke-width="1.5"/></svg>'
        },
        { 
            file: 'chapters/03_notation.html', 
            title: 'Notação Musical',
            label: 'Capítulo 3', 
            icon: `<svg viewBox="0 0 20 40" fill="none" stroke="currentColor" class="w-full h-full"><ellipse cx="8" cy="35" rx="5" ry="3.5" stroke-width="2" /><path d="M13 35V5" stroke-width="2" /></svg>`, // Mínima
            bgIcons: [
                `<svg viewBox="0 0 20 40" fill="currentColor" class="w-full h-full"><ellipse cx="8" cy="35" rx="5" ry="3.5" /><path d="M12 35V5" stroke="currentColor" stroke-width="2" /></svg>`, // Semínima
                `<svg viewBox="0 0 20 40" fill="none" stroke="currentColor" class="w-full h-full"><ellipse cx="8" cy="35" rx="5" ry="3.5" stroke-width="2" /><path d="M13 35V5" stroke-width="2" /></svg>`, // Mínima
                `<svg viewBox="0 0 24 40" fill="currentColor" class="w-full h-full"><ellipse cx="8" cy="35" rx="5" ry="3.5" /><path d="M12 35V5" stroke="currentColor" stroke-width="2" /><path d="M12 5c6 2 8 8 8 8" stroke="currentColor" stroke-width="2" fill="none" /></svg>`, // Colcheia
                `<svg viewBox="0 0 24 40" fill="currentColor" class="w-full h-full"><ellipse cx="8" cy="35" rx="5" ry="3.5" /><path d="M12 35V5" stroke="currentColor" stroke-width="2" /><path d="M12 5c6 2 8 8 8 8M12 11c6 2 8 8 8 8" stroke="currentColor" stroke-width="2" fill="none" /></svg>` // Semicolcheia
            ]
        },
        { 
            file: 'chapters/04_intervals.html', 
            title: 'Intervalos',
            label: 'Capítulo 4', 
            icon: '<svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>'
        },
        {
            file: 'chapters/05_scales.html',
            title: 'Escalas',
            label: 'Capítulo 5',
            icon: '<svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z" /></svg>'
        },
        {
            file: 'chapters/06_harmony.html',
            title: 'Harmonia',
            label: 'Capítulo 6',
            icon: '<svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>'
        },
        {
            file: 'chapters/07_functions.html',
            title: 'Narrativa Harmônica',
            label: 'Capítulo 7',
            icon: '<svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>'
        },
        {
            file: 'chapters/08_technique.html',
            title: 'O GPS Musical',
            label: 'Capítulo 8',
            icon: '<svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>'
        },
        {
            file: 'chapters/09_bossa.html', 
            title: 'Bossa Nova',
            label: 'Capítulo 9',
            icon: '<svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>'
        },
        {
            file: 'chapters/10_improv.html', 
            title: 'Improvisação',
            label: 'Capítulo 10',
            icon: '<svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>'
        },
        {
            file: 'chapters/11_arranging.html', 
            title: 'Arranjo',
            label: 'Capítulo 11', 
            icon: '<svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>'
        },
        {
            file: 'chapters/12_methodology.html', 
            title: 'Metodologia',
            label: 'Capítulo 12', 
            icon: '<svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>'
        }
    ]
};

// ── Variáveis principais ────────────────────────────────────────
let currentIdx = 0;
let slides = Array.from(document.querySelectorAll('.slide-section')); // Inicial em branco
const container = document.getElementById('gesture-area');
const progress = document.getElementById('progress-bar');
const counter = document.getElementById('slide-counter');
const sidebar = document.getElementById('sidebar-menu');
const sidebarNav = document.getElementById('sidebar-nav');
let isSidebarOpen = false;

// ── Inicialização ──────────────────────────────────────────────
async function initApp() {
    container.innerHTML = ''; // Clear loading state

    // Load all chapters
    for (const chapter of appConfig.chapters) {
        try {
            const response = await fetch(chapter.file);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const text = await response.text();
            // Create a temporary container to parse HTML
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = text;
            
            // Append all sections to main area
            const loadedSlides = Array.from(tempDiv.querySelectorAll('section.slide-section'));
            loadedSlides.forEach(slide => {
                slide.classList.add('slide-hidden'); // Ensure hidden by default
                
                // Initialize Interactive Backgrounds for 'Capa'
                if (slide.dataset.title === 'Capa' && typeof particleSystem !== 'undefined' && particleSystem.initSlide) {
                    const bgTemplate = chapter.bgIcons || chapter.icon;
                    particleSystem.initSlide(slide, bgTemplate);
                }

                container.appendChild(slide);
            });

        } catch (e) {
            console.error(`Error loading chapter ${chapter.title}:`, e);
            container.innerHTML += `<div class="p-4 text-red-500">Erro ao carregar ${chapter.title}. Se estiver usando localmente, use um servidor local (ex: Live Server).</div>`;
        }
    }

    slides = Array.from(document.querySelectorAll('.slide-section'));
    
    if (slides.length === 0) return;

    buildSidebar();
    
    // Suporte a Deep Linking via Hash (ex: #33)
    let startIdx = 0;
    const hash = window.location.hash.substring(1);
    if (hash && !isNaN(hash)) {
        const hashIdx = parseInt(hash) - 1;
        if (hashIdx >= 0 && hashIdx < slides.length) {
            startIdx = hashIdx;
        }
    }
    
    // Inicia no slide definido (hash ou primeiro)
    go(startIdx);
}

// ── Construção da Sidebar (Estilosa) ────────────────────────────
// ── Construção da Sidebar (Estilosa & Dropdown) ────────────────────────────
function buildSidebar() {
    sidebarNav.innerHTML = '';
    
    // Agrupa slides por capítulo
    const chapters = {};
    slides.forEach((s, i) => {
        const cName = s.getAttribute('data-chapter') || 'Geral';
        if(!chapters[cName]) chapters[cName] = [];
        chapters[cName].push({
            id: i,
            title: s.getAttribute('data-title') || `Slide ${i + 1}`,
            chapter: cName
        });
    });

    // Itera pelos capítulos agrupados
    let configIndex = 0;
    Object.entries(chapters).forEach(([chapterName, chapterSlides]) => {
        
        // Busca config ou usa default
        const config = appConfig.chapters[configIndex] || { 
            title: chapterName, 
            icon: '<svg class="w-full h-full" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/></svg>',
            label: chapterName
        };
        configIndex++;

        // Cria container Dropdown
        const details = document.createElement('details');
        details.className = "group mb-4"; // mb-4 para espaçamento entre capitulos
        
        // Verifica se este capítulo contem o slide atual para abrir por padrão
        const isActiveChapter = chapterSlides.some(s => s.id === currentIdx);
        if(isActiveChapter) details.open = true;

        // Cria o Header (Summary)
        const summary = document.createElement('summary');
        summary.className = "cursor-pointer list-none outline-none group/summary"; // group/summary para estilizar filhos no hover
        
        // Conteúdo Estiloso do Header
        summary.innerHTML = `
            <div class="px-1 transition-opacity opacity-80 group-hover/summary:opacity-100 group-open:opacity-100">
                <div class="flex items-center gap-3 text-amber dark:text-gold mb-1 border-b border-amber/20 dark:border-gold/20 pb-2">
                    <div class="w-6 h-6 flex-shrink-0 transition-transform duration-300 group-hover/summary:scale-110 group-hover/summary:-rotate-6">${config.icon}</div>
                    <h5 class="text-[10px] font-black uppercase tracking-[0.2em] flex-1 translate-y-[1px]">${config.label || chapterName}</h5>
                    <span class="transform transition-transform duration-300 group-open:rotate-180 text-[10px]">▼</span>
                </div>
                <h6 class="text-xs font-bold text-stone-500 dark:text-stone-400 pl-[2.25rem] leading-tight opacity-80">${config.title}</h6>
            </div>
        `;
        
        summary.onclick = (e) => {
            // e.preventDefault(); // Não prevenir default, pois queremos o toggle nativo
            
            // Accordion: Fecha outros details
            if (!details.open) { // Se está FECHADO e vai ABRIR
                document.querySelectorAll('#sidebar-nav details').forEach(d => {
                    if (d !== details) {
                        d.removeAttribute('open');
                    }
                });
            }
        };

        // Resetar animação ao abrir (para funcionar sempre)
        details.addEventListener('toggle', () => {
            if (details.open) {
                const buttons = contentDiv.querySelectorAll('button');
                buttons.forEach(btn => {
                    btn.classList.remove('stagger-item');
                    void btn.offsetWidth; // trigger reflow
                    btn.classList.add('stagger-item');
                });
            }
        });
        
        details.appendChild(summary);

        // Container dos botões (Dropdown Content)
        const contentDiv = document.createElement('div');
        contentDiv.className = "mt-2 pl-2 space-y-1 overflow-hidden transition-all duration-300";

        // Cria os botões dos slides
        chapterSlides.forEach((item, index) => {
            const btn = document.createElement('button');
            // Nota: 'stagger-item' é adicionado na classe base
            btn.className = "text-left py-2 px-3 pl-8 w-full rounded-r-lg hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors opacity-60 hover:opacity-100 data-[active=true]:bg-amber/5 dark:data-[active=true]:bg-gold/5 data-[active=true]:text-amber dark:data-[active=true]:text-gold data-[active=true]:opacity-100 data-[active=true]:font-bold block text-xs truncate border-l-2 border-transparent data-[active=true]:border-amber stagger-item";
            btn.innerText = item.title; 
            btn.setAttribute('data-slide-idx', item.id);
            btn.style.animationDelay = `${index * 50}ms`; // Escadinha
            
            btn.onclick = (e) => {
                // e.stopPropagation(); // Removido para segurança
                go(item.id);
                toggleSidebar(false); // Força fechamento
            };
            contentDiv.appendChild(btn);
        });

        details.appendChild(contentDiv);
        sidebarNav.appendChild(details);
    });
}

// ── Link Helper (Cross-linking) ────────────────────────────────
window.goToSlide = function(titlePartial) {
    const targetIdx = slides.findIndex(s => {
        const t = s.getAttribute('data-title') || '';
        return t.toLowerCase().includes(titlePartial.toLowerCase());
    });

    if (targetIdx !== -1) {
        go(targetIdx);
    } else {
        console.warn(`Slide contendo "${titlePartial}" não encontrado.`);
    }
};

// ── Função que muda para um slide específico ───────────────────
function go(idx) {
    if (idx < 0 || idx >= slides.length) return;   // impede índices inválidos
  
    currentIdx = idx;                                      // atualiza o índice atual
  
    // Ativa/desativa os slides (apenas um fica visível - usando classes do CSS existente)
    slides.forEach((el, i) => {
        if (i === currentIdx) {
            el.classList.remove('slide-hidden');
            el.classList.add('slide-active');
        } else {
            el.classList.add('slide-hidden');
            el.classList.remove('slide-active');
        }
    });
  
    // Atualiza barra de progresso e contador
    if(progress) progress.style.width = `${((currentIdx + 1) / slides.length) * 100}%`;
    if(counter) counter.textContent = `${currentIdx + 1} / ${slides.length}`;

    // Atualiza URL Hash (sem disparar scroll do navegador)
    history.replaceState(null, null, `#${currentIdx + 1}`);
    
    // Atualiza Localizador (Capítulo/Seção)
    const locationInd = document.getElementById('location-indicator');
    if(locationInd) {
        const currentSlide = slides[currentIdx];
        const chapter = currentSlide.getAttribute('data-chapter') || 'Geral';
        const title = currentSlide.getAttribute('data-title') || '';
        // Mostra: CAPÍTULO | Título
        locationInd.innerHTML = `<span class="opacity-60 uppercase text-[9px] tracking-widest mr-2 border-r border-white/20 pr-2">${chapter}</span><span class="truncate">${title}</span>`;
    }
    
    // Atualiza estado ativo na sidebar
    const allBtns = sidebarNav.querySelectorAll('button[data-slide-idx]');
    allBtns.forEach(b => b.setAttribute('data-active', 'false'));
    const activeBtn = sidebarNav.querySelector(`button[data-slide-idx="${currentIdx}"]`);
    if(activeBtn) {
        activeBtn.setAttribute('data-active', 'true');
        const parentDetails = activeBtn.closest('details');
        if(parentDetails) parentDetails.open = true;
        // Scrollar sidebar para o item ativo
        activeBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    window.scrollTo(0, 0);                              // volta pro topo (importante em mobile)
}

// ── Navegação simples (próximo / anterior) ─────────────────────
function next() { go(currentIdx + 1); }
function prev() { go(currentIdx - 1); }

const overlay = document.getElementById('sidebar-overlay');

// ── Helpers de Interface ──────────────────────────────────────
function toggleDarkMode() { 
    document.documentElement.classList.toggle('dark'); 
    localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
}

// Check for saved preference on load
if (localStorage.getItem('theme') === 'light') {
    document.documentElement.classList.remove('dark');
}

function toggleSidebar(forceState) { 
    if (typeof forceState === 'boolean') {
        isSidebarOpen = forceState;
    } else {
        isSidebarOpen = !isSidebarOpen;
    }
    
    const locCapsule = document.getElementById('location-capsule');
    const themeGroup = document.getElementById('theme-control-group');
    const brightnessContainer = document.getElementById('brightness-container');
    const isMobile = window.innerWidth < 768;

    if (isSidebarOpen) {
        sidebar.classList.add('open'); 
        overlay.classList.remove('opacity-0', 'pointer-events-none');
        
        // Push Location Indicator to Center (Mobile: Jump Top | Desktop: Slide Center)
        if(locCapsule) {
            if(isMobile) {
                // Fade Out -> Move Top -> Fade In
                locCapsule.classList.add('opacity-0');
                setTimeout(() => {
                    locCapsule.classList.remove('bottom-6', 'left-6', 'z-40');
                    locCapsule.classList.add('top-6', 'left-1/2', '-translate-x-1/2', 'z-50');
                    requestAnimationFrame(() => locCapsule.classList.remove('opacity-0'));
                }, 500);
            } else {
                // Desktop: Slide
                locCapsule.classList.remove('left-6', 'top-6', 'opacity-0', 'z-50');
                locCapsule.classList.add('bottom-6', 'left-1/2', '-translate-x-1/2', 'z-40');
            }
        }

        // Theme Group Logic (Mobile Only)
        if(themeGroup) {
             if(isMobile) {
                 themeGroup.classList.add('opacity-0');
                 setTimeout(() => {
                     themeGroup.classList.add('fixed', 'top-6', 'right-6', 'z-50');
                     if(brightnessContainer) brightnessContainer.classList.add('hidden');
                     requestAnimationFrame(() => themeGroup.classList.remove('opacity-0'));
                 }, 500);
             } else {
                 // Ensure desktop state
                 themeGroup.classList.remove('fixed', 'top-6', 'right-6', 'z-50', 'opacity-0');
                 if(brightnessContainer) brightnessContainer.classList.remove('hidden');
             }
        }
        
        // Scroll para o item ativo quando abrir
        setTimeout(() => {
            const activeBtn = sidebarNav.querySelector('button[data-active="true"]');
            if(activeBtn) {
                // Abre o details pai se estiver fechado
                const parentDetails = activeBtn.closest('details');
                if(parentDetails) parentDetails.open = true;
                
                activeBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }, 100);
    } else {
        sidebar.classList.remove('open'); 
        overlay.classList.add('opacity-0', 'pointer-events-none');
        
        // Return Location Indicator to Left
        if(locCapsule) {
            if(isMobile) {
                // Fade Out -> Move Bottom Left -> Fade In
                locCapsule.classList.add('opacity-0');
                setTimeout(() => {
                    locCapsule.classList.remove('top-6', 'left-1/2', '-translate-x-1/2', 'z-50');
                    locCapsule.classList.add('bottom-6', 'left-6', 'z-40');
                    requestAnimationFrame(() => locCapsule.classList.remove('opacity-0'));
                }, 500);
            } else {
                // Desktop: Slide Back
                locCapsule.classList.remove('left-1/2', '-translate-x-1/2', 'top-6', 'opacity-0', 'z-50');
                locCapsule.classList.add('bottom-6', 'left-6', 'z-40');
            }
        }

        // Theme Group Return
        if(themeGroup) {
            if(isMobile) {
                 themeGroup.classList.add('opacity-0');
                 setTimeout(() => {
                     themeGroup.classList.remove('fixed', 'top-6', 'right-6', 'z-50');
                     if(brightnessContainer) brightnessContainer.classList.remove('hidden');
                     requestAnimationFrame(() => themeGroup.classList.remove('opacity-0'));
                 }, 500);
            } else {
                 themeGroup.classList.remove('fixed', 'top-6', 'right-6', 'z-50', 'opacity-0');
                 if(brightnessContainer) brightnessContainer.classList.remove('hidden');
            }
        }
    }
}

// ── Eventos de teclado (setas direita/esquerda) ────────────────
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') next();
  if (e.key === 'ArrowLeft')  prev();
});

// ── Navegação por swipe (toque em mobile) ──────────────────────
let touchX = 0;

container.addEventListener('touchstart', e => {
  touchX = e.touches[0].clientX;                      // guarda posição inicial do toque
}, { passive: true });

container.addEventListener('touchend', e => {
  const delta = e.changedTouches[0].clientX - touchX; // calcula diferença
  
  if (Math.abs(delta) > 60) {                         // tolerância mínima de movimento
    if (delta > 0) prev();                            // swipe direita → slide anterior
    else next();                                      // swipe esquerda → próximo slide
  }
}, { passive: true });

// ── Zonas Laterais (Desktop) ──────────────────────────────────
// Vinculando às zonas do HTML existente
const leftZone = document.querySelector('.nav-zone-left');
const rightZone = document.querySelector('.nav-zone-right');

if(leftZone) leftZone.onclick = prev;
if(rightZone) rightZone.onclick = next;

// ── Helper de Normalização (Remove acentos) ────────────────────
function normalizeStr(str) {
    if (!str) return '';
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

// ── Navegação Direta & Busca Universal (Stage 2) ────────────────
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('universal-search-input');
    const searchContainer = document.getElementById('search-nav-container');
    const resultsPanel = document.getElementById('search-results-panel');
    const resultsList = document.getElementById('results-list');
    const resultsCount = document.getElementById('results-count');

    let highlightCleanup = [];

    const clearHighlights = () => {
        highlightCleanup.forEach(restore => restore());
        highlightCleanup = [];
    };

    const highlightInSlide = (slideEl, term) => {
        clearHighlights();
        if (!term || term.length < 2) return;

        const walk = document.createTreeWalker(slideEl, NodeFilter.SHOW_TEXT, null, false);
        const nodes = [];
        let node;
        while (node = walk.nextNode()) nodes.push(node);

        nodes.forEach(textNode => {
            const parent = textNode.parentNode;
            if (parent.tagName === 'SCRIPT' || parent.tagName === 'STYLE' || parent.classList.contains('search-highlight')) return;

            const text = textNode.nodeValue;
            const normText = normalizeStr(text);
            const normTerm = normalizeStr(term);
            
            let lastIdx = 0;
            let matchIdx;
            
            // Usamos a versão normalizada para achar o índice, mas aplicamos no texto original
            const matches = [];
            while ((matchIdx = normText.indexOf(normTerm, lastIdx)) !== -1) {
                matches.push({ start: matchIdx, end: matchIdx + normTerm.length });
                lastIdx = matchIdx + normTerm.length;
            }

            if (matches.length > 0) {
                const fragment = document.createDocumentFragment();
                let currentPos = 0;

                matches.forEach(m => {
                    fragment.appendChild(document.createTextNode(text.substring(currentPos, m.start)));
                    const mark = document.createElement('mark');
                    mark.className = 'search-highlight';
                    mark.textContent = text.substring(m.start, m.end);
                    fragment.appendChild(mark);
                    currentPos = m.end;
                });
                fragment.appendChild(document.createTextNode(text.substring(currentPos)));

                const originalNodes = Array.from(fragment.childNodes);
                const nextSibling = textNode.nextSibling;
                
                // Salva função de limpeza
                highlightCleanup.push(() => {
                    originalNodes.forEach(n => n.remove());
                    parent.insertBefore(textNode, nextSibling);
                });

                parent.replaceChild(fragment, textNode);
            }
        });
    };

    if (searchInput && resultsPanel) {
        let clearInputTimeout;

        const startAutoClear = () => {
            if (clearInputTimeout) clearTimeout(clearInputTimeout);
            clearInputTimeout = setTimeout(() => {
                searchInput.value = '';
            }, 7000);
        };
        
        searchInput.oninput = () => {
            if (clearInputTimeout) clearTimeout(clearInputTimeout);
            const queryRaw = searchInput.value.trim();
            const queryNorm = normalizeStr(queryRaw);
            
            if (queryNorm.length < 2) {
                resultsPanel.classList.remove('visible');
                resultsPanel.classList.add('hidden');
                return;
            }

            const isNumeric = !isNaN(parseInt(queryRaw)) && queryRaw === parseInt(queryRaw).toString();
            if (isNumeric) {
                resultsPanel.classList.remove('visible');
                resultsPanel.classList.add('hidden');
                return;
            }

            const matches = [];
            slides.forEach((s, idx) => {
                const title = s.getAttribute('data-title') || '';
                const chapter = s.getAttribute('data-chapter') || '';
                const content = s.textContent || '';
                const normTitle = normalizeStr(title);
                const normContent = normalizeStr(content);

                if (normTitle.includes(queryNorm) || normContent.includes(queryNorm)) {
                    // Extrair Snippet
                    let snippet = "";
                    const matchIdx = normContent.indexOf(queryNorm);
                    if (matchIdx !== -1) {
                        const start = Math.max(0, matchIdx - 40);
                        const end = Math.min(content.length, matchIdx + queryNorm.length + 40);
                        let context = content.substring(start, end).replace(/\s+/g, ' ');
                        
                        // Negrito no termo dentro do snippet (mantendo caixa original)
                        const termLength = queryNorm.length;
                        const matchPosInContext = normalizeStr(context).indexOf(queryNorm);
                        if (matchPosInContext !== -1) {
                            snippet = "..." + 
                                context.substring(0, matchPosInContext) + 
                                "<b>" + context.substring(matchPosInContext, matchPosInContext + termLength) + "</b>" + 
                                context.substring(matchPosInContext + termLength) + "...";
                        }
                    }
                    
                    matches.push({ idx, title, chapter, snippet });
                }
            });

            resultsCount.textContent = `${matches.length} encontrados`;
            resultsList.innerHTML = '';
            
            if (matches.length > 0) {
                resultsPanel.classList.remove('hidden');
                setTimeout(() => resultsPanel.classList.add('visible'), 10);
                
                matches.forEach(m => {
                    const item = document.createElement('div');
                    item.className = 'search-result-item';
                    item.innerHTML = `
                        <span class="result-chapter">${m.chapter}</span>
                        <span class="result-title">${m.title}</span>
                        ${m.snippet ? `<span class="result-snippet">${m.snippet}</span>` : ''}
                    `;
                    item.onclick = () => {
                        go(m.idx);
                        highlightInSlide(slides[m.idx], queryRaw);
                        resultsPanel.classList.remove('visible');
                        setTimeout(() => resultsPanel.classList.add('hidden'), 300);
                        startAutoClear();
                    };
                    resultsList.appendChild(item);
                });
            } else {
                resultsPanel.classList.remove('visible');
                setTimeout(() => resultsPanel.classList.add('hidden'), 300);
            }
        };

        searchInput.onkeydown = (e) => {
            if (e.key === 'Enter') {
                const total = slides.length;
                const queryRaw = searchInput.value.trim();
                const queryNorm = normalizeStr(queryRaw);
                
                if (!queryNorm) return;

                const num = parseInt(queryRaw);
                if (!isNaN(num) && num >= 1 && num <= total && queryRaw === num.toString()) {
                    go(num - 1);
                    clearHighlights();
                    searchInput.blur();
                    resultsPanel.classList.remove('visible');
                    startAutoClear();
                    return;
                }

                // Se houver resultados visíveis, vai para o primeiro
                const firstResult = resultsList.querySelector('.search-result-item');
                if (firstResult) {
                    firstResult.click();
                    searchInput.blur();
                    startAutoClear();
                } else {
                    searchContainer.animate([{ transform: 'translateX(-5px)' }, { transform: 'translateX(5px)' }], { duration: 100, iterations: 3 });
                }
            }
            if (e.key === 'Escape') {
                searchInput.blur();
                resultsPanel.classList.remove('visible');
                setTimeout(() => resultsPanel.classList.add('hidden'), 300);
                clearHighlights();
            }
        };

        // Fecha ao clicar fora ou limpa destaques ao clicar em qualquer lado
        document.addEventListener('mousedown', (e) => {
            // Se clicar fora do painel de resultados, fecha o painel
            if (resultsPanel && !resultsPanel.contains(e.target) && e.target !== searchInput) {
                resultsPanel.classList.remove('visible');
                setTimeout(() => resultsPanel.classList.add('hidden'), 300);
            }
            
            // Se houver destaques ativos e clicar em qualquer lugar (exceto o próprio input ou painel)
            if (highlightCleanup.length > 0) {
                // Pequeno delay para garantir que o clique que selecionou o resultado não limpe o destaque imediatamente
                if (!searchInput.contains(e.target) && !resultsPanel.contains(e.target)) {
                    clearHighlights();
                }
            }
        });
    }
});

// ── Listener de Hash (Voltar/Avançar navegador) ─────────────────
window.addEventListener('hashchange', () => {
    const hash = window.location.hash.substring(1);
    if (hash && !isNaN(hash)) {
        const targetIdx = parseInt(hash) - 1;
        if (targetIdx !== currentIdx && targetIdx >= 0 && targetIdx < slides.length) {
            go(targetIdx);
        }
    }
});

// Start
window.addEventListener('DOMContentLoaded', () => {
    initApp();
    registerPWA();
    addPrintButton();
});

// ── PWA & EXPORT ──────────────────────────────────────
function registerPWA() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js')
            .then(reg => console.log('Service Worker Registrado', reg))
            .catch(err => console.log('Erro no SW', err));
    }
}

function addPrintButton() {
    const sidebar = document.getElementById('sidebar-menu');
    // Inject before the list or at the bottom
    if (!sidebar) return;

    const printContainer = document.createElement('div');
    printContainer.className = 'mt-auto p-4 border-t border-stone-200 dark:border-stone-800';
    
    const printBtn = document.createElement('button');
    printBtn.className = 'w-full flex items-center justify-center gap-2 p-3 bg-stone-200 dark:bg-stone-800 rounded-xl text-xs font-bold uppercase tracking-wider text-stone-600 dark:text-stone-400 hover:text-ink hover:bg-stone-300 transition-colors';
    printBtn.innerHTML = `
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /></svg>
        <span>Salvar PDF</span>
    `;
    printBtn.onclick = () => window.print();

    printContainer.appendChild(printBtn);
    sidebar.appendChild(printContainer);
}

// ── BACKGROUND PARTICLES SYSTEM ─────────────────────────────
class ParticleSystem {
    constructor() {
        this.particles = [];
        this.windowWidth = window.innerWidth;
        this.windowHeight = window.innerHeight;
        
        this.initListeners();
        this.animate();
    }

    initListeners() {
        window.addEventListener('resize', () => {
            this.windowWidth = window.innerWidth;
            this.windowHeight = window.innerHeight;
        });
    }

    initSlide(slideElement, iconSvgString) {
        // Only run on 'Capa' slides
        if (slideElement.dataset.title !== 'Capa') return;

        // Container
        const bgContainer = document.createElement('div');
        bgContainer.className = 'absolute inset-0 overflow-hidden pointer-events-none z-0';
        bgContainer.style.perspective = '1500px'; 
        bgContainer.style.transformStyle = 'preserve-3d';

        // Ensure slide content is above
        Array.from(slideElement.children).forEach(child => {
            child.style.position = 'relative';
            child.style.zIndex = '10';
        });
        slideElement.appendChild(bgContainer);

        // Generate Particles
        const isDark = document.documentElement.classList.contains('dark');
        const count = 15;
        
        for (let i = 0; i < count; i++) {
            const particle = document.createElement('div');
            
            // Support for Multiple Icon Templates (Array)
            if (Array.isArray(iconSvgString)) {
                particle.innerHTML = iconSvgString[Math.floor(Math.random() * iconSvgString.length)];
            } else {
                particle.innerHTML = iconSvgString;
            }
            
            // Random properties
            const size = 80 + Math.random() * 150; 
            const posX = Math.random() * 120 - 10; // -10% to 110%
            const posY = Math.random() * 120 - 10;
            const depth = Math.random() * 800 - 400; // Z position: -400 to 400
            
            // User requested higher visibility in dark mode (closer to white)
            const baseOpacity = 0.08;
            const extraOpacity = Math.random() * 0.12;
            const opacity = baseOpacity + extraOpacity;
            
            // Apply styles
            particle.style.position = 'absolute';
            particle.style.left = `${posX}%`;
            particle.style.top = `${posY}%`;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.opacity = opacity;
            particle.style.color = 'currentColor';
            particle.style.transformStyle = 'preserve-3d';
            
            // Store for JS animation
            this.particles.push({
                element: particle,
                speedX: (Math.random() - 0.5) * 0.12,
                speedY: (Math.random() - 0.5) * 0.12,
                rotX: Math.random() * 360,
                rotY: Math.random() * 360,
                rotZ: Math.random() * 360,
                rotSpeedX: (Math.random() - 0.5) * 0.25,
                rotSpeedY: (Math.random() - 0.5) * 0.25,
                rotSpeedZ: (Math.random() - 0.5) * 0.25,
                depth: depth,
                x: 0, 
                y: 0
            });

            bgContainer.appendChild(particle);
        }
    }

    animate() {
        if (this.particles.length === 0) {
            requestAnimationFrame(() => this.animate());
            return;
        }

        this.particles.forEach(p => {
            // Constant Drift
            p.x += p.speedX;
            p.y += p.speedY;
            p.rotX += p.rotSpeedX;
            p.rotY += p.rotSpeedY;
            p.rotZ += p.rotSpeedZ;

            // Wider wrap-around to prevent popping (units are roughly % based on speeds)
            // We use a large buffer (50px) to ensure they are off-screen
            if (p.x > 300) p.x = -300;
            if (p.x < -300) p.x = 300;
            if (p.y > 300) p.y = -300;
            if (p.y < -300) p.y = 300;

            // Apply 3D transform (No mouse interaction as requested)
            p.element.style.transform = `
                translate3d(${p.x}px, ${p.y}px, ${p.depth}px)
                rotateX(${p.rotX}deg)
                rotateY(${p.rotY}deg)
                rotateZ(${p.rotZ}deg)
            `;
        });

        requestAnimationFrame(() => this.animate());
    }
}

const particleSystem = new ParticleSystem();

// ── Controle de Brilho ────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    const brightnessSlider = document.getElementById('brightness-slider');

    if (brightnessSlider) {
        const container = document.getElementById('brightness-container');

        // Função para aplicar brilho e animar
        const updateBrightnessState = () => {
            const isDark = document.documentElement.classList.contains('dark');
            const val = brightnessSlider.value;
            
            // 1. Lógica do Filtro (Mantida)
            if (isDark) {
                document.documentElement.style.filter = 'none'; 
            } else {
                document.documentElement.style.filter = `brightness(${val}%)`;
            }

            // 2. Animação com Anime.js
            if(container && typeof anime !== 'undefined') {
                if (!isDark) {
                    // Expandir (Modo Dia)
                    anime({
                        targets: container,
                        width: '8rem', // Anima até 8rem a partir do valor atual (0)
                        opacity: 1,
                        paddingRight: '0.75rem',
                        duration: 800,
                        elasticity: 600,
                        easing: 'easeOutElastic(1, .5)'
                    });
                } else {
                    // Recolher (Modo Noite)
                    anime({
                        targets: container,
                        width: 0,
                        opacity: 0,
                        paddingRight: 0,
                        duration: 800,
                        easing: 'easeOutExpo' // Volta para Expo para evitar o glitch de "largura negativa"
                    });
                }
            }
        };

        // Carregar preferência salva
        const savedBrightness = localStorage.getItem('brightness') || '100';
        brightnessSlider.value = savedBrightness;
        
        // Inicialização
        setTimeout(updateBrightnessState, 50);

        // Evento de Slider
        brightnessSlider.addEventListener('input', (e) => {
            localStorage.setItem('brightness', e.target.value);
            // Apenas atualiza o filtro, não precisa reanimar
            const isDark = document.documentElement.classList.contains('dark');
            if (!isDark) document.documentElement.style.filter = `brightness(${e.target.value}%)`;
        });

        // Observar mudanças de classe para animar
        let lastTheme = document.documentElement.classList.contains('dark');
        const observer = new MutationObserver(() => {
            const currentTheme = document.documentElement.classList.contains('dark');
            if(currentTheme !== lastTheme) {
                lastTheme = currentTheme;
                updateBrightnessState();
            }
        });
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    }
});

// ── Auto-Hide Interface (Immersive Mode) ──────────────────────
document.addEventListener('DOMContentLoaded', () => {
    const uiControls = document.getElementById('main-ui-controls');
    let idleTimer;
    let isHovering = false; // Estado de Hover

    function resetIdleTimer() {
        if (!uiControls) return;

        // Se estivermos com o mouse em cima, não fazemos nada (mantém visível)
        if (isHovering) {
            uiControls.classList.remove('opacity-0', 'pointer-events-none');
            clearTimeout(idleTimer);
            return;
        }

        // Mostrar UI (Reset)
        uiControls.classList.remove('opacity-0', 'pointer-events-none');
        clearTimeout(idleTimer);

        // Se o sidebar estiver aberto, NÃO esconde
        if (sidebar && sidebar.classList.contains('open')) return;

        // Esconder após 3 segundos
        idleTimer = setTimeout(() => {
            // Verifica novamente hover antes de esconder
            if (!isHovering) {
                uiControls.classList.add('opacity-0', 'pointer-events-none');
            }
        }, 3000);
    }

    if (uiControls) {
        // Pausar timer ao passar o mouse nos botões
        uiControls.addEventListener('mouseenter', () => {
            isHovering = true;
            resetIdleTimer(); // Garante que fica visível
        });

        // Retomar timer ao tirar o mouse
        uiControls.addEventListener('mouseleave', () => {
            isHovering = false;
            resetIdleTimer();
        });
    }

    // Eventos que acordam a interface
    // REMOVIDO: 'click', 'mousedown', 'keydown' para que navegar não mostre os botões
    ['mousemove', 'touchstart', 'touchmove', 'scroll', 'resize'].forEach(evt => {
        window.addEventListener(evt, resetIdleTimer, { passive: true });
    });

    // Iniciar timer
    resetIdleTimer();
});

// Inicialização Global
window.addEventListener('load', () => {
    if(particleSystem) particleSystem.init();
    if(typeof initApp === 'function') initApp();
});

// Hook into initApp (Modify the end of initApp or calling location)
// Ideally, we run this after chapters are loaded. It's called in buildSidebar or main init loop.
// Since initApp loops chapters, let's inject a helper there or just run a global scanner after init.
// --- Metronome Logic ---
class Metronome {
    constructor() {
        this.audioCtx = null;
        this.nextNoteTime = 0.0;
        this.timerID = null;
        this.currentBeat = 0;
        this.tempo = 80;
        this.lookahead = 25.0;
        this.scheduleAheadTime = 0.1;
        this.currentPattern = null;
        this.isPlaying = false;
        this.activeButton = null;
    }

    init() {
        if (!this.audioCtx) {
            this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
    }

    nextNote() {
        const secondsPerBeat = 60.0 / this.tempo;
        // Lógica de avanço de tempo
        if (this.currentPattern === '6/8') {
            this.nextNoteTime += secondsPerBeat / 2; // Colcheias rápidas
        } else {
            this.nextNoteTime += secondsPerBeat;
        }

        this.currentBeat++;
        let maxBeats = 4;
        if (this.currentPattern === '2/4') maxBeats = 2;
        if (this.currentPattern === '3/4') maxBeats = 3;
        if (this.currentPattern === '4/4') maxBeats = 4;
        if (this.currentPattern === '6/8') maxBeats = 6;

        if (this.currentBeat >= maxBeats) {
            this.currentBeat = 0;
        }
    }

    scheduleNote(beatNumber, time) {
        const osc = this.audioCtx.createOscillator();
        const envelope = this.audioCtx.createGain();

        osc.type = 'sine';
        
        if (this.currentPattern === '6/8') {
            if (beatNumber === 0) osc.frequency.value = 1000;
            else if (beatNumber === 3) osc.frequency.value = 800;
            else osc.frequency.value = 400;
        } else {
            if (beatNumber === 0) osc.frequency.value = 1000;
            else osc.frequency.value = 500;
        }

        envelope.gain.value = 0.5; // Gain mais suave
        envelope.gain.exponentialRampToValueAtTime(0.001, time + 0.1);

        osc.connect(envelope);
        envelope.connect(this.audioCtx.destination);

        osc.start(time);
        osc.stop(time + 0.1);
    }

    scheduler() {
        while (this.nextNoteTime < this.audioCtx.currentTime + this.scheduleAheadTime) {
            this.scheduleNote(this.currentBeat, this.nextNoteTime);
            this.nextNote();
        }
        this.timerID = setTimeout(() => this.scheduler(), this.lookahead);
    }

    start(pattern, button) {
        this.init();
        if (this.audioCtx.state === 'suspended') {
            this.audioCtx.resume();
        }
        this.currentPattern = pattern;
        this.currentBeat = 0;
        this.nextNoteTime = this.audioCtx.currentTime;
        this.isPlaying = true;
        this.activeButton = button;
        this.activeButton.classList.add('is-playing');
        this.scheduler();
    }

    stop() {
        this.isPlaying = false;
        clearTimeout(this.timerID);
        if (this.activeButton) {
            this.activeButton.classList.remove('is-playing');
            this.activeButton = null;
        }
    }

    toggle(pattern, button) {
        if (this.isPlaying && this.currentPattern === pattern) {
            this.stop();
        } else {
            if (this.isPlaying) this.stop();
            this.start(pattern, button);
        }
    }
}

const metronome = new Metronome();

window.toggleMetronome = function(pattern, btn) {
    metronome.toggle(pattern, btn);
};
