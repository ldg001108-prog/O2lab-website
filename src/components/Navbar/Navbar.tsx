import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import ReservationModal from '../ReservationModal/ReservationModal';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [isReservationOpen, setIsReservationOpen] = useState(false);
    const location = useLocation();
    const { totalItems } = useCart();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileOpen(false);
    }, [location]);

    // 다른 컴포넌트에서 예약 모달 열기 이벤트 수신
    useEffect(() => {
        const handleOpen = () => setIsReservationOpen(true);
        window.addEventListener('openReservation', handleOpen);
        return () => window.removeEventListener('openReservation', handleOpen);
    }, []);

    const scrollToSection = (sectionId: string) => {
        if (location.pathname !== '/') {
            window.location.href = `/#${sectionId}`;
            return;
        }
        // 스크롤 대신 섹션 전환 이벤트 발생
        window.dispatchEvent(new CustomEvent('sectionChange', { detail: sectionId }));
        setIsMobileOpen(false);
    };

    return (
        <>
            <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
                <div className="navbar__container container">
                    <Link to="/" className="navbar__logo" onClick={() => {
                        if (location.pathname === '/') {
                            window.dispatchEvent(new CustomEvent('sectionChange', { detail: null }));
                        }
                        setIsMobileOpen(false);
                    }}>
                        <img src="/images/o2lab_logo.png" alt="O₂lab" className="navbar__logo-img" />
                    </Link>

                    <div className={`navbar__menu ${isMobileOpen ? 'navbar__menu--open' : ''}`}>
                        <button onClick={() => scrollToSection('products')} className="navbar__link">
                            제품
                        </button>
                        <Link to="/gcon" className="navbar__link" onClick={() => setIsMobileOpen(false)}>
                            G-CON
                        </Link>
                        <button onClick={() => scrollToSection('visit')} className="navbar__link">
                            방문 혜택
                        </button>
                        <Link to="/directions" className="navbar__link" onClick={() => setIsMobileOpen(false)}>
                            오시는 길
                        </Link>
                        <button onClick={() => scrollToSection('about')} className="navbar__link">
                            회사 소개
                        </button>
                        <button
                            onClick={() => { setIsReservationOpen(true); setIsMobileOpen(false); }}
                            className="btn btn-primary navbar__cta"
                        >
                            G-CON 방문 예약
                        </button>
                    </div>

                    <div className="navbar__right">
                        <Link to="/cart" className="navbar__cart">
                            <ShoppingCart size={22} />
                            {totalItems > 0 && (
                                <span className="navbar__cart-badge">{totalItems}</span>
                            )}
                        </Link>
                        <button
                            className="navbar__toggle"
                            onClick={() => setIsMobileOpen(!isMobileOpen)}
                            aria-label="메뉴 토글"
                        >
                            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </nav>

            <ReservationModal
                isOpen={isReservationOpen}
                onClose={() => setIsReservationOpen(false)}
            />
        </>
    );
};

export default Navbar;
