// ============================================
// FLASHCARDS - A2.2 Lecția 18: Andreea in der Fahrschule
// Claudia Toth · 32 carduri: concept + Nominativ + Akkusativ + Dativ + model + vocab Fahrschule
// REGULĂ: NICIODATĂ ghilimele interne ASCII — emfază cu CAPS; EXACT 6 ghilimele ASCII per linie
// ============================================

const flashcardsData = [
    // === Concept (6) ===
    { de: "der Relativsatz", ro: "propoziția relativă (descrie un substantiv)", audio: "audio/letters/r-relativsatz.wav" },
    { de: "das Bezugswort", ro: "substantivul descris (dă genul + numărul)", audio: "audio/letters/r-bezugswort.wav" },
    { de: "der/die/das (Nominativ)", ro: "pronume relativ subiect — care", audio: "audio/letters/r-nom.wav" },
    { de: "den/die/das (Akkusativ)", ro: "pronume relativ obiect — pe care", audio: "audio/letters/r-akk.wav" },
    { de: "dem/der/dem (Dativ)", ro: "pronume relativ — căruia/căreia", audio: "audio/letters/r-dat.wav" },
    { de: "denen (Dativ Plural)", ro: "capcana: Dativ plural = denen, nu den (cărora)", audio: "audio/letters/r-denen.wav" },

    // === Nominativ (6) ===
    { de: "der Mann, der hier wohnt", ro: "bărbatul care locuiește aici", audio: "audio/letters/n-mann.wav" },
    { de: "die Frau, die Auto fährt", ro: "femeia care conduce mașina", audio: "audio/letters/n-frau.wav" },
    { de: "das Kind, das dort spielt", ro: "copilul care se joacă acolo", audio: "audio/letters/n-kind.wav" },
    { de: "die Leute, die hier parken", ro: "oamenii care parchează aici", audio: "audio/letters/n-leute.wav" },
    { de: "der Fahrlehrer, der geduldig ist", ro: "instructorul care e răbdător", audio: "audio/letters/n-fahrlehrer.wav" },
    { de: "die Prüfung, die bald kommt", ro: "examenul care vine curând", audio: "audio/letters/n-pruefung.wav" },

    // === Akkusativ (6) ===
    { de: "der Film, den ich gut finde", ro: "filmul pe care îl găsesc bun", audio: "audio/letters/a-film.wav" },
    { de: "die Frau, die ich kenne", ro: "femeia pe care o cunosc", audio: "audio/letters/a-frau.wav" },
    { de: "das Auto, das ich fahre", ro: "mașina pe care o conduc", audio: "audio/letters/a-auto.wav" },
    { de: "der Mann, den die Polizei sucht", ro: "bărbatul pe care îl caută poliția", audio: "audio/letters/a-mann.wav" },
    { de: "der Sessel, den Carolina gekauft hat", ro: "fotoliul pe care l-a cumpărat Carolina", audio: "audio/letters/a-sessel.wav" },
    { de: "die Leute, die ich treffe", ro: "oamenii pe care îi întâlnesc", audio: "audio/letters/a-leute.wav" },

    // === Dativ (6) ===
    { de: "der Junge, dem ich helfe", ro: "băiatul căruia îi ajut", audio: "audio/letters/d-junge.wav" },
    { de: "die Frau, der ich danke", ro: "femeia căreia îi mulțumesc", audio: "audio/letters/d-frau.wav" },
    { de: "das Kind, dem ich helfe", ro: "copilul căruia îi ajut", audio: "audio/letters/d-kind.wav" },
    { de: "die Kinder, denen ich helfe", ro: "copiii cărora le ajut (denen!)", audio: "audio/letters/d-kinder.wav" },
    { de: "der Typ, dem alles egal ist", ro: "tipul căruia îi e totul indiferent", audio: "audio/letters/d-typ.wav" },
    { de: "die Gäste, denen das Essen schmeckt", ro: "oaspeții cărora le place mâncarea", audio: "audio/letters/d-gaeste.wav" },

    // === Model & capcane (4) ===
    { de: "Komma + Verb am Ende", ro: "virgulă + verbul la final (subordonată)", audio: "audio/letters/m-komma.wav" },
    { de: "Genus vom Bezugswort", ro: "genul din substantivul descris", audio: "audio/letters/m-genus.wav" },
    { de: "Kasus von der Rolle", ro: "cazul din rolul în propoziția relativă", audio: "audio/letters/m-kasus.wav" },
    { de: "denen ist nicht den", ro: "Dativ plural = denen, NU den", audio: "audio/letters/m-denen.wav" },

    // === Vocabular Fahrschule (4) ===
    { de: "die Fahrschule", ro: "școala de șoferi", audio: "audio/letters/v-fahrschule.wav" },
    { de: "der Fahrlehrer", ro: "instructorul auto", audio: "audio/letters/v-fahrlehrer.wav" },
    { de: "der Führerschein", ro: "permisul de conducere", audio: "audio/letters/v-fuehrerschein.wav" },
    { de: "die Prüfung", ro: "examenul", audio: "audio/letters/v-pruefung.wav" }
];

let currentCard = 0;
let isFlipped = false;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 ${flashcardsData.length} flashcards cu pronunție.</strong><br>
            Apasă pe card pentru a vedea traducerea · butonul 🔊 pentru pronunție · navigare cu săgețile.
        </div>
        <div class="flashcard-counter">
            Card <span id="card-num">1</span> / ${flashcardsData.length}
        </div>
        <div class="flashcard" id="flashcard" onclick="flipCard()">
            <button class="flashcard-audio-btn" onclick="playCardAudio(event)" title="Ascultă">🔊</button>
            <div class="flashcard-content">
                <div class="de" id="card-de"></div>
                <div class="ro" id="card-ro"></div>
            </div>
            <div class="flashcard-hint" id="card-hint">Click pentru traducere</div>
        </div>
        <div class="flashcard-nav">
            <button class="btn btn-prev" onclick="prevCard()">← Anterior</button>
            <button class="btn btn-next" onclick="nextCard()">Următor →</button>
        </div>
    `;
    updateCard();
}

function updateCard() {
    const card = flashcardsData[currentCard];
    const fc = document.getElementById('flashcard');
    document.getElementById('card-de').textContent = card.de;
    document.getElementById('card-ro').textContent = card.ro;
    if (fc) fc.classList.toggle('flipped', isFlipped);
    document.getElementById('card-hint').textContent = isFlipped ? 'Click pentru DE' : 'Click pentru RO';
    document.getElementById('card-num').textContent = currentCard + 1;
}

function flipCard() {
    isFlipped = !isFlipped;
    updateCard();
}

function nextCard() {
    if (currentCard < flashcardsData.length - 1) {
        currentCard++;
        isFlipped = false;
        updateCard();
    }
}

function prevCard() {
    if (currentCard > 0) {
        currentCard--;
        isFlipped = false;
        updateCard();
    }
}

function playCardAudio(event) {
    event.stopPropagation();
    const card = flashcardsData[currentCard];
    if (card.audio) {
        const audio = new Audio(card.audio);
        audio.play().catch(err => console.log('Audio nu poate fi redat:', err));
    }
}

document.addEventListener('DOMContentLoaded', buildFlashcards);
