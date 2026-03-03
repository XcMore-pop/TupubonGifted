const API_URL = "https://docs.google.com/spreadsheets/d/15IaYOCESVL4rehHOPTi8DGB8nvK5PUa2-dkbn_ZmzEg/edit?usp=sharing";

fetch(API_URL)
.then(res => res.json())
.then(data=>{
  let container = document.getElementById("portfolio");
  data.forEach(row=>{
    let card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${row[1]}</h3>
      <p>${row[3]}</p>
    `;
    container.appendChild(card);
  });
});

window.addEventListener("scroll", ()=>{
  document.querySelectorAll(".card").forEach(card=>{
    let top = card.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }
  });
});
