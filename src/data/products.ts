export interface Product {
    id: string;
    name: string;
    nameKo: string;
    tagline: string;
    description: string;
    features: string[];
    highlights: { icon: string; title: string; desc: string }[];
    price: {
        original: string;
        coupang: string;
        gcon: string;
        originalNum: number;
        gconNum: number;
    };
    gradient: string;
    emoji: string;
    image: string;
}

export const products: Product[] = [
    {
        id: 'hallux-insole',
        name: 'Hallux Insole',
        nameKo: '할룩스 매직 인솔',
        tagline: '발이 바뀌면, 걸음이 바뀐다',
        description:
            '이수경 박사가 개발한 기능성 깔창으로, 발바닥 내재근을 강화하여 정상적인 발 아치 형성과 바른 보행을 유도합니다. 유연한 소재와 내부 에어쿠션이 발과 발목의 안정성을 높이고, 뛰어난 통기성으로 쾌적한 착용감을 제공합니다.',
        features: [
            '발바닥 내재근 강화로 질병 예방',
            '정상적인 발 아치 형성 유도',
            '바른 보행과 체형 균형 개선',
            '유연한 소재 + 에어쿠션으로 안정성 확보',
            '발목 염좌 방지 및 통기성 우수',
            '전 연령대 착용 가능 (키즈 라인 별도)',
        ],
        highlights: [
            { icon: '🦶', title: '아치 형성', desc: '발바닥 내재근을 자극하여 자연스러운 아치 형성' },
            { icon: '🏃', title: '바른 보행', desc: '체형 균형 개선으로 안정적인 걸음 유도' },
            { icon: '💨', title: '에어쿠션', desc: '내부 에어쿠션이 충격을 흡수하고 안정성 향상' },
        ],
        price: {
            original: '89,000원',
            coupang: '79,000원',
            gcon: '59,000원',
            originalNum: 89000,
            gconNum: 59000,
        },
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        emoji: '🦶',
        image: '/images/hallux_insole.png',
    },
    {
        id: 'walking-rex',
        name: 'Walking Rex',
        nameKo: '워킹렉스 기능성 슬리퍼',
        tagline: 'Push & Go, 당신의 발에 추진력을',
        description:
            '발바닥 아치를 안정적으로 지지하는 기능성 슬리퍼입니다. 에어쿠션의 공기 흐름으로 발 아치를 지지하고 추진력을 부여하는 Push & Go 효과, 미끄럼 방지 아웃솔과 토우 세이프 가드까지 갖춘 요양 환경 최적화 제품입니다.',
        features: [
            'Push & Go 에어쿠션 추진력 시스템',
            '스프레이 패턴 아웃솔로 발바닥 스트레칭',
            '미끄럼 방지 기능',
            '토우 세이프 가드로 발가락 보호',
            '맞춤 조절로 완벽한 피팅',
            '장시간 보행에도 피로감 최소화',
        ],
        highlights: [
            { icon: '🚀', title: 'Push & Go', desc: '에어쿠션 공기 흐름으로 자연스러운 추진력 제공' },
            { icon: '🛡️', title: '안전 설계', desc: '미끄럼 방지 + 토우 세이프 가드 탑재' },
            { icon: '⚙️', title: '맞춤 피팅', desc: '맞춤 조절로 개인 맞춤 착용감 제공' },
        ],
        price: {
            original: '129,000원',
            coupang: '109,000원',
            gcon: '89,000원',
            originalNum: 129000,
            gconNum: 89000,
        },
        gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        emoji: '👟',
        image: '/images/walking_rex.png',
    },
    {
        id: 'dynamic-balance',
        name: 'Dynamic Balance',
        nameKo: '다이나믹 밸런스',
        tagline: '6가지 모드로 당신의 균형을 측정하다',
        description:
            '정적 및 동적 균형 능력을 동시에 측정하고 평가하는 스마트 헬스케어 장비입니다. 6가지 모드의 측정을 통해 발의 압력 변화와 인체 반응 능력을 실시간 분석하고, 맞춤형 운동 솔루션을 제공합니다. 블루투스 연동으로 언제 어디서든 결과를 확인할 수 있습니다.',
        features: [
            '6가지 측정 모드 (정적 + 동적 균형)',
            '실시간 발 압력 변화 감지',
            '앱 연동 맞춤형 운동 솔루션',
            '블루투스 / Wi-Fi 무선 데이터 전송',
            '측정자 혼자서도 평가 가능한 자동화 시스템',
            '데이터 기록, 저장, 관리 통합 시스템',
        ],
        highlights: [
            { icon: '📊', title: '6가지 모드', desc: '정적·동적 균형을 다각도로 측정 및 평가' },
            { icon: '📱', title: '앱 연동', desc: '스마트폰 앱으로 실시간 결과 확인 및 관리' },
            { icon: '🤖', title: '자동 분석', desc: 'AI 알고리즘 기반 맞춤형 운동 처방 제공' },
        ],
        price: {
            original: '1,290,000원',
            coupang: '1,090,000원',
            gcon: '890,000원',
            originalNum: 1290000,
            gconNum: 890000,
        },
        gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        emoji: '⚖️',
        image: '/images/dynamic_balance.png',
    },
];
