/**
 * LinaSilverrain 카드 컴포넌트 초기화
 * @param {HTMLElement} cardElement - 이 컴포넌트에 해당하는 카드 HTML 요소
 */
export function init(cardElement) {
    console.log('LinaSilverrain component initialized for:', cardElement);
    
    // 마우스 오버 효과
    cardElement.addEventListener('mouseenter', () => {
        cardElement.style.transform = 'scale(1.02)';
    });
    cardElement.addEventListener('mouseleave', () => {
        cardElement.style.transform = 'scale(1)';
    });

    // 설정 정보 토글 기능
    // DOM이 완전히 업데이트될 시간을 주기 위해 setTimeout 사용
    setTimeout(() => {
        console.log('Attempting to find lore elements within cardElement:', cardElement);
        console.log('cardElement innerHTML:', cardElement.innerHTML); // cardElement의 내부 HTML 확인

        const loreToggleBtn = cardElement.querySelector('.lore-toggle-btn');
        const loreContent = cardElement.querySelector('.lore-content');

        console.log('Found loreToggleBtn:', loreToggleBtn);
        console.log('Found loreContent:', loreContent);

        if (loreToggleBtn && loreContent) {
            loreToggleBtn.addEventListener('click', () => {
                if (loreContent.style.display === 'none') {
                    loreContent.style.display = 'block';
                    loreToggleBtn.textContent = '설정 정보 숨기기';
                } else {
                    loreContent.style.display = 'none';
                    loreToggleBtn.textContent = '설정 정보 보기';
                }
            });
            console.log('Lore toggle button event listener attached.');
        } else {
            console.warn('Lore toggle button or content not found for LinaSilverrain component.', { loreToggleBtn, loreContent });
        }
    }, 0);
}