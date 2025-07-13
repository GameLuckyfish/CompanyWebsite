import { setLanguage } from './language.js';
import { switchTabGroup } from './tabManager.js';
import { setupSidebarAccordion } from './sidebarAccordion.js';
import { loadContent } from './contentLoader.js'; // 새로 추가

document.addEventListener('DOMContentLoaded', () => {
    // --- Basic selectors ---
    const langKoButton = document.getElementById('lang-ko');
    const langEnButton = document.getElementById('lang-en');
    const topTabButtons = document.querySelectorAll('.top-tab-button');
    console.log('main.js: topTabButtons on DOMContentLoaded:', topTabButtons); // 로그 유지

    // --- Event Listeners ---
    setupSidebarAccordion();

    topTabButtons.forEach(button => {
        console.log('main.js: Attaching event listener to topTabButton:', button.dataset.tabGroup); // 로그 유지
        button.addEventListener('click', () => switchTabGroup(button.dataset.tabGroup));
    });

    langKoButton.addEventListener('click', () => setLanguage('ko'));
    langEnButton.addEventListener('click', () => setLanguage('en'));

    window.addEventListener('resize', () => {
        const activeTabGroup = document.querySelector('.top-tab-button.active')?.dataset.tabGroup || 'game-intro';
        switchTabGroup(activeTabGroup);
    });

    // --- Initialisation ---
    // 콘텐츠를 먼저 로드합니다.
    
    loadContent('game-intro');
    loadContent('timeline');
    loadContent('terms');
    

    const initialLang = navigator.language.startsWith('ko') ? 'ko' : 'en';
    setLanguage(initialLang);
    switchTabGroup('game-intro');
    console.log('main.js: Initial setup complete.'); // 로그 추가
});