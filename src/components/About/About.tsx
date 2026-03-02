import { Award, ShieldCheck, Lightbulb } from 'lucide-react';
import './About.css';

const About = () => {
    return (
        <section className="about section" id="about">
            <div className="container">
                <div className="about__grid">
                    <div className="about__content">
                        <span className="about__label">ABOUT O₂LAB</span>
                        <h2 className="section-title">
                            과학이 만드는
                            <br />
                            건강한 걸음
                        </h2>
                        <p className="about__desc">
                            (주)오투랩은 물리치료학 전문가 이수경 박사가 이끄는 스마트 헬스케어 기업입니다.
                            인체 균형 능력 측정 장비와 기능성 신발 인솔 개발을 통해,
                            발의 건강에서 전신의 균형까지 과학적으로 관리하는 솔루션을 제공합니다.
                        </p>
                        <p className="about__desc">
                            건강 관리, 고령 친화, 장애인 보조 장비 관련 다수의 특허를 보유하고 있으며,
                            부산 부산진구 초읍 어린이 대공원의 G-CON에서 보행 측정 서비스를 운영하고 있습니다.
                        </p>

                        <div className="about__highlights">
                            <div className="about__highlight">
                                <div className="about__highlight-icon">
                                    <Award size={22} />
                                </div>
                                <div>
                                    <h4>다수의 특허 보유</h4>
                                    <p>건강 관리 · 고령 친화 · 보조 장비</p>
                                </div>
                            </div>
                            <div className="about__highlight">
                                <div className="about__highlight-icon">
                                    <ShieldCheck size={22} />
                                </div>
                                <div>
                                    <h4>전문가 설계</h4>
                                    <p>물리치료학 박사 직접 연구 개발</p>
                                </div>
                            </div>
                            <div className="about__highlight">
                                <div className="about__highlight-icon">
                                    <Lightbulb size={22} />
                                </div>
                                <div>
                                    <h4>스마트 헬스케어</h4>
                                    <p>IoT · AI 기반 맞춤형 건강 관리</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="about__visual">
                        <div className="about__visual-card">
                            <div className="about__visual-accent" />
                            <div className="about__visual-content">
                                <span className="about__visual-emoji">🔬</span>
                                <h3>R&D 중심 기업</h3>
                                <p>연구와 개발에 집중하여 과학적 근거에 기반한 제품을 만듭니다.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
