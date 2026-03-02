import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check, ShoppingCart } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import './ProductDetail.css';

const ProductDetail = () => {
    const { id } = useParams<{ id: string }>();
    const product = products.find((p) => p.id === id);
    const { addToCart } = useCart();

    if (!product) {
        return (
            <div className="not-found">
                <div className="container">
                    <h2>제품을 찾을 수 없습니다</h2>
                    <Link to="/" className="btn btn-primary">
                        홈으로 돌아가기
                    </Link>
                </div>
            </div>
        );
    }

    const otherProducts = products.filter((p) => p.id !== id);

    return (
        <main className="product-detail">
            {/* 히어로 */}
            <section className="pd-hero" style={{ background: product.gradient }}>
                <div className="container pd-hero__container">
                    <Link to="/" className="pd-hero__back">
                        <ArrowLeft size={18} />
                        뒤로가기
                    </Link>

                    <div className="pd-hero__content">
                        <div className="pd-hero__text">
                            <span className="pd-hero__label">{product.name}</span>
                            <h1 className="pd-hero__title">{product.nameKo}</h1>
                            <p className="pd-hero__tagline">{product.tagline}</p>
                        </div>
                        <div className="pd-hero__visual">
                            <img
                                src={product.image}
                                alt={product.nameKo}
                                className="pd-hero__image"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 제품 설명 */}
            <section className="pd-info section">
                <div className="container">
                    <div className="pd-info__grid">
                        <div className="pd-info__main">
                            <h2 className="pd-info__heading">제품 소개</h2>
                            <p className="pd-info__desc">{product.description}</p>

                            <h3 className="pd-info__sub-heading">주요 특징</h3>
                            <ul className="pd-info__features">
                                {product.features.map((feature, index) => (
                                    <li key={index} className="pd-info__feature">
                                        <Check size={18} className="pd-info__feature-icon" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="pd-info__sidebar">
                            {/* 가격 카드 */}
                            <div className="pd-price-card">
                                <h3 className="pd-price-card__title">가격 비교</h3>

                                <div className="pd-price-card__row">
                                    <span className="pd-price-card__label">정가</span>
                                    <span className="pd-price-card__value pd-price-card__value--original">
                                        {product.price.original}
                                    </span>
                                </div>

                                <div className="pd-price-card__row">
                                    <span className="pd-price-card__label">쿠팡</span>
                                    <span className="pd-price-card__value pd-price-card__value--coupang">
                                        {product.price.coupang}
                                    </span>
                                </div>

                                <div className="pd-price-card__divider" />

                                <div className="pd-price-card__row pd-price-card__row--best">
                                    <span className="pd-price-card__label">
                                        <span className="pd-price-card__badge">BEST</span>
                                        G-CON 방문가
                                    </span>
                                    <span className="pd-price-card__value pd-price-card__value--gcon">
                                        {product.price.gcon}
                                    </span>
                                </div>

                                <button
                                    className="btn btn-primary pd-price-card__btn"
                                    onClick={() => addToCart(product)}
                                >
                                    <ShoppingCart size={18} />
                                    장바구니에 담기
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 하이라이트 */}
            <section className="pd-highlights section" style={{ background: 'var(--color-bg)' }}>
                <div className="container">
                    <h2 className="section-title" style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
                        핵심 기능
                    </h2>
                    <div className="pd-highlights__grid">
                        {product.highlights.map((hl, index) => (
                            <div key={index} className="pd-highlight-card">
                                <span className="pd-highlight-card__icon">{hl.icon}</span>
                                <h3>{hl.title}</h3>
                                <p>{hl.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 다른 제품 */}
            <section className="pd-other section">
                <div className="container">
                    <h2 className="section-title">다른 제품도 둘러보세요</h2>
                    <div className="pd-other__grid">
                        {otherProducts.map((op) => (
                            <Link key={op.id} to={`/products/${op.id}`} className="pd-other__card">
                                <div className="pd-other__visual" style={{ background: op.gradient }}>
                                    <img src={op.image} alt={op.nameKo} />
                                </div>
                                <div className="pd-other__info">
                                    <h3>{op.nameKo}</h3>
                                    <p>{op.tagline}</p>
                                    <span className="pd-other__link">
                                        자세히 보기 <ArrowRight size={14} />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ProductDetail;
