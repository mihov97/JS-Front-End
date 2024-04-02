function attachEventsListeners() {
    let daysBtn = document.getElementById('daysBtn')
    let hoursBtn = document.getElementById('hoursBtn')
    let minutesBtn = document.getElementById('minutesBtn')
    let secondsBtn = document.getElementById('secondsBtn')
   
    let daysInput = document.getElementById('days')
    let hoursInput = document.getElementById('hours')
    let minsInput = document.getElementById('minutes')
    let secsInput = document.getElementById('seconds')

     
    daysBtn.addEventListener('click', daysConv)
    hoursBtn.addEventListener('click', hoursConv)
    minutesBtn.addEventListener('click', minsConv)
    secondsBtn.addEventListener('click', secsConv)
    function daysConv(e) {
        let days = Number(daysInput.value)
        hoursInput.value = days * 24
        minsInput.value = days * 1440
        secsInput.value = days * 86400
    }

    function hoursConv(e) {
        let hours = Number(hoursInput.value)
        daysInput.value = hours / 24
        minsInput.value = hours * 60
        secsInput.value = hours * 3600
    }

    function minsConv(e) {
        let minutes = Number(minsInput.value)
        hoursInput.value = minutes / 60
        daysInput.value = hoursInput.value / 24
        secsInput.value = minutes * 60
    }

    function secsConv(e) {
        let seconds = Number(secsInput.value)
        minsInput.value = seconds / 60
        hoursInput.value = minsInput.value / 60
        daysInput.value = hoursInput.value / 24
    }
}
