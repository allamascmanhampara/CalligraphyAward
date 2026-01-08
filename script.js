const data = [
  // 🥇 FIRST
  {
    entry: "B",
    total: 46,
    award: "🥇 First Place",
    badge: "gold",
    winner: true,
    image: "B.png",
    scores: [9, 10, 9, 9, 9],
    comment: "Outstanding balance, depth, and spiritual presence."
  },

  // 🥈 SECOND (JOINT)
  {
    entry: "A",
    total: 40,
    award: "🥈 Second Place",
    badge: "silver",
    winner: true,
    image: "A.png",
    scores: [8, 8, 8, 8, 8],
    comment: "Elegant structure with disciplined strokes."
  },
  {
    entry: "C",
    total: 40,
    award: "🥈 Second Place",
    badge: "silver",
    winner: true,
    image: "C.png",
    scores: [9, 9, 8, 8, 6],
    comment: "Strong movement and confident composition."
  },

  // 🥉 THIRD (JOINT)
  {
    entry: "E",
    total: 37,
    award: "🥉 Third Place",
    badge: "bronze",
    winner: true,
    image: "E.png",
    scores: [8, 8, 7, 7, 7],
    comment: "Balanced form with expressive clarity."
  },
  {
    entry: "H",
    total: 37,
    award: "🥉 Third Place",
    badge: "bronze",
    winner: true,
    image: "H.png",
    scores: [8, 8, 7, 7, 7],
    comment: "Creative use of space and rhythm."
  },

  // OTHERS
  { entry:"J", total:38, image:"J.png", scores:[8,8,8,7,7], comment:"Graceful execution with refined control." },
  { entry:"I", total:35, image:"I.png", scores:[7,7,8,6,7], comment:"Clear readability with calm composition." },
  { entry:"M", total:34, image:"M.png", scores:[7,7,6,7,7], comment:"Energetic strokes, needs consistency." },
  { entry:"F", total:33, image:"F.png", scores:[7,7,6,7,6], comment:"Dynamic form with scope for balance." },
  { entry:"L", total:33, image:"L.png", scores:[7,7,6,7,6], comment:"Dense structure, expressive intent." },
  { entry:"K", total:32, image:"K.png", scores:[7,6,6,7,6], comment:"Bold strokes, needs proportional control." },
  { entry:"N", total:32, image:"N.png", scores:[6,7,6,7,6], comment:"Modern feel with decorative quality." },
  { entry:"D", total:30, image:"D.png", scores:[6,6,7,5,6], comment:"Simple and sincere execution." },
  { entry:"G", total:31, image:"G.png", scores:[6,6,7,6,6], comment:"Minimalist approach with elegance." }
];

const criteria = [
  "Letter Formation",
  "Composition & Balance",
  "Readability",
  "Creativity & Expression",
  "Overall Finish"
];

const cards = document.getElementById("cards");

/* RENDER */
function render(filter = "all") {
  cards.innerHTML = "";

  data
    .filter(d => filter === "all" || d.winner)
    .forEach(item => {
      const card = document.createElement("div");
      card.className = "card" + (item.winner ? " winner" : "");

      card.innerHTML = `
        <div class="top">
          <div>
            <div class="entry">Entry ${item.entry}</div>
            ${item.award ? `<div class="badge ${item.badge}">${item.award}</div>` : ""}
          </div>
          <div class="score">${item.total}</div>
        </div>

        <div class="artwork">
          <img src="${item.image}" alt="Calligraphy Entry ${item.entry}" loading="lazy">
        </div>

        <button class="view">View detailed marking</button>

        <div class="details">
          ${criteria.map((c,i)=>`
            <div class="row">
              <span>${c}</span>
              <span>${item.scores[i]}/10</span>
            </div>
          `).join("")}
          <p><strong>Jury note:</strong> ${item.comment}</p>
        </div>
      `;

      const btn = card.querySelector(".view");
      const details = card.querySelector(".details");

      btn.onclick = () => {
        details.classList.toggle("open");
        btn.textContent = details.classList.contains("open")
          ? "Hide details"
          : "View detailed marking";
      };

      cards.appendChild(card);
    });
}

/* INITIAL LOAD */
render();
