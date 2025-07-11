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
