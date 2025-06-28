document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  const heroLogo = document.getElementById('heroLogo');
  const heroName = document.getElementById('heroName');
  const headerName = document.getElementById('headerName');
  const navbarLogoContainer = document.getElementById('navbarLogoContainer');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
      heroLogo.classList.remove('logo-center');
      heroLogo.classList.add('logo-fixed');
      heroName.style.opacity = '0';
      heroName.style.height = '0';
      headerName.textContent = heroName.textContent;
      headerName.classList.remove('hidden');
      navbarLogoContainer.classList.remove('hidden');
      navbarLogoContainer.insertBefore(heroLogo, headerName);
    } else {
      navbar.classList.remove('scrolled');
      heroLogo.classList.remove('logo-fixed');
      heroLogo.classList.add('logo-center');
      heroName.style.opacity = '1';
      heroName.style.height = 'auto';
      headerName.classList.add('hidden');
      navbarLogoContainer.classList.add('hidden');
      const heroContent = document.querySelector('#home .hero-content');
      heroContent.insertBefore(heroLogo, heroName); // Insert logo before name
    }
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  window.openEnquiry = function(product) {
    document.getElementById('productName').textContent = product;
    document.getElementById('enquiryForm').style.display = 'block';
  };

  document.getElementById('enquiryFormInner').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const product = document.getElementById('productName').textContent;
    if (name && email) {
      alert(`Enquiry submitted for ${product}\nName: ${name}\nEmail: ${email}\nMessage: ${message || 'None'}`);
      this.reset();
      this.closest('#enquiryForm').style.display = 'none';
    }
  });

  document.getElementById('getInTouch').addEventListener('click', function(e) {
    e.preventDefault();
    heroLogo.classList.remove('logo-center');
    heroLogo.classList.add('logo-fixed');
    heroName.style.opacity = '0';
    heroName.style.height = '0';
    headerName.textContent = heroName.textContent;
    headerName.classList.remove('hidden');
    navbarLogoContainer.classList.remove('hidden');
    navbarLogoContainer.insertBefore(heroLogo, headerName);
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
  });

  document.getElementById('menuToggle').addEventListener('click', function () {
    const nav = document.getElementById('navLinks');
    nav.classList.toggle('active');
  });
});