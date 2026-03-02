import { useState, useEffect } from 'react';
import { Trash2, RefreshCw, Download, Settings } from 'lucide-react';
import './Admin.css';

interface Reservation {
    id: string;
    name: string;
    phone: string;
    date: string;
    time: string;
    product: string;
    message: string;
    timestamp: string;
    status: string;
}

const Admin = () => {
    const [reservations, setReservations] = useState<Reservation[]>([]);
    const [googleUrl, setGoogleUrl] = useState('');
    const [showSettings, setShowSettings] = useState(false);

    const loadReservations = () => {
        const data = JSON.parse(localStorage.getItem('o2lab_reservations') || '[]');
        setReservations(data.reverse()); // 최신순
    };

    useEffect(() => {
        loadReservations();
        setGoogleUrl(localStorage.getItem('o2lab_google_script_url') || '');
    }, []);

    const handleDelete = (id: string) => {
        const updated = reservations.filter(r => r.id !== id);
        setReservations(updated);
        localStorage.setItem('o2lab_reservations', JSON.stringify(updated));
    };

    const handleStatusChange = (id: string, newStatus: string) => {
        const updated = reservations.map(r =>
            r.id === id ? { ...r, status: newStatus } : r
        );
        setReservations(updated);
        localStorage.setItem('o2lab_reservations', JSON.stringify(updated));
    };

    const handleExportCSV = () => {
        if (reservations.length === 0) return;
        const headers = '접수시간,이름,연락처,희망날짜,희망시간,관심제품,메모,상태\n';
        const rows = reservations.map(r =>
            `${r.timestamp},${r.name},${r.phone},${r.date},${r.time},${r.product},${r.message},${r.status}`
        ).join('\n');
        const blob = new Blob(['\uFEFF' + headers + rows], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `O2lab_예약_${new Date().toISOString().slice(0, 10)}.csv`;
        a.click();
    };

    const handleSaveGoogleUrl = () => {
        localStorage.setItem('o2lab_google_script_url', googleUrl);
        alert('Google Sheets URL이 저장되었습니다. 이후 예약 시 자동으로 스프레드시트에도 기록됩니다.');
        setShowSettings(false);
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case '확인': return '#4ECDC4';
            case '완료': return '#2ecc71';
            case '취소': return '#e74c3c';
            default: return '#f39c12';
        }
    };

    return (
        <main className="admin-page">
            <section className="admin-hero">
                <div className="container">
                    <h1 className="admin-hero__title">📋 예약 관리</h1>
                    <p className="admin-hero__subtitle">
                        G-CON 방문 예약 현황 ({reservations.length}건)
                    </p>
                </div>
            </section>

            <section className="admin-content section">
                <div className="container">
                    <div className="admin-toolbar">
                        <button className="admin-btn" onClick={loadReservations}>
                            <RefreshCw size={16} /> 새로고침
                        </button>
                        <button className="admin-btn" onClick={handleExportCSV}>
                            <Download size={16} /> CSV 다운로드
                        </button>
                        <button className="admin-btn" onClick={() => setShowSettings(!showSettings)}>
                            <Settings size={16} /> 설정
                        </button>
                    </div>

                    {showSettings && (
                        <div className="admin-settings">
                            <h3>🔗 Google Sheets 연동 (선택사항)</h3>
                            <p>Google Apps Script 배포 URL을 입력하면 예약이 스프레드시트에도 자동 저장됩니다.</p>
                            <div className="admin-settings__row">
                                <input
                                    type="url"
                                    value={googleUrl}
                                    onChange={(e) => setGoogleUrl(e.target.value)}
                                    placeholder="https://script.google.com/macros/s/XXXXX/exec"
                                />
                                <button className="btn btn-primary" onClick={handleSaveGoogleUrl}>저장</button>
                            </div>
                        </div>
                    )}

                    {reservations.length === 0 ? (
                        <div className="admin-empty">
                            <span className="admin-empty__icon">📭</span>
                            <h3>아직 예약이 없습니다</h3>
                            <p>웹사이트에서 방문 예약이 들어오면 여기에 표시됩니다.</p>
                        </div>
                    ) : (
                        <div className="admin-table-wrap">
                            <table className="admin-table">
                                <thead>
                                    <tr>
                                        <th>접수시간</th>
                                        <th>이름</th>
                                        <th>연락처</th>
                                        <th>희망날짜</th>
                                        <th>시간</th>
                                        <th>관심제품</th>
                                        <th>메모</th>
                                        <th>상태</th>
                                        <th>관리</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {reservations.map((r) => (
                                        <tr key={r.id}>
                                            <td className="admin-table__time">{r.timestamp}</td>
                                            <td><strong>{r.name}</strong></td>
                                            <td>{r.phone}</td>
                                            <td>{r.date}</td>
                                            <td>{r.time}</td>
                                            <td>{r.product || '-'}</td>
                                            <td className="admin-table__msg">{r.message || '-'}</td>
                                            <td>
                                                <select
                                                    value={r.status}
                                                    onChange={(e) => handleStatusChange(r.id, e.target.value)}
                                                    style={{ color: getStatusColor(r.status), fontWeight: 600 }}
                                                >
                                                    <option value="대기">⏳ 대기</option>
                                                    <option value="확인">✅ 확인</option>
                                                    <option value="완료">🎉 완료</option>
                                                    <option value="취소">❌ 취소</option>
                                                </select>
                                            </td>
                                            <td>
                                                <button
                                                    className="admin-delete-btn"
                                                    onClick={() => handleDelete(r.id)}
                                                    title="삭제"
                                                >
                                                    <Trash2 size={14} />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
};

export default Admin;
