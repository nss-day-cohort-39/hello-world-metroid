const initializeCityDetailsButtonEvents = () => {
  const allCloseButtons = document.querySelectorAll('.button--close')

  allCloseButtons.forEach(button =>
    button.addEventListener('click', event => {
      event.target.parentNode.close()
    })
  )

  const allDetailButtons = document.querySelectorAll("button[id^='button--']")
  allDetailButtons.forEach(button =>
    button.addEventListener('click', event => {
      const dialogSiblingSelector = `#${event.target.id}+dialog`
      const theDialog = document.querySelector(dialogSiblingSelector)
      theDialog.showModal()
    })
  )
}

export default initializeCityDetailsButtonEvents
