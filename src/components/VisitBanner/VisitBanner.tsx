import { MapPin, Footprints, BadgePercent, ArrowRight } from 'lucide-react';
import './VisitBanner.css';

const steps = [
    {
        icon: <MapPin size={28} />,
        step: 'STEP 1',
        title: 'G-CON 방문',
        desc: '부산 부산진구 초읍 어린이 대공원 내 G-CON을 방문하세요.',
    },
    {
        icon: <Footprints size={28} />,
        step: 'STEP 2',
        title: '보행 측정 체험',
        desc: '다이나믹 밸런스 장비로 나만의 보행 패턴과 균형 능력을 무료 측정합니다.',
    },
    {
        icon: <BadgePercent size={28} />,
        step: 'STEP 3',
        title: '특별 할인 구매',
        desc: '자사몰·쿠팡 대비 최대 30% 할인된 가격으로 제품을 구매하세요.',
    },
];

const VisitBanner = () => {
    return (
        <section className="visit" id="visit">
            <div className="visit__bg">
                <div className="visit__bg-gradient" />
            </div>

            <div className="container visit__container">
                <div className="visit__header">
                    <span className="visit__label">SPECIAL OFFER</span>
                    <h2 className="visit__title">
                        G-CON 방문하고
                        <br />
                        <span className="visit__title-accent">최대 30% 할인</span> 받으세요
                    </h2>
                    <p className="visit__subtitle">
                        부산 부산진구 초읍 어린이 대공원에서 직접 체험하고 구매하시면
                        <br />
                        온라인 어디보다 저렴한 가격으로 만나실 수 있습니다.
                    </p>
                </div>

                <div className="visit__steps">
                    {steps.map((step, index) => (
                        <div key={index} className="visit__step">
                            <div className="visit__step-icon">{step.icon}</div>
                            <span className="visit__step-number">{step.step}</span>
                            <h3 className="visit__step-title">{step.title}</h3>
                            <p className="visit__step-desc">{step.desc}</p>
                            {index < steps.length - 1 && (
                                <div className="visit__step-arrow">
                                    <ArrowRight size={20} />
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="visit__cta">
                    <div className="visit__cta-info">
                        <h3>📍 찾아오시는 길</h3>
                        <p>부산광역시 부산진구 초읍 어린이 대공원 G-CON</p>
                    </div>
                    <button
                        className="btn btn-primary btn--lg"
                        onClick={() => window.dispatchEvent(new CustomEvent('openReservation'))}
                    >
                        방문 예약하기
                        <ArrowRight size={18} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default VisitBanner;
