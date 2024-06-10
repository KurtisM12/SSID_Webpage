document.getElementById("copy-button").addEventListener("click", function() {
    var passwordText = document.getElementById("password").innerText;

    var tempInput = document.createElement("input");
    tempInput.setAttribute("value", passwordText);
    document.body.appendChild(tempInput);

    tempInput.select();
    tempInput.setSelectionRange(0, 99999); /* For mobile devices */

    document.execCommand("copy");

    document.body.removeChild(tempInput);

    alert("Password copied to clipboard!");
});
