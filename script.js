const criteria = [
  "Composition & Balance",
  "Stroke Quality",
  "Proportion & Structure",
  "Rhythm & Flow",
  "Overall Impact"
];

const data = [
  {img:"A.png",n:"Sauda",t:40,s:[8,8,8,8,8],
   c:"A refined and elegant composition marked by disciplined strokes and consistent proportions. The visual rhythm is calm and controlled, reflecting a thoughtful approach. Strong finishing confidence would further elevate its impact."},
  {img:"B.png",n:"Thasleema",t:46,s:[9,10,9,9,9],
   c:"Exceptional mastery of structure, rhythm, and proportion is evident throughout this work. Confident letterforms and balanced spacing reflect deep understanding, maturity, and authority, making this a benchmark-level composition."},
  {img:"C.png",n:"Fathimath Shuhaiba Falila",t:40,s:[9,9,8,8,6],
   c:"An energetic and expressive composition with strong movement and confident strokes. Minor finishing inconsistencies slightly affect clarity, yet the artistic intent remains powerful and engaging."},
  {img:"D.png",n:"Fathima",t:30,s:[6,6,7,5,6],
   c:"A sincere and honest execution reflecting genuine effort. Greater attention to spacing, balance, and finishing would help the work mature and gain visual stability."},
  {img:"E.png",n:"Sayyedath Ayshath Noufabi",t:37,s:[8,8,7,7,7],
   c:"A balanced and readable piece reflecting steady control and thoughtful composition. Further refinement in stroke confidence would enhance expression and visual authority."},
  {img:"F.png",n:"Muhammed Ajeer",t:33,s:[7,7,6,7,6],
   c:"Dynamic letterforms convey expressive intent and enthusiasm. Improvements in proportional consistency and spacing would strengthen overall clarity."},
  {img:"G.png",n:"Rashid",t:31,s:[6,6,7,6,6],
   c:"A restrained and minimalist approach marked by simplicity. Slight enhancement in contrast would add strength and presence."},
  {img:"H.png",n:"Fathimath Raihana",t:37,s:[8,8,7,7,7],
   c:"Creative use of spacing and rhythm defines this artwork. While uniformity varies slightly, the composition remains thoughtful and expressive."},
  {img:"I.png",n:"Fathimath Jafna",t:35,s:[7,7,8,6,7],
   c:"Clear readability and calm structure characterize this piece. Greater confidence in transitions would enhance visual impact."},
  {img:"J.png",n:"Mohammed Mahroof",t:38,s:[8,8,8,7,7],
   c:"A graceful execution marked by refined control and balanced composition, producing a visually pleasing and resolved artwork."},
  {img:"K.png",n:"Ayishath Shamna",t:32,s:[7,6,6,7,6],
   c:"Bold gestures and confident strokes are evident. Refinement of proportions would improve clarity and balance."},
  {img:"L.png",n:"Jasmina",t:33,s:[7,7,6,7,6],
   c:"A dense and expressive composition. Improved spacing would allow the work to breathe more effectively."},
  {img:"M.png",n:"Fidha Fathima",t:34,s:[7,7,6,7,7],
   c:"Energetic execution reflecting experimentation and enthusiasm. Structural consistency would strengthen presentation."},
  {img:"N.png",n:"Ayishath Husna",t:32,s:[6,7,6,7,6],
   c:"A decorative approach with creative intent. Continued focus on discipline and structure will enhance future development."}
];

/* SORT BY MARKS */
data.sort((a,b)=>b.t-a.t);

const openBtn = document.getElementById("openEntries");
const entries = document.getElementById("entries");
const cards = document.getElementById("cards");

openBtn.onclick = () => {
  document.querySelector(".landing").style.display = "none";
  entries.classList.remove("hidden");
};

data.forEach(d=>{
  const card=document.createElement("div");
  card.className="card";

  card.innerHTML=`
    <div class="card-header">
      <div class="artist-name">${d.n}</div>
      <div class="total">${d.t}</div>
    </div>

    <div class="artwork">
      <img src="${d.img}" alt="${d.n}">
    </div>

    <button class="view-btn">View more</button>

    <div class="details">
      <table>
        ${criteria.map((c,i)=>`
          <tr>
            <td>${c}</td>
            <td>${d.s[i]} / 10</td>
          </tr>
        `).join("")}
      </table>
      <p class="note"><strong>Jury Note:</strong> ${d.c}</p>
    </div>
  `;

  const btn=card.querySelector(".view-btn");
  const det=card.querySelector(".details");

  btn.onclick=()=>{
    det.classList.toggle("open");
    btn.textContent=det.classList.contains("open")?"Hide details":"View more";
  };

  cards.appendChild(card);
});
