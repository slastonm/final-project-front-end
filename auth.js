function toggleForm() {
  const form = document.getElementById("authContainer");
  if (form) {
    form.style.display = form.style.display === "none" ? "block" : "none";
  }
}

window.onload = () => {
  const currentUser = localStorage.getItem("currentUser");
  if (currentUser) {
    showAccount(currentUser);
  }
};

function register() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  if (!username || !password) {
    alert("Please fill in both fields.");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || {};

  if (users[username]) {
    alert("User already exists.");
    return;
  }

  users[username] = { password };
  localStorage.setItem("users", JSON.stringify(users));
  alert("Registered successfully!");
}

function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  let users = JSON.parse(localStorage.getItem("users")) || {};

  if (users[username] && users[username].password === password) {
    localStorage.setItem("currentUser", username);
    showAccount(username);
  } else {
    alert("Invalid username or password.");
  }
}

function showAccount(username) {
  const auth = document.getElementById("authContainer");
  const acc = document.getElementById("accountContainer");
  const userDisplay = document.getElementById("userDisplay");

  if (auth) auth.style.display = "none";
  if (acc) acc.style.display = "block";
  if (userDisplay) userDisplay.textContent = username;
}

function logout() {
  localStorage.removeItem("currentUser");

  const auth = document.getElementById("authContainer");
  const acc = document.getElementById("accountContainer");

  if (auth) auth.style.display = "block";
  if (acc) acc.style.display = "none";
}

function saveUserAction(actionDescription) {
  const user = localStorage.getItem("currentUser");
  if (!user) return;

  let actions = JSON.parse(localStorage.getItem("userActions")) || {};
  if (!actions[user]) actions[user] = [];

  actions[user].push({
    time: new Date().toISOString(),
    action: actionDescription
  });

  localStorage.setItem("userActions", JSON.stringify(actions));
}

function bindActionButton(buttonId, actionDescription) {
  const btn = document.getElementById(buttonId);
  if (btn) {
    btn.addEventListener("click", () => {
      const user = localStorage.getItem("currentUser");
      if (!user) {
        alert("You must be logged in to perform this action.");
        return;
      }
      saveUserAction(actionDescription);
      alert(`Action saved: ${actionDescription}`);
    });
  }
}

function getUserHistory() {
  const user = localStorage.getItem("currentUser");
  if (!user) return [];

  const all = JSON.parse(localStorage.getItem("userActions")) || {};
  return all[user] || [];
}

