
const search = document.querySelector('.hiddensearch')
const btn = document.querySelector('.hiddenbtn')
const input = document.querySelector('.hiddeninput')

btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})