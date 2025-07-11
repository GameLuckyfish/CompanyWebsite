import { contentData } from '../data/contentData.js';

/**
 * 주어진 데이터를 기반으로 feature-card HTML 요소를 생성합니다.
 * @param {object} cardData - feature-card를 생성하는 데 필요한 데이터 객체.
 * @returns {HTMLElement} 생성된 feature-card section 요소.
 */
function createFeatureCard(cardData) {
    console.log('createFeatureCard: Creating card for ID:', cardData.id);

    const section = document.createElement('section');
    section.id = cardData.id;
    section.classList.add('feature-card');

    const h2 = document.createElement('h2');
    h2.setAttribute('data-ko', cardData.koTitle);
    h2.setAttribute('data-en', cardData.enTitle);
    h2.textContent = cardData.koTitle; // 초기 언어는 한국어로 설정

    const mediaAndDescriptionDiv = document.createElement('div');
    mediaAndDescriptionDiv.classList.add('media-and-description');

    if (cardData.image) {
        const img = document.createElement('img');
        img.src = cardData.image;
        img.alt = cardData.koTitle + ' 화면'; // alt 텍스트도 동적으로 생성
        mediaAndDescriptionDiv.appendChild(img);
        console.log('createFeatureCard: Image added for', cardData.id, 'src:', img.src);
    } else {
        console.log('createFeatureCard: No image for', cardData.id);
    }

    const contentDiv = document.createElement('div');
    contentDiv.classList.add('content');

    // description에 HTML 태그가 포함될 수 있으므로 innerHTML 사용
    const p = document.createElement('p');
    p.setAttribute('data-ko', cardData.koDescription);
    p.setAttribute('data-en', cardData.enDescription);
    p.innerHTML = cardData.koDescription; // 초기 언어는 한국어로 설정

    contentDiv.appendChild(p);
    mediaAndDescriptionDiv.appendChild(contentDiv);
    section.appendChild(h2);
    section.appendChild(mediaAndDescriptionDiv);

    console.log('createFeatureCard: Successfully created card element for', cardData.id);
    return section;
}

/**
 * contentData에서 데이터를 로드하여 지정된 탭 콘텐츠 영역에 HTML 요소를 동적으로 삽입합니다.
 * @param {string} tabGroup - 로드할 탭 그룹 (예: 'game-intro', 'planning').
 */
export function loadContent(tabGroup) {
    console.log('loadContent: Attempting to load content for tabGroup:', tabGroup);

    const targetTabContentId = `${tabGroup}-content`;
    const targetTabContent = document.getElementById(targetTabContentId);

    if (!targetTabContent) {
        console.error('loadContent: Target tab content element not found:', targetTabContentId);
        return;
    }

    // 기존 콘텐츠가 있다면 비웁니다. (중복 로드 방지)
    if (targetTabContent.children.length > 0) {
        console.log('loadContent: Clearing existing content in', targetTabContentId);
        targetTabContent.innerHTML = '';
    }

    let dataToLoad = [];
    if (tabGroup === 'game-intro') {
        dataToLoad = contentData.gameIntro;
    } else if (tabGroup === 'planning') {
        dataToLoad = contentData.planning;
    } else if (tabGroup === 'terms') {
        // For terms tab, directly insert the content
        const termsCardData = contentData.terms;
        if (termsCardData) {
            const h2 = document.createElement('h2');
            h2.setAttribute('data-ko', termsCardData.koTitle);
            h2.setAttribute('data-en', termsCardData.enTitle);
            h2.textContent = termsCardData.koTitle;

            const pre = document.createElement('pre'); // <p>를 <pre>로 변경
            pre.setAttribute('data-ko', termsCardData.koDescription);
            pre.setAttribute('data-en', termsCardData.enDescription);
            pre.textContent = termsCardData.koDescription; // innerHTML 대신 textContent 사용

            targetTabContent.appendChild(h2);
            targetTabContent.appendChild(pre); // 변경된 pre 요소를 추가
            console.log('loadContent: Appended terms content to', targetTabContentId);
        } else {
            console.warn('loadContent: No terms data found.');
        }
        return; // Exit after handling terms tab
    } else {
        console.warn('loadContent: Unknown tabGroup provided:', tabGroup);
        return;
    }

    if (!dataToLoad || dataToLoad.length === 0) {
        console.warn('loadContent: No data found for tabGroup:', tabGroup);
        return;
    }

    dataToLoad.forEach(cardData => {
        const cardElement = createFeatureCard(cardData);
        targetTabContent.appendChild(cardElement);
        // 원본 부모 ID를 저장합니다. (utils.js의 restoreAllCardsToOriginalParents 함수를 위해)
        cardElement.dataset.originalParentId = targetTabContentId;
        console.log('loadContent: Appended card', cardData.id, 'to', targetTabContentId);
    });

    console.log('loadContent: Finished loading content for tabGroup:', tabGroup);
}