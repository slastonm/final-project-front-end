document.addEventListener("DOMContentLoaded", () => {
  const userId = localStorage.getItem("userId") || "demo-user";

  const allCharacters = [
    "Druvis III", "Lilya", "A Knight", "Sotheby", "Regulus", "Centurion", "An An Lee", "Medicine Pocket",
    "Voyager", "Eternity", "Ms NewBabel", "Melania", "Pickles", "Tooth Fairy", "Jessica", "Kaalaa Baunaa",
    "Shamane", "37", "6", "Spathodea", "Ezra Theodore", "Ge Tian", "Isolde", "Marcus", "Vila", "Windsong",
    "Kakania", "Semmelweis", "Mercuria", "J", "Tuesday", "Argus", "Lopera", "Willow", "Flutterpage",
    "Barcarola", "Fatutu", "Noire", "Recoleta", "Jiu Niangzi", "Lucy", "Anjo Nala", "Liang Yue"
  ];

  const limitedOnly = new Set(["Jiu Niangzi", "Lucy", "Anjo Nala", "Liang Yue"]);

  const bannerCharacters = {
    limited: [],
    event: [],
    rerun: []
  };

  const bannerSelect = document.getElementById("banner-select");
  const characterSelect = document.getElementById("character-select");
  const pullNumberInput = document.getElementById("pull-number");
  const addPullBtn = document.getElementById("add-pull");
  const openFormBtn = document.getElementById("open-form");
  const pullForm = document.getElementById("pull-form");

  openFormBtn.addEventListener("click", () => {
    pullForm.style.display = pullForm.style.display === "none" ? "block" : "none";
  });

  bannerSelect.addEventListener("change", () => {
    const selectedBanner = bannerSelect.value;
    characterSelect.innerHTML = '<option value="">-- Choose Character --</option>';

    let filteredCharacters;
    if (selectedBanner === "limited") {
      filteredCharacters = allCharacters;
    } else if (selectedBanner === "") {
      filteredCharacters = [];
    } else {
      filteredCharacters = allCharacters.filter(c => !limitedOnly.has(c));
    }

    filteredCharacters.forEach(c => {
      const opt = document.createElement("option");
      opt.value = c;
      opt.textContent = c;
      characterSelect.appendChild(opt);
    });
  });

  addPullBtn.addEventListener("click", () => {
    const banner = bannerSelect.value;
    const character = characterSelect.value;
    const pullNum = parseInt(pullNumberInput.value);

    if (!banner || !character || isNaN(pullNum) || pullNum < 1) {
      return alert("Введи всі поля правильно!");
    }

    bannerCharacters[banner].push({ name: character, pull: pullNum });
    renderCharactersForBanner(banner);

    fetch("http://localhost:5000/api/gacha/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId,
        name: character,
        banner,
        pull: pullNum
      })
    })
    .then(res => res.json())
    .then(data => console.log("Збережено на сервері:", data))
    .catch(err => console.error("Помилка збереження:", err));

    characterSelect.value = "";
    pullNumberInput.value = "";
  });

  function renderCharactersForBanner(bannerId) {
    const container = document.getElementById(`chars-${bannerId}`);
    container.innerHTML = "";

    bannerCharacters[bannerId].forEach(item => {
      const div = document.createElement("div");
      div.textContent = `${item.name} - pull ${item.pull}`;

      if (item.pull <= 40) div.style.color = "green";
      else if (item.pull <= 59) div.style.color = "orange";
      else div.style.color = "red";

      container.appendChild(div);
    });
  }

  fetch(`http://localhost:5000/api/gacha/my/${userId}`)
    .then(res => res.json())
    .then(pulls => {
      pulls.forEach(({ name, banner, pull }) => {
        if (!bannerCharacters[banner]) bannerCharacters[banner] = [];
        bannerCharacters[banner].push({ name, pull });
      });

      Object.keys(bannerCharacters).forEach(renderCharactersForBanner);
    });
});