import React from "react";

function Header(props) {
  return (
    <header class="top-nav">
      <section class="auth">
        <button>Login / Register</button>

        <div id="authContainer">
          <h2>Login Register</h2>
          <input type="text" id="username" placeholder="Username" />
          <input type="password" id="password" placeholder="Password" />
          <button>Register</button>
          <button>Login</button>
        </div>

        <div id="accountContainer">
          <h2>
            Welcome, <span id="userDisplay"></span>!
          </h2>
          <button>Logout</button>
        </div>
      </section>
      <section class="buttons">
        <a href="pull counter/site.html">
          <button>pull counter</button>
        </a>
        <a href="forum/site.html">
          <button>forum</button>
        </a>
      </section>
    </header>
  );
}

export default Header;
