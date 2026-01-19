const appConfig = {
    chapters: [
        { 
            file: 'chapters/00_mechanics.html', 
            title: 'Arquitetura Corporal',
            label: 'Capítulo 0', 
            icon: '<svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>'
        },
        { 
            file: 'chapters/01_intro.html', 
            title: 'A Física do Som',
            label: 'Capítulo 1', 
            icon: '<svg class="w-full h-full" viewBox="0 0 120 60" fill="currentColor"><rect x="10" y="5" width="18" height="50" rx="3" opacity="0.9"/><rect x="30" y="5" width="18" height="50" rx="3" opacity="0.9"/><rect x="50" y="5" width="18" height="50" rx="3" opacity="0.9"/></svg>'
        },
        { 
            file: 'chapters/02_piano.html', 
            title: 'Engenharia do Piano',
            label: 'Capítulo 2',
            icon: '<svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>'
        },
        { 
            file: 'chapters/03_notation.html', 
            title: 'Notação Musical',
            label: 'Capítulo 3',
            icon: '<svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4v16m8-8H4" /></svg>'
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
            icon: '<svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" /></svg>'
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
            icon: '<svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>'
        },
        { 
            file: 'chapters/08_technique.html', 
            title: 'O GPS Musical',
            label: 'Capítulo 8',
            icon: '<svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>'
        },
        { 
            file: 'chapters/09_bossanova.html', 
            title: 'Bossa Nova',
            label: 'Capítulo 9',
            icon: '<svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>'
        },
        { 
            file: 'chapters/10_improvisation.html', 
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
    
    // Inicia no primeiro slide
    go(0);
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
        
        details.appendChild(summary);

        // Container dos botões (Dropdown Content)
        const contentDiv = document.createElement('div');
        contentDiv.className = "mt-2 pl-2 space-y-1 overflow-hidden transition-all duration-300";

        // Cria os botões dos slides
        chapterSlides.forEach((item, index) => {
            const btn = document.createElement('button');
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
    
    // Atualiza estado ativo na sidebar
    const allBtns = sidebarNav.querySelectorAll('button[data-slide-idx]');
    allBtns.forEach(b => b.setAttribute('data-active', 'false'));
    const activeBtn = sidebarNav.querySelector(`button[data-slide-idx="${currentIdx}"]`);
    if(activeBtn) {
        activeBtn.setAttribute('data-active', 'true');
        const parentDetails = activeBtn.closest('details');
        if(parentDetails) parentDetails.open = true;
        // Opcional: scrollar sidebar para o item
        // activeBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
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
    
    if (isSidebarOpen) {
        sidebar.classList.add('open'); 
        overlay.classList.remove('opacity-0', 'pointer-events-none');
    } else {
        sidebar.classList.remove('open'); 
        overlay.classList.add('opacity-0', 'pointer-events-none');
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
