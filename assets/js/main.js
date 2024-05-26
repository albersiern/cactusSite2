const searchIcon = document.querySelector('#searchI')
const search = document.querySelector('#search')
const searchClose = document.querySelector('#searchClose')

searchIcon.addEventListener('click', ()=> {
    search.classList.add('show_search')
    searchIcon.classList.add('toggle_i')
    searchClose.classList.add('toggle_c')
})

searchClose.addEventListener('click', ()=> {
    search.classList.remove('show_search')
    searchIcon.classList.remove('toggle_i')
    searchClose.classList.remove('toggle_c')
})
