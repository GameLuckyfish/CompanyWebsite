import { restoreAllCardsToOriginalParents, showCardInPanel, isMobileMode } from './utils.js';
import { loadContent } from './contentLoader.js';
import { tabsConfig } from './config/tabsConfig.js'; // 설정 파일 가져오기

export function switchTabGroup(tabGroup) {
    console.log('switchTabGroup called with:', tabGroup);
    const sidebar = document.getElementById('sidebar');
    const topTabButtons = document.querySelectorAll('.top-tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    const config = tabsConfig[tabGroup];

    if (!config) {
        console.error('Invalid tabGroup provided:', tabGroup);
        return;
    }

    topTabButtons.forEach(button => {
        button.classList.toggle('active', button.dataset.tabGroup === tabGroup);
    });

    tabContents.forEach(content => {
        content.classList.toggle('active', content.id === `${tabGroup}-content`);
    });

    // 탭 전환 시 해당 탭의 콘텐츠를 다시 로드합니다.
    loadContent(tabGroup);

    // 설정 객체의 hasSidebar 속성을 기반으로 사이드바를 제어합니다.
    sidebar.style.display = config.hasSidebar ? '' : 'none';
    console.log(`Sidebar display set to: ${sidebar.style.display || 'block'}`);

    // 사이드바가 없는 탭으로 전환 시, 기존 카드들을 원래 위치로 복원합니다.
    if (!config.hasSidebar) {
        restoreAllCardsToOriginalParents();
    }

    // 데스크탑 모드이고 사이드바가 있는 탭일 경우, 올바른 카드를 표시합니다.
    if (!isMobileMode() && config.hasSidebar) {
        const sidebarSection = document.getElementById(`${tabGroup}-buttons`);
        if (sidebarSection) {
            let activeButton = sidebarSection.querySelector('.sidebar-button.active');
            
            // 활성화된 버튼이 없으면 첫 번째 버튼을 기본값으로 설정합니다.
            if (!activeButton) {
                activeButton = sidebarSection.querySelector('.sidebar-button');
                if (activeButton) {
                    activeButton.classList.add('active');
                }
            }

            // 활성화된 버튼에 해당하는 카드를 표시합니다.
            if (activeButton) {
                showCardInPanel(activeButton.dataset.target);
            }
        }
    }
}