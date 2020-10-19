attempts = 0

function onclickhandler() {
    password = document.getElementById("password").value
    console.log("DEBUG: Password is \"" + password + "\"")
    password = password.toLowerCase().replace(/\s+/g, '');
    image = null;
    console.log("DEBUG: Checkable password is \"" + password + "\"")
    document.getElementById("password").value = ""
    switch (password) {
        case "catchingfire":
            image = "puzzle1.jpg";
            console.log("DEBUG: Password matches \"catchingfire\"")
            break;
        case "nephew":
            image = "puzzle2.jpg";
            console.log("DEBUG: Password matches \"nephew\"")
            break;
        case "hamilton":
            image = "puzzle3.jpg";
            console.log("DEBUG: Password matches \"hamilton\"")
            break;
        case "heaney":
            image = "end.jpg";
            console.log("DEBUG: Password matches \"heaney\"")
            document.getElementById("form").innerHTML = "";
            break;
        default:
            attempts += 1;
            document.getElementById("status").innerHTML = "INVALID PASSWORD (Attempt #" + attempts + ")";
            console.log("DEBUG: Password is invalid")
            console.log("DEBUG: " + attempts + " attempts have been made")
    };
    if (image) {
        document.getElementById("image").setAttribute("src", image)
        console.log("DEBUG: Set image to \"" + image + "\"")
        attempts = 0;
        document.getElementById("status").innerHTML = "";
    };
};