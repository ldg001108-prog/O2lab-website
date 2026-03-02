import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
    const { items, removeFromCart, updateQuantity, totalPrice } = useCart();

    if (items.length === 0) {
        return (
            <main className="cart-empty">
                <div className="container cart-empty__container">
                    <ShoppingBag size={64} className="cart-empty__icon" />
                    <h2>장바구니가 비어있습니다</h2>
                    <p>마음에 드는 제품을 담아보세요!</p>
                    <Link to="/#products" className="btn btn-primary">
                        제품 둘러보기
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="cart">
            <div className="container">
                <div className="cart__header">
                    <Link to="/" className="cart__back">
                        <ArrowLeft size={18} />
                        쇼핑 계속하기
                    </Link>
                    <h1>장바구니</h1>
                    <p>{items.length}개의 상품</p>
                </div>

                <div className="cart__grid">
                    <div className="cart__items">
                        {items.map((item) => (
                            <div key={item.product.id} className="cart-item">
                                <div
                                    className="cart-item__image"
                                    style={{ background: item.product.gradient }}
                                >
                                    <img src={item.product.image} alt={item.product.nameKo} />
                                </div>

                                <div className="cart-item__info">
                                    <span className="cart-item__name-en">{item.product.name}</span>
                                    <h3 className="cart-item__name">{item.product.nameKo}</h3>
                                    <p className="cart-item__tagline">{item.product.tagline}</p>
                                </div>

                                <div className="cart-item__quantity">
                                    <button
                                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                        className="cart-item__qty-btn"
                                    >
                                        <Minus size={16} />
                                    </button>
                                    <span className="cart-item__qty-value">{item.quantity}</span>
                                    <button
                                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                        className="cart-item__qty-btn"
                                    >
                                        <Plus size={16} />
                                    </button>
                                </div>

                                <div className="cart-item__price">
                                    <span className="cart-item__price-original">
                                        {item.product.price.original}
                                    </span>
                                    <span className="cart-item__price-gcon">
                                        {item.product.price.gcon}
                                    </span>
                                </div>

                                <button
                                    className="cart-item__remove"
                                    onClick={() => removeFromCart(item.product.id)}
                                    title="삭제"
                                >
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="cart__summary">
                        <div className="cart__summary-card">
                            <h3>주문 요약</h3>

                            {items.map((item) => (
                                <div key={item.product.id} className="cart__summary-row">
                                    <span>
                                        {item.product.nameKo} × {item.quantity}
                                    </span>
                                    <span>
                                        {(item.product.price.gconNum * item.quantity).toLocaleString()}원
                                    </span>
                                </div>
                            ))}

                            <div className="cart__summary-divider" />

                            <div className="cart__summary-row cart__summary-row--total">
                                <span>총 결제 금액</span>
                                <span className="cart__summary-total">
                                    {totalPrice.toLocaleString()}원
                                </span>
                            </div>

                            <div className="cart__summary-savings">
                                💰 정가 대비{' '}
                                <strong>
                                    {items
                                        .reduce(
                                            (sum, item) =>
                                                sum +
                                                (item.product.price.originalNum - item.product.price.gconNum) *
                                                item.quantity,
                                            0
                                        )
                                        .toLocaleString()}
                                    원 절약!
                                </strong>
                            </div>

                            <Link to="/checkout" className="btn btn-primary cart__checkout-btn">
                                결제하기
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Cart;
