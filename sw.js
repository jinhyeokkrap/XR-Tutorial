// 앱 설치 조건을 만족시키기 위한 최소한의 서비스 워커
self.addEventListener('install', (e) => {
  console.log('[Service Worker] Installed');
});

self.addEventListener('fetch', (e) => {
  // 크롬 PWA 설치 요구 조건을 충족하기 위해 fetch 이벤트를 가로채기만 합니다.
});
