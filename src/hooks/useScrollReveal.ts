import { useEffect, useRef, useState } from 'react';

// 스크롤 시 요소가 화면에 나타나면 애니메이션 트리거
export const useScrollReveal = (threshold = 0.15) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(el); // 한번 나타나면 관찰 중지
                }
            },
            { threshold }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold]);

    return { ref, isVisible };
};
