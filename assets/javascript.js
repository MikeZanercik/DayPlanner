var saveBtn = document.querySelectorAll(".btn-primary");
var data;

console.log(moment());

Start();

function Start() {
    displayTimeSlots()
    for (var i in saveBtn) {
        saveBtn[i].onclick = handleSaveEvent
    }
}
function handleSaveEvent() {
    var clickedBtn = this.parentElement.parentElement;
    var time = clickedBtn.getAttribute("data-time");
    var textArea = clickedBtn.querySelector(".form-control").value
    data[time] = textArea
    saveEventToStorage()
}
function displayTimeSlots() {
    data = inStorage();
    for (var key in data) {
        var thisRow = document.querySelector("[data-time='" + key + "']")
        SetEventToDom(thisRow, data[key]);
        UseMomentDisplayColor(thisRow, key)
    }
}

function UseMomentDisplayColor(element, time) {
    var textArea = element.querySelector('.form-control')
    
    // textArea.style.color = "white";
    // if (time === "9:00 am") {
    //     textArea.style.backgroundColor = "red";
    // }
    // else if (time === "11:00 am") {
    //     textArea.style.backgroundColor = "green";
    // } else {
    //     textArea.style.color = "black";

    // }
    // Write moment function to change DOM color
}
function SetEventToDom(element, value) {
    var textArea = element.querySelector('.form-control')
    textArea.value = value
}
function saveEventToStorage() {
    dataToStore = JSON.stringify(data)
    localStorage.setItem("textBox", dataToStore);
}
function inStorage() {
    var storedData = localStorage.getItem("textBox");
    if (storedData) {
        return JSON.parse(storedData)
    }
    return {}
}