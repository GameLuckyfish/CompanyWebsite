document.addEventListener('DOMContentLoaded', () => {
    const langKoButton = document.getElementById('lang-ko');
    const langEnButton = document.getElementById('lang-en');
    const translatableElements = document.querySelectorAll('[data-ko]');

    const topTabButtons = document.querySelectorAll('.top-tab-button');
    const sidebarSections = document.querySelectorAll('.sidebar-section');
    const tabContents = document.querySelectorAll('.tab-content');

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

        document.querySelectorAll('.sidebar-button').forEach(button => {
            const buttonText = button.getAttribute(`data-${lang}`);
            if (buttonText) {
                button.textContent = buttonText;
            }
        });

        topTabButtons.forEach(button => {
            const buttonText = button.getAttribute(`data-${lang}`);
            if (buttonText) {
                button.textContent = buttonText;
            }
        });
    }

    function showCard(cardId) {
        const currentActiveTabContent = document.querySelector('.tab-content.active');
        if (currentActiveTabContent) {
            currentActiveTabContent.querySelectorAll('.feature-card').forEach(card => {
                card.style.display = 'none'; // Directly hide
            });

            const activeCard = currentActiveTabContent.querySelector(`#${cardId}`);
            if (activeCard) {
                activeCard.style.display = 'block'; // Directly show
            }
        }
    }

    function switchTabGroup(tabGroup) {
        topTabButtons.forEach(button => button.classList.remove('active'));
        document.querySelector(`.top-tab-button[data-tab-group="${tabGroup}"]`).classList.add('active');

        tabContents.forEach(content => content.classList.remove('active'));
        document.getElementById(`${tabGroup}-content`).classList.add('active');

        sidebarSections.forEach(section => section.classList.remove('active'));
        document.getElementById(`${tabGroup}-buttons`).classList.add('active');

        const firstSidebarButton = document.querySelector(`#${tabGroup}-buttons .sidebar-button`);
        if (firstSidebarButton) {
            firstSidebarButton.click();
        }
    }

    document.querySelectorAll('.sidebar-button').forEach(button => {
        button.addEventListener('click', () => {
            const currentActiveSidebarSection = document.querySelector('.sidebar-section.active');
            if (currentActiveSidebarSection) {
                currentActiveSidebarSection.querySelectorAll('.sidebar-button').forEach(btn => btn.classList.remove('active'));
            }
            button.classList.add('active');
            showCard(button.dataset.target);
        });
    });

    topTabButtons.forEach(button => {
        button.addEventListener('click', () => {
            switchTabGroup(button.dataset.tabGroup);
        });
    });

    langKoButton.addEventListener('click', () => setLanguage('ko'));
    langEnButton.addEventListener('click', () => setLanguage('en'));

    const initialLang = navigator.language.startsWith('ko') ? 'ko' : 'en';
    setLanguage(initialLang);

    switchTabGroup('game-intro');
});