document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  const navUl = document.querySelector('.nav ul');
  hamburger.addEventListener('click', () => {
    navUl.classList.toggle('active');
  });
});
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  const navUl = document.querySelector('.nav ul');
  const closeIcon = document.getElementById('closeIcon');

  hamburger.addEventListener('click', () => {
    navUl.classList.add('active');
    hamburger.style.display = 'none';
    closeIcon.style.display = 'block';
  });

  closeIcon.addEventListener('click', () => {
    navUl.classList.remove('active');
    hamburger.style.display = 'flex';
    closeIcon.style.display = 'none';
  });
});