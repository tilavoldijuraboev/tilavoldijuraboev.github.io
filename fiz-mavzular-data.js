const FIZIKA_MAVZULAR = [
  {
    id: "mexanika",
    ikonka: "⚙️",
    bobNomi: "1. Mexanika",
    tavsif: "Kinematika, dinamika, saqlanish qonunlari va suyuqliklar mexanikasi",
    mavzular: [
      {
        raqam: "1.1",
        nomi: "Mexanikaning asosiy masalasi. Sanoq sistemasi. Moddiy nuqta. Traektoriya, yo'l va ko'chish",
        nazariya: `
          <style>
            .lec-sec { margin-bottom: 1.4rem; }
            .lec-h3 { font-size: 1.15rem; color: var(--accent, #4f46e5); margin: 1.2rem 0 0.6rem; border-left: 4px solid var(--accent, #4f46e5); padding-left: 10px; }
            .lec-p { margin-bottom: 0.85rem; line-height: 1.65; font-size: 0.98rem; text-align: justify; }
            .note-box { background: var(--accent-soft, #eef2ff); border: 1px solid var(--border, #cbd5e1); border-radius: 12px; padding: 12px 14px; margin: 10px 0; font-size: 0.94rem; line-height: 1.55; }
            .proof-box { background: var(--surface-soft, #f8fafc); border: 1px dashed var(--accent, #4f46e5); border-radius: 12px; padding: 12px 14px; margin: 10px 0; }
            .sim-box { background: var(--surface-soft, #f8fafc); border: 1px solid var(--border, #cbd5e1); border-radius: 14px; padding: 12px; margin: 14px 0; text-align: center; }
            .sim-title { font-weight: 700; font-size: 0.95rem; color: var(--accent, #4f46e5); margin-bottom: 8px; }
            .sim-controls { display: flex; flex-wrap: wrap; gap: 6px; justify-content: center; margin-top: 8px; }
            .sim-btn { padding: 6px 12px; border-radius: 8px; border: 1px solid var(--accent, #4f46e5); background: var(--surface, #fff); color: var(--accent, #4f46e5); font-weight: 600; font-size: 0.85rem; cursor: pointer; }
            .sim-btn.active { background: var(--accent, #4f46e5); color: #fff; }
            .sim-stats { display: flex; justify-content: space-around; flex-wrap: wrap; gap: 8px; margin-top: 8px; font-size: 0.88rem; font-weight: 600; background: var(--surface, #fff); padding: 8px; border-radius: 8px; border: 1px solid var(--border, #e2e8f0); }
            canvas { touch-action: none; border-radius: 10px; background: #ffffff; border: 1px solid #cbd5e1; max-width: 100%; display: block; margin: 0 auto; }
            .lit-list { padding-left: 1.2rem; font-size: 0.9rem; line-height: 1.6; opacity: 0.9; }
          </style>

          <div class="lec-sec">
            <h3 class="lec-h3">1. Mexanikaning asosiy masalasi</h3>
            <p class="lec-p">Atrofimizdagi barcha jismlar — osmondagi sayyoralardan tortib havodagi chang zarralarigacha doimo harakatda bo'ladi. Fizikaning jismlar harakati va o'zaro ta'sirini o'rganuvchi bo'limi <b>mexanika</b> deyiladi. Mexanikaning birinchi qismi — <b>kinematika</b> esa harakatni yuzaga keltiruvchi sabablarni (kuchlarni) hisobga olmagan holda, uning geometrik xususiyatlarini o'rganadi.</p>
            <div class="note-box">
              <b>Mexanikaning asosiy (bosh) masalasi:</b> Jismning boshlang'ich vaziyati va harakat qonunini bilgan holda, uning istalgan <b>t</b> vaqt momentidagi fazoviy vaziyatini (tekislikda <b>x(t)</b> va <b>y(t)</b> koordinatalarini) aniqlashdan iborat.
            </div>
          </div>

          <div class="lec-sec">
            <h3 class="lec-h3">2. Moddiy nuqta modeli</h3>
            <p class="lec-p">Real jismlar murakkab shakl va o'lchamlarga ega. Masalani yechishni osonlashtirish uchun fizikada <b>ideallashtirish (modellashtirish)</b> usulidan foydalaniladi. Agar jismning o'lchamlari u bosib o'tayotgan masofaga nisbatan juda kichik bo'lsa (<b>L ≪ s</b>), uning shaklini hisobga olmaslik mumkin.</p>
            <p class="lec-p"><b>Moddiy nuqta</b> — berilgan masala sharoitida o'lchamlari va shaklini hisobga olmasa ham bo'ladigan, lekin jismning massasiga ega bo'lgan nuqtadir.</p>
            <div class="note-box">
              <b>Diqqat!</b> Bitta jismning o'zi bir sharoitda moddiy nuqta bo'lishi, boshqa sharoitda esa moddiy nuqta bo'lmasligi mumkin:<br>
              ✅ <b>Moddiy nuqta:</b> Toshkentdan Samarqandga (300 km) ketayotgan 100 metrli poyezd.<br>
              ❌ <b>Moddiy nuqta emas:</b> O'sha 100 metrli poyezd uzunligi 150 metr bo'lgan ko'prikdan o'tayotganda.
            </div>
          </div>
          <div class="lec-sec">
            <h3 class="lec-h3">3. Sanoq sistemasi va Harakatning nisbiyligi</h3>
            <p class="lec-p">Jismning harakatlanayotganini bilish uchun uni boshqa biror qo'zg'almas deb olingan jism — <b>sanoq jismi</b> bilan solishtirish kerak. Sanoq jismi, unga bog'langan <b>koordinatalar sistemasi (XOY)</b> va vaqtni o'lchaydigan <b>soat</b> birgalikda <b>sanoq sistemasini</b> tashkil etadi.</p>
            <p class="lec-p">Harakat doimo <b>nisbiydir</b>: bir sanoq sistemasida tinch turgan jism boshqa sanoq sistemasida harakatlanayotgan bo'lishi mumkin.</p>

            <div class="sim-box">
              <div class="sim-title">🔬 Interaktiv tajriba №1: Sanoq sistemasini o'zgartirib ko'ring</div>
              <canvas id="relCanvas" width="320" height="140"></canvas>
              <div class="sim-controls">
                <button class="sim-btn active" id="btnGround" onclick="setRefFrame('ground')">🌳 Sanoq jismi: Yer (Daraxt)</button>
                <button class="sim-btn" id="btnBus" onclick="setRefFrame('bus')">🚌 Sanoq jismi: Avtobus</button>
              </div>
              <p id="relDesc" style="font-size:0.85rem; margin-top:8px; opacity:0.85;">Yerga nisbatan: Avtobus ham, uning ichida yurayotgan bola ham harakatlanmoqda.</p>
            </div>
          </div>

          <div class="lec-sec">
            <h3 class="lec-h3">4. Traektoriya, Yo'l va Ko'chish (Formula isboti)</h3>
            <p class="lec-p"><b>Traektoriya</b> — jismning fazoda harakatlanganda qoldirgan uzluksiz izi (chizig'i). Traektoriya shakliga qarab harakat <i>to'g'ri chiziqli</i> va <i>egri chiziqli</i> bo'ladi.</p>
            <p class="lec-p"><b>Yo'l (s)</b> — jism bosib o'tgan traektoriyaning uzunligi. Yo'l <b>skalyar kattalik</b> (yo'nalishi yo'q) bo'lib, harakat davomida faqat ortib boradi (hech qachon kamaymaydi).</p>
            <p class="lec-p"><b>Ko'chish (s⃗)</b> — jismning boshlang'ich vaziyatidan keyingi vaziyatiga yo'nalgan to'g'ri chiziq kesmasi. Ko'chish <b>vektor kattalikdir</b>.</p>

            <div class="proof-box">
              <b>📐 Ko'chish formulasi qayerdan kelib chiqqan?</b><br>
              Tekislikda <b>XOY</b> koordinata o'qlarini chizamiz. Jism <b>A(x₀; y₀)</b> nuqtadan <b>B(x; y)</b> nuqtaga ko'chsin. Ko'chish vektorining o'qlardagi proyeksiyalari:<br>
              • X o'qidagi proyeksiyasi: <b>sₓ = x − x₀</b><br>
              • Y o'qidagi proyeksiyasi: <b>sᵧ = y − y₀</b><br>
              Ushbu ikki proyeksiya o'zaro perpendikulyar bo'lib, to'g'ri burchakli uchburchakning katetlarini hosil qiladi. Ko'chish moduli esa uchburchakning gipotenuzasidir. <b>Pifagor teoremasiga</b> ko'ra:<br>
              <div style="text-align:center; font-weight:700; font-size:1.05rem; margin-top:6px; color:var(--accent, #4f46e5);">
                s = √(sₓ² + sᵧ²) = √((x − x₀)² + (y − y₀)²)
              </div>
            </div>

            <div class="sim-box">
              <div class="sim-title">✍️ Interaktiv tajriba №2: Barmog'ingiz bilan traektoriya chizing</div>
              <p style="font-size:0.82rem; margin-bottom:6px; opacity:0.8;">Koordinata to'rida barmoq bilan chizib, Yo'l va Ko'chish farqini ko'ring (1 katak = 1 m):</p>
              <canvas id="drawCanvas" width="320" height="220"></canvas>
              <div class="sim-stats">
                <span style="color:#4f46e5;">〰️ Yo'l (s): <b id="valPath">0.0</b> m</span>
                <span style="color:#16a34a;">↗️ Ko'chish |s⃗|: <b id="valDisp">0.0</b> m</span>
                <span>📍 <b id="valCoords">A(0;0) → B(0;0)</b></span>
              </div>
              <div class="sim-controls">
                <button class="sim-btn" onclick="clearDrawCanvas()">🔄 Tozalash va qayta chizish</button>
              </div>
            </div>
            <div class="note-box">
              <b>Muhim xulosa:</b> Harakat davomida bosib o'tilgan yo'l har doim ko'chish modulidan katta yoki unga teng bo'ladi: <b>s ≥ |s⃗|</b>. Tenglik (<b>s = |s⃗|</b>) faqat jism bir tomonga qarab to'g'ri chiziq bo'ylab harakatlangandagina bajariladi. Agar jism aylana bo'ylab harakatlanib yana boshlang'ich nuqtaga qaytsa, <b>ko'chish nolga teng (|s⃗| = 0)</b>, yo'l esa aylana uzunligiga (<b>s = 2πR</b>) teng bo'ladi.
            </div>
          </div>

          <div class="lec-sec">
            <h3 class="lec-h3">📚 Foydalanilgan adabiyotlar</h3>
            <ol class="lit-list">
              <li><b>P. Habibullayev, A. Boydedayev, A. Bahromov.</b> <i>Fizika</i> (Umumta'lim maktablari va akademik litseylar uchun darslik).</li>
              <li><b>N.Sh. Turdiyev.</b> <i>Fizika</i> (6–7-sinflar uchun darslik).</li>
              <li><b>M. O'lmasova.</b> <i>Fizika: Mexanika va molekulyar fizika</i> (Abituriyentlar va talabalar uchun o'quv qo'llanma).</li>
              <li><b>G.S. Landsberg.</b> <i>Elementar fizika darsligi. I tom: Mexanika, issiqlik, molekulyar fizika.</i></li>
            </ol>
          </div>
        `,
        formulalar: [
          { formula: "sₓ = x − x₀  va  sᵧ = y − y₀", izoh: "Ko'chish vektorining X va Y koordinata o'qlaridagi proyeksiyalari (m)" },
          { formula: "s = √((x − x₀)² + (y − y₀)²)", izoh: "Tekislikda ko'chish modulini Pifagor teoremasi orqali topish formulasi (m)" },
          { formula: "s ≥ |s⃗|", izoh: "Yo'l va ko'chish moduli o'rtasidagi asosiy munosabat" }
        ],
        havolalar: [
          { nomi: "🧮 Kinematika kalkulyatori", url: "calc-kinematika.html" },
          { nomi: "📐 INNOVA masalalari", url: "kitob-innova.html" }
        ]
      }
    ]
  },
  {
    id: "molekulyar",
    ikonka: "🌡️",
    bobNomi: "2. Molekulyar fizika va termodinamika",
    tavsif: "MKN asoslari, gaz qonunlari va issiqlik hodisalari",
    mavzular: []
  },
  {
    id: "elektrodinamika",
    ikonka: "⚡",
    bobNomi: "3. Elektrodinamika",
    tavsif: "Elektrostatika, o'zgarmas tok, magnit maydon va elektromagnit induksiya",
    mavzular: []
  },
  {
    id: "tebranishlar",
    ikonka: "〰️",
    bobNomi: "4. Tebranishlar va to'lqinlar",
    tavsif: "Mexanik va elektromagnit tebranishlar, tovush to'lqinlari",
    mavzular: []
  },
  {
    id: "optika",
    ikonka: "🔦",
    bobNomi: "5. Optika",
    tavsif: "Yorug'likning qaytishi, sinishi, linzalar va to'lqin optikasi",
    mavzular: []
  },
  {
    id: "kvant",
    ikonka: "⚛️",
    bobNomi: "6. Atom va yadro fizikasi",
    tavsif: "Fotoeffekt, atom tuzilishi va yadro reaksiyalari",
    mavzular: []
  }
];
