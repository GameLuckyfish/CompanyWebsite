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