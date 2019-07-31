
function creditCheck() {

  var ccImgs = document.querySelectorAll('h2 img');
  for (var i = 0, ccImg; ccImg = ccImgs[i]; ++i) {
    ccImg.style.visibility = 'hidden';
  }

  var ccNum = document.getElementById("cc_number").value;

  //test passed. show card logo
  if (/^5[1-5]/.test(ccNum))
    document.querySelector('h2 img.mastercard').style.visibility = 'visible';
  else if (/^4/.test(ccNum))
    document.querySelector('h2 img.visacard').style.visibility = 'visible';
  else if (ccNum.length == 15 && /^3[47]/.test(ccNum))
    document.querySelector('h2 img.amexcard').style.visibility = 'visible';
  else if (/^6011/.test(ccNum))
    document.querySelector('h2 img.discovercasd').style.visibility = 'visible';

  //test passed. format the string
  this.value = ccNum
    .replace(/^(\d{4})(\d{4})(\d{4})(\d+)$/, '$1 $2 $3 $4');
}

function luhnCheck() {
  var ccNum = document.getElementById("cc_number").value;
  var check = ccNum.split('') //get array
    .reverse()
    .map(function(el, index) {
      return el * (index % 2 + 1); //multiply even positions by 2
    })
    .join('') //combine array of strings
    .split('')
    .reduce(function(a, b) { //sum digits
      return a + (b - 0);
    }, 0);
  if (!check || (check % 10)) { //checksum should be none-zero and dividable by 10
    return false;
    }
    else {
      return true;
    }
}

function check(){
  if(luhnCheck(((document.getElementById("cc_number").value).replace(/\D+/g,""))) == true){
      document.getElementById("result1").style.visibility = 'visible';
    }
  else{
      document.getElementById("result2").style.visibility = 'visible';
  }
}
