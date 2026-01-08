const criteria = [
  "Letter Formation",
  "Composition & Balance",
  "Readability",
  "Creativity & Expression",
  "Overall Finish"
];

const data = [
  {e:"B",t:46,w:true,a:"🥇 First Place",s:[9,10,9,9,9],c:"Exceptional balance and spiritual depth."},
  {e:"A",t:40,w:true,a:"🥈 Second Place",s:[8,8,8,8,8],c:"Elegant structure and disciplined strokes."},
  {e:"C",t:40,w:true,a:"🥈 Second Place",s:[9,9,8,8,6],c:"Strong movement and confident composition."},
  {e:"E",t:37,w:true,a:"🥉 Third Place",s:[8,8,7,7,7],c:"Balanced form with expressive clarity."},
  {e:"H",t:37,w:true,a:"🥉 Third Place",s:[8,8,7,7,7],c:"Creative use of space and rhythm."},

  {e:"J",t:38,s:[8,8,8,7,7],c:"Graceful execution with refined control."},
  {e:"I",t:35,s:[7,7,8,6,7],c:"Clear readability with calm composition."},
  {e:"M",t:34,s:[7,7,6,7,7],c:"Energetic strokes, needs consistency."},
  {e:"F",t:33,s:[7,7,6,7,6],c:"Dynamic form with scope for balance."},
  {e:"L",t:33,s:[7,7,6,7,6],c:"Dense structure, expressive intent."},
  {e:"K",t:32,s:[7,6,6,7,6],c:"Bold strokes, needs proportional control."},
  {e:"N",t:32,s:[6,7,6,7,6],c:"Modern decorative approach."},
  {e:"D",t:30,s:[6,6,7,5,6],c:"Simple and sincere execution."},
  {e:"G",t:31,s:[6,6,7,6,6],c:"Minimalist elegance."}
];

const cards = document.getElementById("cards");

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

function render(filter) {
  cards.innerHTML = "";
  data.filter(d => filter === "all" || d.w).forEach(d => {
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
        <img src="${d.e}.png">
      </div>

      <button class="view">View marking</button>

      <div class="details">
        ${criteria.map((c,i)=>`
          <div class="row"><span>${c}</span><span>${d.s[i]}/10</span></div>
        `).join("")}
        <p><strong>Jury note:</strong> ${d.c}</p>
      </div>
    `;

    el.querySelector(".view").onclick = () => {
      el.querySelector(".details").classList.toggle("open");
    };

    cards.appendChild(el);
  });
}
