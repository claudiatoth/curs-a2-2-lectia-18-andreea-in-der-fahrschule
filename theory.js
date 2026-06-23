// ============================================
// TEORIE - A2.2 Lecția 18: Andreea in der Fahrschule
// Claudia Toth · Annettes Deutschkurs
// Relativsätze — pronume relative der/die/das (Nom/Akk/Dat); fundamentul A2 (fără prepoziții = B1)
// Sursă DF: Lectia 18 (Relativpronomen — INT368/369/373/374; temă Fahrschule/Verkehr; recap Präteritum vorbit INT365)
// ============================================

const theoryHTML = `
    <!-- 0: Intro -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(0)">
            <span>🚗 1. Ce sunt propozițiile relative? (Relativsätze)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-0">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-0')" id="btn-audio-0">▶</button>
                    <audio id="audio-0" preload="none"><source src="audio/01-intro.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="cast-banner">
                <h4>🎭 Personajele lecției</h4>
                <div class="cast-grid">
                    <div class="cast-card"><img src="images/andreea.png" alt="Andreea"><span class="name">Andreea</span><span class="detail">La școala de șoferi 🚗</span></div>
                    <div class="cast-card"><img src="images/carolina.png" alt="Carolina"><span class="name">Carolina</span><span class="detail">Are deja permisul 📸</span></div>
                    <div class="cast-card"><img src="images/mihai.png" alt="Mihai"><span class="name">Mihai</span><span class="detail">Bucătar · Potsdam</span></div>
                    <div class="cast-card"><img src="images/annette.png" alt="Annette"><span class="name">Annette</span><span class="detail">Profesoara · Berlin</span></div>
                    <div class="cast-card"><img src="images/florian.png" alt="Florian"><span class="name">Florian</span><span class="detail">Doctor · Berlin</span></div>
                    <div class="cast-card"><img src="images/acar.png" alt="Acar"><span class="name">Acar</span><span class="detail">Maistru · Oranienburg</span></div>
                </div>
            </div>

            <div class="theory-box">
                <h4>📖 Povestea</h4>
                <p>Andreea s-a înscris la <strong>școala de șoferi</strong> (Fahrschule). Ca să povestească despre instructor, despre mașină și despre colegi, are nevoie să <strong>descrie substantivele</strong> — și exact pentru asta sunt propozițiile relative:</p>
                <div class="example-box">
                    <p class="de">Das ist der Fahrlehrer, <strong>der</strong> sehr geduldig ist. <span style="color:#5A5147;">(Acesta e instructorul CARE e foarte răbdător.)</span></p>
                    <p class="de">Das ist das Auto, <strong>das</strong> ich fahre. <span style="color:#5A5147;">(Aceasta e mașina PE CARE o conduc.)</span></p>
                    <p class="de">Das ist das Kind, <strong>dem</strong> ich helfe. <span style="color:#5A5147;">(Acesta e copilul CĂRUIA îi ajut.)</span></p>
                </div>
            </div>

            <div class="theory-box info-box">
                <h4>🧭 Cum funcționează</h4>
                <p style="margin:0 0 8px;">O propoziție relativă descrie un substantiv (numit <strong>Bezugswort</strong>). Reguli de aur:</p>
                <ul style="margin:0;">
                    <li><strong>Virgulă</strong> înainte de pronumele relativ.</li>
                    <li>Pronumele relativ (<strong>der/die/das…</strong>) preia <strong>genul + numărul</strong> din Bezugswort.</li>
                    <li><strong>Cazul</strong> (Nom/Akk/Dat) vine din rolul pronumelui ÎN propoziția relativă.</li>
                    <li><strong>Verbul</strong> merge la <strong>FINAL</strong> (e o propoziție subordonată).</li>
                </ul>
            </div>

            <div class="theory-box">
                <h4>🗺️ Ce vezi în lecție</h4>
                <ul>
                    <li><strong>2.</strong> Nominativ — <strong>der/die/das/die</strong> („care" — subiect)</li>
                    <li><strong>3.</strong> Akkusativ — <strong>den/die/das/die</strong> („pe care" — obiect direct)</li>
                    <li><strong>4.</strong> Dativ — <strong>dem/der/dem/denen</strong> („căruia/căreia")</li>
                    <li><strong>5.</strong> Cum alegi + recap + dialog (Andreea la școala de șoferi)</li>
                </ul>
            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea zice:</div>
                    <em>Pronumele relativ seamănă aproape perfect cu articolul hotărât (der/die/das…). Doar UNA e diferită: la <strong>Dativ plural = denen</strong> (nu „den"). Restul îl știi deja! 🦋</em>
                </div>
            </div>

            <!-- ===== SCHREIBWERKSTATT ===== -->
            <div style="background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%); border: 2px solid #10B981; border-radius: 14px; padding: 24px 22px; margin-top: 22px; text-align: center; box-shadow: 0 2px 8px rgba(16, 185, 129, 0.12);">
                <div style="font-size: 2.2rem; margin-bottom: 4px;">✍️</div>
                <h4 style="color: #065f46; font-size: 1.2rem; margin: 0 0 8px; font-weight: bold;">Schreibwerkstatt — vrei să-ți corectez textul?</h4>
                <p style="color: #047857; font-size: 0.95rem; margin: 0 0 16px; max-width: 540px; margin-left: auto; margin-right: auto; line-height: 1.5;">
                    Scrie 6 propoziții relative care descriu oameni și lucruri din viața ta: „Das ist der Mann, der… / die Frau, die ich kenne… / das Kind, dem ich helfe…" — folosește Nominativ, Akkusativ ȘI Dativ. <strong>Min. 60 cuvinte.</strong> Îți răspund personal pe email. 🦋
                </p>
                <a href="https://forms.gle/KUcNpypyEBLwfrbL6" target="_blank" rel="noopener noreferrer" style="display: inline-block; background: #10B981; color: white; padding: 13px 30px; border-radius: 10px; text-decoration: none; font-weight: bold; font-size: 1rem; box-shadow: 0 2px 6px rgba(16, 185, 129, 0.3);">
                    Trimite textul Claudiei →
                </a>
                <p style="color: #5A5147; font-size: 0.78rem; margin-top: 12px; font-style: italic;">
                    ʚଓ Răspuns personal pe email · Nu uita să-ți treci adresa de email în formular
                </p>
            </div>
        </div>
    </div>

    <!-- 1: Nominativ -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(1)">
            <span>🟢 2. Nominativ — der/die/das/die („care", subiect)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-1">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-1')" id="btn-audio-1">▶</button>
                    <audio id="audio-1" preload="none"><source src="audio/02-nominativ.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="theory-box">
                <h4>🔑 Regula</h4>
                <p style="margin:0;">Când pronumele relativ e <strong>subiectul</strong> propoziției relative (face acțiunea), e la <strong>Nominativ</strong>. Formele sunt identice cu articolul hotărât:</p>
            </div>

            <table class="grammar-table">
                <thead>
                    <tr><th>Bezugswort</th><th>Pronume relativ (Nom)</th><th>Exemplu</th></tr>
                </thead>
                <tbody>
                    <tr><td>masculin (der Mann)</td><td><strong>der</strong></td><td>Das ist der Mann, <strong>der</strong> hier wohnt.</td></tr>
                    <tr><td>feminin (die Frau)</td><td><strong>die</strong></td><td>Das ist die Frau, <strong>die</strong> Auto fährt.</td></tr>
                    <tr><td>neutru (das Kind)</td><td><strong>das</strong></td><td>Das ist das Kind, <strong>das</strong> dort spielt.</td></tr>
                    <tr><td>plural (die Leute)</td><td><strong>die</strong></td><td>Das sind die Leute, <strong>die</strong> hier parken.</td></tr>
                </tbody>
            </table>

            <div class="theory-box info-box">
                <h4>💡 Genul din Bezugswort, verbul la final</h4>
                <p style="margin:0;">Das ist <strong>der Fahrlehrer</strong>, <strong>der</strong> sehr geduldig <strong>ist</strong>. <em>(masculin → der; verbul „ist" la final)</em><br>
                Das ist <strong>die Prüfung</strong>, <strong>die</strong> nächste Woche <strong>kommt</strong>. <em>(feminin → die)</em></p>
            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea zice:</div>
                    <em>La Nominativ e cel mai ușor: der/die/das/die = exact ca articolul. Întreabă-te „cine face acțiunea în propoziția relativă?" → acela e subiectul. 🦋</em>
                </div>
            </div>
        </div>
    </div>

    <!-- 2: Akkusativ -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(2)">
            <span>🔵 3. Akkusativ — den/die/das/die („pe care", obiect)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-2">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-2')" id="btn-audio-2">▶</button>
                    <audio id="audio-2" preload="none"><source src="audio/03-akkusativ.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="theory-box">
                <h4>🔑 Regula</h4>
                <p style="margin:0;">Când pronumele relativ e <strong>obiectul direct</strong> al propoziției relative (cineva îl vede/cumpără/cunoaște), e la <strong>Akkusativ</strong>. <strong>Doar masculinul se schimbă</strong> (der → <strong>den</strong>); restul rămâne ca la Nominativ:</p>
            </div>

            <table class="grammar-table">
                <thead>
                    <tr><th>Bezugswort</th><th>Pronume relativ (Akk)</th><th>Exemplu</th></tr>
                </thead>
                <tbody>
                    <tr><td>masculin (der Mann)</td><td><strong>den</strong></td><td>Das ist der Mann, <strong>den</strong> ich kenne.</td></tr>
                    <tr><td>feminin (die Frau)</td><td><strong>die</strong></td><td>Das ist die Frau, <strong>die</strong> ich sehe.</td></tr>
                    <tr><td>neutru (das Auto)</td><td><strong>das</strong></td><td>Das ist das Auto, <strong>das</strong> ich fahre.</td></tr>
                    <tr><td>plural (die Leute)</td><td><strong>die</strong></td><td>Das sind die Leute, <strong>die</strong> ich treffe.</td></tr>
                </tbody>
            </table>

            <div class="theory-box" style="background:#F5F0E8; border-left-color:#D4A574;">
                <h4>⚡ Truc: cine face / pe cine?</h4>
                <p style="margin:0;">În propoziția relativă există DEJA un subiect (ich, du, Carolina…). Atunci pronumele relativ e <strong>obiectul</strong> → Akkusativ.<br>
                Das ist der Sessel, <strong>den</strong> Carolina gekauft hat. <em>(Carolina = subiect; den = obiect → den)</em></p>
            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea zice:</div>
                    <em>Nominativ vs Akkusativ: dacă pronumele relativ FACE acțiunea → der (Nom). Dacă cineva ÎL face pe el (îl văd, îl cunosc) → den (Akk). Doar masculinul diferă! 🦋</em>
                </div>
            </div>
        </div>
    </div>

    <!-- 3: Dativ -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(3)">
            <span>🟣 4. Dativ — dem/der/dem/denen („căruia/căreia")</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-3">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-3')" id="btn-audio-3">▶</button>
                    <audio id="audio-3" preload="none"><source src="audio/04-dativ.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="theory-box">
                <h4>🔑 Regula</h4>
                <p style="margin:0;">Când în propoziția relativă verbul cere <strong>Dativ</strong> (helfen, geben, danken, gehören…), pronumele relativ e la <strong>Dativ</strong>. Atenție la plural:</p>
            </div>

            <table class="grammar-table">
                <thead>
                    <tr><th>Bezugswort</th><th>Pronume relativ (Dat)</th><th>Exemplu</th></tr>
                </thead>
                <tbody>
                    <tr><td>masculin (der Junge)</td><td><strong>dem</strong></td><td>Das ist der Junge, <strong>dem</strong> ich helfe.</td></tr>
                    <tr><td>feminin (die Frau)</td><td><strong>der</strong></td><td>Das ist die Frau, <strong>der</strong> ich danke.</td></tr>
                    <tr><td>neutru (das Kind)</td><td><strong>dem</strong></td><td>Das ist das Kind, <strong>dem</strong> ich helfe.</td></tr>
                    <tr><td>plural (die Kinder)</td><td><strong>denen</strong> ⚠️</td><td>Das sind die Kinder, <strong>denen</strong> ich helfe.</td></tr>
                </tbody>
            </table>

            <div class="theory-box" style="background:#F5F0E8; border-left-color:#D4A574;">
                <h4>⚠️ Capcana: Dativ plural = denen (nu „den"!)</h4>
                <p style="margin:0;">Singura formă care NU arată ca articolul hotărât este <strong>denen</strong> (Dativ plural). La articol e „den" (den Kindern), dar pronumele relativ e <strong>denen</strong>:<br>
                Das sind die Gäste, <strong>denen</strong> das Essen geschmeckt hat. <em>(le-a plăcut mâncarea oaspeților)</em></p>
            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea zice:</div>
                    <em>Cum recunoști Dativul? Verbul din propoziția relativă cere Dativ: <strong>helfen</strong> (a ajuta cuiva), <strong>geben</strong> (a da cuiva), <strong>danken</strong> (a mulțumi cuiva), <strong>gehören</strong> (a aparține cuiva). 🦋</em>
                </div>
            </div>
        </div>
    </div>

    <!-- 4: Cum alegi + recap + dialog -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(4)">
            <span>🗣️ 5. Cum alegi + recap + dialog</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-4">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-4')" id="btn-audio-4">▶</button>
                    <audio id="audio-4" preload="none"><source src="audio/05-recap-dialog.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="theory-box">
                <h4>🎯 Schema în 2 pași</h4>
                <p style="margin:0 0 6px;"><strong>Pas 1:</strong> Genul + numărul → din <strong>Bezugswort</strong> (substantivul descris).<br>
                <strong>Pas 2:</strong> Cazul → din <strong>rolul în propoziția relativă</strong>: subiect → Nom · obiect direct → Akk · verb/prepoziție Dativ → Dat.</p>
                <table class="grammar-table">
                    <thead><tr><th>Caz</th><th>masc</th><th>fem</th><th>neutru</th><th>plural</th></tr></thead>
                    <tbody>
                        <tr><td><strong>Nom</strong></td><td>der</td><td>die</td><td>das</td><td>die</td></tr>
                        <tr><td><strong>Akk</strong></td><td>den</td><td>die</td><td>das</td><td>die</td></tr>
                        <tr><td><strong>Dat</strong></td><td>dem</td><td>der</td><td>dem</td><td><strong>denen</strong></td></tr>
                    </tbody>
                </table>
                <p style="margin:6px 0 0;"><em>Aproape ca articolul hotărât — doar <strong>denen</strong> (Dat pl) e diferit.</em></p>
            </div>

            <div class="theory-box" style="border-left-color:#047857;">
                <h4>📝 Recap rapid</h4>
                <ul>
                    <li>Virgulă înainte de pronumele relativ; verbul la FINAL.</li>
                    <li>Gen + număr din Bezugswort; caz din rolul în propoziția relativă.</li>
                    <li><strong>Nom</strong> der/die/das/die · <strong>Akk</strong> den/die/das/die · <strong>Dat</strong> dem/der/dem/<strong>denen</strong>.</li>
                    <li>Akkusativ: doar masculinul se schimbă (der→den). Dativ plural: denen!</li>
                </ul>
            </div>

            <div class="theory-box">
                <h4>💬 Dialog: Andreea la școala de șoferi</h4>
                <p><strong style="color:#065f46;">Carolina:</strong> Und, wie ist die Fahrschule, <strong>die</strong> du gewählt hast?<br><span class="ro-translation">Și cum e școala de șoferi PE CARE ai ales-o?</span></p>
                <p><strong style="color:#065f46;">Andreea:</strong> Super! Der Fahrlehrer, <strong>der</strong> mich unterrichtet, ist sehr geduldig.<br><span class="ro-translation">Super! Instructorul CARE mă învață e foarte răbdător.</span></p>
                <p><strong style="color:#065f46;">Carolina:</strong> Und das Auto, <strong>das</strong> ihr fahrt?<br><span class="ro-translation">Și mașina PE CARE o conduceți?</span></p>
                <p><strong style="color:#065f46;">Andreea:</strong> Ein kleiner Golf, <strong>den</strong> ich schon ganz gut fahre. Es gibt nur einen Kollegen, <strong>dem</strong> alles egal ist. 😅<br><span class="ro-translation">Un Golf mic, PE CARE deja îl conduc destul de bine. E doar un coleg CĂRUIA îi e totul indiferent.</span></p>
                <p><strong style="color:#065f46;">Carolina:</strong> Hauptsache, du bestehst die Prüfung, <strong>die</strong> bald kommt! 😄<br><span class="ro-translation">Principalul e să treci examenul CARE vine curând!</span></p>
            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea zice:</div>
                    <em>Vezi alternanța? die (Akk fem, „pe care") · der (Nom masc, „care") · das (Akk neutru) · den (Akk masc) · dem (Dativ masc). Gen din substantiv, caz din rol. Viel Erfolg la examen! 🦋</em>
                </div>
            </div>
        </div>
    </div>
`;

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('theory-container');
    if (container) container.innerHTML = theoryHTML;
});
