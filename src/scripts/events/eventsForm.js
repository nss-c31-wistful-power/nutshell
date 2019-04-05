// click affordance (button) to enter new event
// present form upon button click - has three fields: name of event (input), date of event (calendr), location of event (input)
// after details are entered, save ability - button - POST request
// display container - get updated information - "events component"
// when component is updated, next event on agenda should have bold text, be slightly larger in size, and have a non-white, non-offensive background color (in CSS or created in JS files?)
// edit function - button pressed, brings up form with prepopulated information in fields
// save button - updates information with PUT/PATCH (is there a way to use a PUT rather than a PATCH? Will it affect the data?)

import eventsCalls from "./eventsCalls"

const eventsForm = {

    addNewEventButton() {
        const eventContainer = document.querySelector("#events-section")

        const eventHeader = document.createElement("h2")
        eventHeader.textContent = "EVENTS"
        eventContainer.appendChild(eventHeader)

        // affordance for new event - button which will need to create all the following fields
        const newEventButton = document.createElement("button")
        newEventButton.textContent = "Add New Event"
        newEventButton.addEventListener("click", this.buildEventForm)
        eventContainer.appendChild(newEventButton)

        const eventsFormSection = document.createElement("section")
        eventsFormSection.setAttribute("id", "eventsFormSection")
        eventContainer.appendChild(eventsFormSection)
    },

    newEvent() {
        console.log("You're doing great.")
        const name = document.querySelector("#eventNameInput")
        const date = document.querySelector("#eventDateInput")
        const location = document.querySelector("#eventLocationInput")

        const inputValues = {
            name: name.value,
            date: date.value,
            location: location.value
        }
        console.log(inputValues)

        eventsCalls.postEventsToList(inputValues)
    },

    buildEventForm() {

        const formContainer = document.querySelector("#eventsFormSection")

        // fields for created forms
        const eventNameLabel = document.createElement("label")
        eventNameLabel.textContent = "New Event Name: "
        formContainer.appendChild(eventNameLabel)

        const eventNameInput = document.createElement("input")
        eventNameInput.setAttribute("id", "eventNameInput")
        formContainer.appendChild(eventNameInput)

        // calendar feature?
        const eventDateInput = document.createElement("input")
        eventDateInput.setAttribute("type", "date")
        eventDateInput.setAttribute("id", "eventDateInput")
        formContainer.appendChild(eventDateInput)

        const eventLocationLabel = document.createElement("label")
        eventLocationLabel.textContent = "Where: "
        formContainer.appendChild(eventLocationLabel)


        const eventLocationInput = document.createElement("input")
        eventLocationInput.setAttribute("id", "eventLocationInput")
        formContainer.appendChild(eventLocationInput)
        
        // save button - post request
        const saveEventButton = document.createElement("button")
        saveEventButton.textContent = "Save"
        saveEventButton.addEventListener("click", eventsForm.newEvent)
        formContainer.appendChild(saveEventButton)
    },


    displayEvents() {
        const eventsDisplayContainter = document.createElement("div")
        eventsDisplayContainer.textContent = "Events List"
        eventsSection.appendChild(eventsDisplayContainer)
    }
}

export default eventsForm