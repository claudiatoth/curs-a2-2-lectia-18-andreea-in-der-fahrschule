// ============================================
// EXERCIȚII - A2.2 Lecția 18: Andreea in der Fahrschule
// Claudia Toth · Relativsätze (der/die/das · den · dem/denen) · 5 exerciții
// Nominativ · Akkusativ · Dativ · alege · traducere
// ============================================

function normalizeAnswer(str) {
    return (str || '').toString().toLowerCase().trim()
        .replace(/ß/g, 'ss')
        .replace(/ä/g, 'a').replace(/ö/g, 'o').replace(/ü/g, 'u')
        .replace(/ae/g, 'a').replace(/oe/g, 'o').replace(/ue/g, 'u')
        .replace(/[ăâ]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't')
        .replace(/…/g, '...').replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ').replace(/\s*,\s*/g, ' ')
        .replace(/[.!?;:]/g, '').replace(/\s+/g, ' ').trim();
}

function answerMatches(userInput, acceptList) {
    const user = normalizeAnswer(userInput);
    if (!user) return false;
    return acceptList.some(target => {
        const t = normalizeAnswer(target);
        return user === t || user.includes(t) || t.includes(user);
    });
}

function answerExact(userInput, acceptList) {
    const user = normalizeAnswer(userInput);
    if (!user) return false;
    return acceptList.some(a => normalizeAnswer(a) === user);
}

// ============================================
// EX 1: Nominativ — der/die/das/die (10 itemi)
// ============================================
const ex1Data = [
    { id: 'a', prompt: 'Das ist der Mann, ____ hier wohnt.', hint: 'masculin → ?', correct: 'der', accept: ['der'] },
    { id: 'b', prompt: 'Das ist die Frau, ____ Auto fährt.', hint: 'feminin → ?', correct: 'die', accept: ['die'] },
    { id: 'c', prompt: 'Das ist das Kind, ____ dort spielt.', hint: 'neutru → ?', correct: 'das', accept: ['das'] },
    { id: 'd', prompt: 'Das sind die Leute, ____ hier parken.', hint: 'plural → ?', correct: 'die', accept: ['die'] },
    { id: 'e', prompt: 'Das ist der Fahrlehrer, ____ geduldig ist.', hint: 'masculin → ?', correct: 'der', accept: ['der'] },
    { id: 'f', prompt: 'Das ist die Prüfung, ____ bald kommt.', hint: 'feminin → ?', correct: 'die', accept: ['die'] },
    { id: 'g', prompt: 'Das ist das Auto, ____ schnell fährt.', hint: 'neutru → ?', correct: 'das', accept: ['das'] },
    { id: 'h', prompt: 'Das ist der Hund, ____ immer wegläuft.', hint: 'masculin → ?', correct: 'der', accept: ['der'] },
    { id: 'i', prompt: 'Das sind die Kinder, ____ Lärm machen.', hint: 'plural → ?', correct: 'die', accept: ['die'] },
    { id: 'j', prompt: 'Das ist das Mädchen, ____ dich begrüßt hat.', hint: 'neutru → ?', correct: 'das', accept: ['das'] }
];

function buildEx1() {
    const c = document.getElementById('ex1-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>📝 Completează pronumele relativ la Nominativ (subiectul).</strong><br>
        masculin → der · feminin → die · neutru → das · plural → die (ca articolul hotărât).
    </div>`;
    ex1Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <p style="margin-bottom:6px;"><strong>${it.prompt}</strong><br><em style="color:#5A5147; font-size:0.9rem;">${it.hint}</em></p>
                <input type="text" id="ex1-${it.id}" placeholder="der / die / das">
            </div>
            <div class="feedback" id="ex1-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx1() {
    let correct = 0;
    ex1Data.forEach(it => {
        const inp = document.getElementById(`ex1-${it.id}`);
        const fb = document.getElementById(`ex1-f${it.id}`);
        if (answerExact(inp.value, it.accept)) {
            fb.className = 'feedback correct';
            fb.textContent = `✓ Richtig! ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex1Data.length };
}

function resetEx1() {
    buildEx1();
    const s = document.getElementById('score-1');
    if (s) s.textContent = '';
}

// ============================================
// EX 2: Akkusativ — den/die/das/die (8 itemi)
// ============================================
const ex2Data = [
    { id: 'a', prompt: 'Das ist der Mann, ____ die Polizei sucht.', hint: 'masculin Akk → ?', correct: 'den', accept: ['den'] },
    { id: 'b', prompt: 'Das ist die Katze, ____ ihr gekauft habt.', hint: 'feminin Akk → ?', correct: 'die', accept: ['die'] },
    { id: 'c', prompt: 'Das ist das Bild, ____ der Maler gemalt hat.', hint: 'neutru Akk → ?', correct: 'das', accept: ['das'] },
    { id: 'd', prompt: 'Das ist der Film, ____ ich gut finde.', hint: 'masculin Akk → ?', correct: 'den', accept: ['den'] },
    { id: 'e', prompt: 'Das ist die Frau, ____ ich kenne.', hint: 'feminin Akk → ?', correct: 'die', accept: ['die'] },
    { id: 'f', prompt: 'Das ist das Auto, ____ ich fahre.', hint: 'neutru Akk → ?', correct: 'das', accept: ['das'] },
    { id: 'g', prompt: 'Das sind die Leute, ____ du gegrüßt hast.', hint: 'plural Akk → ?', correct: 'die', accept: ['die'] },
    { id: 'h', prompt: 'Das ist der Sessel, ____ Carolina gekauft hat.', hint: 'masculin Akk → ?', correct: 'den', accept: ['den'] }
];

function buildEx2() {
    const c = document.getElementById('ex2-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>🔵 Completează pronumele relativ la Akkusativ (obiectul direct).</strong><br>
        Doar masculinul se schimbă: der → den. die/das/die rămân ca la Nominativ.
    </div>`;
    ex2Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <p style="margin-bottom:6px;"><strong>${it.prompt}</strong><br><em style="color:#5A5147; font-size:0.9rem;">${it.hint}</em></p>
                <input type="text" id="ex2-${it.id}" placeholder="den / die / das">
            </div>
            <div class="feedback" id="ex2-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx2() {
    let correct = 0;
    ex2Data.forEach(it => {
        const inp = document.getElementById(`ex2-${it.id}`);
        const fb = document.getElementById(`ex2-f${it.id}`);
        if (answerExact(inp.value, it.accept)) {
            fb.className = 'feedback correct';
            fb.textContent = `✓ Richtig! ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex2Data.length };
}

function resetEx2() {
    buildEx2();
    const s = document.getElementById('score-2');
    if (s) s.textContent = '';
}

// ============================================
// EX 3: Dativ — dem/der/dem/denen (8 itemi)
// ============================================
const ex3Data = [
    { id: 'a', prompt: 'Das ist der Junge, ____ ich helfe.', hint: 'masculin Dat → ?', correct: 'dem', accept: ['dem'] },
    { id: 'b', prompt: 'Das ist die Frau, ____ ich danke.', hint: 'feminin Dat → ?', correct: 'der', accept: ['der'] },
    { id: 'c', prompt: 'Das ist das Kind, ____ ich helfe.', hint: 'neutru Dat → ?', correct: 'dem', accept: ['dem'] },
    { id: 'd', prompt: 'Das sind die Kinder, ____ ich helfe.', hint: 'plural Dat → ? (capcană!)', correct: 'denen', accept: ['denen'] },
    { id: 'e', prompt: 'Das ist der Mann, ____ du helfen wolltest.', hint: 'masculin Dat → ?', correct: 'dem', accept: ['dem'] },
    { id: 'f', prompt: 'Das sind die Gäste, ____ das Essen geschmeckt hat.', hint: 'plural Dat → ?', correct: 'denen', accept: ['denen'] },
    { id: 'g', prompt: 'Das ist die Freundin, ____ ich beim Umzug geholfen habe.', hint: 'feminin Dat → ?', correct: 'der', accept: ['der'] },
    { id: 'h', prompt: 'Das ist der Typ, ____ alles egal ist.', hint: 'masculin Dat → ?', correct: 'dem', accept: ['dem'] }
];

function buildEx3() {
    const c = document.getElementById('ex3-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>🟣 Completează pronumele relativ la Dativ (verb cu Dativ: helfen/danken/geben…).</strong><br>
        masculin → dem · feminin → der · neutru → dem · plural → <strong>denen</strong> (NU „den"!).
    </div>`;
    ex3Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <p style="margin-bottom:6px;"><strong>${it.prompt}</strong><br><em style="color:#5A5147; font-size:0.9rem;">${it.hint}</em></p>
                <input type="text" id="ex3-${it.id}" placeholder="dem / der / denen">
            </div>
            <div class="feedback" id="ex3-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx3() {
    let correct = 0;
    ex3Data.forEach(it => {
        const inp = document.getElementById(`ex3-${it.id}`);
        const fb = document.getElementById(`ex3-f${it.id}`);
        if (answerExact(inp.value, it.accept)) {
            fb.className = 'feedback correct';
            fb.textContent = `✓ Richtig! ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex3Data.length };
}

function resetEx3() {
    buildEx3();
    const s = document.getElementById('score-3');
    if (s) s.textContent = '';
}

// ============================================
// EX 4: Alege pronumele relativ corect (mix Nom/Akk/Dat) (8 itemi)
// ============================================
const ex4Data = [
    { id: 'a', text: 'Er ist jemand, ____ seine Familie sehr wichtig ist.', a: 'dem', b: 'den', correct: 'dem', expl: 'jemandem ist etwas wichtig → Dativ → dem.' },
    { id: 'b', text: 'Sie ist eine Frau, ____ immer fröhlich ist.', a: 'die', b: 'der', correct: 'die', expl: 'subiect (fröhlich ist) → Nominativ fem → die.' },
    { id: 'c', text: 'Das ist ein Kind, ____ sich oft streitet.', a: 'das', b: 'dem', correct: 'das', expl: 'subiect → Nominativ neutru → das.' },
    { id: 'd', text: 'Das sind die Frauen, ____ wir geholfen haben.', a: 'denen', b: 'die', correct: 'denen', expl: 'helfen + Dativ, plural → denen.' },
    { id: 'e', text: 'Das ist die Freundin, ____ ich oft treffe.', a: 'die', b: 'der', correct: 'die', expl: 'obiect (ich treffe) → Akkusativ fem → die.' },
    { id: 'f', text: 'Kennst du den Mann, ____ nebenan wohnt?', a: 'der', b: 'den', correct: 'der', expl: 'subiect (wohnt) → Nominativ masc → der.' },
    { id: 'g', text: 'Das ist das Mädchen, ____ das Eis nicht geschmeckt hat.', a: 'dem', b: 'das', correct: 'dem', expl: 'schmecken + Dativ → dem Mädchen → dem.' },
    { id: 'h', text: 'Das ist der Hund, ____ ich gestern fotografiert habe.', a: 'den', b: 'der', correct: 'den', expl: 'obiect (ich fotografiere) → Akkusativ masc → den.' }
];

function buildEx4() {
    const c = document.getElementById('ex4-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>🎯 Alege pronumele relativ corect.</strong><br>
        Gen din substantiv, caz din rol: subiect → Nom · obiect → Akk · verb cu Dativ (helfen/schmecken…) → Dat.
    </div>`;
    ex4Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <p style="margin-bottom:8px;"><strong>${it.text}</strong></p>
                <label style="display:block; margin-bottom:5px;"><input type="radio" name="ex4-${it.id}" value="${it.a}"> ${it.a}</label>
                <label style="display:block;"><input type="radio" name="ex4-${it.id}" value="${it.b}"> ${it.b}</label>
            </div>
            <div class="feedback" id="ex4-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx4() {
    let correct = 0;
    ex4Data.forEach(it => {
        const sel = document.querySelector(`input[name="ex4-${it.id}"]:checked`);
        const fb = document.getElementById(`ex4-f${it.id}`);
        if (sel && sel.value === it.correct) {
            fb.className = 'feedback correct';
            fb.textContent = `✓ Richtig! ${it.expl}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct} — ${it.expl}`;
        }
    });
    return { correct, total: ex4Data.length };
}

function resetEx4() {
    buildEx4();
    const s = document.getElementById('score-4');
    if (s) s.textContent = '';
}

// ============================================
// EX 5: Traduce în germană (propoziții relative) (10 itemi)
// ============================================
const ex5Data = [
    { id: 'a', ro: 'Acesta e bărbatul care locuiește aici.', correct: 'Das ist der Mann, der hier wohnt.', accept: ['das ist der mann der hier wohnt'] },
    { id: 'b', ro: 'Aceasta e femeia pe care o cunosc.', correct: 'Das ist die Frau, die ich kenne.', accept: ['das ist die frau die ich kenne'] },
    { id: 'c', ro: 'Aceasta e mașina pe care o conduc.', correct: 'Das ist das Auto, das ich fahre.', accept: ['das ist das auto das ich fahre'] },
    { id: 'd', ro: 'Acesta e copilul căruia îi ajut. (helfen + Dativ)', correct: 'Das ist das Kind, dem ich helfe.', accept: ['das ist das kind dem ich helfe'] },
    { id: 'e', ro: 'Aceștia sunt oamenii care locuiesc aici.', correct: 'Das sind die Leute, die hier wohnen.', accept: ['das sind die leute die hier wohnen'] },
    { id: 'f', ro: 'Acesta e instructorul care e răbdător. (der Fahrlehrer, geduldig)', correct: 'Das ist der Fahrlehrer, der geduldig ist.', accept: ['das ist der fahrlehrer der geduldig ist'] },
    { id: 'g', ro: 'Aceștia sunt copiii cărora le ajut. (Dativ plural!)', correct: 'Das sind die Kinder, denen ich helfe.', accept: ['das sind die kinder denen ich helfe'] },
    { id: 'h', ro: 'Aceasta e cartea pe care o citesc. (das Buch)', correct: 'Das ist das Buch, das ich lese.', accept: ['das ist das buch das ich lese'] },
    { id: 'i', ro: 'Acesta e prietenul pe care îl văd des. (der Freund, oft)', correct: 'Das ist der Freund, den ich oft sehe.', accept: ['das ist der freund den ich oft sehe'] },
    { id: 'j', ro: 'Aceasta e școala de șoferi pe care am ales-o. (wählen)', correct: 'Das ist die Fahrschule, die ich gewählt habe.', accept: ['das ist die fahrschule die ich gewählt habe', 'das ist die fahrschule die ich gewaehlt habe'] }
];

function buildEx5() {
    const c = document.getElementById('ex5-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>🗣️ Traduce în germană (propoziții relative).</strong> Virgulă + pronume relativ (der/die/das/den/dem/denen) + verbul la final.
    </div>`;
    ex5Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <p style="margin-bottom:6px;"><strong>🇷🇴 ${it.ro}</strong></p>
                <input type="text" id="ex5-${it.id}" placeholder="Scrie traducerea în germană...">
            </div>
            <div class="feedback" id="ex5-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx5() {
    let correct = 0;
    ex5Data.forEach(it => {
        const inp = document.getElementById(`ex5-${it.id}`);
        const fb = document.getElementById(`ex5-f${it.id}`);
        if (answerMatches(inp.value, it.accept)) {
            fb.className = 'feedback correct';
            fb.textContent = `✓ Richtig! ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex5Data.length };
}

function resetEx5() {
    buildEx5();
    const s = document.getElementById('score-5');
    if (s) s.textContent = '';
}

document.addEventListener('DOMContentLoaded', () => {
    buildEx1(); buildEx2(); buildEx3(); buildEx4(); buildEx5();
});
