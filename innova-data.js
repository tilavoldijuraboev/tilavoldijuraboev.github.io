const INNOVA_DATA = {
  kitobNomi: "INNOVA — Fizikadan masalalar to'plami",
  muallif: "Sardor Berdiyev",
  boblar: [
    {
      bobNomi: "I BOB. Kinematika",
      bolimlar: [
        {
          id: "bolim-1",
          nomi: "1-bo'lim. Mexanikadagi asosiy tushunchalar",
          masalalar: [
            {
              raqam: "1.1",
              shart: "Vaqt o'tishi bilan jismning fazodagi vaziyatining boshqa jismlarga nisbatan o'zgarishi jismning ... deb ataladi.",
              yechim: "Mexanikada biror sanoq jismiga nisbatan vaqt o'tishi bilan jismning fazodagi o'rnini o'zgartirishi mexanik harakat deb ataladi.",
              javob: "Mexanik harakati"
            },
            {
              raqam: "1.2",
              shart: "Mexanik harakatning nechta va qanday turlari bor?",
              yechim: "Mexanik harakat tabiatda 3 xil asosiy ko'rinishda uchraydi: 1) ilgarilanma harakat (jismning barcha nuqtalari bir xil traektoriya bo'ylab harakatlanadi); 2) aylanma harakat (jism nuqtalari aylana bo'ylab harakatlanadi); 3) tebranma harakat (jism muvozanat vaziyati atrofida takrorlanuvchi harakat qiladi).",
              javob: "3 ta: ilgarilanma, aylanma, tebranma"
            },
            {
              raqam: "1.3",
              shart: `Quyidagi animatsiyalarning qaysi birida mexanik harakatning qaysi turi sodir bo'lmoqda?
              <style>
                .anim-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 10px; margin-top: 12px; }
                .anim-card { background: var(--surface-soft, #f8fafc); border: 1px solid var(--border, #cbd5e1); border-radius: 12px; padding: 8px; text-align: center; }
                .anim-label { font-size: 0.85rem; font-weight: 700; margin-top: 4px; color: var(--accent, #4f46e5); }
                @keyframes carUp { 0% { transform: translate(0px, 0px); } 100% { transform: translate(65px, -37px); } }
                @keyframes moonOrbit { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
                @keyframes swingMove { 0%, 100% { transform: rotate(-28deg); } 50% { transform: rotate(28deg); } }
                .car-anim { animation: carUp 2.5s linear infinite; }
                .orbit-anim { transform-origin: 60px 45px; animation: moonOrbit 4s linear infinite; }
                .swing-anim { transform-origin: 60px 10px; animation: swingMove 2.2s ease-in-out infinite; }
              </style>
              <div class="anim-grid">
                <div class="anim-card">
                  <svg viewBox="0 0 120 90" width="100%" height="80">
                    <polygon points="10,80 110,80 110,22" fill="#94a3b8" opacity="0.35"/>
                    <line x1="10" y1="80" x2="110" y2="22" stroke="#64748b" stroke-width="2"/>
                    <g class="car-anim">
                      <g transform="translate(18, 63) rotate(-30)">
                        <rect x="0" y="0" width="24" height="10" rx="2" fill="#ef4444"/>
                        <rect x="4" y="-5" width="14" height="6" rx="1.5" fill="#fca5a5"/>
                        <circle cx="5" cy="11" r="3" fill="#1e293b"/>
                        <circle cx="19" cy="11" r="3" fill="#1e293b"/>
                      </g>
                    </g>
                  </svg>
                  <div class="anim-label">1-animatsiya</div>
                </div>
                <div class="anim-card">
                  <svg viewBox="0 0 120 90" width="100%" height="80">
                    <circle cx="60" cy="45" r="30" fill="none" stroke="#94a3b8" stroke-dasharray="3,3" stroke-width="1.5"/>
                    <circle cx="60" cy="45" r="11" fill="#3b82f6"/>
                    <path d="M55,40 Q60,37 64,42 Q61,48 56,46 Z" fill="#22c55e"/>
                    <g class="orbit-anim">
                      <circle cx="90" cy="45" r="4.5" fill="#cbd5e1" stroke="#64748b" stroke-width="1"/>
                    </g>
                  </svg>
                  <div class="anim-label">2-animatsiya</div>
                </div>
                <div class="anim-card">
                  <svg viewBox="0 0 120 90" width="100%" height="80">
                    <line x1="30" y1="10" x2="90" y2="10" stroke="#64748b" stroke-width="3" stroke-linecap="round"/>
                    <g class="swing-anim">
                      <line x1="60" y1="10" x2="60" y2="62" stroke="#94a3b8" stroke-width="2"/>
                      <rect x="51" y="62" width="18" height="4" rx="1" fill="#d97706"/>
                      <circle cx="60" cy="48" r="5" fill="#f59e0b"/>
                      <rect x="56" y="53" width="8" height="9" rx="2" fill="#4f46e5"/>
                    </g>
                  </svg>
                  <div class="anim-label">3-animatsiya</div>
                </div>
              </div>`,
              yechim: `<b>1-animatsiya (Qiya tekislikdan chiqayotgan mashina):</b> Mashinaning barcha nuqtalari bir xil traektoriya (to'g'ri chiziq) bo'ylab parallel ko'chmoqda — bu <b>ilgarilanma harakat</b>.<br><br><b>2-animatsiya (Yer atrofida aylanayotgan Oy):</b> Oy Yer markazi atrofida aylana orbita bo'ylab harakatlanmoqda — bu <b>aylanma harakat</b>.<br><br><b>3-animatsiya (Arg'imchoq uchayotgan bola):</b> Arg'imchoq muvozanat vaziyati atrofida u yoqdan-bu yoqqa takrorlanuvchi harakat qilmoqda — bu <b>tebranma harakat</b>.`,
              javob: "1-ilgarilanma, 2-aylanma, 3-tebranma"
            }
          ]
        }
      ]
    }
  ]
};
