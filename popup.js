chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url = extractDomain(tabs[0].url);
    document.getElementById("currentURL").innerHTML = url;

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

function checkIfSamePage(url, urls) {

}