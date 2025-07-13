import { contentData } from '../data/contentData.js';

function createFeatureCard(cardData) {
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
    return section;
}

function createTimeline(timelineData) {
    const container = document.createElement('div');
    timelineData.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('timeline-item');

        const contentDiv = document.createElement('div');
        contentDiv.classList.add('timeline-content');

        const dateSpan = document.createElement('span');
        dateSpan.classList.add('date');
        dateSpan.textContent = item.date;

        const titleH3 = document.createElement('h3');
        titleH3.textContent = item.title;

        const p = document.createElement('p');
        p.textContent = item.description;

        contentDiv.appendChild(dateSpan);
        contentDiv.appendChild(titleH3);
        contentDiv.appendChild(p);
        itemDiv.appendChild(contentDiv);
        container.appendChild(itemDiv);
    });
    return container;
}

export function loadContent(tabGroup) {
    const targetTabContentId = `${tabGroup}-content`;
    const targetTabContent = document.getElementById(targetTabContentId);
    if (!targetTabContent) return;

    if (targetTabContent.children.length > 0) {
        targetTabContent.innerHTML = '';
    }

    const dataToLoad = contentData[tabGroup];
    if (!dataToLoad) return;

    if (tabGroup === 'game-intro') {
        dataToLoad.forEach(cardData => {
            const cardElement = createFeatureCard(cardData);
            targetTabContent.appendChild(cardElement);
            cardElement.dataset.originalParentId = targetTabContentId;
        });
    } else if (tabGroup === 'terms') {
        const h2 = document.createElement('h2');
        h2.setAttribute('data-ko', dataToLoad.koTitle);
        h2.setAttribute('data-en', dataToLoad.enTitle);
        h2.textContent = dataToLoad.koTitle;
        const pre = document.createElement('pre');
        pre.textContent = dataToLoad.koDescription;
        targetTabContent.appendChild(h2);
        targetTabContent.appendChild(pre);
    } else if (tabGroup === 'timeline') {
        const timelineElement = createTimeline(dataToLoad);
        targetTabContent.appendChild(timelineElement);
    }
}
