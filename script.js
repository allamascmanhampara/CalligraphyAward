console.log("script.js loaded");

/* ======================
   JUDGING CRITERIA
====================== */
const criteria = [
  "Letter Formation",
  "Composition & Balance",
  "Readability",
  "Creativity & Expression",
  "Overall Finish"
];

/* ======================
   ENTRIES DATA (A–N)
   o = display order (used for winners)
====================== */
const data = [
  {
    e: "B",
    o: 1,
    t: 46,
    w: true,
    a: "🥇 First Place",
    s: [9, 10, 9, 9, 9],
    c: "This composition demonstrates exceptional mastery in structure, rhythm, and balance. The confident letterforms and harmonious spacing reflect deep understanding and maturity, making it a highly deserving first-place entry."
  },
  {
    e: "C",
    o: 2,
    t: 40,
    w: true,
    a: "🥈 Second Place",
    s: [9, 9, 8, 8, 6],
    c: "This work stands out for its dynamic movement and confident rhythm. Minor finishing details affect clarity, yet the artistic intent remains strong."
  },
  {
    e: "A",
    o: 3,
    t: 40,
    w: true,
    a: "🥈 Second Place",
    s: [8, 8, 8, 8, 8],
    c: "A refined and elegant composition with disciplined strokes and consistent proportions. With slightly stronger contrast, the visual impact could be further elevated."
  },
  {
    e: "E",
    o: 4,
    t: 37,
    w: true,
    a: "🥉 Third Place",
    s: [8, 8, 7, 7, 7],
    c: "A balanced and visually pleasing piece that reflects sincere effort and steady control."
  },
  {
    e: "H",
    o: 5,
    t: 37,
    w: true,
    a: "🥉 Third Place",
    s: [8, 8, 7, 7, 7],
    c: "Creative use of spacing and rhythm defines this artwork. Slight variations in weight affect uniformity."
  },

  { e: "J", t: 38, w: false, s: [8, 8, 8, 7, 7], c: "Graceful execution with refined control and clear composition." },
  { e: "I", t: 35, w: false, s: [7, 7, 8, 6, 7], c: "Clear readability and calm structure define this piece." },
  { e: "M", t: 34, w: false, s: [7, 7, 6, 7, 7], c: "Energetic strokes showing experimentation and enthusiasm." },
  { e: "F", t: 33, w: false, s: [7, 7, 6, 7, 6], c: "Dynamic form with room for balance improvement." },
  { e: "L", t: 33, w: false, s: [7, 7, 6, 7, 6], c: "Dense composition needing better spacing." },
  { e: "K", t: 32, w: false, s: [7, 6, 6, 7, 6], c: "Bold gestures with scope for proportional refinement." },
  { e: "N", t: 32, w: false, s: [6, 7, 6, 7, 6], c: "Decorative approach with creative intent." },
  { e: "D", t: 30, w: false, s: [6, 6, 7, 5, 6], c: "Simple and sincere execution reflecting genuine effort." },
  { e: "G", t: 31, w: false, s: [6, 6, 7, 6, 6], c: "Minimalist elegance through restraint." }
];

/* ======================
   LANDING → RESULTS
====================== */
function openResults() {
  const landing = document.getElementById("landing");
  const results = document.getElementById("results");

  landing.classList.remove("active");
  results.classList.add("active");

  render("winners");
}

/* ======================
   TAB SWITCHING
====================== */
function switchTab(tab) {
  document.querySelectorAll(".tab").forEach(btn =>
    btn.classList.remove("active")
  );
  event.target.classList.add("active");

  render(tab);
}

/* ======================
   RENDER CARDS
====================== */
const cards = document.getElementById("cards");

function render(filter) {
  cards.innerHTML = "";

  data
    .filter(d => filter === "all" || d.w)
    .sort((a, b) => (a.o || 999) - (b.o || 999))
    .forEach(d => {
      const card = document.createElement("div");
      card.className = "card" + (d.w ? " winner" : "");

      card.innerHTML = `
        <div class="top">
          <div>
            <div class="entry">Entry ${d.e}</div>
            ${d.a ? `<div class="badge">${d.a}</div>` : ""}
          </div>
          <div class="score">${d.t}</div>
        </div>

        <div class="artwork">
          <img src="${d.e}.png" alt="Entry ${d.e}" onclick="expandImage('${d.e}.png')">
        </div>

        <button class="view">View detailed evaluation</button>

        <div class="details">
          <table class="marks-table">
            ${criteria.map((c, i) => `
              <tr>
                <td>${c}</td>
                <td>${d.s[i]} / 10</td>
              </tr>
            `).join("")}
          </table>

          <p class="jury-note">
            <strong>Jury Note:</strong> ${d.c}
          </p>
        </div>
      `;

      const btn = card.querySelector(".view");
      const details = card.querySelector(".details");

      btn.onclick = () => {
        const open = details.classList.toggle("open");
        btn.textContent = open
          ? "Hide detailed evaluation"
          : "View detailed evaluation";
      };

      cards.appendChild(card);
    });
}

/* ======================
   IMAGE MODAL
====================== */
function expandImage(src) {
  const modal = document.getElementById("imageModal");
  modal.style.display = "flex";
  modal.querySelector("img").src = src;
}

function closeImage() {
  document.getElementById("imageModal").style.display = "none";
}
