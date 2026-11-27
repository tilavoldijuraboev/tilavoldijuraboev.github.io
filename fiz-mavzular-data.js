const FIZIKA_MAVZULAR = [
  {
    id: "mexanika",
    ikonka: "⚙️",
    bobNomi: "1. Mexanika",
    tavsif: "Kinematika, dinamika, saqlanish qonunlari va suyuqliklar mexanikasi",
    mavzular: [
      {
        raqam: "1.1",
        nomi: "Mexanikaning asosiy tushunchalari. Sanoq sistemasi. Moddiy nuqta. Traektoriya, yo'l va ko'chish",
        nazariya: `
          <style>
            .lec-sec { margin-bottom: 1.4rem; }
            .lec-h3 { font-size: 1.15rem; color: var(--accent, #4f46e5); margin: 1.2rem 0 0.6rem; border-left: 4px solid var(--accent, #4f46e5); padding-left: 10px; }
            .lec-p { margin-bottom: 0.85rem; line-height: 1.65; font-size: 0.98rem; text-align: justify; }
            .note-box { background: var(--accent-soft, #eef2ff); border: 1px solid var(--border, #cbd5e1); border-radius: 12px; padding: 12px 14px; margin: 10px 0; font-size: 0.94rem; line-height: 1.55; }
            .proof-box { background: var(--surface-soft, #f8fafc); border: 1px dashed var(--accent, #4f46e5); border-radius: 12px; padding: 12px 14px; margin: 10px 0; line-height: 1.6; }
            .sim-box { background: var(--surface-soft, #f8fafc); border: 1px solid var(--border, #cbd5e1); border-radius: 14px; padding: 12px; margin: 14px 0; text-align: center; }
            .sim-title { font-weight: 700; font-size: 0.95rem; color: var(--accent, #4f46e5); margin-bottom: 8px; }
            .sim-controls { display: flex; flex-wrap: wrap; gap: 6px; justify-content: center; margin-top: 8px; }
            .sim-btn { padding: 6px 12px; border-radius: 8px; border: 1px solid var(--accent, #4f46e5); background: var(--surface, #fff); color: var(--accent, #4f46e5); font-weight: 600; font-size: 0.85rem; cursor: pointer; }
            .sim-btn.active { background: var(--accent, #4f46e5); color: #fff; }
            .sim-stats { display: flex; justify-content: space-around; flex-wrap: wrap; gap: 8px; margin-top: 8px; font-size: 0.88rem; font-weight: 600; background: var(--surface, #fff); padding: 8px; border-radius: 8px; border: 1px solid var(--border, #e2e8f0); }
            canvas { touch-action: none; border-radius: 10px; background: #ffffff; border: 1px solid #cbd5e1; max-width: 100%; display: block; margin: 0 auto; }
            .qa-card { background: var(--surface-soft, #f8fafc); border: 1px solid var(--border, #cbd5e1); border-radius: 10px; padding: 10px 12px; margin-bottom: 8px; }
            .qa-ans { display: none; margin-top: 8px; padding-top: 8px; border-top: 1px dashed var(--border, #cbd5e1); color: #15803d; font-size: 0.92rem; line-height: 1.5; }
            .quiz-opt { display: block; width: 100%; text-align: left; padding: 8px 12px; margin-top: 6px; border-radius: 8px; border: 1px solid var(--border, #cbd5e1); background: var(--surface, #fff); cursor: pointer; font-size: 0.92rem; }
            .badge-lvl { display: inline-block; padding: 2px 8px; border-radius: 6px; font-size: 0.78rem; font-weight: 700; margin-right: 6px; }
            .lvl-easy { background: #dcfce7; color: #166534; }
            .lvl-mid { background: #fef9c3; color: #854d0e; }
            .lvl-hard { background: #fee2e2; color: #991b1b; }
            .lit-list { padding-left: 1.2rem; font-size: 0.9rem; line-height: 1.6; opacity: 0.9; }
          </style>

          <div class="lec-sec">
            <h3 class="lec-h3">1. Mexanikaning asosiy tushunchalari</h3>
            <p class="lec-p">Atrofimizdagi barcha jismlar — osmondagi sayyoralardan tortib havodagi chang zarralarigacha doimo harakatda bo'ladi. Fizikaning jismlar harakati va o'zaro ta'sirini o'rganuvchi bo'limi <b>mexanika</b> deyiladi. Mexanikaning birinchi bo'limi — <b>kinematika</b> esa harakatni yuzaga keltiruvchi sabablarni (kuchlarni) hisobga olmagan holda, uning geometrik xususiyatlarini o'rganadi.</p>
            <div class="note-box">
              <b>Mexanik harakat</b> — vaqt o'tishi bilan jismning fazodagi vaziyatining boshqa jismlarga nisbatan o'zgarishidir. Harakatni to'liq tavsiflash uchun uning <i>sanoq sistemasi, traektoriyasi, yo'li va ko'chishi</i> kabi asosiy tushunchalarni bilish zarur.
            </div>
          </div>

          <div class="lec-sec">
            <h3 class="lec-h3">2. Moddiy nuqta modeli</h3>
            <p class="lec-p">Real jismlar murakkab shakl va o'lchamlarga ega. Masalani yechishni osonlashtirish uchun fizikada <b>modellashtirish</b> usulidan foydalaniladi. Agar jismning o'lchamlari u bosib o'tayotgan masofaga nisbatan juda kichik bo'lsa, uning shaklini hisobga olmaslik mumkin.</p>
            <p class="lec-p"><b>Moddiy nuqta</b> — berilgan masala sharoitida o'lchamlari va shaklini hisobga olmasa ham bo'ladigan, lekin jismning massasiga ega bo'lgan nuqtadir.</p>
            <div class="note-box">
              <b>Muhim taqqoslash:</b> Bitta jism bir sharoitda moddiy nuqta bo'lishi, boshqa sharoitda esa moddiy nuqta bo'lmasligi mumkin:<br>
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
            <p class="lec-p"><b>Yo'l (l)</b> — jism bosib o'tgan traektoriyaning uzunligi. Yo'l <b>skalyar kattalik</b> bo'lib, harakat davomida faqat ortib boradi.</p>
            <p class="lec-p"><b>Ko'chish (s)</b> — jismning boshlang'ich vaziyatidan keyingi vaziyatiga yo'nalgan to'g'ri chiziq kesmasi (<b>vektor kattalik</b>).</p>

            <div class="proof-box">
              <b>📐 Ko'chish formulasi qayerdan kelib chiqqan?</b><br>
              Tekislikda <b>XOY</b> koordinata o'qlarini chizamiz. Jism <b>A(x<sub>0</sub>; y<sub>0</sub>)</b> nuqtadan <b>B(x; y)</b> nuqtaga ko'chsin. Ko'chishning o'qlardagi proyeksiyalari:<br>
              • X o'qidagi proyeksiyasi: <b>s<sub>x</sub> = x − x<sub>0</sub></b><br>
              • Y o'qidagi proyeksiyasi: <b>s<sub>y</sub> = y − y<sub>0</sub></b><br>
              Ushbu ikki proyeksiya o'zaro perpendikulyar bo'lib, to'g'ri burchakli uchburchakning katetlarini hosil qiladi. Ko'chish moduli esa uchburchakning gipotenuzasidir. <b>Pifagor teoremasiga</b> ko'ra:<br>
              <div style="text-align:center; font-weight:700; font-size:1.05rem; margin-top:6px; color:var(--accent, #4f46e5);">
                s = √(s<sub>x</sub><sup>2</sup> + s<sub>y</sub><sup>2</sup>) = √((x − x<sub>0</sub>)<sup>2</sup> + (y − y<sub>0</sub>)<sup>2</sup>)
              </div>
            </div>

            <div class="sim-box">
              <div class="sim-title">✍️ Interaktiv tajriba №2: Barmog'ingiz bilan traektoriya chizing</div>
              <p style="font-size:0.82rem; margin-bottom:6px; opacity:0.8;">Koordinata to'rida barmoq bilan chizib, Yo'l va Ko'chish farqini ko'ring (1 katak = 1 m):</p>
              <canvas id="drawCanvas" width="320" height="220"></canvas>
              <div class="sim-stats">
                <span style="color:#4f46e5;">〰️ Yo'l (l): <b id="valPath">0.0</b> m</span>
                <span style="color:#16a34a;">↗️ Ko'chish (s): <b id="valDisp">0.0</b> m</span>
                <span>📍 <b id="valCoords">A(0;0) → B(0;0)</b></span>
              </div>
              <div class="sim-controls">
                <button class="sim-btn" onclick="clearDrawCanvas()">🔄 Tozalash va qayta chizish</button>
              </div>
            </div>

            <div class="note-box">
              <b>Muhim xulosa:</b> Harakat davomida bosib o'tilgan yo'l har doim ko'chish modulidan katta yoki unga teng bo'ladi: <b>l ≥ s</b>. Tenglik (<b>l = s</b>) faqat jism bir tomonga qarab to'g'ri chiziq bo'ylab harakatlangandagina bajariladi. Agar jism aylana bo'ylab harakatlanib yana boshlang'ich nuqtaga qaytsa, <b>ko'chish nolga teng (s = 0)</b>, yo'l esa aylana uzunligiga (<b>l = 2πR</b>) teng bo'ladi.
            </div>
          </div>
          <div class="lec-sec">
            <h3 class="lec-h3">⚡ Tezkor savollar (O'zingizni tekshiring)</h3>
            <div class="qa-card">
              <b>1-savol:</b> Jism bosib o'tgan yo'l nolga teng bo'lmasdan, uning ko'chishi nolga teng bo'lishi mumkinmi?
              <div style="margin-top:6px;"><button class="sim-btn" onclick="this.parentElement.nextElementSibling.style.display='block'">👁️ Javobni ko'rish</button></div>
              <div class="qa-ans"><b>Javob:</b> Ha, mumkin. Agar jism yopiq traektoriya bo'ylab harakatlanib, yana boshlang'ich nuqtaga qaytib kelsa (masalan, stadion bo'ylab 1 marta aylanib chiqsa), yo'l nolga teng bo'lmaydi, lekin boshlang'ich va oxirgi nuqtalar ustma-ust tushgani uchun ko'chish nolga teng bo'ladi.</div>
            </div>
            <div class="qa-card">
              <b>2-savol:</b> Yer quyosh atrofida aylanayotganda qachon uni moddiy nuqta deb olish mumkin, qachon esa mumkin emas?
              <div style="margin-top:6px;"><button class="sim-btn" onclick="this.parentElement.nextElementSibling.style.display='block'">👁️ Javobni ko'rish</button></div>
              <div class="qa-ans"><b>Javob:</b> Yerning Quyosh atrofidagi yillik orbitasi uzunligini hisoblashda uni moddiy nuqta deb olish mumkin (chunki Yer radiusi orbitadan 23 000 marta kichik). Lekin Yerda kun va tun almashinishini tushuntirishda uni moddiy nuqta deb bo'lmaydi.</div>
            </div>
            <div class="qa-card">
              <b>3-savol:</b> Vertolyot parragi uchidagi nuqtaning traektoriyasi uchuvchiga va yerda turgan kuzatuvchiga nisbatan qanday ko'rinadi?
              <div style="margin-top:6px;"><button class="sim-btn" onclick="this.parentElement.nextElementSibling.style.display='block'">👁️ Javobni ko'rish</button></div>
              <div class="qa-ans"><b>Javob:</b> Uchuvchiga (vertolyotga) nisbatan — aylana shaklida; yerda turgan kuzatuvchiga nisbatan esa (vertolyot oldinga uchayotgan bo'lsa) — vintsimon egri chiziq shaklida ko'rinadi.</div>
            </div>
          </div>

          <div class="lec-sec">
            <h3 class="lec-h3">📝 Onlayn mini-test</h3>
            <div class="qa-card">
              <b>1. Quyidagilardan qaysi biri vektor kattalik?</b>
              <button class="quiz-opt" onclick="this.style.background='#fee2e2'; this.style.borderColor='#ef4444';">A) Bosib o'tilgan yo'l</button>
              <button class="quiz-opt" onclick="this.style.background='#dcfce7'; this.style.borderColor='#22c55e';">B) Ko'chish</button>
              <button class="quiz-opt" onclick="this.style.background='#fee2e2'; this.style.borderColor='#ef4444';">C) Vaqt</button>
            </div>
            <div class="qa-card">
              <b>2. Jism A(1; 2) nuqtadan B(4; 6) nuqtaga ko'chdi. Uning ko'chish modulini toping (m).</b>
              <button class="quiz-opt" onclick="this.style.background='#fee2e2'; this.style.borderColor='#ef4444';">A) 7 m</button>
              <button class="quiz-opt" onclick="this.style.background='#dcfce7'; this.style.borderColor='#22c55e';">B) 5 m (s = √(3² + 4²) = 5)</button>
              <button class="quiz-opt" onclick="this.style.background='#fee2e2'; this.style.borderColor='#ef4444';">C) 12 m</button>
            </div>
            <div class="qa-card">
              <b>3. Qanday harakatda bosib o'tilgan yo'l ko'chish moduliga teng bo'ladi?</b>
              <button class="quiz-opt" onclick="this.style.background='#dcfce7'; this.style.borderColor='#22c55e';">A) Bir tomonga yo'nalgan to'g'ri chiziqli harakatda</button>
              <button class="quiz-opt" onclick="this.style.background='#fee2e2'; this.style.borderColor='#ef4444';">B) Aylana bo'ylab tekis harakatda</button>
              <button class="quiz-opt" onclick="this.style.background='#fee2e2'; this.style.borderColor='#ef4444';">C) Har qanday harakatda</button>
            </div>
          </div>
          <div class="lec-sec">
            <h3 class="lec-h3">🎯 Mustaqil yechish uchun masalalar (Oson → Murakkab)</h3>
            
            <div class="qa-card">
              <span class="badge-lvl lvl-easy">Oson</span><b>1-masala:</b> Turist avval shimolga tomon 600 m, so'ngra sharqqa tomon 800 m yurdi. Turist bosib o'tgan yo'lni (l) va ko'chish modulini (s) toping.
              <div style="margin-top:6px;"><button class="sim-btn" onclick="this.parentElement.nextElementSibling.style.display='block'">📐 Yechim va javob</button></div>
              <div class="qa-ans"><b>Yechim:</b> Yo'l: l = 600 + 800 = 1400 m. Shimol va sharq yo'nalishlari o'zaro perpendikulyar bo'lgani uchun ko'chish Pifagor teoremasidan topiladi: s = √(600<sup>2</sup> + 800<sup>2</sup>) = 1000 m.<br><b>Javob:</b> l = 1400 m; s = 1000 m.</div>
            </div>

            <div class="qa-card">
              <span class="badge-lvl lvl-easy">Oson</span><b>2-masala:</b> Koptok 3 m balandlikdan polga tushib, undan sakrab 1 m balandlikda tutib olindi. Koptokning yo'li va ko'chishini aniqlang.
              <div style="margin-top:6px;"><button class="sim-btn" onclick="this.parentElement.nextElementSibling.style.display='block'">📐 Yechim va javob</button></div>
              <div class="qa-ans"><b>Yechim:</b> Jami yo'l: l = 3 + 1 = 4 m. Boshlang'ich balandlik 3 m, oxirgi balandlik 1 m bo'lgani uchun ko'chish moduli: s = 3 − 1 = 2 m (pastga yo'nalgan).<br><b>Javob:</b> l = 4 m; s = 2 m.</div>
            </div>

            <div class="qa-card">
              <span class="badge-lvl lvl-mid">O'rta</span><b>3-masala:</b> Moddiy nuqta koordinatalari x<sub>0</sub> = −2 m, y<sub>0</sub> = 3 m bo'lgan nuqtadan x = 6 m, y = −3 m nuqtaga ko'chdi. Ko'chishning o'qlardagi proyeksiyalarini va modulini toping.
              <div style="margin-top:6px;"><button class="sim-btn" onclick="this.parentElement.nextElementSibling.style.display='block'">📐 Yechim va javob</button></div>
              <div class="qa-ans"><b>Yechim:</b> s<sub>x</sub> = 6 − (−2) = 8 m; s<sub>y</sub> = −3 − 3 = −6 m. Ko'chish moduli: s = √(8<sup>2</sup> + (−6)<sup>2</sup>) = √(64 + 36) = 10 m.<br><b>Javob:</b> s<sub>x</sub> = 8 m; s<sub>y</sub> = −6 m; s = 10 m.</div>
            </div>

            <div class="qa-card">
              <span class="badge-lvl lvl-mid">O'rta</span><b>4-masala:</b> Radiusi R = 10 m bo'lgan aylana bo'ylab harakatlanayotgan jism aylananing yarmini bosib o'tdi. Uning yo'li va ko'chishini toping (π ≈ 3,14).
              <div style="margin-top:6px;"><button class="sim-btn" onclick="this.parentElement.nextElementSibling.style.display='block'">📐 Yechim va javob</button></div>
              <div class="qa-ans"><b>Yechim:</b> Yarim aylana uzunligi (yo'l): l = πR = 3,14 · 10 = 31,4 m. Yarim aylanada jism diametrning qarama-qarshi uchiga o'tadi, shuning uchun ko'chish diametrga teng: s = 2R = 20 m.<br><b>Javob:</b> l = 31,4 m; s = 20 m.</div>
            </div>

            <div class="qa-card">
              <span class="badge-lvl lvl-hard">Murakkab</span><b>5-masala:</b> Radiusi R = 10 m bo'lgan aylana bo'ylab harakatlanayotgan jism aylananing 1/4 qismini o'tdi. Yo'l ko'chishdan necha marta katta (π ≈ 3,14)?
              <div style="margin-top:6px;"><button class="sim-btn" onclick="this.parentElement.nextElementSibling.style.display='block'">📐 Yechim va javob</button></div>
              <div class="qa-ans"><b>Yechim:</b> Yo'l: l = 2πR / 4 = πR / 2. Aylananing 1/4 qismida radiuslar 90° burchak hosil qiladi, shuning uchun ko'chish (vatar): s = √(R<sup>2</sup> + R<sup>2</sup>) = R√2. Nisbat: l / s = (πR / 2) / (R√2) = π / (2√2) ≈ 3,14 / 2,828 ≈ 1,11 marta.<br><b>Javob:</b> ≈ 1,11 marta katta.</div>
            </div>

            <div class="qa-card">
              <span class="badge-lvl lvl-hard">Murakkab</span><b>6-masala:</b> Avtomobil avval sharqqa 3 km, keyin shimolga 4 km va yana sharqqa 9 km yurdi. Avtomobilning umumiy ko'chishini toping.
              <div style="margin-top:6px;"><button class="sim-btn" onclick="this.parentElement.nextElementSibling.style.display='block'">📐 Yechim va javob</button></div>
              <div class="qa-ans"><b>Yechim:</b> Sharqqa jami ko'chish (X o'qi): s<sub>x</sub> = 3 + 9 = 12 km. Shimolga ko'chish (Y o'qi): s<sub>y</sub> = 4 km. Umumiy ko'chish: s = √(12<sup>2</sup> + 4<sup>2</sup>) = √(144 + 16) = √160 ≈ 12,65 km.<br><b>Javob:</b> ≈ 12,65 km.</div>
            </div>
          </div>

          <div class="lec-sec">
            <h3 class="lec-h3">📚 Foydalanilgan adabiyotlar</h3>
            <ol class="lit-list">
              <li><b>P. Habibullayev, A. Boydedayev, A. Bahromov.</b> <i>Fizika</i> (Umumta'lim maktablari va akademik litseylar uchun darslik).</li>
              <li><b>N.Sh. Turdiyev.</b> <i>Fizika</i> (6–7-sinflar uchun darslik).</li>
              <li><b>M. O'lmasova.</b> <i>Fizika: Mexanika va molekulyar fizika</i> (Abituriyentlar va talabalar uchun o'quv qo'llanma).</li>
      
            </ol>
          </div>
        `,
        formulalar: [
          { formula: "s<sub>x</sub> = x − x<sub>0</sub>  va  s<sub>y</sub> = y − y<sub>0</sub>", izoh: "Ko'chishning X va Y koordinata o'qlaridagi proyeksiyalari (m)" },
          { formula: "s = √((x − x<sub>0</sub>)<sup>2</sup> + (y − y<sub>0</sub>)<sup>2</sup>)", izoh: "Tekislikda ko'chish modulini Pifagor teoremasi orqali topish formulasi (m)" },
          { formula: "l ≥ s", izoh: "Bosib o'tilgan yo'l (l) va ko'chish moduli (s) o'rtasidagi asosiy munosabat" }
        ],
        havolalar: [
          { nomi: "🧮 Kinematika kalkulyatori", url: "calc-kinematika.html" },
          { nomi: "📐 INNOVA masalalari", url: "kitob-innova.html" }
        ]
      }      ,
      {
        raqam: "1.2",
        nomi: "To'g'ri chiziqli tekis harakat. Tezlik va harakat tenglamasi",
              {
        raqam: "1.2",
        nomi: "To'g'ri chiziqli tekis harakat. Tezlik va harakat tenglamasi",
        url: "mavzu-1-2.html"
      }

        `
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
