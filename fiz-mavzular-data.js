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
          <div class="lec-sec">
            <h3 class="lec-h3">1. Mexanikaning asosiy masalasi va sanoq sistemasi</h3>
            <p><strong>Mexanika</strong> — jismlarning mexanik harakati va o'zaro ta'sirini o'rganuvchi fizika bo'limi. <strong>Mexanikaning asosiy masalasi</strong> — istalgan <em>t</em> vaqt momentida jismning fazodagi vaziyatini (koordinatalarini) aniqlashdir.</p>
            <p><strong>Sanoq sistemasi</strong> uchta elementdan iborat: 1) sanoq jismi; 2) unga bog'langan koordinatalar sistemasi (OX, OY, OZ); 3) vaqtni o'lchovchi soat.</p>
            <h3 class="lec-h3">2. Moddiy nuqta. Traektoriya, yo'l va ko'chish</h3>
            <p><strong>Moddiy nuqta</strong> — ko'rilayotgan sharoitda o'lchamlari va shaklini hisobga olmasa ham bo'ladigan jism.</p>
            <p><strong>Traektoriya</strong> — jismning fazoda harakatlanishida qoldirgan izi (chizig'i). <strong>Yo'l (l)</strong> — traektoriya uzunligi (skalyar, l ≥ 0). <strong>Ko'chish (s)</strong> — jismning boshlang'ich vaziyatini oxirgi vaziyati bilan tutashtiruvchi yo'nalishli kesma (vektor). Har doim <strong>l ≥ |s|</strong>.</p>
          </div>
        `,
        formulalar: [
          { formula: "s<sub>x</sub> = x − x<sub>0</sub> va s<sub>y</sub> = y − y<sub>0</sub>", izoh: "Ko'chish vektorining koordinata o'qlaridagi proyeksiyalari (m)" },
          { formula: "s = √((x − x<sub>0</sub>)<sup>2</sup> + (y − y<sub>0</sub>)<sup>2</sup>)", izoh: "Ko'chish modulini Pifagor teoremasi orqali topish formulasi (m)" },
          { formula: "l ≥ s", izoh: "Bosib o'tilgan yo'l (l) va ko'chish moduli (s) o'rtasidagi asosiy munosabat" }
        ],
        havolalar: [
          { nomi: "🧮 Kinematika kalkulyatori", url: "calc-kinematika.html" },
          { nomi: "📘 INNOVA masalalari", url: "kitob-innova.html" }
        ]
      },
      {
        raqam: "1.2",
        nomi: "To'g'ri chiziqli tekis harakat. Tezlik vektori, harakat tenglamalari va nisbiylik",
        url: "mavzu-1-2.html"
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
    tavsif: "Elektrostatika, o'zgarmas tok, magnit maydon va elektromagnetizm",
    mavzular: []
  },
  {
    id: "tebranishlar",
    ikonka: "〰️",
    bobNomi: "4. Tebranishlar va to'lqinlari",
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
