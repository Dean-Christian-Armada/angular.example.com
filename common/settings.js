// A variable to return the hostname of the API
// Example : http://127.0.0.1:8001
var apiDomain = "http://api.example.com"; // CHANGE THIS

// A variable to return the hostname of this client app
var domainName = window.location.href;
var domainName = domainName.split("/");
var domainName = domainName[0] + "//" + domainName[2]; //CHANGE THIS

// A function to remove duplicates in array
var unique = function(origArr) {
    var newArr = [],
        origLen = origArr.length,
        found, x, y;

    for (x = 0; x < origLen; x++) {
        found = undefined;
        for (y = 0; y < newArr.length; y++) {
            if (origArr[x] === newArr[y]) {
                found = true;
                break;
            }
        }
        if (!found) {
            newArr.push(origArr[x]);
        }
    }
    return newArr;
}