// Spell Check Start Code

//get event listeners

document.getElementById("search1").addEventListener("click", surch1);
document.getElementById("search2").addEventListener("click", surch2);

// Global Variables
let dictionary;
let aliceWords;

// Load Data Files into Global Variables
loadDictionary();
loadAliceText();
//search if inputted word is present
function surch1() { //get *more* elements by id
    var inp = document.getElementById("dicsearch").value;
    let searchtype = document.getElementById("searchtype1").value;
    if (searchtype == "linear1") { //call linear search if that is what the selection says
        var found = linearsearch(dictionary, inp);
    } else { //if not, call binary
        var found = binarysearch(dictionary, inp);
    } //log where it's found
    if (found >= 0) {
        console.log("found at index: " + found);
    } else {
        console.log("not found")
    }
    
}

function surch2() { //search alice in wonderland
    let searchtype = document.getElementById("searchtype2").value;
    if (searchtype == "linear2") {
        let count = 0; //call count that is increased whenever a word is not found in the dictionary
        for (let i = 0; i < aliceWords.length; i++) { //loop thru all words and print what's not found
            let indeks = linearsearch(dictionary, aliceWords[i].toLowerCase()); 
            if(indeks == -1) {
                console.log(aliceWords[i]);
                count++
            } 
        } //print how many are not found
        console.log(count + " Words not found in dictionary");
    } else { //same thing but with binarysearch
        let count = 0; 
        for (let i = 0; i < aliceWords.length; i++) {
            let indeks = binarysearch(dictionary, aliceWords[i].toLowerCase()); 
            if(indeks == -1) {
                console.log(aliceWords[i]);
                count++
            } 
        }
        console.log(count + " Words not found in dictionary");
    }
}
//loop through array until value is found, if never found return -1
function linearsearch(anArray, item) {
    for (let i = 0; i < anArray.length; i++) {
        if (anArray[i] == item) {
            return i;
        }
    }
    return -1;
}
//check if value is above or below the middle, then continuously cut it in half until only it remains
function binarysearch(anArray, item) {
    lindex = 0;
    hindex = (anArray.length)-1;
    while(lindex <= hindex) {
        mindex = Math.floor((lindex + hindex)/2);
        if (anArray[mindex] == item) {
            return mindex;
        } else if (item < anArray[mindex]) {
            hindex = (mindex - 1);
        } else {
            lindex = (mindex + 1);
        }
    }
    return -1;
 }
 