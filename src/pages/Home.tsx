import { useState, useEffect } from 'react';
import Hero from '../components/Hero/Hero';
import ProductCard from '../components/ProductCard/ProductCard';
import VisitBanner from '../components/VisitBanner/VisitBanner';
import About from '../components/About/About';
import { products } from '../data/products';
import './Home.css';

export type SectionId = 'products' | 'visit' | 'about' | null;

const Home = () => {
    const [activeSection, setActiveSection] = useState<SectionId>(null);
    const [animating, setAnimating] = useState(false);

    // 네비게이션에서 섹션 전환 이벤트 수신
    useEffect(() => {
        const handleSectionChange = (e: CustomEvent<SectionId>) => {
            const newSection = e.detail;

            // 로고 클릭 또는 같은 섹션 클릭 → 닫기 (히어로로 복귀)
            if (newSection === null || activeSection === newSection) {
                if (activeSection) {
                    setAnimating(false);
                    setTimeout(() => {
                        setActiveSection(null);
                        window.scrollTo({ top: 0 });
                    }, 400);
                }
                return;
            }

            // 다른 섹션으로 전환
            if (activeSection) {
                // 현재 섹션 페이드 아웃 → 새 섹션 페이드 인
                setAnimating(false);
                setTimeout(() => {
                    setActiveSection(newSection);
                    window.scrollTo({ top: 0 });
                    requestAnimationFrame(() => setAnimating(true));
                }, 300);
            } else {
                // Hero에서 섹션 열기
                setActiveSection(newSection);
                window.scrollTo({ top: 0 });
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => setAnimating(true));
                });
            }
        };

        window.addEventListener('sectionChange', handleSectionChange as EventListener);
        return () => window.removeEventListener('sectionChange', handleSectionChange as EventListener);
    }, [activeSection]);

    // URL 해시로 진입 시 처리
    useEffect(() => {
        const hash = window.location.hash.replace('#', '') as SectionId;
        if (hash && ['products', 'visit', 'about'].includes(hash)) {
            setActiveSection(hash);
            requestAnimationFrame(() => {
                requestAnimationFrame(() => setAnimating(true));
            });
        }
    }, []);

    const renderSection = () => {
        switch (activeSection) {
            case 'products':
                return (
                    <section className="products section" id="products">
                        <div className="container">
                            <div className="products__header">
                                <span className="products__label">OUR PRODUCTS</span>
                                <h2 className="section-title">O₂lab의 제품을 만나보세요</h2>
                                <p className="section-subtitle">
                                    물리치료학 전문가가 직접 설계한 과학적 헬스케어 제품으로,
                                    발의 건강부터 전신의 균형까지 관리합니다.
                                </p>
                            </div>
                            <div className="products__grid">
                                {products.map((product, index) => (
                                    <ProductCard key={product.id} product={product} index={index} />
                                ))}
                            </div>
                        </div>
                    </section>
                );
            case 'visit':
                return <VisitBanner />;
            case 'about':
                return <About />;
            default:
                return null;
        }
    };

    return (
        <main>
            {/* 섹션 미선택 시 Hero 표시, 섹션 선택 시 Hero 숨김 */}
            {!activeSection && <Hero />}

            {activeSection && (
                <div className={`section-panel ${animating ? 'section-panel--active' : ''}`}>
                    {renderSection()}
                </div>
            )}
        </main>
    );
};

export default Home;
