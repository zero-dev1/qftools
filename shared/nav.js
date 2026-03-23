// Shared navigation component for QF Tools
(function () {
  const pages = [
    { name: "Explorer", path: "/explorer/" },
    { name: "Tokens", path: "/tokens/" },
    { name: "Gas", path: "/gas/" },
    { name: "Verify", path: "/verify/" },
    { name: "Sniffer", path: "/sniffer/" },
  ];

  const current = window.location.pathname;

  const nav = document.createElement("nav");
  nav.className = "topnav";
  nav.innerHTML = `
    <a href="/" class="topnav-brand"><span>QF</span> Tools</a>
    <div class="topnav-links">
      ${pages.map((p) =>
        `<a href="${p.path}"${current.startsWith(p.path) ? ' class="active"' : ''}>${p.name}</a>`
      ).join("")}
    </div>
  `;

  document.body.prepend(nav);
})();
