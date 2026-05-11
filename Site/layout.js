class SiteLayout extends HTMLElement {
    connectedCallback() {
        const originalMain = this.querySelector("main");

        this.innerHTML = `
<header>
    <h1>
        <a href="/" style="text-decoration:none;color:inherit;">
            <img src="/favicon.ico" width="48" height="48">
            BlueCube
        </a>
    </h1>

    <nav>
        <a href="/">
            <i class="fa-solid fa-home"></i>
            Home
        </a>

        <div class="dropdown">
            <button class="dropbtn">
                <i class="fa-solid fa-screwdriver-wrench"></i>
                Tools
            </button>

            <div class="dropdown-content">
                <a href="/tools/Invisible-Text">
                    <i class="fa-solid fa-message"></i>
                    Hidden-MSG
                </a>
            </div>
        </div>

        <div class="dropdown">
            <button class="dropbtn">
                <i class="fa-solid fa-link"></i>
                Links
            </button>

            <div class="dropdown-content">
                <a href="https://github.com/Fyve505/BlueCube">
                    <i class="fa-brands fa-github"></i>
                    Github
                </a>
            </div>
        </div>

        <div class="dropdown">
            <button class="dropbtn">
                <i class="fa-solid fa-users"></i>
                Users
            </button>

            <div class="dropdown-content">
                <a href="/user/Fyve505">
                    <i class="fa-solid fa-user"></i>
                    Five2357
                </a>

                <a href="/user/Glitch.html.html">
                    <i class="fa-solid fa-user-secret"></i>
                    GlitchGuy
                </a>
            </div>
        </div>

        <button id="themeToggle">
            <i class="fa-solid fa-wind"></i>
            Theme
        </button>
    </nav>
</header>

<main id="page-content"></main>

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

        if (originalMain) {
            this.querySelector("#page-content").replaceWith(originalMain);
        }

        // THEME SYSTEM
        const toggleBtn = document.getElementById("themeToggle");

        function applyTheme(theme) {
            document.body.classList.toggle("dark", theme === "dark");
            localStorage.setItem("theme", theme);
        }

        const savedTheme = localStorage.getItem("theme");

        if (savedTheme) {
            applyTheme(savedTheme);
        } else {
            applyTheme("light");
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
