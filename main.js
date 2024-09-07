// Récupération des boutons radio
const radiosPosition = document.querySelectorAll("input[name=position]");
const ribbon = document.getElementById("ribbon");
const span = document.getElementById("span_ribbon");

// Fonction pour adapter la position
function radioAdapterPosition(position) {
  switch (position) {
    case "topLeft":
      ribbon.style.left = "-5px";
      ribbon.style.right = "";
      ribbon.style.top = "-5px";
      ribbon.style.bottom = "";

      span.style.left = "-29px";
      span.style.right = "";
      span.style.top = "22px";
      span.style.bottom = "";
      span.style.transform = "rotate(-45deg)";
      span.classList.add("spanTop");
      span.classList.remove("spanBottom");
      break;
    case "topRight":
      ribbon.style.left = "";
      ribbon.style.right = "-5px";
      ribbon.style.top = "-5px";
      ribbon.style.bottom = "";

      span.style.left = "";
      span.style.right = "-29px";
      span.style.bottom = "";
      span.style.top = "22px";
      span.style.transform = "rotate(45deg)";
      span.classList.add("spanTop");
      span.classList.remove("spanBottom");
      break;
    case "bottomLeft":
      ribbon.style.left = "-5px";
      ribbon.style.right = "";
      ribbon.style.top = "";
      ribbon.style.bottom = "-5px";

      span.style.left = "-29px";
      span.style.right = "";
      span.style.bottom = "22px";
      span.style.top = "";
      span.style.transform = "rotate(45deg)";
      span.classList.add("spanBottom");
      span.classList.remove("spanTop");
      break;
    case "bottomRight":
      ribbon.style.left = "";
      ribbon.style.right = "-5px";
      ribbon.style.top = "";
      ribbon.style.bottom = "-5px";

      span.style.left = "";
      span.style.right = "-29px";
      span.style.bottom = "22px";
      span.style.top = "";
      span.style.transform = "rotate(-45deg)";
      span.classList.add("spanBottom");
      span.classList.remove("spanTop");
      break;
  }
}

// Ajouter des écouteurs d'événements aux boutons radio
for (const radio of radiosPosition) {
  radio.addEventListener("change", function () {
    if (radio.checked) {
      radioAdapterPosition(radio.value);
    }
  });
}

// Appliquer la position initiale si nécessaire
const initialCheckedRadio = document.querySelector(
  "input[name=position]:checked"
);
if (initialCheckedRadio) {
  radioAdapterPosition(initialCheckedRadio.value);
}
