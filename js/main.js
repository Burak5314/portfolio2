document.querySelector('form').addEventListener('submit', async function(e) {
  e.preventDefault();
  const naam = this.querySelector('input[placeholder="Naam"]').value;
  const email = this.querySelector('input[placeholder="E-mail"]').value;
  const bericht = this.querySelector('textarea[placeholder="Bericht"]').value;

  const response = await fetch('http://localhost:3000/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ naam, email, bericht })
  });

  if (response.ok) {
    alert('Bericht succesvol verzonden!');
    this.reset();
  } else {
    alert('Er is iets misgegaan.');
  }
});

// Dropdown menu voor mobiel
document.querySelector('.menu-toggle').addEventListener('click', function() {
  document.querySelector('header nav ul').classList.toggle('active');
});

document.getElementById('profielFoto').addEventListener('click', function() {
  document.getElementById('fotoOverlay').classList.add('active');
});
document.getElementById('fotoOverlay').addEventListener('click', function() {
  this.classList.remove('active');
});