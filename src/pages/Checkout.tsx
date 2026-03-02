import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, CreditCard } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Checkout.css';

const Checkout = () => {
    const { items, totalPrice, clearCart } = useCart();
    const [orderComplete, setOrderComplete] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        address: '',
        addressDetail: '',
        memo: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // 실결제 연동은 추후 구현 — 현재는 UI만
        setOrderComplete(true);
        clearCart();
    };

    if (items.length === 0 && !orderComplete) {
        return (
            <main className="checkout-empty">
                <div className="container" style={{ textAlign: 'center', paddingTop: '10rem' }}>
                    <h2>장바구니가 비어있습니다</h2>
                    <Link to="/" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                        쇼핑하러 가기
                    </Link>
                </div>
            </main>
        );
    }

    if (orderComplete) {
        return (
            <main className="checkout-complete">
                <div className="container checkout-complete__container">
                    <div className="checkout-complete__card">
                        <div className="checkout-complete__icon">
                            <Check size={40} />
                        </div>
                        <h2>주문이 완료되었습니다!</h2>
                        <p>주문 내역은 입력하신 이메일로 발송됩니다.</p>
                        <p className="checkout-complete__notice">
                            * 현재는 데모 버전입니다. 실제 결제는 처리되지 않습니다.
                        </p>
                        <Link to="/" className="btn btn-primary">
                            홈으로 돌아가기
                        </Link>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="checkout">
            <div className="container">
                <div className="checkout__header">
                    <Link to="/cart" className="checkout__back">
                        <ArrowLeft size={18} />
                        장바구니로 돌아가기
                    </Link>
                    <h1>결제하기</h1>
                </div>

                <div className="checkout__grid">
                    <form className="checkout__form" onSubmit={handleSubmit}>
                        <div className="checkout__section">
                            <h3>주문자 정보</h3>
                            <div className="checkout__field">
                                <label>이름 *</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="홍길동"
                                    required
                                />
                            </div>
                            <div className="checkout__row">
                                <div className="checkout__field">
                                    <label>연락처 *</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="010-1234-5678"
                                        required
                                    />
                                </div>
                                <div className="checkout__field">
                                    <label>이메일 *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="example@email.com"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="checkout__section">
                            <h3>배송 정보</h3>
                            <div className="checkout__field">
                                <label>주소 *</label>
                                <input
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    placeholder="시/군/구 까지 입력"
                                    required
                                />
                            </div>
                            <div className="checkout__field">
                                <label>상세주소</label>
                                <input
                                    type="text"
                                    name="addressDetail"
                                    value={formData.addressDetail}
                                    onChange={handleChange}
                                    placeholder="동/호수"
                                />
                            </div>
                            <div className="checkout__field">
                                <label>배송 메모</label>
                                <textarea
                                    name="memo"
                                    value={formData.memo}
                                    onChange={handleChange}
                                    placeholder="배송 시 요청사항"
                                    rows={2}
                                />
                            </div>
                        </div>

                        <div className="checkout__section checkout__section--payment">
                            <h3>결제 수단</h3>
                            <div className="checkout__payment-options">
                                <label className="checkout__payment-option checkout__payment-option--active">
                                    <input type="radio" name="payment" value="card" defaultChecked />
                                    <CreditCard size={20} />
                                    <span>신용/체크카드</span>
                                </label>
                                <label className="checkout__payment-option">
                                    <input type="radio" name="payment" value="bank" />
                                    <span>무통장 입금</span>
                                </label>
                                <label className="checkout__payment-option">
                                    <input type="radio" name="payment" value="phone" />
                                    <span>휴대폰 결제</span>
                                </label>
                            </div>
                            <p className="checkout__payment-notice">
                                * 현재 데모 버전으로, 실제 결제는 처리되지 않습니다.
                            </p>
                        </div>

                        <button type="submit" className="btn btn-primary checkout__submit-btn">
                            {totalPrice.toLocaleString()}원 결제하기
                        </button>
                    </form>

                    <div className="checkout__summary">
                        <div className="checkout__summary-card">
                            <h3>주문 요약</h3>
                            {items.map((item) => (
                                <div key={item.product.id} className="checkout__summary-item">
                                    <div
                                        className="checkout__summary-thumb"
                                        style={{ background: item.product.gradient }}
                                    >
                                        <img src={item.product.image} alt={item.product.nameKo} />
                                    </div>
                                    <div className="checkout__summary-info">
                                        <span className="checkout__summary-name">{item.product.nameKo}</span>
                                        <span className="checkout__summary-qty">수량: {item.quantity}</span>
                                    </div>
                                    <span className="checkout__summary-price">
                                        {(item.product.price.gconNum * item.quantity).toLocaleString()}원
                                    </span>
                                </div>
                            ))}
                            <div className="checkout__summary-divider" />
                            <div className="checkout__summary-total">
                                <span>총 결제 금액</span>
                                <span>{totalPrice.toLocaleString()}원</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Checkout;
