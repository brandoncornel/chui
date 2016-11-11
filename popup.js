listOfUrls = ["facebook.com"];



chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url = extractDomain(tabs[0].url);
    document.getElementById("currentURL").innerHTML = url;
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
    if (checkIfSamePage(url)) {
        document.getElementById("badPage").innerHTML = "YES";
    } else {
        document.getElementById("badPage").innerHTML = "NO";
    }

});

function extractDomain(url) {
    var domain;
    if (url.indexOf("://") > -1) {
        domain = url.split('/')[2];
    }
    else {
        domain = url.split('/')[0];
    }
    domain = domain.split(':')[0];
    if (url.indexOf("www.") > -1) {
        domain = domain.split("www.")[1];
    }
    return domain;
}

function checkIfSamePage(url) {
    for (var i = 0; i < listOfUrls.length; i++) {
        if (listOfUrls[i] == url) {
            return true
        }
    }
    return false
}

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

