const base = new URL('./', document.currentScript.src).href;

async function loadComponent(elementId, filePath) {
  const response = await fetch(base + filePath);
  const html = await response.text();
  document.getElementById(elementId).innerHTML = html;
}

loadComponent("navbar", "navbar.html");
loadComponent("footer", "footer.html");