console.log("script.js loaded");

/* === HARD LANDING SWITCH FIX === */
window.openResults = function () {
  const landing = document.getElementById("landing");
  const results = document.getElementById("results");

  }

  landing.style.display = "none";
  results.style.display = "none";

  // ensure correct layout
  results.style.minHeight = "100vh";

  if (typeof render === "function") {
    render("winners");
  }
};/* ======================
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
   Each entry has:
   - e : Entry ID
   - t : Total score
   - w : Winner (true/false)
   - a : Award label (if winner)
   - s : Scores array (5 criteria)
   - c : FULL jury paragraph
====================== */
const data = [
  {
    e: "B",
    t: 46,
    w: true,
    a: "🥇 First Place",
    s: [9, 10, 9, 9, 9],
    c: "This composition demonstrates exceptional mastery in structure, rhythm, and balance. The letterforms are confident and disciplined, while the spacing between elements creates a harmonious visual flow. The work reflects both spiritual depth and technical maturity, making it a highly deserving first-place entry."
  },
  {
    e: "C",
    t: 40,
    w: true,
    a: "🥈 Second Place",
    s: [9, 9, 8, 8, 6],
    c: "This work stands out for its dynamic movement and confident rhythm. The overall structure is strong, though certain finishing details slightly affect clarity. Nevertheless, the artistic intention and visual energy are clearly expressed."
{
  },
e: "A",
    t: 40,
    w: true,
    a: "🥈 Second Place",
    s: [8, 8, 8, 8, 8],
    c: "A refined and elegant composition with consistent proportions and controlled strokes. The artist shows a strong understanding of classical principles. With slightly greater contrast and expressive emphasis, the work could achieve even stronger visual impact."
  },
  {
    e: "E",
    t: 37,
    w: true,
    a: "🥉 Third Place",
    s: [8, 8, 7, 7, 7],
    c: "A balanced and visually pleasing piece that reflects sincere effort and steady control. The composition is stable and readable, with room for further refinement in stroke confidence and expressive detailing."
  },
  {
    e: "H",
    t: 37,
    w: true,
    a: "🥉 Third Place",
    s: [8, 8, 7, 7, 7],
    c: "This artwork shows creative use of spacing and rhythm. While the structure is sound, slight variations in letter weight affect overall uniformity. It remains a thoughtful and expressive submission."
  },
  {
    e: "J",
    t: 38,
    w: false,
    s: [8, 8, 8, 7, 7],
    c: "Graceful execution with refined control is evident throughout this work. The composition maintains clarity and harmony, demonstrating a solid understanding of balance and proportion."
  },
  {
    e: "I",
    t: 35,
    w: false,
    s: [7, 7, 8, 6, 7],
    c: "Clear readability and a calm, composed structure define this piece. With increased confidence in stroke transitions, the overall visual impact could be enhanced."
  },
  {
    e: "M",
    t: 34,
    w: false,
    s: [7, 7, 6, 7, 7],
    c: "An energetic and expressive piece that reflects experimentation and enthusiasm. Greater consistency in letter structure would help strengthen the composition further."
  },
  {
    e: "F",
    t: 33,
    w: false,
    s: [7, 7, 6, 7, 6],
    c: "The dynamic form of this work is engaging, though balance and spacing require further refinement. A promising effort with clear artistic intent."
  },
  {
    e: "L",
    t: 33,
    w: false,
    s: [7, 7, 6, 7, 6],
    c: "A dense and expressive composition that conveys strong intent. Improved spacing and rhythmic flow would enhance clarity and visual breathing room."
  },
  {
    e: "K",
    t: 32,
    w: false,
    s: [7, 6, 6, 7, 6],
    c: "Bold strokes and confident gestures are apparent in this work. Refining proportional accuracy will significantly strengthen the overall composition."
  },
  {
    e: "N",
    t: 32,
    w: false,
    s: [6, 7, 6, 7, 6],
    c: "A modern decorative approach with creative intent. Continued focus on structural consistency and stroke discipline will improve overall impact."
  },
  {
    e: "D",
    t: 30,
    w: false,
    s: [6, 6, 7, 5, 6],
    c: "A sincere and simple presentation that reflects genuine effort. With greater attention to balance and finishing, this work can develop further."
  },
  {
    e: "G",
    t: 31,
    w: false,
    s: [6, 6, 7, 6, 6],
    c: "Minimalist in nature, this work carries elegance through restraint. Slight enhancement in contrast and stroke confidence would add strength."
  }
];

/* ======================
   VIEW SWITCHING
====================== */
function openResults() {
  document.getElementById("landing").classList.remove("active");
  document.getElementById("results").classList.add("active");
  render("winners");
}

/* ======================
   TAB SWITCHING
====================== */
function switchTab(tab) {
  document.querySelectorAll(".tab").forEach(btn => btn.classList.remove("active"));
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
        const isOpen = details.classList.toggle("open");
        btn.textContent = isOpen
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
