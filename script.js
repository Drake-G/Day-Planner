//Sets the date on the header/jumbotron
var today = moment();
var currentDay = today.format("dddd, MMMM D YYYY")
$("#currentDay").text(currentDay)

var minutes = moment().startOf('hour').fromNow();
console.log(typeof 'minutes');
var hour = moment().format("k")
var time = parseInt(hour, 10);
console.log(time)

if (hour > 9) {
    document.getElementById("description1").classList.add("past")
    document.getElementById("description1").classList.remove("present")
    document.getElementById("description1").classList.remove("future")
}
if (hour == 9) {
    document.getElementById("description1").classList.add("present")
    document.getElementById("description1").classList.remove("future")
    document.getElementById("description1").classList.remove("past")
}
if (hour < 9) {
    document.getElementById("description1").classList.add("future")
    document.getElementById("description1").classList.remove("present")
    document.getElementById("description1").classList.remove("past")
}
if (hour > 10) {
    document.getElementById("description2").classList.add("past")
    document.getElementById("description2").classList.remove("present")
    document.getElementById("description2").classList.remove("future")
}
if (hour == 10) {
    document.getElementById("description2").classList.add("present")
    document.getElementById("description2").classList.remove("future")
    document.getElementById("description2").classList.remove("past")
}
if (hour < 10) {
    document.getElementById("description2").classList.add("future")
    document.getElementById("description2").classList.remove("present")
    document.getElementById("description2").classList.remove("past")
}
if (hour > 11) {
    document.getElementById("description3").classList.add("past")
    document.getElementById("description3").classList.remove("present")
    document.getElementById("description3").classList.remove("future")
}
if (hour == 11) {
    document.getElementById("description3").classList.add("present")
    document.getElementById("description3").classList.remove("future")
    document.getElementById("description3").classList.remove("past")
}
if (hour < 11) {
    document.getElementById("description3").classList.add("future")
    document.getElementById("description3").classList.remove("present")
    document.getElementById("description3").classList.remove("past")
}
if (hour > 12) {
    document.getElementById("description4").classList.add("past")
    document.getElementById("description4").classList.remove("present")
    document.getElementById("description4").classList.remove("future")
}
if (hour == 12) {
    document.getElementById("description4").classList.add("present")
    document.getElementById("description4").classList.remove("future")
    document.getElementById("description4").classList.remove("past")
}
if (hour < 12) {
    document.getElementById("description4").classList.add("future")
    document.getElementById("description4").classList.remove("present")
    document.getElementById("description4").classList.remove("past")
}
if (hour > 13) {
    document.getElementById("description5").classList.add("past")
    document.getElementById("description5").classList.remove("present")
    document.getElementById("description5").classList.remove("future")
}
if (hour == 13) {
    document.getElementById("description5").classList.add("present")
    document.getElementById("description5").classList.remove("future")
    document.getElementById("description5").classList.remove("past")
}
if (hour < 13) {
    document.getElementById("description5").classList.add("future")
    document.getElementById("description5").classList.remove("present")
    document.getElementById("description5").classList.remove("past")
}
if (hour > 14) {
    document.getElementById("description6").classList.add("past")
    document.getElementById("description6").classList.remove("present")
    document.getElementById("description6").classList.remove("future")
}
if (hour == 14) {
    document.getElementById("description6").classList.add("present")
    document.getElementById("description6").classList.remove("future")
    document.getElementById("description6").classList.remove("past")
}
if (hour < 14) {
    document.getElementById("description6").classList.add("future")
    document.getElementById("description6").classList.remove("present")
    document.getElementById("description6").classList.remove("past")
}
if (hour > 15) {
    document.getElementById("description7").classList.add("past")
    document.getElementById("description7").classList.remove("present")
    document.getElementById("description7").classList.remove("future")
}
if (hour == 15) {
    document.getElementById("description7").classList.add("present")
    document.getElementById("description7").classList.remove("future")
    document.getElementById("description7").classList.remove("past")
}
if (hour < 15) {
    document.getElementById("description7").classList.add("future")
    document.getElementById("description7").classList.remove("present")
    document.getElementById("description7").classList.remove("past")
}
if (hour > 16) {
    document.getElementById("description8").classList.add("past")
    document.getElementById("description8").classList.remove("present")
    document.getElementById("description8").classList.remove("future")
}
if (hour == 16) {
    document.getElementById("description8").classList.add("present")
    document.getElementById("description8").classList.remove("future")
    document.getElementById("description8").classList.remove("past")
}
if (hour < 16) {
    document.getElementById("description8").classList.add("future")
    document.getElementById("description8").classList.remove("present")
    document.getElementById("description8").classList.remove("past")
}

var save1 = document.getElementById("save1")
var save2 = document.getElementById("save2")
var save3 = document.getElementById("save3")
var save4 = document.getElementById("save4")
var save5 = document.getElementById("save5")
var save6 = document.getElementById("save6")
var save7 = document.getElementById("save7")
var save8 = document.getElementById("save8")

function saveDescription() {
    var description1 = document.getElementById("description1").value ;
    localStorage.setItem("description1", JSON.stringify(description1)); 
    var description2 = document.getElementById("description2").value ;
    localStorage.setItem("description2", JSON.stringify(description2)); 
    var description3 = document.getElementById("description3").value ;
    localStorage.setItem("description3", JSON.stringify(description3)); 
    var description4 = document.getElementById("description4").value ;
    localStorage.setItem("description4", JSON.stringify(description4)); 
    var description5 = document.getElementById("description5").value ;
    localStorage.setItem("description5", JSON.stringify(description5)); 
    var description6 = document.getElementById("description6").value ;
    localStorage.setItem("description6", JSON.stringify(description6)); 
    var description7 = document.getElementById("description7").value ;
    localStorage.setItem("description7", JSON.stringify(description7)); 
    var description8 = document.getElementById("description8").value ;
    localStorage.setItem("description8", JSON.stringify(description8)); 
}

function renderDescription () {
    var saved1 = JSON.parse(localStorage.getItem("description1"));
    var saved2 = JSON.parse(localStorage.getItem("description2"));
    var saved3 = JSON.parse(localStorage.getItem("description3"));
    var saved4 = JSON.parse(localStorage.getItem("description4"));
    var saved5 = JSON.parse(localStorage.getItem("description5"));
    var saved6 = JSON.parse(localStorage.getItem("description6"));
    var saved7 = JSON.parse(localStorage.getItem("description7"));
    var saved8 = JSON.parse(localStorage.getItem("description8"));

    if (saved1 !== null) {
        document.getElementById("description1").innerText = saved1;
        } else {
            return;
        }
    
    if (saved2 !== null) {
        document.getElementById("description2").innerText = saved2;
        } else {
            return;
        }
    if (saved3 !== null) {
        document.getElementById("description3").innerText = saved3;
        } else {
            return;
        }
        
    if (saved4 !== null) {
        document.getElementById("description4").innerText = saved4;
        } else {
            return;
        }
    if (saved5 !== null) {
        document.getElementById("description5").innerText = saved5;
        } else {
            return;
        }
    
    if (saved6 !== null) {
        document.getElementById("description6").innerText = saved6;
        } else {
            return;
        }
    if (saved7 !== null) {
        document.getElementById("description7").innerText = saved7;
        } else {
            return;
        }
        
    if (saved8 !== null) {
        document.getElementById("description8").innerText = saved8;
        } else {
            return;
        }
}

save1.addEventListener('click', function(event) {
    saveDescription();
    renderDescription();
});
save2.addEventListener('click', function(event) {
    saveDescription();
    renderDescription();
});
save3.addEventListener('click', function(event) {
    saveDescription();
    renderDescription();
});
save4.addEventListener('click', function(event) {
    saveDescription();
    renderDescription();
});
save5.addEventListener('click', function(event) {
    saveDescription();
    renderDescription();
});
save6.addEventListener('click', function(event) {
    saveDescription();
    renderDescription();
});
save7.addEventListener('click', function(event) {
    saveDescription();
    renderDescription();
});
save8.addEventListener('click', function(event) {
    saveDescription();
    renderDescription();
});

function init() {
    renderDescription();
}
init();


