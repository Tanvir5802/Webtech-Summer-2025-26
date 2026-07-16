console.log("Connected");

function collectData() {

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const studentId = document.getElementById("studentId").value;
    const email = document.getElementById("email").value;
    const credit = document.getElementById("credit").value;
    const department = document.getElementById("department").value;

    if (!firstName) {
        document.getElementById("firstNameError").innerHTML =
        "First Name is required";
    } else {
        document.getElementById("firstNameError").innerHTML = "";
    }

    if (!lastName) {
        document.getElementById("lastNameError").innerHTML =
        "Last Name is required";
    } else {
        document.getElementById("lastNameError").innerHTML = "";
    }

    if (!studentId) {
        document.getElementById("studentIdError").innerHTML =
        "Student ID is required";
    } else if (studentId.indexOf("-") == -1) {
        document.getElementById("studentIdError").innerHTML =
        "Student ID must contain -";
    } else {
        document.getElementById("studentIdError").innerHTML = "";
    }

    if (!email) {
        document.getElementById("emailError").innerHTML =
        "Email is required";
    } else if (email.indexOf("@student.aiub.edu") == -1) {
        document.getElementById("emailError").innerHTML =
        "Invalid AIUB Email";
    } else {
        document.getElementById("emailError").innerHTML = "";
    }

    if (!credit) {
        document.getElementById("creditError").innerHTML =
        "Credit is required";
    } else if (credit < 0 || credit >= 148) {
        document.getElementById("creditError").innerHTML =
        "Credit must be between 0 and 147";
    } else {
        document.getElementById("creditError").innerHTML = "";
    }

    if (!department) {
        document.getElementById("departmentError").innerHTML =
        "Department is required";
    } else {
        document.getElementById("departmentError").innerHTML = "";
    }

    return false;
}