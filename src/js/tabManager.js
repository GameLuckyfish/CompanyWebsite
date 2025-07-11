import { restoreAllCardsToOriginalParents, showCardInPanel, isMobileMode } from './utils.js';

export function switchTabGroup(tabGroup) {
    console.log('switchTabGroup called with:', tabGroup);
    const sidebar = document.getElementById('sidebar');
    const contentDisplay = document.getElementById('content-display');
    console.log('Sidebar element:', sidebar);
    console.log('Content Display element:', contentDisplay);
    const topTabButtons = document.querySelectorAll('.top-tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    topTabButtons.forEach(button => {
        button.classList.remove('active');
        if (button.dataset.tabGroup === tabGroup) {
            button.classList.add('active');
        }
    });

    tabContents.forEach(content => content.classList.remove('active'));
    const targetContentId = `${tabGroup}-content`;
    console.log('tabManager.js: Searching for element with ID:', targetContentId);
    const targetContent = document.getElementById(targetContentId);
    console.log('tabManager.js: Target Content element for', tabGroup, ':', targetContent);

    if (targetContent) {
        targetContent.classList.add('active');
        console.log('tabManager.js: Target Content classList after adding active:', targetContent.classList);
    }

    if (tabGroup === 'terms') {
        sidebar.style.display = 'none';
        console.log('Sidebar display set to none. Current style:', sidebar.style.display);
    } else {
        sidebar.style.display = '';
        console.log('Sidebar display reset. Current style:', sidebar.style.display);
    }
    
    // Only restore cards and hide feature-cards if not on the terms tab
    if (tabGroup !== 'terms') {
        restoreAllCardsToOriginalParents();
        document.querySelectorAll('.feature-card').forEach(card => card.style.display = 'none');
        document.querySelectorAll('.sidebar-button').forEach(btn => btn.classList.remove('active'));
    }

    // This part needs to be re-evaluated based on the mobile accordion logic
    // For now, it's kept as is, but might need adjustment after sidebarAccordion.js is created.
    if (!isMobileMode()) {
        const sidebarSection = document.getElementById(`${tabGroup}-buttons`);
        if (sidebarSection) {
            const firstSidebarButton = sidebarSection.querySelector('.sidebar-button');
            if (firstSidebarButton) {
                firstSidebarButton.classList.add('active');
                showCardInPanel(firstSidebarButton.dataset.target);
            }
        }
    }
}