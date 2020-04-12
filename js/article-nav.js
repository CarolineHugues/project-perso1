document.getElementById('arrow-nav').addEventListener('click', function() {
    document.querySelector('#nav-links').classList.toggle('hide');
    this.classList.toggle('close');
})