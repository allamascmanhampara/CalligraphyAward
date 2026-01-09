const criteria = [
  "Composition & Balance",
  "Stroke Quality",
  "Proportion & Structure",
  "Rhythm & Flow",
  "Overall Impact"
];

const data = [
  {e:"A",n:"Sauda",t:40,s:[8,8,8,8,8],
   c:"A refined and elegant composition marked by disciplined strokes and consistent proportions. The visual rhythm is calm and controlled, reflecting a thoughtful approach. With slightly stronger contrast and finishing confidence, the artwork could achieve greater visual authority."},
  {e:"B",n:"Thasleema",t:46,s:[9,10,9,9,9],
   c:"This work demonstrates exceptional mastery of structure, rhythm, and proportion. Confident letterforms and balanced spacing reflect deep understanding of classical principles. The composition feels mature, authoritative, and visually resolved."},
  {e:"C",n:"Fathimath Shuhaiba Falila",t:40,s:[9,9,8,8,6],
   c:"An energetic and expressive composition with strong movement and confident strokes. The flow is engaging and dynamic. Minor finishing inconsistencies slightly affect clarity, yet the artistic intent remains strong."},
  {e:"D",n:"Fathima",t:30,s:[6,6,7,5,6],
   c:"A sincere and honest execution reflecting genuine effort. While basic structure is present, greater attention to balance, spacing, and finishing would help the work mature visually."},
  {e:"E",n:"Sayyedath Ayshath Noufabi",t:37,s:[8,8,7,7,7],
   c:"A balanced and readable piece showing steady control and thoughtful composition. Further refinement in stroke confidence would enhance expression and visual strength."},
  {e:"F",n:"Muhammed Ajeer",t:33,s:[7,7,6,7,6],
   c:"Dynamic letterforms convey expressive intent and enthusiasm. Improvements in spacing and proportional consistency would strengthen clarity and structure."},
  {e:"G",n:"Rashid",t:31,s:[6,6,7,6,6],
   c:"A minimalist approach marked by restraint and simplicity. Slight enhancement in contrast would add strength and confidence."},
  {e:"H",n:"Fathimath Raihana",t:37,s:[8,8,7,7,7],
   c:"Creative use of spacing and rhythm defines this composition. While uniformity varies slightly, the overall structure remains thoughtful and expressive."},
  {e:"I",n:"Fathimath Jafna",t:35,s:[7,7,8,6,7],
   c:"Clear readability and calm structure characterize this piece. Greater confidence in transitions would enhance impact."},
  {e:"J",n:"Mohammed Mahroof",t:38,s:[8,8,8,7,7],
   c:"A graceful execution marked by refined control and balanced composition, producing a visually pleasing result."},
  {e:"K",n:"Ayishath Shamna",t:32,s:[7,6,6,7,6],
   c:"Bold gestures and confident strokes are evident. Refinement of proportions would improve clarity and balance."},
  {e:"L",n:"Jasmina",t:33,s:[7,7,6,7,6],
   c:"A dense and expressive composition. Improved spacing would allow the work to breathe more effectively."},
  {e:"M",n:"Fidha Fathima",t:34,s:[7,7,6,7,7],
   c:"Energetic execution reflecting experimentation and enthusiasm. Structural consistency would strengthen presentation."},
  {e:"N",n:"Ayishath Husna",t:32,s:[6,7,6,7,6],
   c:"A decorative approach with creative intent. Continued focus on discipline and structure will enhance development."}
];

const viewBtn = document.getElementById("viewResultsBtn");
const results = document.getElementById("results");
const cards = document.getElementById("cards");

viewBtn.onclick = () => {
  document.querySelector(".landing").style.display = "none";
  results.classList.remove("hidden");
};

data.forEach(d => {
  const card = document.createElement("article");
  card.className = "entry-card";

  card.innerHTML = `
    <div class="entry-header">
      <div>
        <div class="entry-id">Entry ${d.e}</div>
        <div class="artist-name">${d.n}</div>
      </div>
      <div class="total-score">${d.t}</div>
    </div>

    <button class="view-more-btn">View more</button>

    <div class="details-panel">
      <table class="marks-table">
        ${criteria.map((c,i)=>`
          <tr>
            <td>${c}</td>
            <td>${d.s[i]} / 10</td>
          </tr>
        `).join("")}
      </table>
      <p class="jury-note"><strong>Jury Note:</strong> ${d.c}</p>
    </div>
  `;

  const btn = card.querySelector(".view-more-btn");
  const panel = card.querySelector(".details-panel");

  btn.onclick = () => {
    panel.classList.toggle("open");
    btn.textContent = panel.classList.contains("open")
      ? "Hide details"
      : "View more";
  };

  cards.appendChild(card);
});