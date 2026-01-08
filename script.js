function showResults() {
  document.getElementById("landing").classList.add("hidden");
  document.getElementById("results").classList.remove("hidden");
}

function switchTab(tab) {
  // buttons
  document.querySelectorAll(".tab").forEach(b => b.classList.remove("active"));
  event.target.classList.add("active");

  // content
  document.querySelectorAll(".tab-content").forEach(c => c.classList.add("hidden"));
  document.getElementById(tab).classList.remove("hidden");
}
