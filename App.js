const cards = document.getElementById("cards");
const results = document.getElementById("results");
const viewBtn = document.getElementById("viewResultsBtn");

viewBtn.onclick = () => {
  document.querySelector(".landing").style.display = "none";
  results.classList.remove("hidden");
};

data.forEach(d => {
  const card = document.createElement("article");
  card.className = "card";

  card.innerHTML = `
    <div class="card-header">
      <div>
        <div class="entry">Entry ${d.e}</div>
        <div class="artist-name">${d.n}</div>
      </div>
      <div class="score">${d.t}</div>
    </div>

    <button class="view-details-btn">View More</button>

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

  const btn = card.querySelector(".view-details-btn");
  const panel = card.querySelector(".details-panel");

  btn.onclick = () => {
    panel.classList.toggle("open");
    btn.textContent = panel.classList.contains("open")
      ? "Hide Details"
      : "View More";
  };

  cards.appendChild(card);
});
