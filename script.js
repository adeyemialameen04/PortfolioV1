const navToggle = document.querySelector('.nav-toggle');
const closeBtn = document.querySelector('.close-btn');
const navBtns = document.querySelector('.nav__btns');
const navLinks = document.querySelector('.nav__links');
const linksContainer = document.querySelector('.links__container');

navBtns.addEventListener('click', () => {
  const linksHeight = navLinks.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;


  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
    navToggle.style.display = 'none';
    closeBtn.style.display = 'inline-block';
  } else {
    linksContainer.style.height = 0;
    navToggle.style.display = 'inline-block';
    closeBtn.style.display = 'none';
  }

  console.log(linksHeight);
});
