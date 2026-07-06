(function(){
  const form = document.getElementById('contactForm');
  const copyBtn = document.getElementById('copyEmail');
  const myEmail = 'your.email@example.com'; // <-- replace with your email

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

  copyBtn.addEventListener('click', function(){
    navigator.clipboard.writeText(myEmail).then(()=>{
      copyBtn.textContent = 'Copied!';
      setTimeout(()=>copyBtn.textContent = 'Copy my email', 1800);
    }).catch(()=>{
      alert('Copy failed — email: ' + myEmail);
    });
  });

})();
