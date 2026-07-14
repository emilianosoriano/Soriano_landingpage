(function(){
  // Contact form may have been removed; guard access to avoid runtime errors
  const form = document.getElementById('contactForm');
  const copyBtn = document.getElementById('copyEmail');
  const myEmail = 'your.email@example.com'; // <-- replace with your email

  if (form) {
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const formData = new FormData(form);
      const name = formData.get('name') || 'Anonymous';
      const subject = formData.get('subject') || '';
      const message = formData.get('message') || '';

      const body = encodeURIComponent(`Name: ${name}\n\n${message}`);
      const mailto = `mailto:${encodeURIComponent(myEmail)}?subject=${encodeURIComponent(subject)}&body=${body}`;

      // Open the user's email client
      window.location.href = mailto;
    });
  }

  if (copyBtn) {
    copyBtn.addEventListener('click', function(){
      navigator.clipboard.writeText(myEmail).then(()=>{
        copyBtn.textContent = 'Copied!';
        setTimeout(()=>copyBtn.textContent = 'Copy my email', 1800);
      }).catch(()=>{
        alert('Copy failed — email: ' + myEmail);
      });
    });
  }

  // Panel toggle for Experience, Projects, and Education
  const panelButtons = document.querySelectorAll('.toggle-option');
  const workingContent = document.getElementById('workingContent');
  const projectsContent = document.getElementById('projectsContent');
  const educationContent = document.getElementById('educationContent');

  const panelMap = {
    experience: workingContent,
    projects: projectsContent,
    education: educationContent
  };

  if (panelButtons.length && workingContent && projectsContent && educationContent) {
    panelButtons.forEach(button => {
      button.addEventListener('click', () => {
        panelButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        Object.values(panelMap).forEach(panel => panel.classList.remove('active'));
        const panelId = button.dataset.panel;
        const targetPanel = panelMap[panelId];
        if (targetPanel) targetPanel.classList.add('active');
      });
    });
  }

  // Sticky header: add shadow when page is scrolled
  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => {
      if (window.scrollY > 10) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

})();
