// click affordance (button) to enter new event
// present form upon button click - has three fields: name of event (input), date of event (calendr), location of event (input)
// after details are entered, save ability - button - POST request
// display container - get updated information - "events component"
// when component is updated, next event on agenda should have bold text, be slightly larger in size, and have a non-white, non-offensive background color (in CSS or created in JS files?)
// edit function - button pressed, brings up form with prepopulated information in fields
// save button - updates information with PUT/PATCH (is there a way to use a PUT rather than a PATCH? Will it affect the data?)

import eventsCalls from "./eventsCalls"

const eventsContainer = document.querySelector("#events-section")

const eventsForm = {

    addNewEventButton() {

        const eventHeader = document.createElement("h2")
        eventHeader.textContent = "EVENTS"
        eventsContainer.appendChild(eventHeader)

        // affordance for new event - button which will need to create all the following fields
        const newEventButton = document.createElement("button")
        newEventButton.textContent = "Add New Event"
        newEventButton.addEventListener("click", this.buildEventForm)
        eventsContainer.appendChild(newEventButton)

        const eventsFormSection = document.createElement("section")
        eventsFormSection.setAttribute("id", "eventsFormSection")
        eventsContainer.appendChild(eventsFormSection)
<<<<<<< HEAD
=======

        const eventsDisplaySection = document.createElement("section")
        eventsDisplaySection.setAttribute("id", "eventsDisplaySection")
        eventsContainer.appendChild(eventsDisplaySection)
>>>>>>> master
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

        return eventsCalls.postEventsToList(inputValues)
    },

    editEvents() {
        const editName = document.querySelector("#eventNameInput")
        const editDate = document.querySelector("#eventDateInput")
        const editLocation = document.querySelector("#eventLocationInput")

        const editValues = {
            name: editName.value,
            date: editDate.value,
            location: editLocation.value
        }

        eventsCalls.editEvent(editValues).then(() => eventsCalls.getEventsList())
    },

    deleteEvents() {
        
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
        const eventDateLabel = document.createElement("label")
        eventDateLabel.textContent = "When: "
        formContainer.appendChild(eventDateLabel)

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
        saveEventButton.addEventListener("click", () => {
            eventsForm.newEvent()
<<<<<<< HEAD
            .then(() => {
=======
            .then((saveEvents) => {
                console.log(saveEvents)
>>>>>>> master
                eventsForm.createEventsDisplay()
            })
        })
        formContainer.appendChild(saveEventButton)
    },


<<<<<<< HEAD
    displayEvents() {


        const eventsContainer = document.querySelector("#events-section")
=======
    displayEvents(event) {


        const eventsContainer = document.querySelector("#eventsDisplaySection")
>>>>>>> master
        const eventsDisplayContainer = document.createElement("div")
        eventsDisplayContainer.textContent = "Events List"
        
        const editButton = document.createElement("button")
        editButton.textContent = "Edit"
        // eventsDisplayContainer.appendChild(editButton)

        const deleteButton = document.createElement("button")
        deleteButton.textContent = "Delete"
        // eventsDisplayContainer.appendChild(deleteButton)

<<<<<<< HEAD
        },
=======
        eventsContainer.appendChild(eventsDisplayContainer)},
>>>>>>> master

    createEventsDisplay() {
        console.log("createEventsDisplay called")
        // eventsCalls.getEventsList().then((events) => {
        // events.forEach(event => {
<<<<<<< HEAD
        //     this.displayEvents(event)
        // })
        // eventsContainer.appendChild(eventsDisplayContainer)}
    }

        // clearEventsDisplay() {
        //     while ()
        // }
    }
=======
        //     eventsForm.displayEvents(event)
        }
        
    }

       
       // clearEventsDisplay() {
        //     while ()
        // }

>>>>>>> master
        // .then(eventsDisplayContainer.appendChild(editButton), eventsDisplayContainer.appendChild(deleteButton))
    

export default eventsForm