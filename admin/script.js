document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav a");
  
    navLinks.forEach(function(link) {
      link.addEventListener("click", function(e) {
        e.preventDefault();
        const sectionId = link.getAttribute("href").substring(1);
        showSection(sectionId);
      });
    });
  
    function showSection(sectionId) {
      const sections = document.querySelectorAll("section");
  
      sections.forEach(function(section) {
        section.style.display = "none";
      });
  
      const targetSection = document.getElementById(sectionId);
      targetSection.style.display = "block";
  
      navLinks.forEach(function(link) {
        link.classList.remove("active");
      });
  
      const activeLink = document.querySelector('a[href="#' + sectionId + '"]');
      activeLink.classList.add("active");
    }
  
    showSection("dashboard"); // Show the dashboard section by default
  });
  