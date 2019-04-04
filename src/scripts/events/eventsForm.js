// click affordance (button) to enter new event
// present form upon button click - has three fields: name of event (input), date of event (calendar), location of event (input)
// after details are entered, save ability - button - POST request
// display container - get updated information - "events component"
// when component is updated, next event on agenda should have bold text, be slightly larger in size, and have a non-white, non-offensive background color (in CSS or created in JS files?)
// edit function - button pressed, brings up form with prepopulated information in fields
// save button - updates information with PUT/PATCH (is there a way to use a PUT rather than a PATCH? Will it affect the data?)

import postEventsToList from "./eventsCalls"

export default {
    buildEventForm() {
        // affordance for new event - button which will need to create all the following fields
        const newEventButton = document.createElement("button")
        newEventButton.textContent = "Add New Event"
        
        
        // fields for created forms 
        const eventNameLabel = document.createElement("label")
        eventNameLabel.textContent = "New Event Name"

        const eventNameInput = document.createElement("input")

        const eventDate = document.createElement("")

        const eventLocationInput = document.createElement("input")

        const saveEventButton = document.createElement("button")
        saveEventButton.addEventListener("click", postEventsToList())
    },
    
}


