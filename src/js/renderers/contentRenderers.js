
/**
 * '게임 소개' 탭의 카드 목록을 생성합니다.
 * @param {Array} data - gameIntroData 배열
 * @returns {DocumentFragment} 생성된 카드들을 담은 DocumentFragment
 */
export function renderFeatureCards(data) {
    const fragment = document.createDocumentFragment();
    data.forEach(cardData => {
        const section = document.createElement('section');
        section.id = cardData.id;
        section.classList.add('feature-card');

        const h2 = document.createElement('h2');
        h2.setAttribute('data-ko', cardData.koTitle);
        h2.setAttribute('data-en', cardData.enTitle);
        h2.textContent = cardData.koTitle;

        const mediaAndDescriptionDiv = document.createElement('div');
        mediaAndDescriptionDiv.classList.add('media-and-description');

        if (cardData.image) {
            const img = document.createElement('img');
            img.src = cardData.image;
            img.alt = cardData.koTitle + ' 화면';
            mediaAndDescriptionDiv.appendChild(img);
        }

        const contentDiv = document.createElement('div');
        contentDiv.classList.add('content');
        const p = document.createElement('p');
        p.setAttribute('data-ko', cardData.koDescription);
        p.setAttribute('data-en', cardData.enDescription);
        p.innerHTML = cardData.koDescription;
        contentDiv.appendChild(p);
        mediaAndDescriptionDiv.appendChild(contentDiv);

        section.appendChild(h2);
        section.appendChild(mediaAndDescriptionDiv);
        
        // 원본 부모 ID를 저장합니다. (utils.js의 restoreAllCardsToOriginalParents 함수를 위해)
        section.dataset.originalParentId = 'game-intro-content';
        fragment.appendChild(section);
    });
    return fragment;
}

import { loadCss, getBasePath } from '../utils.js';

/**
 * '개발 일정' 탭의 타임라인을 생성하고, 각 카드에 맞는 컴포넌트를 동적으로 로드합니다.
 * @param {Array} data - timelineData 배열
 * @returns {HTMLElement} 타임라인 컨테이너 div
 */
export function renderTimeline(data) {
    const container = document.createElement('div');

    data.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('timeline-item');
        itemDiv.dataset.component = item.component; // 어떤 컴포넌트인지 식별자를 추가

        if (item.dotImage) {
            // CSS 파일(src/css)에서 이미지(public/assets)로의 상대 경로를 계산하여 전달
            itemDiv.style.setProperty('--dot-image', `url(../../${item.dotImage})`);
        }

        const contentDiv = document.createElement('div');
        contentDiv.classList.add('timeline-content');

        const dateSpan = document.createElement('span');
        dateSpan.classList.add('date');
        dateSpan.textContent = item.date;

        const titleH3 = document.createElement('h3');
        titleH3.textContent = item.title;

        if (item.mainImage) {
            const img = document.createElement('img');
            img.src = item.mainImage;
            img.alt = item.title;
            img.classList.add('timeline-main-image');
            contentDiv.appendChild(img);
        }

        const p = document.createElement('p');
        p.textContent = item.description;

        contentDiv.appendChild(dateSpan);
        contentDiv.appendChild(titleH3);
        contentDiv.appendChild(p);

        // Lore (설정 정보) 추가
        if (item.lore) {
            const loreContainer = document.createElement('div');
            loreContainer.classList.add('lore-container');

            const loreToggleBtn = document.createElement('button');
            loreToggleBtn.classList.add('lore-toggle-btn');
            loreToggleBtn.textContent = '설정 정보 보기';

            const loreContent = document.createElement('pre');
            loreContent.classList.add('lore-content');
            loreContent.textContent = item.lore;
            loreContent.style.display = 'none'; // 기본적으로 숨김

            loreContainer.appendChild(loreToggleBtn);
            loreContainer.appendChild(loreContent);
            contentDiv.appendChild(loreContainer);
        }

        itemDiv.appendChild(contentDiv);
        container.appendChild(itemDiv);

        // --- 동적 로딩 --- //
        if (item.component) {
            const componentName = item.component;
            const jsBasePath = `public/assets/js/components/timeline-cards/${componentName}/${componentName}`;
            const cssBasePath = `public/assets/css/components/timeline-cards/${componentName}/${componentName}`;

            // CSS 동적 로드
            loadCss(getBasePath() + cssBasePath + '.css');

            // JS 동적 로드
            import(getBasePath() + jsBasePath + '.js')
                .then(module => {
                    if (module.init) {
                        module.init(itemDiv); // 생성된 카드 요소를 초기화 함수에 전달
                    }
                })
                .catch(err => console.error(`Failed to load component JS for ${componentName}:`, err));
        }
    });

    return container;
}

/**
 * '이용 약관' 탭의 콘텐츠를 생성합니다.
 * @param {object} data - termsData 객체
 * @returns {DocumentFragment} 생성된 제목과 내용을 담은 DocumentFragment
 */
export function renderTerms(data) {
    const fragment = document.createDocumentFragment();
    const h2 = document.createElement('h2');
    h2.setAttribute('data-ko', data.koTitle);
    h2.setAttribute('data-en', data.enTitle);
    h2.textContent = data.koTitle;

    const pre = document.createElement('pre');
    pre.textContent = data.koDescription;

    fragment.appendChild(h2);
    fragment.appendChild(pre);
    return fragment;
}
