"use client";

import { useEffect, useRef, useState } from "react";

export default function ThreeDComponent() {
  const containerRef = useRef(null);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  // Загружаем скрипт при монтировании компонента
  useEffect(() => {
    // Функция для загрузки внешнего скрипта
    const loadScript = () => {
      const script = document.createElement("script");
      script.src = "/scripts/js/main.js";  // Путь к вашему скрипту
      script.async = true;
      script.onload = () => setIsScriptLoaded(true);  // Скрипт загружен
      document.body.appendChild(script);
    };

    // Загружаем скрипт, если он ещё не загружен
    if (!isScriptLoaded) {
      loadScript();
    }

    // Убираем скрипт при размонтировании компонента
    return () => {
      const script = document.querySelector("script[src='/scripts/js/main.js']");
      if (script) document.body.removeChild(script);
    };
  }, [isScriptLoaded]);

  // Запускаем Three.js только после загрузки скрипта и рендеринга компонента
  useEffect(() => {
    if (isScriptLoaded && containerRef.current) {
      // Здесь вызываем вашу функцию для инициализации сцены
      if (typeof initThreeD === "function") {
        initThreeD(containerRef.current);
      }
    }
  }, [isScriptLoaded]);

  return (
    <div
      ref={containerRef}
      className="canvasContainer"
      style={{ width: "100%", height: "500px" }}
    >
      {/* Здесь будет отображаться ваша 3D фигура */}
    </div>
  );
}
