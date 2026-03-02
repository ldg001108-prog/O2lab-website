import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;

// 미들웨어
app.use(cors());
app.use(express.json());

// 데이터 파일 경로
const DATA_DIR = path.join(__dirname, 'data');
const RESERVATIONS_FILE = path.join(DATA_DIR, 'reservations.json');

// 데이터 디렉토리 초기화
if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
}
if (!fs.existsSync(RESERVATIONS_FILE)) {
    fs.writeFileSync(RESERVATIONS_FILE, JSON.stringify([], null, 2));
}

// 예약 데이터 읽기
function getReservations() {
    const data = fs.readFileSync(RESERVATIONS_FILE, 'utf-8');
    return JSON.parse(data);
}

// 예약 데이터 저장
function saveReservations(reservations: unknown[]) {
    fs.writeFileSync(RESERVATIONS_FILE, JSON.stringify(reservations, null, 2));
}

// ===== API 라우트 =====

// 예약 생성
app.post('/api/reservations', (req, res) => {
    try {
        const { name, phone, date, time, product, message } = req.body;

        // 유효성 검사
        if (!name || !phone || !date || !time) {
            return res.status(400).json({ error: '필수 항목을 모두 입력해주세요.' });
        }

        const reservation = {
            id: Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
            name,
            phone,
            date,
            time,
            product: product || '전체',
            message: message || '',
            createdAt: new Date().toISOString(),
            status: 'pending',
        };

        const reservations = getReservations();
        reservations.push(reservation);
        saveReservations(reservations);

        console.log(`✅ 새 예약: ${name} (${phone}) - ${date} ${time}`);
        return res.status(201).json({ success: true, reservation });
    } catch (error) {
        console.error('예약 처리 오류:', error);
        return res.status(500).json({ error: '예약 처리 중 오류가 발생했습니다.' });
    }
});

// 예약 목록 조회
app.get('/api/reservations', (_req, res) => {
    try {
        const reservations = getReservations();
        return res.json(reservations);
    } catch (error) {
        console.error('예약 조회 오류:', error);
        return res.status(500).json({ error: '예약 조회 중 오류가 발생했습니다.' });
    }
});

// 서버 시작
app.listen(PORT, () => {
    console.log('');
    console.log(`  🚀 O₂lab 예약 API 서버 실행 중`);
    console.log(`  📍 http://localhost:${PORT}`);
    console.log(`  📋 POST /api/reservations — 예약 생성`);
    console.log(`  📋 GET  /api/reservations — 예약 목록`);
    console.log('');
});
