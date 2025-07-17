
import { gameIntroData } from '../../data/gameIntroData.js';

/**
 * '게임 소개' 탭의 사이드바 버튼들을 동적으로 생성하고 초기화합니다.
 */
export function initializeGameIntroSidebar() {
    const buttonsContainer = document.getElementById('game-intro-buttons');
    if (!buttonsContainer) return;

    // 기존 버튼들을 모두 제거 (초기화 시 중복 방지)
    buttonsContainer.innerHTML = '';

    const fragment = document.createDocumentFragment();

    gameIntroData.forEach((cardData, index) => {
        const button = document.createElement('button');
        button.classList.add('sidebar-button');
        button.dataset.target = cardData.id;
        button.dataset.ko = cardData.koTitle;
        button.dataset.en = cardData.enTitle;
        button.textContent = cardData.koTitle; // 기본 언어는 한국어로 설정

        // 첫 번째 버튼에 'active' 클래스 추가
        if (index === 0) {
            button.classList.add('active');
        }

        fragment.appendChild(button);
    });

    buttonsContainer.appendChild(fragment);

    // 이벤트 위임을 사용하여 사이드바 버튼 클릭 처리
    buttonsContainer.addEventListener('click', (event) => {
        const button = event.target.closest('.sidebar-button');
        if (!button) return;

        // 모든 버튼에서 'active' 클래스 제거
        buttonsContainer.querySelectorAll('.sidebar-button').forEach(btn => {
            btn.classList.remove('active');
        });

        // 클릭된 버튼에 'active' 클래스 추가
        button.classList.add('active');

        // 해당 콘텐츠 섹션으로 스크롤
        const targetId = button.dataset.target;
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
}
