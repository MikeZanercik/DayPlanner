var saveBtn = document.querySelectorAll(".btn-primary");
var timeStamp = document.querySelector("#timeStamp");
var data;

timeStamp.textContent = moment().format('MMMM Do YYYY, h:mm:ss a');


Start();
UseMomentDisplayColor();

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
    }
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

function UseMomentDisplayColor() {
    timeCurrent = parseFloat(moment().format('h'));
    timeBox = parseFloat(document.querySelector(".time").textContent);
    if (timeCurrent > timeBox){
        alert("working")
        textArea.setAttribute("style", "background:red")
    }    
    console.log(timeCurrent)
    console.log(timeBox)
}