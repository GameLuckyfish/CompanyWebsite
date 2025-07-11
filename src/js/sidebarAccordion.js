import { isMobileMode, showCardInPanel } from './utils.js';

export function setupSidebarAccordion() {
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
}