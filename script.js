/* ====== DATA ====== */
const criteria = [
  "Letter Formation",
  "Composition & Balance",
  "Readability",
  "Creativity & Expression",
  "Overall Finish"
];

const data = [
  {
    e:"B", t:46, w:true, a:"🥇 First Place",
    s:[9,10,9,9,9],
    c:"This composition demonstrates exceptional mastery in structure and rhythm. The balance of space and stroke control reflects maturity and spiritual depth, making it a deserving first-place work."
  },
  {
    e:"A", t:40, w:true, a:"🥈 Second Place",
    s:[8,8,8,8,8],
    c:"A refined and elegant composition with disciplined letterforms. With slightly more expressive contrast, the impact could be further enhanced."
  },
  {
    e:"C", t:40, w:true, a:"🥈 Second Place",
    s:[9,9,8,8,6],
    c:"Strong movement and confident flow define this work. Minor finishing details affect clarity, but the artistic intention is commendable."
  },
  {
    e:"E", t:37, w:true, a:"🥉 Third Place",
    s:[8,8,7,7,7],
    c:"A balanced and visually pleasing piece showing sincere effort and control."
  },
  {
    e:"H", t:37, w:true, a:"🥉 Third Place",
    s:[8,8,7,7,7],
    c:"Creative use of rhythm and spacing. Greater consistency in weight would enhance uniformity."
  },

  {e:"J",t:38,s:[8,8,8,7,7],c:"Graceful execution with refined control."},
  {e:"I",t:35,s:[7,7,8,6,7],c:"Clear readability and calm composition."},
  {e:"M",t:34,s:[7,7,6,7,7],c:"Energetic strokes with experimental intent."},
  {e:"F",t:33,s:[7,7,6,7,6],c:"Dynamic form with room for balance improvement."},
  {e:"L",t:33,s:[7,7,6,7,6],c:"Dense composition needing more breathing space."},
  {e:"K",t:32,s:[7,6,6,7,6],c:"Bold gestures; proportion control needed."},
  {e:"N",t:32,s:[6,7,6,7,6],c:"Decorative approach with creative intent."},
  {e:"D",t:30,s:[6,6,7,5,6],c:"Simple and sincere execution."},
  {e:"G",t:31,s:[6,6,7,6,6],c:"Minimalist elegance with restraint."}
];

/* ====== VIEW SWITCH ====== */
function openResults() {
  document.getElementById("landing").classList.remove("active");
  document.getElementById("results").classList.add("active");
  render("winners");
}

/* ====== TABS ====== */
function switchTab(tab) {
  document.querySelectorAll(".tab").forEach(b=>b.classList.remove("active"));
  event.target.classList.add("active");
  render(tab);
}

/* ====== RENDER ====== */
const cards = document.getElementById("cards");

function render(filter) {
  cards.innerHTML = "";

  data
    .filter(d => filter === "all" || d.w)
    .forEach(d => {
      const el = document.createElement("div");
      el.className = "card" + (d.w ? " winner" : "");

      el.innerHTML = `
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
          <table class="marks-table">
            ${criteria.map((c,i)=>`
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

      const btn = el.querySelector(".view");
      const details = el.querySelector(".details");

      btn.onclick = () => {
        const open = details.classList.toggle("open");
        btn.textContent = open
          ? "Hide detailed evaluation"
          : "View detailed evaluation";
      };

      cards.appendChild(el);
    });
}

    const btn = el.querySelector(".view");
    const details = el.querySelector(".details");
    btn.onclick = ()=>{
      details.classList.toggle("open");
      btn.textContent = details.classList.contains("open")
        ? "Hide evaluation"
        : "View detailed evaluation";
    };

    cards.appendChild(el);
  });
}

/* ====== IMAGE MODAL ====== */
function expandImage(src) {
  const modal = document.getElementById("imageModal");
  modal.querySelector("img").src = src;
  modal.style.display = "flex";
}

function closeImage() {
  document.getElementById("imageModal").style.display = "none";
}
