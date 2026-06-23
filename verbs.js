// ============================================
// VERB-KONJUGATION - A2.2 Lecția 18: Andreea in der Fahrschule
// 6 verbe: wissen · denken · finden · fahren · helfen · kennen
// Verbele de Präteritum vorbit (wissen/denken/finden — INT365) + fahren (Fahrschule) + helfen (Dativ-Relativsatz) + kennen (Akk-Relativsatz)
// ============================================

const verbsData = [
    {
        inf: 'wissen', ro: 'a ști', typ: 'tare (Mischverb)', aux: 'haben', part: 'gewusst',
        praes: [
            ['ich','weiß','știu'],['du','weißt','știi'],['er/sie/es','weiß','știe'],
            ['wir','wissen','știm'],['ihr','wisst','știți'],['sie/Sie','wissen','știu']
        ],
        praet: [
            ['ich','wusste','știam'],['du','wusstest','știai'],['er/sie/es','wusste','știa'],
            ['wir','wussten','știam'],['ihr','wusstet','știați'],['sie/Sie','wussten','știau']
        ],
        perf: [
            ['ich','habe gewusst','am știut'],['du','hast gewusst','ai știut'],['er/sie/es','hat gewusst','a știut'],
            ['wir','haben gewusst','am știut'],['ihr','habt gewusst','ați știut'],['sie/Sie','haben gewusst','au știut']
        ],
        note: '🚨 Mischverb. În vorbire folosim DES Präteritum: „Das wusste ich nicht." (= Asta nu o știam.) Präsens: weiß (cu ß).'
    },
    {
        inf: 'denken', ro: 'a gândi', typ: 'tare (Mischverb)', aux: 'haben', part: 'gedacht',
        praes: [
            ['ich','denke','gândesc'],['du','denkst','gândești'],['er/sie/es','denkt','gândește'],
            ['wir','denken','gândim'],['ihr','denkt','gândiți'],['sie/Sie','denken','gândesc']
        ],
        praet: [
            ['ich','dachte','gândeam'],['du','dachtest','gândeai'],['er/sie/es','dachte','gândea'],
            ['wir','dachten','gândeam'],['ihr','dachtet','gândeați'],['sie/Sie','dachten','gândeau']
        ],
        perf: [
            ['ich','habe gedacht','am gândit'],['du','hast gedacht','ai gândit'],['er/sie/es','hat gedacht','a gândit'],
            ['wir','haben gedacht','am gândit'],['ihr','habt gedacht','ați gândit'],['sie/Sie','haben gedacht','au gândit']
        ],
        note: '🚨 Mischverb. În vorbire des la Präteritum: „Er dachte, dass…" (= El credea că…).'
    },
    {
        inf: 'finden', ro: 'a găsi / a considera', typ: 'tare (neregulat)', aux: 'haben', part: 'gefunden',
        praes: [
            ['ich','finde','găsesc'],['du','findest','găsești'],['er/sie/es','findet','găsește'],
            ['wir','finden','găsim'],['ihr','findet','găsiți'],['sie/Sie','finden','găsesc']
        ],
        praet: [
            ['ich','fand','găseam'],['du','fandest','găseai'],['er/sie/es','fand','găsea'],
            ['wir','fanden','găseam'],['ihr','fandet','găseați'],['sie/Sie','fanden','găseau']
        ],
        perf: [
            ['ich','habe gefunden','am găsit'],['du','hast gefunden','ai găsit'],['er/sie/es','hat gefunden','a găsit'],
            ['wir','haben gefunden','am găsit'],['ihr','habt gefunden','ați găsit'],['sie/Sie','haben gefunden','au găsit']
        ],
        note: '🚨 TARE. În Relativsatz Akkusativ: „der Film, den ich gut finde" (filmul pe care îl găsesc bun). Vorbit: „Ich fand…"'
    },
    {
        inf: 'fahren', ro: 'a conduce / a merge', typ: 'tare (neregulat)', aux: 'sein', part: 'gefahren',
        praes: [
            ['ich','fahre','conduc'],['du','fährst','conduci'],['er/sie/es','fährt','conduce'],
            ['wir','fahren','conducem'],['ihr','fahrt','conduceți'],['sie/Sie','fahren','conduc']
        ],
        praet: [
            ['ich','fuhr','conduceam'],['du','fuhrst','conduceai'],['er/sie/es','fuhr','conducea'],
            ['wir','fuhren','conduceam'],['ihr','fuhrt','conduceați'],['sie/Sie','fuhren','conduceau']
        ],
        perf: [
            ['ich','bin gefahren','am condus'],['du','bist gefahren','ai condus'],['er/sie/es','ist gefahren','a condus'],
            ['wir','sind gefahren','am condus'],['ihr','seid gefahren','ați condus'],['sie/Sie','sind gefahren','au condus']
        ],
        note: '🚨 TARE (a→ä: fährst/fährt) · Perfekt cu SEIN (mișcare). „das Auto, das ich fahre" (mașina pe care o conduc).'
    },
    {
        inf: 'helfen', ro: 'a ajuta (+ Dativ)', typ: 'tare (neregulat)', aux: 'haben', part: 'geholfen',
        praes: [
            ['ich','helfe','ajut'],['du','hilfst','ajuți'],['er/sie/es','hilft','ajută'],
            ['wir','helfen','ajutăm'],['ihr','helft','ajutați'],['sie/Sie','helfen','ajută']
        ],
        praet: [
            ['ich','half','ajutam'],['du','halfst','ajutai'],['er/sie/es','half','ajuta'],
            ['wir','halfen','ajutam'],['ihr','halft','ajutați'],['sie/Sie','halfen','ajutau']
        ],
        perf: [
            ['ich','habe geholfen','am ajutat'],['du','hast geholfen','ai ajutat'],['er/sie/es','hat geholfen','a ajutat'],
            ['wir','haben geholfen','am ajutat'],['ihr','habt geholfen','ați ajutat'],['sie/Sie','haben geholfen','au ajutat']
        ],
        note: '🚨 TARE (e→i: hilft) + cere Dativ. În Relativsatz Dativ: „das Kind, dem ich helfe" / plural „die Kinder, denen ich helfe".'
    },
    {
        inf: 'kennen', ro: 'a cunoaște', typ: 'tare (Mischverb)', aux: 'haben', part: 'gekannt',
        praes: [
            ['ich','kenne','cunosc'],['du','kennst','cunoști'],['er/sie/es','kennt','cunoaște'],
            ['wir','kennen','cunoaștem'],['ihr','kennt','cunoașteți'],['sie/Sie','kennen','cunosc']
        ],
        praet: [
            ['ich','kannte','cunoșteam'],['du','kanntest','cunoșteai'],['er/sie/es','kannte','cunoștea'],
            ['wir','kannten','cunoșteam'],['ihr','kanntet','cunoșteați'],['sie/Sie','kannten','cunoșteau']
        ],
        perf: [
            ['ich','habe gekannt','am cunoscut'],['du','hast gekannt','ai cunoscut'],['er/sie/es','hat gekannt','a cunoscut'],
            ['wir','haben gekannt','am cunoscut'],['ihr','habt gekannt','ați cunoscut'],['sie/Sie','haben gekannt','au cunoscut']
        ],
        note: '🚨 Mischverb (kannte → gekannt). În Relativsatz Akkusativ: „die Frau, die ich kenne" / „der Mann, den ich kenne".'
    }
];

function tenseTable(title, rows) {
    let r = '';
    rows.forEach(function (x) {
        r += '<tr><td><strong>' + x[0] + '</strong></td><td>' + x[1] + '</td><td><em style="color:#5A5147;">' + x[2] + '</em></td></tr>';
    });
    return '<div class="theory-box" style="margin:8px 0;"><h4>' + title + '</h4><table class="grammar-table"><tr><th>Pronume</th><th>Germană</th><th>Traducere RO</th></tr>' + r + '</table></div>';
}

function perfektCompact(v) {
    const exampleRow = v.perf[2] || v.perf[0];
    const exSubj = exampleRow[0] || 'er';
    return '<div class="theory-box" style="margin:8px 0; background:#d1fae5;">' +
        '<h4>Perfekt (pe scurt)</h4>' +
        '<p style="margin:0;">Auxiliar <strong>' + v.aux + '</strong> + participiul <strong>' + v.part + '</strong><br>' +
        '<em>Exemplu:</em> ' + exSubj + ' <strong>' + exampleRow[1] + '</strong> · <em style="color:#5A5147;">' + exampleRow[2] + '</em></p></div>';
}

function buildVerbs() {
    const container = document.getElementById('verbs-container');
    if (!container) return;
    let html = '' +
        '<div class="exercise-instruction">' +
        '<strong>🔁 6 verbe pentru propoziții relative & Fahrschule</strong> — Präsens + Präteritum (complet) · Perfekt (pe scurt).<br>' +
        'wissen/denken/finden (des la Präteritum în vorbire) + fahren (SEIN) + helfen (Dativ) + kennen — toate apar în Relativsätze.' +
        '</div>';

    html += '<div class="andreea-note" style="margin:12px 0;">' +
        '<img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">' +
        '<div class="andreea-note-content">' +
        '<div class="speaker">Andreea îți spune:</div>' +
        '<div class="text">„În vorbire, verbele <strong>wissen, denken, finden</strong> (și sein/haben/modalele) se folosesc des la <strong>Präteritum</strong>, nu la Perfekt: „Das wusste ich nicht", „Ich fand das gut". 🦋"</div>' +
        '</div></div>';

    verbsData.forEach(function (v, i) {
        const badge = v.typ.indexOf('tare') === 0 ? '#dc2626' : '#047857';
        html += '' +
            '<div class="sub-section">' +
            '<div class="sub-section-header" onclick="toggleVerb(' + i + ')">' +
            '<span>🔹 ' + v.inf + ' — <em>' + v.ro + '</em> · <strong style="color:' + badge + ';">' + v.typ + '</strong> · Perfekt cu <strong>' + v.aux + '</strong></span>' +
            '<span class="sub-arrow">▼</span>' +
            '</div>' +
            '<div class="sub-section-content" id="verb-' + i + '">' +
            tenseTable('Präsens (prezent)', v.praes) +
            tenseTable('Präteritum (imperfect / timp scris)', v.praet) +
            perfektCompact(v) +
            (v.note ? '<div class="andreea-note" style="margin-top:6px;"><img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar"><div class="andreea-note-content"><div class="speaker">Notă:</div><div class="text">' + v.note + '</div></div></div>' : '') +
            '</div></div>';
    });

    container.innerHTML = html;
}

function toggleVerb(i) {
    const content = document.getElementById('verb-' + i);
    if (!content) return;
    content.classList.toggle('active');
    const headers = document.querySelectorAll('#verbs-container .sub-section-header .sub-arrow');
    if (headers[i]) headers[i].classList.toggle('rotated');
}

buildVerbs();
