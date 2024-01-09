function copyTextFromBox(boxNumber) {
    var boxText = document.querySelectorAll('.box')[boxNumber - 1].querySelector('p').innerText;
    copyTextToClipboard(boxText);
  }
  

function copyTextToClipboard(text) {
  navigator.clipboard
    .writeText(text)
    .then(function () {
      console.log("Text copied to clipboard: " + text);
    })
    .catch(function (err) {
      console.error("Unable to copy text to clipboard: ", err);
      alert("Unable to copy text to clipboard");
    });
}