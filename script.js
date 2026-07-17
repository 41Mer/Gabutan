function pindahHalaman(id) {
  const semuaSection = document.querySelectorAll('.section');

  semuaSection.forEach(section => {
    section.style.display = 'none';
  });

  document.getElementById(id).style.display = 'block';
}
