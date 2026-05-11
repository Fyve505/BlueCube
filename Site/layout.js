class SiteLayout extends HTMLElement {
    connectedCallback() {
        const main = this.querySelector("main")?.outerHTML || "";

        this.innerHTML = `
<header>
<h1>
  <a href="/" style="text-decoration: none; color: inherit;">
    <img src="/favicon.ico" alt="BlueCube Logo" width="48" height="48" style="vertical-align: middle;">
    BlueCube
  </a>
</h1>

<nav>
    <a href="/"><i class="fa-solid fa-home"></i> Home</a>

    <div class="dropdown">
      <button class="dropbtn">
        <i class="fa-solid fa-screwdriver-wrench"></i> Tools
      </button>

      <div class="dropdown-content">
        <a href="/tools/Invisible-Text">
          <i class="fa-solid fa-message"></i> Hidden-MSG
        </a>
      </div>
    </div>

    <div class="dropdown">
      <button class="dropbtn">
        <i class="fa-solid fa-link"></i> Links
      </button>

      <div class="dropdown-content">
        <a href="https://github.com/Fyve505/BlueCube">
          <i class="fa-brands fa-github"></i> Github
        </a>
      </div>
    </div>

    <button id="themeToggle">
      <i class="fa-solid fa-wind theme-toggle"></i> Theme
    </button>
</nav>
</header>

${main}

<footer>
    <p>&copy; 2025 BlueCube</p>

    <h6>
        This is BlueCube a project by 
        <a href="https://github.com/Fyve505/" target="_blank">
            Fyve505
        </a>
    </h6>
</footer>
`;

        const toggleBtn = document.getElementById("themeToggle");

        function applyTheme(theme) {
            document.body.classList.toggle("dark", theme === "dark");
            localStorage.setItem("theme", theme);
        }

        const savedTheme = localStorage.getItem("theme");

        if (savedTheme) {
            applyTheme(savedTheme);
        } else {
            const prefersDark =
                window.matchMedia("(prefers-color-scheme: dark)").matches;

            applyTheme(prefersDark ? "dark" : "light");
        }

        toggleBtn.addEventListener("click", () => {
            const newTheme =
                document.body.classList.contains("dark")
                    ? "light"
                    : "dark";

            applyTheme(newTheme);
        });
    }
}

customElements.define("site-layout", SiteLayout);
