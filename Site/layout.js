class SiteLayout extends HTMLElement {
    connectedCallback() {
        const main = this.querySelector("main");

        this.innerHTML = `
<header>
<h1>
  <a href="/" style="text-decoration: none; color: inherit;">
    <img src="/favicon.ico" width="48">
    BlueCube
  </a>
</h1>

<nav>
    <a href="/">Home</a>

    <button id="themeToggle">
        Theme
    </button>
</nav>
</header>

<main id="page-content"></main>

<footer>
    <p>© 2025 BlueCube</p>
</footer>
`;

        // PUT ORIGINAL MAIN BACK
        if (main) {
            this.querySelector("#page-content").replaceWith(main);
        }

        // THEME
        const toggleBtn = document.getElementById("themeToggle");

        function applyTheme(theme) {
            document.body.classList.toggle("dark", theme === "dark");
            localStorage.setItem("theme", theme);
        }

        const savedTheme = localStorage.getItem("theme");

        if (savedTheme) {
            applyTheme(savedTheme);
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
