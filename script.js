/* ======================
   CRITERIA
====================== */
const criteria = [
  "Letter Formation",
  "Composition & Balance",
  "Readability",
  "Creativity & Expression",
  "Overall Finish"
];

/* ======================
   DATA A–N (WITH JURY NOTES)
====================== */
const data = [
  {
    e:"B", t:46, w:true, a:"🥇 First Place",
    s:[9,10,9,9,9],
    c:"This composition demonstrates exceptional mastery in structure and rhythm. The confident letterforms and balanced spacing reflect deep understanding and maturity, making it a highly deserving first-place work."
  },
  {
    e:"A", t:40, w:true, a:"🥈 Second Place",
    s:[8,8,8,8,8],
    c:"A refined and elegant composition with disciplined strokes and consistent proportions. With slightly stronger contrast, the visual impact could be further elevated."
  },
  {
    e:"C", t:40, w:true, a:"🥈 Second Place",
    s:[9,9,8,8,6],
    c:"This work stands out for its energetic flow and confident movement. Minor finishing details affect clarity, yet the artistic intent remains strong."
  },
  {
    e:"E", t:37, w:true, a:"🥉 Third Place",
    s:[8,8,7,7,7],
    c:"A balanced and readable piece that reflects sincere effort and steady control. Further refinement in stroke confidence would enhance expression."
  },
  {
    e:"H", t:37, w:true, a:"🥉 Third Place",
    s:[8,8,7,7,7],
    c:"Creative use of spacing and rhythm defines this artwork. Slight variations in weight affect uniformity, but the overall composition remains thoughtful."
  },
  {e:"J",t:38,s:[8,8,8,7,7],c:"Graceful execution with refined control and clarity."},
  {e:"I",t:35,s:[7,7,8,6,7],c:"Calm composition with clear readability and structure."},
  {e:"M",t:34,s:[7,7,6,7,7],c:"Energetic strokes showing experimentation and enthusiasm."},
  {e:"F",t:33,s:[7,7,6,7,6],c:"Dynamic form with room for balance improvement."},
  {e:"L",t:33,s:[7,7,6,7,6],c:"Dense composition needing better spacing."},
  {e:"K",t:32,s:[7,6,6,7,6],c:"Bold gestures with scope for proportional refinement."},
  {e:"N",t:32,s:[6,7,6,7,6],c:"Decorative approach with creative intent."},
  {e:"D",t:30,s:[6,6,7,5,6],c:"Simple and sincere execution."},
  {e:"G",t:31,s:[6,6,7,6,6],c:"Minimalist elegance through restraint."}
];

/* ======================
   VIEW SWITCH
====================== */
function openResults(){
  document.getElementById("landing").classList.remove("active");
  document.getElementById("results").classList.add("active");
  render("winners");
}

function switchTab(type){
  document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"));
  event.target.classList.add("active");
  render(type);
}

/* ======================
   RENDER ENTRIES
====================== */
const cards = document.getElementById("cards");

function render(filter) {
  cards.innerHTML = "";

  data.filter(d => filter === "all" || d.w).forEach(d => {
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

      <!-- NUCLEAR INLINE BUTTON -->
      <button
        style="
          display:block;
          width:100%;
          margin-top:16px;
          padding:14px;
          border-radius:18px;
          border:none;
          background:linear-gradient(135deg,#22d3ee,#38bdf8);
          color:#020617;
          font-size:15px;
          font-weight:700;
        "
      >
        View detailed evaluation
      </button>

      <!-- DETAILS PANEL -->
      <div
        style="
          display:none;
          margin-top:16px;
          padding:14px;
          border-radius:14px;
          background:rgba(0,0,0,0.35);
        "
      >
        <table style="width:100%;border-collapse:collapse;margin-bottom:12px;">
          ${criteria.map((c,i)=>`
            <tr>
              <td style="padding:6px 0;">${c}</td>
              <td style="padding:6px 0;text-align:right;font-weight:700;">
                ${d.s[i]} / 10
              </td>
            </tr>
          `).join("")}
        </table>

        <p style="line-height:1.6;">
          <strong>Jury Note:</strong> ${d.c}
        </p>
      </div>
    `;

    const btn = card.querySelector("button");
    const panel = card.querySelector("div[style*='display:none']");

    btn.onclick = () => {
      const open = panel.style.display === "block";
      panel.style.display = open ? "none" : "block";
      btn.textContent = open
        ? "View detailed evaluation"
        : "Hide detailed evaluation";
    };

    cards.appendChild(card);
  });
}
