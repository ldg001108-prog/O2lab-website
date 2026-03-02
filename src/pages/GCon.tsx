import { MapPin, Clock, Footprints, Monitor, Users } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './GCon.css';

const GCon = () => {
    const introReveal = useScrollReveal(0.1);
    const interiorReveal = useScrollReveal(0.1);
    const servicesReveal = useScrollReveal(0.1);
    const visitReveal = useScrollReveal(0.1);

    return (
        <main className="gcon-page">
            {/* 히어로 배너 */}
            <section className="gcon-hero">
                <div className="gcon-hero__bg">
                    <div className="gcon-hero__gradient"></div>
                </div>
                <div className="gcon-hero__content container">
                    <span className="gcon-hero__badge">G-CON SPACE</span>
                    <h1 className="gcon-hero__title">
                        걸음분석 <span className="gcon-hero__accent">무료체험존</span>
                    </h1>
                    <p className="gcon-hero__subtitle">
                        부산광역시·부산테크노파크가 지원하는 스마트 헬스케어 체험 공간입니다.
                        <br />
                        최신 보행 분석 장비로 나만의 걸음 패턴을 무료로 측정해 보세요.
                    </p>
                </div>
            </section>

            {/* G-CON 소개 */}
            <div ref={introReveal.ref} className={`reveal ${introReveal.isVisible ? 'reveal--visible' : ''}`}>
                <section className="gcon-intro section">
                    <div className="container">
                        <div className="gcon-intro__grid">
                            <div className="gcon-intro__text">
                                <h2 className="section-title">G-CON이란?</h2>
                                <p className="gcon-intro__desc">
                                    G-CON(G-Container)은 부산광역시와 부산테크노파크가 지원하는
                                    스마트 헬스케어 체험 컨테이너입니다.
                                </p>
                                <p className="gcon-intro__desc">
                                    (주)오투랩은 이곳에서 <strong>다이나믹 밸런스</strong> 장비를 활용한
                                    무료 보행 분석 서비스를 운영하고 있습니다. 방문하시면 6가지 측정 모드로
                                    발의 건강 상태와 신체 균형을 과학적으로 분석해 드립니다.
                                </p>
                                <div className="gcon-intro__badges">
                                    <span className="gcon-intro__badge">🏛️ 부산광역시 지원</span>
                                    <span className="gcon-intro__badge">🔬 부산테크노파크</span>
                                    <span className="gcon-intro__badge">🆓 무료 체험</span>
                                </div>
                            </div>
                            <div className="gcon-intro__image">
                                <img src="/images/gcon/exterior.jpg" alt="G-CON 외부 전경" />
                                <p className="gcon-intro__caption">G-CON 외부 전경 — 걸음분석 무료체험존</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* 내부 시설 */}
            <div ref={interiorReveal.ref} className={`reveal ${interiorReveal.isVisible ? 'reveal--visible' : ''}`}>
                <section className="gcon-interior section">
                    <div className="container">
                        <div className="gcon-interior__grid">
                            <div className="gcon-interior__image">
                                <img src="/images/gcon/interior.jpg" alt="G-CON 내부 시설" />
                                <p className="gcon-intro__caption">G-CON 내부 — 보행 측정 공간</p>
                            </div>
                            <div className="gcon-interior__text">
                                <h2 className="section-title">내부 시설</h2>
                                <p className="gcon-intro__desc">
                                    깔끔하고 밝은 실내 공간에서 편안하게 보행 측정을 받으실 수 있습니다.
                                    전문 스태프가 측정 과정을 안내해 드리며, 결과를 상세히 설명해 드립니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* 제공 서비스 */}
            <div ref={servicesReveal.ref} className={`reveal ${servicesReveal.isVisible ? 'reveal--visible' : ''}`}>
                <section className="gcon-services section">
                    <div className="container">
                        <div className="gcon-services__header">
                            <h2 className="section-title">제공 서비스</h2>
                            <p className="section-subtitle">
                                G-CON에서 제공하는 무료 보행 분석 서비스를 만나보세요.
                            </p>
                        </div>
                        <div className="gcon-services__grid">
                            <div className="gcon-services__card">
                                <div className="gcon-services__icon">
                                    <Footprints size={28} />
                                </div>
                                <h3>보행 패턴 분석</h3>
                                <p>걷는 자세와 보행 패턴을 정밀 측정하여 개선점을 안내합니다.</p>
                            </div>
                            <div className="gcon-services__card">
                                <div className="gcon-services__icon">
                                    <Monitor size={28} />
                                </div>
                                <h3>실시간 결과 확인</h3>
                                <p>대형 디스플레이로 측정 결과를 실시간으로 확인할 수 있습니다.</p>
                            </div>
                            <div className="gcon-services__card">
                                <div className="gcon-services__icon">
                                    <Users size={28} />
                                </div>
                                <h3>전문가 상담</h3>
                                <p>물리치료학 전문가가 측정 결과를 바탕으로 맞춤 상담을 제공합니다.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* 방문 안내 */}
            <div ref={visitReveal.ref} className={`reveal ${visitReveal.isVisible ? 'reveal--visible' : ''}`}>
                <section className="gcon-visit section">
                    <div className="container">
                        <div className="gcon-visit__card">
                            <div className="gcon-visit__info">
                                <h3>📍 방문 안내</h3>
                                <div className="gcon-visit__detail">
                                    <MapPin size={18} />
                                    <span>부산광역시 부산진구 초읍 어린이 대공원</span>
                                </div>
                                <div className="gcon-visit__detail">
                                    <Clock size={18} />
                                    <span>운영시간: 평일 10:00 - 18:00</span>
                                </div>
                                <p className="gcon-visit__note">
                                    ※ 어린이 대공원 주차장 입구 맞은편에 위치해 있습니다.
                                </p>
                            </div>
                            <a href="/directions" className="btn btn-primary btn--lg">
                                오시는 길 보기 →
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default GCon;
