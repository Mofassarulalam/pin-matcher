// 1 use common Function


// Empty Value
function emptyValue(id){
    document.getElementById(id).value = '';
}

// Empty Text 
function emptyText(id){
    document.getElementById(id).innerText = '';
}

// Display None
function displayNone(id){
    document.getElementById(id).style.display = 'none';
}

// Display Block

function displayBlock(id){
    document.getElementById(id).style.display ='block';
}





// 2. Generate Random Number / Pin
function randomNumFun(){
    var randomNumber = Math.floor(1000 + Math.random() * 9000);
    document.getElementById('generateNum').value = randomNumber;

    emptyValue('inputField');
    displayNone('matched');
    displayNone('unmatched');
    displayNone('tryContent')

}

// 3. input number value

function inputNumber(newNum){
    document.getElementById('inputField').value += newNum;
}
// 4.  clean value

function clean(){
    document.getElementById('inputField').value = '';
}

// 5. clean last value 

function cleanLast(){
    var inputResult = document.getElementById('inputField').value;
    var removeValue = inputResult.slice(0, inputResult.length - 1);
    document.getElementById('inputField').value = removeValue;
}

// 6. Submit Button (Pin Matching or Didn't Matching)
function submitBtn(){
    var randomNumber = document.getElementById('generateNum').value;
    var typeNumber = document.getElementById('inputField').value;
    
    // 7. Pin Matching condition
    if (randomNumber == typeNumber ){
        displayBlock('matched');
        displayNone('unmatched');
        displayNone('tryContent');
    }
    else{
        displayBlock("unmatched");
        displayNone('matched');
        tryLeft('tryLeft');
        displayBlock('tryContent');
    }
}

// 8. pin Match Error - try 3 left

function tryLeft(id){
    var tryAgain = document.getElementById(id).innerHTML;
    document.getElementById(id).innerHTML -= 1;
    if(tryAgain == '1'){
        disableBtn('submitBtn');
    }
}

// 9. try left expired -submit button disable
function disableBtn(id){
    let button = document.getElementById(id);
    button.style.cursor = 'not-allowed';
    button.setAttribute('disabled', 'true');
    button.title = 'Please Reload Page';
}