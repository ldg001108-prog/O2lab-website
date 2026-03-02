import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingCart } from 'lucide-react';
import type { Product } from '../../data/products';
import { useCart } from '../../context/CartContext';
import './ProductCard.css';

interface ProductCardProps {
    product: Product;
    index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
    const { addToCart } = useCart();

    return (
        <div
            className="product-card animate-fadeInUp"
            style={{ animationDelay: `${index * 0.15}s` }}
        >
            <div className="product-card__visual" style={{ background: product.gradient }}>
                <img
                    src={product.image}
                    alt={product.nameKo}
                    className="product-card__image"
                />
            </div>

            <div className="product-card__body">
                <span className="product-card__name-en">{product.name}</span>
                <h3 className="product-card__name">{product.nameKo}</h3>
                <p className="product-card__tagline">{product.tagline}</p>

                <div className="product-card__price">
                    <div className="product-card__price-row">
                        <span className="product-card__price-label">정가</span>
                        <span className="product-card__price-original">{product.price.original}</span>
                    </div>
                    <div className="product-card__price-row product-card__price-row--highlight">
                        <span className="product-card__price-label">G-CON 방문가</span>
                        <span className="product-card__price-gcon">{product.price.gcon}</span>
                    </div>
                </div>

                <div className="product-card__actions">
                    <Link to={`/products/${product.id}`} className="product-card__link">
                        자세히 보기
                        <ArrowRight size={16} />
                    </Link>
                    <button
                        className="product-card__cart-btn"
                        onClick={() => addToCart(product)}
                        title="장바구니에 담기"
                    >
                        <ShoppingCart size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
