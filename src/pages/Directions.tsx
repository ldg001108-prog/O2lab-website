import { MapPin, Car, Train, Phone } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Directions.css';

const Directions = () => {
    const mapReveal = useScrollReveal(0.1);

    return (
        <main className="directions-page">
            {/* 히어로 */}
            <section className="directions-hero">
                <div className="directions-hero__bg">
                    <div className="directions-hero__gradient"></div>
                </div>
                <div className="directions-hero__content container">
                    <h1 className="directions-hero__title">오시는 길</h1>
                    <p className="directions-hero__subtitle">
                        G-CON 걸음분석 무료체험존으로 오시는 방법을 안내해 드립니다.
                    </p>
                </div>
            </section>

            {/* 지도 + 주소 */}
            <div ref={mapReveal.ref} className={`reveal ${mapReveal.isVisible ? 'reveal--visible' : ''}`}>
                <section className="directions-map section">
                    <div className="container">
                        <div className="directions-map__grid">
                            {/* 카카오맵 임베드 */}
                            <div className="directions-map__embed">
                                <iframe
                                    src="https://map.kakao.com/?urlX=962482&urlY=535771&itemId=17577017&q=%EB%B6%80%EC%82%B0%EC%96%B4%EB%A6%B0%EC%9D%B4%EB%8C%80%EA%B3%B5%EC%9B%90&srcid=17577017&map_type=TYPE_MAP&map_hybrid=false"
                                    width="100%"
                                    height="450"
                                    style={{ border: 0, borderRadius: '16px' }}
                                    allowFullScreen
                                    loading="lazy"
                                    title="G-CON 위치 - 부산 어린이 대공원"
                                ></iframe>
                            </div>

                            {/* 주소 및 안내 */}
                            <div className="directions-map__info">
                                <div className="directions-info__card">
                                    <div className="directions-info__icon">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3>주소</h3>
                                        <p>부산광역시 부산진구 초읍동</p>
                                        <p><strong>부산 어린이 대공원 내</strong></p>
                                    </div>
                                </div>

                                <div className="directions-info__highlight">
                                    <p>📌 <strong>어린이 대공원 주차장 입구 맞은편</strong>에 위치한 민트색 컨테이너입니다.</p>
                                    <p>"걸음분석 무료체험존" 간판을 찾아주세요!</p>
                                </div>

                                <div className="directions-info__card">
                                    <div className="directions-info__icon">
                                        <Car size={24} />
                                    </div>
                                    <div>
                                        <h3>자가용</h3>
                                        <p>어린이 대공원 주차장 이용</p>
                                        <p>주차 후 주차장 입구 맞은편 도보 1분</p>
                                    </div>
                                </div>

                                <div className="directions-info__card">
                                    <div className="directions-info__icon">
                                        <Train size={24} />
                                    </div>
                                    <div>
                                        <h3>대중교통</h3>
                                        <p>부산 도시철도 3호선 종합운동장역 하차</p>
                                        <p>어린이 대공원 방면 도보 약 10분</p>
                                    </div>
                                </div>

                                <div className="directions-info__card">
                                    <div className="directions-info__icon">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3>문의 전화</h3>
                                        <p>방문 전 전화 예약을 권장합니다.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Directions;
