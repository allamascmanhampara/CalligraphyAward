// Competition Data
const participants = [
    {
        id: 'B',
        name: 'Thasleema',
        total: 46,
        scores: [9, 10, 9, 9, 9],
        rank: 1,
        award: 'First Place',
        image: 'B.png',
        juryNote: 'Exceptional circular composition with intricate floral-calligraphic integration. The symmetry is masterful, with each petal containing beautifully formed script. The aged parchment effect and border detailing show superior craftsmanship. This piece demonstrates the highest level of technical skill and artistic vision. Your work stands as a testament to dedicated practice and deep understanding of classical Islamic calligraphic traditions.'
    },
    {
        id: 'C',
        name: 'Fathimath Shuhaiba Falila',
        total: 42,
        scores: [9, 9, 8, 8, 8],
        rank: 2,
        award: 'Second Place',
        image: 'C.png',
        juryNote: 'Stunning circular mandala design with perfect radial symmetry. The integration of multiple calligraphic phrases into a cohesive geometric pattern is remarkable. The balance between density and readability is expertly handled, creating a mesmerizing visual flow. Your ability to merge complex geometric principles with elegant script work showcases both mathematical precision and artistic sensibility.'
    },
    {
        id: 'A',
        name: 'Sauda',
        total: 42,
        scores: [9, 8, 8, 8, 9],
        rank: 2,
        award: 'Second Place',
        image: 'A.png',
        juryNote: 'Beautiful decorative border framing with elegant central calligraphy. The ornate frame shows intricate detail work, and the contrast between the decorated border and the clear central text creates excellent visual hierarchy. Your dedication to traditional ornamentation is commendable, and the balance achieved between embellishment and clarity demonstrates mature artistic judgment.'
    },
    {
        id: 'E',
        name: 'Sayyedath Ayshath Noufabi',
        total: 40,
        scores: [8, 8, 8, 8, 8],
        rank: 3,
        award: 'Third Place',
        image: 'E.png',
        juryNote: 'Bold vertical composition with strong visual impact. The elongated letterforms create dramatic presence and excellent use of negative space. Your modern aesthetic while maintaining traditional calligraphic integrity is impressive. The confidence in your strokes and the commanding presence of this piece demonstrate a unique contemporary voice that respects classical foundations while pushing boundaries.'
    },
    {
        id: 'H',
        name: 'Fathimath Raihana',
        total: 40,
        scores: [8, 8, 7, 9, 8],
        rank: 3,
        award: 'Third Place',
        image: 'H.png',
        juryNote: 'Striking use of red ink creates unique visual distinction. The circular seal-style composition is beautifully balanced, and the color choice adds cultural and artistic depth to the piece. Your bold decision to use color demonstrates creative confidence, and the execution maintains the dignity and gravitas appropriate to the sacred text. This piece stands out for its aesthetic courage.'
    },
    {
        id: 'K',
        name: 'Ayishath Shamna',
        total: 38,
        scores: [8, 8, 8, 7, 7],
        rank: 6,
        image: 'K.png',
        juryNote: 'Excellent technical execution with clear, readable script. Your attention to detail and consistency across letterforms is noteworthy. The composition is well-balanced and shows mature understanding of spatial relationships. Work on adding more creative expression and exploring dynamic variations while maintaining your strong technical foundation. Your disciplined approach is evident and admirable.'
    },
    {
        id: 'J',
        name: 'Mohammed Mahroof',
        total: 37,
        scores: [8, 7, 7, 8, 7],
        rank: 7,
        image: 'J.png',
        juryNote: 'Strong composition with good understanding of classical proportions. Your letterforms are well-executed and the piece has a dignified, traditional feel. The spacing and alignment demonstrate careful planning. Continue to refine your stroke confidence and explore subtle variations in thickness to add more dynamism to your work while preserving its classical elegance.'
    },
    {
        id: 'I',
        name: 'Fathima',
        total: 36,
        scores: [7, 7, 7, 8, 7],
        rank: 8,
        image: 'I.png',
        juryNote: 'Your work displays good technical competence and thoughtful composition. The letterforms show careful construction and the overall presentation is clean and professional. Continue to develop your unique stylistic voice by studying diverse calligraphic traditions. Focus on building greater expressiveness while maintaining your evident technical discipline.'
    },
    {
        id: 'M',
        name: 'Fidha Fathima',
        total: 36,
        scores: [7, 7, 7, 8, 7],
        rank: 8,
        image: 'M.png',
        juryNote: 'Good foundational work with clear potential for growth. Your composition shows logical structure and the letterforms are carefully rendered. Focus on developing more fluid stroke transitions and exploring greater contrast in your work. Your methodical approach will serve you well as you continue to develop both technical skills and artistic confidence.'
    },
    {
        id: 'N',
        name: 'Ayishath Husna',
        total: 34,
        scores: [7, 7, 6, 7, 7],
        rank: 10,
        image: 'N.png',
        juryNote: 'A sincere effort showing understanding of basic calligraphic principles. Your work demonstrates careful attention and neat presentation. Continue to practice regularly, focusing on building confidence in your strokes and exploring different compositional arrangements. Every master calligrapher began with dedication to fundamentals, and your commitment to learning is the most important foundation for future excellence.'
    },
    {
        id: 'F',
        name: 'Muhammed Ajeer',
        total: 33,
        scores: [7, 7, 6, 7, 6],
        rank: 11,
        image: 'F.png',
        juryNote: 'Your work shows promising technical foundation and good spatial awareness. The letterforms are carefully crafted, and there is clear effort in achieving harmonious composition. Focus on developing more confidence in your stroke work and experiment with varying weights to add more visual interest. Your attention to detail will serve you well as you continue to develop your calligraphic voice.'
    },
    {
        id: 'G',
        name: 'Rashid',
        total: 33,
        scores: [6, 7, 6, 7, 7],
        rank: 11,
        image: 'G.png',
        juryNote: 'A commendable effort showing good grasp of basic principles. Your composition demonstrates thoughtful planning and the overall finish is neat. Continue practicing fundamental stroke techniques to build greater fluency and consistency. Pay attention to the rhythm and flow between letters. With persistent practice, your natural abilities will flourish.'
    },
    {
        id: 'D',
        name: 'Fathimath Jafna',
        total: 33,
        scores: [7, 6, 6, 7, 7],
        rank: 11,
        image: 'D.png',
        juryNote: 'A solid composition showing good understanding of fundamental calligraphic principles. Your letterforms demonstrate careful attention and the overall layout is well-considered. Continue to work on refining stroke consistency and exploring more dynamic spacing arrangements. With continued practice, your natural sense of balance will develop into even more compelling compositions.'
    },
    {
        id: 'L',
        name: 'Jasmina',
        total: 33,
        scores: [7, 6, 7, 7, 6],
        rank: 11,
        image: 'L.png',
        juryNote: 'Your work demonstrates earnest effort and developing skill. The composition is organized and shows awareness of fundamental principles. Continue practicing stroke control and letter proportions. Study master calligraphers\' works closely to understand the subtle nuances that create visual harmony. Your dedication is apparent, and with continued practice, you will see significant growth.'
    }
];

const criteriaNames = [
    'Letter Formation',
    'Composition & Balance',
    'Readability',
    'Creativity & Expression',
    'Overall Finish'
];

// Sort participants by rank and total score
participants.sort((a, b) => {
    if (a.rank !== b.rank) return a.rank - b.rank;
    return b.total - a.total;
});

let currentTab = 'winners';

// Show results page
function showResults() {
    document.getElementById('landingPage').classList.remove('active');
    document.getElementById('resultsPage').classList.add('active');
    renderWinners();
    renderLeaderboard();
}

// Show tab
function showTab(tab) {
    currentTab = tab;
    
    // Update tab buttons
    document.getElementById('winnersTab').classList.toggle('active', tab === 'winners');
    document.getElementById('fullListTab').classList.toggle('active', tab === 'fullList');
    
    // Show/hide sections
    document.getElementById('winnersSection').style.display = tab === 'winners' ? 'block' : 'none';
    document.getElementById('fullListSection').style.display = tab === 'fullList' ? 'block' : 'none';
}

// Render winners section
function renderWinners() {
    const winnersGrid = document.getElementById('winnersGrid');
    const winners = participants.filter(p => p.rank <= 3);
    
    winnersGrid.innerHTML = winners.map(participant => `
        <div class="winner-card ${getRankClass(participant.rank)}">
            <div class="award-badge">
                ${getTrophySVG(participant.rank)}
                <div class="award-text">${participant.award}</div>
            </div>
            <img src="${participant.image}" alt="${participant.name}" class="winner-image">
            <div class="winner-name">${participant.name}</div>
            <div class="winner-score">${participant.total}/50</div>
            <button class="view-details-btn" onclick="toggleDetails('${participant.id}')">
                <span class="detail-toggle" id="toggle-${participant.id}">View Detailed Score</span>
            </button>
            <div class="entry-details" id="details-${participant.id}">
                <h3 style="color: #FFD700; margin-bottom: 15px; text-align: center;">Detailed Scoring</h3>
                <div class="detailed-scores">
                    ${participant.scores.map((score, index) => `
                        <div class="score-item">
                            <div class="score-category">${criteriaNames[index]}</div>
                            <div class="score-value">${score}/10</div>
                        </div>
                    `).join('')}
                </div>
                <div class="jury-note">
                    <h4>Jury's Assessment</h4>
                    <p>${participant.juryNote}</p>
                </div>
            </div>
        </div>
    `).join('');
}

// Render complete leaderboard
function renderLeaderboard() {
    const leaderboard = document.getElementById('leaderboard');
    
    leaderboard.innerHTML = participants.map(participant => `
        <div class="entry-item">
            <div class="entry-header">
                <div class="entry-left">
                    <img src="${participant.image}" alt="${participant.name}" class="entry-image-small">
                    <div class="entry-name">${participant.name}</div>
                </div>
                <div class="entry-score">
                    <div class="score-number">${participant.total}</div>
                    <div class="score-label">out of 50</div>
                </div>
            </div>
            <button class="view-details-btn" onclick="toggleDetails('${participant.id}')">
                <span class="detail-toggle" id="toggle-${participant.id}-list">View Detailed Score</span>
            </button>
            <div class="entry-details" id="details-${participant.id}-list">
                <h3 style="color: #FFD700; margin-bottom: 15px;">Detailed Scoring</h3>
                <div class="detailed-scores">
                    ${participant.scores.map((score, index) => `
                        <div class="score-item">
                            <div class="score-category">${criteriaNames[index]}</div>
                            <div class="score-value">${score}/10</div>
                        </div>
                    `).join('')}
                </div>
                <div class="jury-note">
                    <h4>Jury's Assessment</h4>
                    <p>${participant.juryNote}</p>
                </div>
            </div>
        </div>
    `).join('');
}

// Toggle details
function toggleDetails(id) {
    const suffix = currentTab === 'fullList' ? '-list' : '';
    const detailsElement = document.getElementById(`details-${id}${suffix}`);
    const toggleElement = document.getElementById(`toggle-${id}${suffix}`);
    
    if (detailsElement.classList.contains('active')) {
        detailsElement.classList.remove('active');
        toggleElement.textContent = 'View Detailed Score';
    } else {
        detailsElement.classList.add('active');
        toggleElement.textContent = 'Hide Detailed Score';
    }
}

// Helper functions
function getRankClass(rank) {
    if (rank === 1) return 'first';
    if (rank === 2) return 'second';
    if (rank === 3) return 'third';
    return '';
}

function getTrophySVG(rank) {
    const colors = {
        1: '#FFD700',
        2: '#C0C0C0',
        3: '#CD7F32'
    };
    
    const color = colors[rank] || '#999';
    
    return `
        <svg class="trophy-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="trophy-gradient-${rank}" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color:${color};stop-opacity:1" />
                    <stop offset="100%" style="stop-color:${adjustBrightness(color, -20)};stop-opacity:1" />
                </linearGradient>
                <filter id="glow-${rank}">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>
            <path d="M6 9C6 6.79086 7.79086 5 10 5H14C16.2091 5 18 6.79086 18 9V10C18 12.2091 16.2091 14 14 14H10C7.79086 14 6 12.2091 6 10V9Z" 
                  fill="url(#trophy-gradient-${rank})" filter="url(#glow-${rank})"/>
            <path d="M12 14V17" stroke="${color}" stroke-width="2" stroke-linecap="round" filter="url(#glow-${rank})"/>
            <path d="M9 19H15" stroke="${color}" stroke-width="2" stroke-linecap="round" filter="url(#glow-${rank})"/>
            <path d="M5 7H6V9C6 9.55228 5.55228 10 5 10H4C3.44772 10 3 9.55228 3 9V8C3 7.44772 3.44772 7 4 7H5Z" 
                  fill="url(#trophy-gradient-${rank})" filter="url(#glow-${rank})"/>
            <path d="M19 7H18V9C18 9.55228 18.4477 10 19 10H20C20.5523 10 21 9.55228 21 9V8C21 7.44772 20.5523 7 20 7H19Z" 
                  fill="url(#trophy-gradient-${rank})" filter="url(#glow-${rank})"/>
            <circle cx="12" cy="8" r="1.5" fill="white" opacity="0.6"/>
        </svg>
    `;
}

function adjustBrightness(color, percent) {
    const num = parseInt(color.replace('#', ''), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const G = (num >> 8 & 0x00FF) + amt;
    const B = (num & 0x0000FF) + amt;
    return '#' + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
        (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
        (B < 255 ? B < 1 ? 0 : B : 255))
        .toString(16).slice(1);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('landingPage').classList.add('active');
});