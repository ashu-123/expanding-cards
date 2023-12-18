const card = document.querySelectorAll('.card')
card.forEach(c => {
    c.addEventListener('click', ()=> {
        removeActiveClasses()
        c.classList.add('active')
    })
})

function removeActiveClasses() {
    card.forEach(c => {
        c.classList.remove('active')
    })
}