import { contentData } from '../data/contentData.js';
import { tabsConfig } from './config/tabsConfig.js';

/**
 * 주어진 탭 그룹에 해당하는 콘텐츠를 동적으로 로드하고 렌더링합니다.
 * @param {string} tabGroup - 로드할 탭 그룹 (예: 'game-intro').
 */
export function loadContent(tabGroup) {
    const targetTabContentId = `${tabGroup}-content`;
    const targetTabContent = document.getElementById(targetTabContentId);
    const config = tabsConfig[tabGroup];
    const data = contentData[tabGroup];

    if (!targetTabContent || !config || !data) {
        console.error(`Content loading failed for tabGroup: ${tabGroup}`);
        return;
    }

    // 기존 콘텐츠가 있다면 비웁니다.
    if (targetTabContent.children.length > 0) {
        targetTabContent.innerHTML = '';
    }

    // 설정 파일에 정의된 렌더러 함수를 사용하여 콘텐츠를 생성하고 삽입합니다.
    const contentElement = config.renderer(data);
    targetTabContent.appendChild(contentElement);

    console.log(`Content for '${tabGroup}' loaded and rendered successfully.`);
}