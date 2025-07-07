document.addEventListener('DOMContentLoaded', () => {
    // --- Basic selectors ---
    const langKoButton = document.getElementById('lang-ko');
    const langEnButton = document.getElementById('lang-en');
    const translatableElements = document.querySelectorAll('[data-ko]');
    const topTabButtons = document.querySelectorAll('.top-tab-button');
    const sidebarSections = document.querySelectorAll('.sidebar-section');
    const tabContents = document.querySelectorAll('.tab-content');

    // --- State and Helpers ---
    const isMobileMode = () => window.matchMedia("(max-width: 900px)").matches;

    // Store original container for each card to handle resizing
    document.querySelectorAll('.feature-card').forEach(card => {
        if (card.parentElement) {
            card.dataset.originalParentId = card.parentElement.id;
        }
    });

    // --- Core Functions ---

    function setLanguage(lang) {
        translatableElements.forEach(element => {
            const text = element.getAttribute(`data-${lang}`);
            if (text) {
                if (element.tagName === 'TITLE') {
                    document.title = text;
                }
                element.textContent = text;
            }
        });

        if (lang === 'ko') {
            langKoButton.classList.add('active');
            langEnButton.classList.remove('active');
        } else {
            langEnButton.classList.add('active');
            langKoButton.classList.remove('active');
        }

        document.querySelectorAll('.sidebar-button, .top-tab-button').forEach(button => {
            const buttonText = button.getAttribute(`data-${lang}`);
            if (buttonText) {
                button.textContent = buttonText;
            }
        });
    }

    // This function is for DESKTOP/PORTRAIT mode only
    function showCardInPanel(cardId) {
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
    
    function restoreAllCardsToOriginalParents() {
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

    function switchTabGroup(tabGroup) {
        topTabButtons.forEach(button => button.classList.remove('active'));
        document.querySelector(`.top-tab-button[data-tab-group="${tabGroup}"]`).classList.add('active');

        tabContents.forEach(content => content.classList.remove('active'));
        document.getElementById(`${tabGroup}-content`).classList.add('active');

        sidebarSections.forEach(section => section.classList.remove('active'));
        document.getElementById(`${tabGroup}-buttons`).classList.add('active');
        
        restoreAllCardsToOriginalParents();
        document.querySelectorAll('.feature-card').forEach(card => card.style.display = 'none');
        document.querySelectorAll('.sidebar-button').forEach(btn => btn.classList.remove('active'));

        if (!isMobileMode()) {
            const firstSidebarButton = document.querySelector(`#${tabGroup}-buttons .sidebar-button`);
            if (firstSidebarButton) {
                firstSidebarButton.classList.add('active');
                showCardInPanel(firstSidebarButton.dataset.target);
            }
        }
    }

    // --- Event Listeners ---

    document.querySelectorAll('.sidebar-button').forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.dataset.target;
            const card = document.getElementById(targetId);
            if (!card) return;

            if (isMobileMode()) {
                // --- Accordion Logic (Landscape) ---
                const isAlreadyActive = button.classList.contains('active');
                const currentSection = button.closest('.sidebar-section');
                const activeSiblingButton = currentSection.querySelector('.sidebar-button.active');

                if (activeSiblingButton && activeSiblingButton !== button) {
                    const activeSiblingCard = document.getElementById(activeSiblingButton.dataset.target);
                    activeSiblingButton.classList.remove('active');
                    if (activeSiblingCard) {
                        activeSiblingCard.style.display = 'none';
                        document.getElementById(activeSiblingCard.dataset.originalParentId).appendChild(activeSiblingCard);
                    }
                }

                if (isAlreadyActive) {
                    button.classList.remove('active');
                    card.style.display = 'none';
                    document.getElementById(card.dataset.originalParentId).appendChild(card);
                } else {
                    button.classList.add('active');
                    button.insertAdjacentElement('afterend', card);
                    card.style.display = 'block';
                }
            } else {
                // --- Panel Logic (Desktop/Portrait) ---
                button.closest('.sidebar-section').querySelectorAll('.sidebar-button').forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                showCardInPanel(targetId);
            }
        });
    });

    topTabButtons.forEach(button => {
        button.addEventListener('click', () => switchTabGroup(button.dataset.tabGroup));
    });

    langKoButton.addEventListener('click', () => setLanguage('ko'));
    langEnButton.addEventListener('click', () => setLanguage('en'));

    window.addEventListener('resize', () => {
        const activeTabGroup = document.querySelector('.top-tab-button.active')?.dataset.tabGroup || 'game-intro';
        switchTabGroup(activeTabGroup);
    });

    // --- Initialisation ---
    const initialLang = navigator.language.startsWith('ko') ? 'ko' : 'en';
    setLanguage(initialLang);
    switchTabGroup('game-intro');
});
