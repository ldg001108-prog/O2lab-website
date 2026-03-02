import { ArrowRight, ChevronDown } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    const openSection = (sectionId: string) => {
        window.dispatchEvent(new CustomEvent('sectionChange', { detail: sectionId }));
    };

    return (
        <section className="hero">
            <div className="hero__bg">
                <div className="hero__orb hero__orb--1" />
                <div className="hero__orb hero__orb--2" />
                <div className="hero__orb hero__orb--3" />
                <div className="hero__grid" />
            </div>

            <div className="hero__content container">
                <div className="hero__badge animate-fadeInUp">
                    <span className="hero__badge-dot" />
                    부산 스마트빌리지 G-CON 입점
                </div>

                <h1 className="hero__title animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
                    당신의 <span className="hero__title-accent">걸음</span>을
                    <br />
                    바꾸는 기술
                </h1>

                <p className="hero__subtitle animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                    (주)오투랩이 만드는 스마트 헬스케어 제품으로
                    <br />
                    발의 건강부터 전신의 균형까지, 과학적으로 관리하세요.
                </p>

                <div className="hero__actions animate-fadeInUp" style={{ animationDelay: '0.3' }}>
                    <button className="btn btn-primary btn--lg" onClick={() => openSection('products')}>
                        제품 둘러보기
                        <ArrowRight size={18} />
                    </button>
                    <button className="btn btn-outline btn--lg" onClick={() => openSection('visit')}>
                        G-CON 방문 혜택
                    </button>
                </div>

                <div className="hero__stats animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                    <div className="hero__stat">
                        <span className="hero__stat-value">3+</span>
                        <span className="hero__stat-label">특허 기술</span>
                    </div>
                    <div className="hero__stat-divider" />
                    <div className="hero__stat">
                        <span className="hero__stat-value">6</span>
                        <span className="hero__stat-label">측정 모드</span>
                    </div>
                    <div className="hero__stat-divider" />
                    <div className="hero__stat">
                        <span className="hero__stat-value">30%</span>
                        <span className="hero__stat-label">방문 할인</span>
                    </div>
                </div>
            </div>

            <button className="hero__scroll" onClick={() => openSection('products')} aria-label="스크롤">
                <ChevronDown size={24} />
            </button>
        </section>
    );
};

export default Hero;
