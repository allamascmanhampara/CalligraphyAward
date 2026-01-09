const criteria=[
  "Letter Formation",
  "Composition & Balance",
  "Readability",
  "Creativity & Expression",
  "Overall Finish"
];

const data=[
  {name:"Thasleema",img:"B.png",score:46,w:true,order:1,award:"🥇 First Place",marks:[9,10,9,9,9],note:"An outstanding work displaying mastery, balance, and spiritual depth."},
  {name:"Fathimath Shuhaiba Falila",img:"C.png",score:40,w:true,order:2,award:"🥈 Second Place",marks:[9,9,8,8,6],note:"Dynamic rhythm and expressive movement with strong artistic intent."},
  {name:"Sauda",img:"A.png",score:40,w:true,order:3,award:"🥈 Second Place",marks:[8,8,8,8,8],note:"Elegant and disciplined composition with consistent proportions."},
  {name:"Sayyedath Ayshath Noufabi",img:"E.png",score:37,w:true,order:4,award:"🥉 Third Place",marks:[8,8,7,7,7],note:"Balanced and readable with calm visual harmony."},
  {name:"Fathimath Raihana",img:"H.png",score:37,w:true,order:5,award:"🥉 Third Place",marks:[8,8,7,7,7],note:"Creative spacing and thoughtful rhythm throughout."},

  {name:"Mohammed Mahroof",img:"J.png",score:38,w:false,marks:[8,8,8,7,7],note:"Graceful execution with refined control."},
  {name:"Fathimath Jafna",img:"I.png",score:35,w:false,marks:[7,7,8,6,7],note:"Clear readability and calm structure."},
  {name:"Fidha Fathima",img:"M.png",score:34,w:false,marks:[7,7,6,7,7],note:"Energetic strokes with expressive intent."},
  {name:"Muhammed Ajeer",img:"F.png",score:33,w:false,marks:[7,7,6,7,6],note:"Dynamic form with scope for balance improvement."},
  {name:"Jasmina",img:"L.png",score:33,w:false,marks:[7,7,6,7,6],note:"Dense composition needing refined spacing."},
  {name:"Ayishath Shamna",img:"K.png",score:32,w:false,marks:[7,6,6,7,6],note:"Bold gestures and confident strokes."},
  {name:"Ayishath Husna",img:"N.png",score:32,w:false,marks:[6,7,6,7,6],note:"Decorative approach with creative exploration."},
  {name:"Fathima",img:"D.png",score:30,w:false,marks:[6,6,7,5,6],note:"Simple and sincere presentation."},
  {name:"Rashid",img:"G.png",score:31,w:false,marks:[6,6,7,6,6],note:"Minimalist elegance through restraint."}
];

const cards=document.getElementById("cards");

function openResults(){
  document.getElementById("landing").classList.remove("active");
  document.getElementById("results").classList.add("active");
  render("winners");
}

function switchTab(type){
  document.querySelectorAll(".tab").forEach(b=>b.classList.remove("active"));
  event.target.classList.add("active");
  render(type);
}

function render(filter){
  cards.innerHTML="";
  data
    .filter(d=>filter==="all"||d.w)
    .sort((a,b)=>(a.order||999)-(b.order||999))
    .forEach(d=>{
      const card=document.createElement("div");
      card.className="card"+(d.w?" winner":"");

      card.innerHTML=`
        <div class="top">
          <div>
            <div class="name">${d.name}</div>
            ${d.award?`<div class="badge">${d.award}</div>`:""}
          </div>
          <div class="score">${d.score}</div>
        </div>

        <div class="artwork">
          <img src="${d.img}" alt="${d.name}">
        </div>

        <button class="view">View score details</button>

        <div class="details">
          <table class="marks-table">
            ${criteria.map((c,i)=>`
              <tr><td>${c}</td><td>${d.marks[i]} / 10</td></tr>
            `).join("")}
          </table>
          <p class="jury-note"><strong>Jury Remark:</strong> ${d.note}</p>
        </div>
      `;

      const btn=card.querySelector(".view");
      const det=card.querySelector(".details");
      btn.onclick=()=>{
        const open=det.classList.toggle("open");
        btn.textContent=open?"Hide score details":"View score details";
      };

      cards.appendChild(card);
    });
}
