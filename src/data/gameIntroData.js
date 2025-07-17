export const gameIntroData = [
    {
        id: "title-card",
        koTitle: "게임 소개",
        enTitle: "Game Intro",
        image: "public/assets/images/타이틀.png",
        koDescription: `쏟아지는 적들로부터 여신상을 지켜내세요! 다양한 유닛을 조합하고 성장시켜, 끊임없이 몰려오는 적들을 막아내는 짜릿한 디펜스 게임! 당신의 모든 선택이 승패를 결정합니다. 지금 바로 지휘관이 되어 부대를 이끌어보세요!`,
        enDescription: `This is the majestic title screen of Horde Defense Squad, marking the beginning of your adventure. Players can start a new game, load existing data, adjust game settings, and take their first steps into the world.`
    },
    {
        id: "lobby-card",
        koTitle: "메인 로비",
        enTitle: "Main Lobby",
        image: "public/assets/images/로비.PNG",
        koDescription: `모든 모험이 시작되는 당신의 아지트, 메인 로비입니다! 이곳에서 게임의 핵심 기능들을 한눈에 확인하고 바로 이동할 수 있습니다.`,
        enDescription: `The main lobby screen is your hub for adventure! From here, you can get an overview of the game's core features and jump right into the action.`,
        subItems: [
            {
                id: "ranking-card",
                koTitle: "랭킹",
                enTitle: "Ranking",
                image: "public/assets/images/랭킹.PNG",
                koDescription: `전 세계 플레이어들과 실력을 겨루고 당신의 위대한 전략을 뽐내보세요!`,
                enDescription: `Compete with players worldwide and show off your grand strategy!`
            },
            {
                id: "shop-card",
                koTitle: "상점",
                enTitle: "Shop",
                image: "public/assets/images/상점.PNG",
                koDescription: `강력한 유닛과 희귀 아이템으로 당신의 부대를 한층 더 업그레이드하세요.`,
                enDescription: `Upgrade your army further with powerful units and rare items.`
            },
            {
                id: "trait-card",
                koTitle: "특성",
                enTitle: "Traits",
                image: "public/assets/images/특성.PNG",
                koDescription: `개성 넘치는 패시브 능력들을 조합하여 당신만의 전투 스타일을 완성하세요.`,
                enDescription: `Create your own combat style by combining unique passive abilities.`
            },
            {
                id: "inventory-card",
                koTitle: "인벤토리",
                enTitle: "Inventory",
                image: "public/assets/images/인벤토리.PNG",
                koDescription: `수집한 모든 보물들을 확인하고 다음 전투를 위한 최고의 조합을 찾아보세요.`,
                enDescription: `Check all your collected treasures and find the best combination for the next battle.`
            },
            {
                id: "mailbox-card",
                koTitle: "우편함",
                enTitle: "Mailbox",
                image: "public/assets/images/우편함.PNG",
                koDescription: `이벤트 보상과 선물을 놓치지 마세요! 우편함을 확인하는 즐거움!`,
                enDescription: `Don't miss out on event rewards and gifts! Enjoy checking your mailbox!`
            },
            {
                id: "random-draw-card",
                koTitle: "랜덤 뽑기",
                enTitle: "Random Draw",
                image: "public/assets/images/랜덤뽑기.PNG",
                koDescription: `두근두근! 강력한 유닛과 장비를 얻을 행운의 기회!`,
                enDescription: `Exciting! A chance to get powerful units and equipment!`
            }
        ]
    },
    {
        id: "unit-card",
        koTitle: "유닛",
        enTitle: "Units",
        image: "public/assets/images/유닛.PNG",
        koDescription: `전장을 누빌 당신의 든든한 아군, 바로 유닛입니다! 평범하지만 강력한 일반 유닛부터 모두가 꿈꾸는 전설의 영웅까지! 각기 다른 개성을 가진 유닛들을 모아 최강의 팀을 만들어보세요.`,
        enDescription: `The core strength of Horde Defense Squad, units are divided into 5 grades: Common, Uncommon, Rare, Epic, and Legendary. Each unit has unique abilities and roles, allowing you to devise various strategies by combining them.`
    },
    {
        id: "ticket-draw-card",
        koTitle: "티켓 뽑기",
        enTitle: "Ticket Draw",
        image: "public/assets/images/티켓뽑기.PNG",
        koDescription: `원하는 등급의 유닛을 얻을 절호의 찬스! 특별한 티켓을 사용해 당신의 부대에 꼭 필요한 유닛을 소환하세요. 여러 후보 중 마음에 쏙 드는 유닛을 직접 고르는 재미까지!`,
        enDescription: `Use various types of tickets, such as Boss Tickets, Low/Mid/High-Grade Tickets, to summon random units within a specific grade range. Choose one from several candidate units to add to your army.`
    },
    {
        id: "unit-board-grade-card",
        koTitle: "유닛 현황판 (등급별)",
        enTitle: "Unit Board (by Grade)",
        image: "public/assets/images/전투기본-등급.PNG",
        koDescription: `나의 부대를 한눈에! 등급별로 쫙 정렬된 유닛들을 보며 다음 전투의 필승 전략을 구상해보세요. 누가누가 있는지 쉽게 파악하고 최고의 팀을 꾸릴 수 있습니다.`,
        enDescription: `This board allows you to view all your owned units neatly sorted by grade at a glance. It helps you efficiently manage your forces and plan strategies for the next battle.`
    },
    {
        id: "unit-board-class-card",
        koTitle: "유닛 현황판 (클래스별)",
        enTitle: "Unit Board (by Class)",
        image: "public/assets/images/전투기본-클래스.PNG",
        koDescription: `보유한 유닛들을 클래스(직업)별로 분류하여 보여주는 현황판입니다. 각 클래스의 특성을 고려한 조합과 시너지를 구상할 때 매우 유용하며, 전략적인 팀 구성을 돕습니다. 아래에서 각 직업별 특징을 확인해보세요!`,
        enDescription: `This board displays your units categorized by class (job). It is very useful for planning combinations and synergies considering the characteristics of each class, and helps in strategic team composition. Check out the features of each class below!`,
        subItems: [
            {
                id: "archer-class",
                koTitle: "궁수",
                enTitle: "Archer",
                image: "public/assets/images/icon/Type_Archer.png",
                koDescription: "원거리에서 적을 제압하는 명사수입니다. 높은 공격력으로 적의 후방을 노립니다.",
                enDescription: "A sharpshooter who suppresses enemies from a distance. Targets the enemy's rear with high attack power."
            },
            {
                id: "attack-class",
                koTitle: "공격",
                enTitle: "Attack",
                image: "public/assets/images/icon/Type_Attack.png",
                koDescription: "최전선에서 강력한 공격으로 적을 섬멸하는 돌격대장입니다. 압도적인 화력을 자랑합니다.",
                enDescription: "A vanguard who annihilates enemies with powerful attacks on the front lines. Boasts overwhelming firepower."
            },
            {
                id: "defence-class",
                koTitle: "방어",
                enTitle: "Defence",
                image: "public/assets/images/icon/Type_Defence.png",
                koDescription: "아군을 보호하고 적의 공격을 막아내는 든든한 방패입니다. 높은 체력과 방어력을 가집니다.",
                enDescription: "A sturdy shield that protects allies and blocks enemy attacks. Has high health and defense."
            },
            {
                id: "healer-class",
                koTitle: "회복",
                enTitle: "Healer",
                image: "public/assets/images/icon/Type_Healer.png",
                koDescription: "아군의 체력을 회복시키고 전투를 지원하는 생명의 수호자입니다. 전장의 유지력을 높입니다.",
                enDescription: "A guardian of life who restores allies' health and supports combat. Increases battlefield sustainability."
            },
            {
                id: "wizard-class",
                koTitle: "마법사",
                enTitle: "Wizard",
                image: "public/assets/images/icon/Type_Wizard.png",
                koDescription: "광범위한 마법 공격으로 다수의 적을 무력화시키는 현자입니다. 강력한 군중 제어 능력을 가집니다.",
                enDescription: "A sage who neutralizes multiple enemies with wide-ranging magic attacks. Possesses powerful crowd control abilities."
            }
        ]
    },
    {
        id: "goddess-statue-card",
        koTitle: "여신상",
        enTitle: "Goddess Statue",
        image: "public/assets/images/여신상 정보창 + 경고 팝업.PNG",
        koDescription: `우리가 반드시 지켜야 할 단 하나의 목표, 바로 여신상입니다! 여신상이 무너지면 모든 것이 끝나요. 여신상 강화를 통해 방어력을 높이거나, 유닛 합성을 통해 강력한 부대를 구축하세요.`,
        enDescription: `The Goddess Statue is the core objective that players must protect with all their might. If the statue's HP reaches 0, the game is lost. Strengthen the statue to increase its defense, or utilize convenient features like automatic unit merging to build an efficient defense.`,
        subItems: [
            {
                id: "goddess-hp-upgrade",
                koTitle: "여신상 HP 강화",
                enTitle: "Goddess HP Upgrade",
                image: "public/assets/images/icon/Type_Hp.png",
                koDescription: "여신상의 최대 HP를 영구적으로 증가시켜 더욱 튼튼하게 만듭니다. 적의 공격으로부터 여신상을 오래 지켜낼 수 있습니다.",
                enDescription: "Permanently increases the Goddess Statue's maximum HP, making it more robust. Allows you to protect the statue longer from enemy attacks."
            },
            {
                id: "unit-synthesis",
                koTitle: "유닛 합성",
                enTitle: "Unit Synthesis",
                image: "public/assets/images/icon/Type_Summon.png",
                koDescription: "같은 등급의 유닛들을 합성하여 더 높은 등급의 강력한 유닛을 생성합니다. 전략적인 합성을 통해 부대의 전력을 극대화하세요.",
                enDescription: "Synthesize units of the same grade to create more powerful units of a higher grade. Maximize your army's power through strategic synthesis."
            }
        ]
    },
    {
        id: "unit-info-card",
        koTitle: "유닛 정보",
        enTitle: "Unit Information",
        image: "public/assets/images/유닛정보창.PNG",
        koDescription: `내 유닛, 얼마나 강할까? 유닛 정보창에서 능력치와 스킬을 꼼꼼히 확인하고, 더 강력하게 성장시켜 보세요. 합성부터 공격 명령까지, 모든 컨트롤이 당신의 손에 달려있습니다.`,
        enDescription: `This screen provides a comprehensive view of a selected unit's detailed stats, skill information, and growth status. From here, you can efficiently manage your units and command battles through various interactions such as unit merging, attack commands, and movement orders.`
    },
    {
        id: "multi-unit-select-card",
        koTitle: "다중 유닛 선택",
        enTitle: "Multi-Unit Selection",
        image: "public/assets/images/다중유닛 정보창.PNG",
        koDescription: `일일이 컨트롤하기 힘들었죠? 이제 여러 유닛을 한 번에 선택해 부대를 지휘하세요! 모두 함께 같은 목표를 향해 움직이는 모습은 정말 든든할 거예요. 복잡한 전투도 문제없어요!`,
        enDescription: `This feature allows you to select and control multiple units simultaneously as a group. Selected units will execute the same command, enabling strategic squad-based movements. Achieve victory through efficient unit management even in complex battlefields.`
    },
    {
        id: "skill-card",
        koTitle: "스킬",
        enTitle: "Skills",
        image: "public/assets/images/스킬.PNG",
        koDescription: `전세가 불리하다면? 강력한 스킬 한 방으로 역전의 기회를! 적들을 한 번에 쓸어버리거나, 아군을 엄청나게 강하게 만드는 마법 같은 순간! 짜릿한 승리를 경험해보세요.`,
        enDescription: `These powerful magic skills can change the tide of battle. Strategically utilize skills with various effects, such as area-of-effect skills that instantly defeat all enemies by consuming spellbooks, or buff skills that significantly enhance allied units' attack power for a certain period, to overcome crises and achieve victory.`
    },
    {
        id: "in-game-upgrade-card",
        koTitle: "인게임 강화",
        enTitle: "In-Game Upgrades",
        image: "public/assets/images/강화.PNG",
        koDescription: `전투 중에도 당신의 유닛들을 더욱 강력하게 만들 수 있습니다! 골드를 소모하여 공격력, 방어력, 체력을 영구적으로 강화하고, 다음 전투를 위한 든든한 기반을 다지세요.`,
        enDescription: `You can make your units even stronger during battle! Spend gold to permanently upgrade attack, defense, and health, laying a solid foundation for your next battle.`,
        subItems: [
            {
                id: "attack-upgrade",
                koTitle: "공격력 강화",
                enTitle: "Attack Upgrade",
                image: "public/assets/images/icon/Type_Attack.png",
                koDescription: "모든 유닛의 공격력을 증가시켜 적을 더 빠르게 처치합니다.",
                enDescription: "Increases the attack power of all units to defeat enemies faster."
            },
            {
                id: "defence-upgrade",
                koTitle: "방어력 강화",
                enTitle: "Defence Upgrade",
                image: "public/assets/images/icon/Type_Defence.png",
                koDescription: "모든 유닛의 방어력을 증가시켜 받는 피해를 줄입니다.",
                enDescription: "Increases the defense of all units to reduce incoming damage."
            },
            {
                id: "hp-upgrade",
                koTitle: "체력 강화",
                enTitle: "HP Upgrade",
                image: "public/assets/images/icon/Type_Hp.png",
                koDescription: "모든 유닛의 최대 체력을 증가시켜 생존력을 높입니다.",
                enDescription: "Increases the maximum health of all units to improve survivability."
            }
        ]
    },
    {
        id: "random-event-card",
        koTitle: "랜덤 이벤트",
        enTitle: "Random Events",
        image: "public/assets/images/랜덤이벤트.PNG",
        koDescription: `예측불허! 게임 중에 어떤 일이 일어날지 몰라요! 천사의 축복으로 강해지거나, 악마의 장난에 빠질 수도? 깜짝 등장하는 상점에서 특별한 아이템을 만나는 행운도 놓치지 마세요!`,
        enDescription: `These are intriguing events that occur randomly during gameplay. They can provide positive effects like an angel's blessing or a devil's curse. Sometimes, a random shop selling special items may appear, offering unexpected opportunities.`
    },
    {
        id: "boss-card",
        koTitle: "보스",
        enTitle: "Boss",
        image: "public/assets/images/보스.PNG",
        koDescription: `두둥! 스테이지의 끝판왕, 거대한 보스가 등장했습니다! 제한 시간 안에 모든 힘을 쏟아부어 물리쳐야 해요. 엄청난 보상이 걸린 이 전투, 승리할 준비 되셨나요?`,
        enDescription: `This is a powerful boss monster that marks the end of each stage. It's a significant challenge where failure to defeat it within the time limit results in a game over. Defeating the boss allows you to advance to the next stage or acquire special rewards.`
    }
];