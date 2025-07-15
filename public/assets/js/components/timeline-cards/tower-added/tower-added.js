
export function init(cardElement) {
    const content = `
        <div class="tower-grid">
            <div class="tower-item">
                <img src="public/assets/images/structure/arrow_tower.png" alt="Arrow Tower">
                <p>화살탑</p>
                <span>단일 공격에 특화된 기본 타워입니다.</span>
            </div>
            <div class="tower-item">
                <img src="public/assets/images/structure/barricade_tower.png" alt="Barricade">
                <p>바리케이드</p>
                <span>적의 이동을 방해하는 견고한 장애물입니다.</span>
            </div>
            <div class="tower-item">
                <img src="public/assets/images/structure/flame_tower.png" alt="Flame Tower">
                <p>화염탑</p>
                <span>광역 화염 피해를 입히는 강력한 타워입니다.</span>
            </div>
            <div class="tower-item">
                <img src="public/assets/images/structure/spike_trap.png" alt="Spike Trap">
                <p>가시 함정</p>
                <span>지나가는 적에게 피해를 주는 치명적인 함정입니다.</span>
            </div>
        </div>
    `;
    cardElement.querySelector('.timeline-content').insertAdjacentHTML('beforeend', content);
}
