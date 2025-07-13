export function restoreAllCardsToOriginalParents() {
    document.querySelectorAll('.feature-card').forEach(card => {
        const parentId = card.dataset.originalParentId;
        if (parentId) {
            const originalParent = document.getElementById(parentId);
            if (originalParent && card.parentElement !== originalParent) {
                originalParent.appendChild(card);
            }
        }
    });
}

export function showCardInPanel(cardId) {
    const currentActiveTabContent = document.querySelector('.tab-content.active');
    if (currentActiveTabContent) {
        currentActiveTabContent.querySelectorAll('.feature-card').forEach(card => {
            card.style.display = 'none';
        });
        const activeCard = currentActiveTabContent.querySelector(`#${cardId}`);
        if (activeCard) {
            activeCard.style.display = 'block';
        }
    }
}

export function isMobileMode() {
    return window.matchMedia("(max-width: 900px)").matches;
}

/**
 * 지정된 경로의 CSS 파일을 동적으로 로드합니다. 이미 로드된 경우 중복 추가하지 않습니다.
 * @param {string} path - 로드할 CSS 파일의 경로
 */
export function loadCss(path) {
    if (!document.querySelector(`link[href="${path}"]`)) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = path;
        document.head.appendChild(link);
        console.log(`CSS loaded: ${path}`);
    }
}

/**
 * 현재 웹 애플리케이션의 기본 경로를 반환합니다.
 * GitHub Pages와 같은 서브디렉토리 호스팅 환경을 고려합니다.
 * @returns {string} 기본 경로 (예: '/' 또는 '/HordeDefenseSquad/')
 */
export function getBasePath() {
    const path = window.location.pathname;
    // GitHub Pages와 같이 저장소 이름이 경로에 포함되는 경우를 처리
    // 예: /HordeDefenseSquad/index.html -> /HordeDefenseSquad/
    // 로컬: /index.html -> /
    const base = path.substring(0, path.lastIndexOf('/') + 1);
    return base;
}