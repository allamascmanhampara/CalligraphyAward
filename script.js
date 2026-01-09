// Competition Data
const participants = [
    {
        id: 'A',
        name: 'Sauda',
        total: 42,
        scores: [9, 8, 8, 8, 9],
        rank: 2,
        award: '🥈 2nd Place',
        image: 'A.png',
        juryNote: 'Beautiful decorative border framing with elegant central calligraphy. The ornate frame shows intricate detail work, and the contrast between the decorated border and the clear central text creates excellent visual hierarchy. Your dedication to traditional ornamentation is commendable, and the balance achieved between embellishment and clarity demonstrates mature artistic judgment.'
    },
    {
        id: 'B',
        name: 'Thasleema',
        total: 46,
        scores: [9, 10, 9, 9, 9],
        rank: 1,
        award: '🥇 1st Place',
        image: 'B.png',
        juryNote: 'Exceptional circular composition with intricate floral-calligraphic integration. The symmetry is masterful, with each petal containing beautifully formed script. The aged parchment effect and border detailing show superior craftsmanship. This piece demonstrates the highest level of technical skill and artistic vision. Your work stands as a testament to dedicated practice and deep understanding of classical Islamic calligraphic traditions.'
    },
    {
        id: 'C',
        name: 'Fathimath Shuhaiba Falila',
        total: 42,
        scores: [9, 9, 8, 8, 8],
        rank: 2,
        award: '🥈 2nd Place',
        image: 'C.png',
        juryNote: 'Stunning circular mandala design with perfect radial symmetry. The integration of multiple calligraphic phrases into a cohesive geometric pattern is remarkable. The balance between density and readability is expertly handled, creating a mesmerizing visual flow. Your ability to merge complex geometric principles with elegant script work showcases both mathematical precision and artistic sensibility.'
    },
    {
        id: 'D',
        name: 'Fathimath Jafna',
        total: 33,
        scores: [7, 6, 6, 7, 7],
        rank: 10,
        image: 'D.png',
        juryNote: 'A solid composition showing good understanding of fundamental calligraphic principles. Your letterforms demonstrate careful attention and the overall layout is well-considered. Continue to work on refining stroke consistency and exploring more dynamic spacing arrangements. With continued practice, your natural sense of balance will develop into even more compelling compositions.'
    },
    {
        id: 'E',
        name: 'Sayyedath Ayshath Noufabi',
        total: 40,
        scores: [8, 8, 8, 8, 8],
        rank: 3,
        award: '🥉 3rd Place',
        image: 'E.png',
        juryNote: 'Bold vertical composition with strong visual impact. The elongated letterforms create dramatic presence and excellent use of negative space. Your modern aesthetic while maintaining traditional calligraphic integrity is impressive. The confidence in your strokes and the commanding presence of this piece demonstrate a unique contemporary voice that respects classical foundations while pushing boundaries.'
    },
    {
        id: 'F',
        name: 'Muhammed Ajeer',
        total: 33,
        scores: [7, 7, 6, 7, 6],
        rank: 10,
        image: 'F.png',
        juryNote: 'Your work shows promising technical foundation and good spatial awareness. The letterforms are carefully crafted, and there is clear effort in achieving harmonious composition. Focus on developing more confidence in your stroke work and experiment with varying weights to add more visual interest. Your attention to detail will serve you well as you continue to develop your calligraphic voice.'
    },
    {
        id: 'G',
        name: 'Rashid',
        total: 33,
        scores: [6, 7, 6, 7, 7],
        rank: 10,
        image: 'G.png',
        juryNote: 'A commendable effort showing good grasp of basic principles. Your composition demonstrates thoughtful planning and the overall finish is neat. Continue practicing fundamental stroke techniques to build greater fluency and consistency. Pay attention to the rhythm and flow between letters. With persistent practice, your natural abilities will flourish.'
    },
    {
        id: 'H',
        name: 'Fathimath Raihana',
        total: 40,
        scores: [8, 8, 7, 9, 8],
        rank: 3,
        award: '🥉 3rd Place',
        image: 'H.png',
        juryNote: 'Striking use of red ink creates unique visual distinction. The circular seal-style composition is beautifully balanced, and the color choice adds cultural and artistic depth to the piece. Your bold decision to use color demonstrates creative confidence, and the execution maintains the dignity and gravitas appropriate to the sacred text. This piece stands out for its aesthetic courage.'
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
        id: 'J',
        name: 'Mohammed Mahroof',
        total: 37,
        scores: [8, 7, 7, 8, 7],
        rank: 7,
        image: 'J.png',
        juryNote: 'Strong composition with good understanding of classical proportions. Your letterforms are well-executed and the piece has a dignified, traditional feel. The spacing and alignment demonstrate careful planning. Continue to refine your stroke confidence and explore subtle variations in thickness to add more dynamism to your work while preserving its classical elegance.'
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
        id: 'L',
        name: 'Jasmina',
        total: 33,
        scores: [7, 6, 7, 7, 6],
        rank: 10,
        image: 'L.png',
        juryNote: 'Your work demonstrates earnest effort and developing skill. The composition is organized and shows awareness of fundamental principles. Continue practicing stroke control and letter proportions. Study master calligraphers\' works closely to understand the subtle nuances that create visual harmony. Your dedication is apparent, and with continued practice, you will see significant growth.'
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
        rank: 14,
        image: 'N.png',
        juryNote: 'A sincere effort showing understanding of basic calligraphic principles. Your work demonstrates careful attention and neat presentation. Continue to practice regularly, focusing on building confidence in your strokes and exploring different compositional arrangements. Every master calligrapher began with dedication to fundamentals, and your commitment to learning is the most important foundation for future excellence.'
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

// Show results page
function showResults() {
    document.getElementById('landingPage').classList.remove('active');
    document.getElementById('resultsPage').classList.add('active');
    renderWinners();
    renderLeaderboard();
}

// Render winners section
function renderWinners() {
    const winnersGrid = document.getElementById('winnersGrid');
    const winners = participants.filter(p => p.rank <= 3);
    
    winnersGrid.innerHTML = winners.map(participant => `
        <div class="winner-card ${getRankClass(participant.rank)}" onclick="showEntryDetail('${participant.id}')">
            <div class="award-icon">${getAwardEmoji(participant.rank)}</div>
            <img src="${participant.image}" alt="${participant.name}" class="winner-image">
            <div class="winner-name">${participant.name}</div>
            <div class="winner-score">${participant.total}/50</div>
            <div class="winner-rank">${participant.award}</div>
        </div>
    `).join('');
}

// Render complete leaderboard
function renderLeaderboard() {
    const leaderboard = document.getElementById('leaderboard');
    
    leaderboard.innerHTML = participants.map(participant => `
        <div class="entry-item" onclick="showEntryDetail('${participant.id}')">
            <div class="entry-header">
                <div class="entry-info">
                    <div class="entry-rank">#${participant.rank}</div>
                    <img src="${participant.image}" alt="${participant.name}" class="entry-image-small">
                    <div class="entry-name">${participant.name}</div>
                </div>
                <div class="entry-score">
                    <div class="score-number">${participant.total}</div>
                    <div class="score-label">out of 50</div>
                </div>
            </div>
        </div>
    `).join('');
    
    leaderboard.innerHTML += '<p class="tap-hint">Tap any entry to view detailed scoring and jury notes</p>';
}

// Show entry detail modal
function showEntryDetail(id) {
    const participant = participants.find(p => p.id === id);
    const modal = document.getElementById('entryModal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <div class="modal-header">
            ${participant.rank <= 3 ? `<div class="award-icon">${getAwardEmoji(participant.rank)}</div>` : ''}
            <div class="modal-name">${participant.name}</div>
            <div class="modal-score">${participant.total}/50</div>
        </div>
        <div class="modal-body">
            <img src="${participant.image}" alt="${participant.name}" class="modal-image">
            
            <h3 style="text-align: center; color: #8b4513; margin-bottom: 20px;">Detailed Scoring</h3>
            <div class="detailed-scores">
                ${participant.scores.map((score, index) => `
                    <div class="score-item">
                        <div class="score-category">${criteriaNames[index]}</div>
                        <div class="score-value">${score}/10</div>
                    </div>
                `).join('')}
            </div>
            
            <div class="jury-note">
                <h3>Jury's Assessment</h3>
                <p>${participant.juryNote}</p>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
}

// Close modal
function closeModal() {
    document.getElementById('entryModal').classList.remove('active');
}

// Helper functions
function getRankClass(rank) {
    if (rank === 1) return 'first';
    if (rank === 2) return 'second';
    if (rank === 3) return 'third';
    return '';
}

function getAwardEmoji(rank) {
    if (rank === 1) return '🥇';
    if (rank === 2) return '🥈';
    if (rank === 3) return '🥉';
    return '';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('entryModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('landingPage').classList.add('active');
});
