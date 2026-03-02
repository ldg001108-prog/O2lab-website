import { useState } from 'react';
import { X, Calendar, Clock, User, Phone, Package } from 'lucide-react';
import { products } from '../../data/products';
import './ReservationModal.css';

interface ReservationModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ReservationModal = ({ isOpen, onClose }: ReservationModalProps) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        date: '',
        time: '',
        product: '',
        message: '',
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            // 예약 데이터 구성
            const reservation = {
                id: Date.now().toString(),
                ...formData,
                timestamp: new Date().toLocaleString('ko-KR'),
                status: '대기',
            };

            // localStorage에 저장
            const existing = JSON.parse(localStorage.getItem('o2lab_reservations') || '[]');
            existing.push(reservation);
            localStorage.setItem('o2lab_reservations', JSON.stringify(existing));

            // 구글 시트 URL이 설정되어 있으면 추가로 전송
            const GOOGLE_SCRIPT_URL = localStorage.getItem('o2lab_google_script_url');
            if (GOOGLE_SCRIPT_URL && GOOGLE_SCRIPT_URL !== 'PASTE_YOUR_GOOGLE_SCRIPT_URL_HERE') {
                fetch(GOOGLE_SCRIPT_URL, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(reservation),
                }).catch(() => { }); // 구글 시트 실패해도 무시
            }

            setStatus('success');
            setFormData({ name: '', phone: '', date: '', time: '', product: '', message: '' });
        } catch {
            setStatus('error');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <button className="modal__close" onClick={onClose}>
                    <X size={20} />
                </button>

                {status === 'success' ? (
                    <div className="modal__success">
                        <span className="modal__success-icon">✅</span>
                        <h2>예약이 완료되었습니다!</h2>
                        <p>예약이 접수되었습니다. 확인 후 연락드리겠습니다.</p>
                        <button className="btn btn-primary" onClick={onClose}>
                            닫기
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="modal__header">
                            <h2>G-CON 방문 예약</h2>
                            <p>부산 부산진구 초읍 어린이 대공원 G-CON에서 제품을 직접 체험하세요.</p>
                        </div>

                        <form className="modal__form" onSubmit={handleSubmit}>
                            <div className="modal__field">
                                <label>
                                    <User size={16} />
                                    이름
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="홍길동"
                                    required
                                />
                            </div>

                            <div className="modal__field">
                                <label>
                                    <Phone size={16} />
                                    연락처
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="010-1234-5678"
                                    required
                                />
                            </div>

                            <div className="modal__row">
                                <div className="modal__field">
                                    <label>
                                        <Calendar size={16} />
                                        희망 날짜
                                    </label>
                                    <input
                                        type="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="modal__field">
                                    <label>
                                        <Clock size={16} />
                                        희망 시간
                                    </label>
                                    <select name="time" value={formData.time} onChange={handleChange} required>
                                        <option value="">선택</option>
                                        <option value="10:00">10:00</option>
                                        <option value="11:00">11:00</option>
                                        <option value="13:00">13:00</option>
                                        <option value="14:00">14:00</option>
                                        <option value="15:00">15:00</option>
                                        <option value="16:00">16:00</option>
                                    </select>
                                </div>
                            </div>

                            <div className="modal__field">
                                <label>
                                    <Package size={16} />
                                    관심 제품
                                </label>
                                <select name="product" value={formData.product} onChange={handleChange}>
                                    <option value="">전체</option>
                                    {products.map((p) => (
                                        <option key={p.id} value={p.id}>
                                            {p.nameKo}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="modal__field">
                                <label>메모 (선택)</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="추가 요청사항이 있으시면 적어주세요"
                                    rows={3}
                                />
                            </div>

                            {status === 'error' && (
                                <p className="modal__error">
                                    예약 처리 중 오류가 발생했습니다. 다시 시도해주세요.
                                </p>
                            )}

                            <button
                                type="submit"
                                className="btn btn-primary modal__submit"
                                disabled={status === 'loading'}
                            >
                                {status === 'loading' ? '예약 처리 중...' : '예약하기'}
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default ReservationModal;
