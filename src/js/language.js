export function setLanguage(lang) {
    const langKoButton = document.getElementById('lang-ko');
    const langEnButton = document.getElementById('lang-en');
    const translatableElements = document.querySelectorAll('[data-ko]');
    const sidebarButtons = document.querySelectorAll('.sidebar-button');
    const topTabButtons = document.querySelectorAll('.top-tab-button');

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

    sidebarButtons.forEach(button => {
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
