import { setLanguage } from './language.js';
import { switchTabGroup } from './tabManager.js';
import { setupSidebarAccordion } from './sidebarAccordion.js';
import { loadContent } from './contentLoader.js';
import { tabsConfig } from './config/tabsConfig.js';
import { initializeGameIntroSidebar } from './ui/sidebar.js'; // 사이드바 초기화 함수 임포트

/**
 * 설정 파일(tabsConfig)을 기반으로 탭 버튼을 동적으로 생성합니다.
 */
function createTabButtons() {
    const container = document.querySelector('.top-tab-container');
    container.innerHTML = ''; // 기존 버튼 삭제

    Object.keys(tabsConfig).forEach((tabId, index) => {
        const config = tabsConfig[tabId];
        const button = document.createElement('button');
        button.classList.add('top-tab-button');
        if (index === 0) {
            button.classList.add('active'); // 첫 번째 탭을 기본 활성 탭으로 설정
        }
        button.dataset.tabGroup = tabId;
        button.dataset.ko = config.buttonTextKO;
        button.dataset.en = config.buttonTextEN;
        button.textContent = config.buttonTextKO; // 기본 언어는 한국어로 설정
        
        button.addEventListener('click', () => switchTabGroup(tabId));
        container.appendChild(button);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // --- DOM 생성 및 초기화 ---
    createTabButtons();
    initializeGameIntroSidebar(); // 게임 소개 사이드바 버튼 생성
    setupSidebarAccordion();

    // --- 이벤트 리스너 설정 ---
    document.getElementById('lang-ko').addEventListener('click', () => setLanguage('ko'));
    document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));

    window.addEventListener('resize', () => {
        // 현재 활성화된 탭 그룹을 찾아서 유지합니다.
        const activeTab = document.querySelector('.top-tab-button.active');
        const activeTabGroup = activeTab ? activeTab.dataset.tabGroup : Object.keys(tabsConfig)[0];
        switchTabGroup(activeTabGroup);
    });

    // --- 초기 콘텐츠 로드 및 상태 설정 ---
    // 설정 파일에 있는 모든 탭의 콘텐츠를 미리 로드합니다.
    Object.keys(tabsConfig).forEach(tabId => {
        loadContent(tabId);
    });

    const initialLang = navigator.language.startsWith('ko') ? 'ko' : 'en';
    setLanguage(initialLang);

    // 첫 번째 탭을 기본으로 활성화합니다.
    const firstTabId = Object.keys(tabsConfig)[0];
    switchTabGroup(firstTabId);

    console.log('Application initialized based on tabsConfig.');
});
