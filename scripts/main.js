const citiesList__cities = document.querySelector('.cities-list__cities')
const landmarksList__landmarks = document.querySelector('.landmarks-list__landmarks')
const headsList__heads = document.querySelector('.heads-list__heads')
citiesList__cities.style.display = 'none'
landmarksList__landmarks.style.display = 'none'
headsList__heads.style.display = 'none'

const citiesList = document.querySelector('.cities-list')
const landmarksList = document.querySelector('.landmarks-list')
const headsList = document.querySelector('.heads-list')

citiesList.style.height = '16vh'
landmarksList.style.height = '16vh'
headsList.style.height = '16vh'

const citiesButton = document.querySelector('.cities-btn')
const landmarksButton = document.querySelector('.landmarks-btn')
const headsButton = document.querySelector('.heads-btn')

citiesButton.addEventListener('click', () => {
  console.log('button clicked')
citiesList__cities.style.display = 'flex'

citiesList.style.height = '100vh'

})

landmarksButton.addEventListener('click', () => {
  console.log('button clicked')
landmarksList__landmarks.style.display = 'flex'

landmarksList.style.height = '100vh'

})

headsButton.addEventListener('click', () => {
  console.log('button clicked')
headsList__heads.style.display = 'flex'

headsList.style.height = '100vh'

})

const expandCitiesList = () => {

}



