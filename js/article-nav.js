document.getElementById('arrow-nav').addEventListener('click', function() {
    document.querySelector('#nav-links').classList.toggle('hide');
    this.classList.toggle('close');
})

document.addEventListener('scroll', function() {
    document.querySelector('#nav-links').classList.add('hide');
    document.getElementById('arrow-nav').classList.remove('close');
})