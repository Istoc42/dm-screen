const tabs = document.querySelectorAll('.tab')
const contents = document.querySelectorAll('.content')
const body = document.querySelector('body')

// Event Listener for clicking on a tab
tabs.forEach((tab, idx) => {
  tab.addEventListener('click', () => {
    hideOtherTabs()
    hideAllContents()

    if (idx === 0) {
      document.body.style.backgroundImage = "url('https://wallpaperaccess.com/full/1868703.jpg')"
    } else if (idx === 1) {
      document.body.style.backgroundImage = 'url(https://images.pexels.com/photos/3790639/pexels-photo-3790639.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260)'
    } else if (idx === 2) {
      document.body.style.backgroundImage = 'url(https://free4kwallpapers.com/uploads/originals/2018/10/08/dice-wallpaper.jpg)'
    } else if (idx === 3) {
      document.body.style.backgroundImage = 'url(https://kafkadesk.org/wp-content/uploads/2019/07/gold-treasure-hungary-e1563912397896.jpg)'
    }

    tab.classList.add('active')
    contents[idx].classList.add('show')
  })
})

// Remove active class from other tabs and put it on clicked tab
function hideOtherTabs() {
  tabs.forEach((tab) => {
    tab.classList.remove('active')
  })
}

// Change content displayed based on which tab is active
function hideAllContents() {
  contents.forEach((content) => content.classList.remove('show'))
}
