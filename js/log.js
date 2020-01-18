const LOG_LENGTH = 10;

function log(string) {
  // Change top log color
  if(logDisp.firstElementChild)
    logDisp.firstElementChild.style.color = "gray";

  // Add message to the top of the log
  let div = document.createElement("div")
  div.textContent = string
  logDisp.insertBefore(div, logDisp.firstChild);
}