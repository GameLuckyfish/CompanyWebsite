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
    const loreToggleBtn = cardElement.querySelector('.lore-toggle-btn');
    const loreContent = cardElement.querySelector('.lore-content');

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
    }
}