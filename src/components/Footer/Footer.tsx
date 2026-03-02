import { Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__grid">
                    <div className="footer__brand">
                        <div className="footer__logo">
                            <span className="footer__logo-icon">O₂</span>
                            <span className="footer__logo-text">lab</span>
                        </div>
                        <p className="footer__brand-desc">
                            스마트 헬스케어 기술로 당신의 걸음을 바꿉니다.
                        </p>
                    </div>

                    <div className="footer__links">
                        <h4>제품</h4>
                        <ul>
                            <li><a href="/products/hallux-insole">할룩스 인솔</a></li>
                            <li><a href="/products/walking-rex">워킹렉스</a></li>
                            <li><a href="/products/dynamic-balance">다이나믹 밸런스</a></li>
                        </ul>
                    </div>

                    <div className="footer__links">
                        <h4>바로가기</h4>
                        <ul>
                            <li><a href="#products">제품 소개</a></li>
                            <li><a href="#visit">G-CON 방문 혜택</a></li>
                            <li><a href="#about">회사 소개</a></li>
                        </ul>
                    </div>

                    <div className="footer__contact">
                        <h4>연락처</h4>
                        <div className="footer__contact-item">
                            <MapPin size={16} />
                            <span>부산광역시 부산진구 초읍 어린이 대공원</span>
                        </div>
                        <div className="footer__contact-item">
                            <Mail size={16} />
                            <span>info@o2lab.co.kr</span>
                        </div>
                        <div className="footer__contact-item">
                            <Phone size={16} />
                            <span>051-000-0000</span>
                        </div>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p>© 2026 (주)오투랩. All rights reserved.</p>
                    <div className="footer__bottom-links">
                        <a href="#">개인정보처리방침</a>
                        <a href="#">이용약관</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
