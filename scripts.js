const validPassword = "416"; // Change this to your desired password.

function checkPassword() {
    const passwordInput = document.getElementById("password").value;
    if (passwordInput === validPassword) {
        showPartySection();
    } else {
        alert("Incorrect password.");
    }
}

function showPartySection() {
    document.getElementById("partySection").style.display = "block";
}

function attendParty() {
    const partyInfo = {
        address: '416 22nd Street, Allentown PA',
        date: 'Friday, April 21st',
        time: '11:30 PM'
    };
    const encodedPartyInfo = encodeURIComponent(JSON.stringify(partyInfo));
    window.location.href = 'qr_code.html?partyInfo=' + encodedPartyInfo;
}
