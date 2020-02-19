// =================================
// Solution
// =================================

function specialBag(arr) {
  let returnCount;
  const threeCount = arr.filter(item => item == 3).length;
  const twoCount = arr.filter(item => item == 2).length;
  const oneCount = arr.filter(item => item == 1).length;
  
  returnCount = threeCount;  
  if (twoCount > oneCount) {
    returnCount += twoCount;
  } else {
    // !! coerces the result to boolean, then + coerces boolean to number, 
    // so the result of + !!((oneCount-twoCount)%3) can only be 0 or 1
    returnCount += twoCount + Math.floor((oneCount - twoCount) / 3) + !!((oneCount - twoCount)%3); 
  }  
  return returnCount;
}

// =================================
// UI Related
// =================================

// Event Listeners

document.querySelector('#submit').addEventListener('click', e => {
  e.preventDefault();
  const input = document.querySelector('#numbers').value;
  let inputArr = input.split(',');
  if (verifyInput(inputArr)){
    inputArr = inputArr.map(item => parseInt(item.trim()));
    const count = specialBag(inputArr);
    drawResult(count);
  }
});

document.querySelector('#numbers').addEventListener('keydown', e => {
  e.preventDefault;
  if(e.keyCode == 13) {
    document.querySelector('#submit').click();
  }
});

// Functions

function verifyInput(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 3  || arr[i] < 0 || isNaN(arr[i])) {
      showError('Incorrect Input');
      return false;
    } 
  }
  return true;
}

function drawResult (result) {
  document.querySelector('#message').classList.remove('error');
  document.querySelector('#message').innerText = `You need ${result} bag\(s\).`;
 }

function showError(message) {
  document.querySelector('#message').classList.add('error');
  document.querySelector('#message').innerText = message;
  
}