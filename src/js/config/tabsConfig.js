import { renderFeatureCards, renderTimeline, renderTerms } from '../renderers/contentRenderers.js';

export const tabsConfig = {
    'game-intro': {
        buttonTextKO: '게임 소개',
        buttonTextEN: 'Game Intro',
        hasSidebar: true,
        renderer: renderFeatureCards
    },
    'timeline': {
        buttonTextKO: '개발 일정',
        buttonTextEN: 'Development Roadmap',
        hasSidebar: false,
        renderer: renderTimeline
    },
    'terms': {
        buttonTextKO: '이용 약관',
        buttonTextEN: 'Terms of Service',
        hasSidebar: false,
        renderer: renderTerms
    }
};
