const daysEL = document.getElementById('days')
const hoursEL =  document.getElementById('hours')
const minsEL = document.getElementById('mins')
const secEL = document.getElementById('sec')



const newYears = '1 Jan 2023'

function countdown () {
    const newYearsDate = new Date(newYears)
    const currentDate = new Date()

    const totalSeconds = new Date (newYearsDate - currentDate) / 1000
    const days = Math.floor(totalSeconds / 3600 / 24)
    const hours = Math.floor(totalSeconds / 3600) % 24
    const minutes = Math.floor(totalSeconds / 60) % 60
    const seconds = Math.floor(totalSeconds) % 60

    console.log (days, hours, minutes, seconds)
    
    daysEL.innerHTML = days
    hoursEL.innerHTML = formatTime(hours)
    minsEL.innerHTML = formatTime(minutes)
    secEL.innerHTML = formatTime(seconds)
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) :  time
}

countdown()

setInterval(countdown,1000)