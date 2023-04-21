// popup blocked
window.open('https://javascript.info');

// popup allowed
button.onclick = () => {
let newWin = window.open("about:blank", "hello", "width=200,height=200");

newWin.document.write(
  "<script>window.opener.document.body.innerHTML = 'Test'<\/script>"
);
