/* ======================
   DATA & CONFIG
====================== */

const criteria = [
  "Letter Formation",
  "Composition & Balance",
  "Readability",
  "Creativity & Expression",
  "Overall Finish"
];

const data = [
  {
    e: "B",
    t: 46,
    w: true,
    a: "🥇 First Place",
    s: [9, 10, 9, 9, 9],
    c: "This composition demonstrates exceptional mastery in both structure and rhythm. The balance of positive and negative space is confident, and the letterforms show disciplined control without stiffness. The work reflects spiritual depth and compositional maturity, making it a deserving first-place entry."
  },
  {
    e: "A",
    t: 40,
    w: true,
    a: "🥈 Second Place",
    s: [8, 8, 8, 8, 8],
    c: "A refined and elegant composition with consistent letter proportions. The strokes are controlled and confident, showing strong understanding of classical principles. With slightly more expressive contrast, this work could reach even greater impact."
  },
  {
    e: "C",
    t: 40,
    w: true,
    a: "🥈 Second Place",
    s: [9, 9, 8, 8, 6],
    c: "This piece stands out for its dynamic flow and confident movement. The overall structure is strong, though certain finishing elements slightly reduce clarity. Nonetheless, the artistic intention and visual energy are commendable."
  },
  {
    e: "E",
    t: 37,
    w: true,
    a: "🥉 Third Place",
    s: [8, 8, 7, 7, 7],
    c: "A balanced and visually pleasing work that reflects sincere effort. The composition is stable and readable, with room for further refinement in stroke confidence and expressive detailing."
  },
  {
    e: "H",
    t: 37,
    w: true,
    a: "🥉 Third Place",
    s: [8, 8, 7, 7, 7],
    c: "This artwork shows creative use of spacing and rhythm. While the structure is sound, slight variations in letter weight affect uniformity. Overall, it is a thoughtful and expressive piece."
  },

  {
    e: "J",
    t: 38,
    s: [8, 8, 8, 7, 7],
    c: "Graceful execution with refined control. The work maintains clarity and harmony throughout, showing a solid understanding of balance and proportion."
  },
  {
    e: "I",
    t: 35,
    s: [7, 7, 8, 6, 7],
    c: "Clear readability and calm composition define this piece. With increased confidence in stroke transitions, the visual impact could be enhanced."
  },
  {
    e: "M",
    t: 34,
    s: [7, 7, 6, 7, 7],
    c: "An energetic piece that reflects enthusiasm and experimentation. Greater consistency in letter structure would elevate the overall presentation."
  },
  {
    e: "F",
    t: 33,
    s: [7, 7, 6, 7, 6],
    c: "The dynamic form is engaging, though balance and spacing require further refinement. A promising effort with clear artistic intent."
  },
  {
    e: "L",
    t: 33,
    s: [7, 7, 6, 7, 6],
    c: "A dense and expressive composition. Improved spacing and rhythm would help enhance clarity and visual breathing room."
  },
  {
    e: "K",
    t: 32,
    s: [7, 6, 6, 7, 6],
    c: "Bold strokes and confident gestures are evident. Refining proportional accuracy will strengthen the composition further."
  },
  {
    e: "N",
    t: 32,
    s: [6, 7, 6, 7, 6],
    c: "A modern decorative approach with creative intent. Continued focus on structural consistency will improve overall impact."
  },
  {
    e: "D",
    t: 30,
    s: [6, 6, 7, 5, 6],
    c: "A sincere and simple presentation. With greater attention to balance and finish, this work can develop further."
  },
  {
    e: "G",
    t: 31,
    s: [6, 6, 7, 6, 6],
    c: "Minimalist in nature, this work carries elegance through restraint. Slight enhancement in contrast would add strength."
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

function switchTab(tab) {
  document.querySelectorAll(".tab").forEach(b => b.classList.remove("active"));
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
          <img src="${d.e}.png" alt="Entry ${d.e}">
        </div>

        <button class="view">View detailed evaluation</button>

        <div class="details">
          ${criteria.map((c,i)=>`
            <div class="row">
              <span>${c}</span>
              <span>${d.s[i]}/10</span>
            </div>
          `).join("")}
          <p><strong>Jury Note:</strong> ${d.c}</p>
        </div>
      `;

      const btn = card.querySelector(".view");
      const details = card.querySelector(".details");

      btn.onclick = () => {
        details.classList.toggle("open");
        btn.textContent = details.classList.contains("open")
          ? "Hide evaluation"
          : "View detailed evaluation";
      };

      cards.appendChild(card);
    });
}
