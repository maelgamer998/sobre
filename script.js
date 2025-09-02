function toggleDarkMode() {
  const body = document.body;
  const icon = document.querySelector('#toggle-theme i');

  body.classList.toggle('dark');

  if(body.classList.contains('dark')) {
    body.style.background = '#111';
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    body.style.background = "url('https://i.pinimg.com/originals/ad/f4/13/adf4132c2660e304837035f46c3b0839.gif') no-repeat center center fixed";
    body.style.backgroundSize = "cover";
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
}
let links = document.querySelectorAll(".navbar-icon");
let isDark = false;

links.forEach(link => {
  link.addEventListener("mouseover", () => {
    links.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}
