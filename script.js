let names = [];
let phoneNumbers = [];
let emailAddresses = [];
let companys = [];
let jobTitles = [];
let notices = [];
load();

function render() {
    let content = document.getElementById('content');
    content.innerHTML = '';
    content.innerHTML += `<h1>Kontaktdaten</h1>`;
    content.innerHTML += 
    `<div>
        <input id="name" placeholder="Name" type="text" minlength="3">
        <input id="phone" placeholder="Telefon" type="tel" min="5">
        <input id="email" placeholder="E-Mail Adresse" type="email" pattern=".+@mycompany\.com" pattern=".+@mycompany\.de">
        <input id="company" placeholder="Unternehmen" type="text" minlength="3">
        <input id="jobTitle" placeholder="Berufsbezeichnung" type="text" minlength="3"><br></br>
        <textarea id="notice" placeholder="Notiz zur Person" minlength="5"></textarea><br></br>
        <button class="btn1" onclick="addContact()">Kontakt anlegen</button>
    </div>
    `;

    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        const phoneNumber = phoneNumbers[i];
        const email = emailAddresses[i];
        const company = companys[i];
        const jobTitle = jobTitles[i];
        const notice = notices[i];

        content.innerHTML += `
        <div class="card">
            <b>Name: </b> ${name} <br></br>
            <b>Telefon: </b> ${phoneNumber} <br></br>
            <b>E-Mail Adresse: </b> ${email} <br></br>
            <b>Unternehmen: </b> ${company} <br></br>
            <b>Berufsbezeichnung: </b> ${jobTitle} <br></br>
            <b>Notiz zur Person: </b> ${notice} <br></br>
            <button class="btn2" onclick="deleteContact(${i})">Löschen</button>
        </div>
        `;
    }
}

function addContact() {
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;
    let company = document.getElementById('company').value;
    let jobTitle = document.getElementById('jobTitle').value;
    let notice = document.getElementById('notice').value;
    if (name == "" || phone == "" || email == "" || company == "" || jobTitle == "" || notice == "") {
        alert('Bitte füllen Sie alle Felder aus.')
    } else {
    names.push(name);
    phoneNumbers.push(phone);
    emailAddresses.push(email);
    companys.push(company);
    jobTitles.push(jobTitle);
    notices.push(notice);
    }
    render();
    save();
}

function deleteContact(i) {
    names.splice(i, 1);
    phoneNumbers.splice(i, 1);
    emailAddresses.splice(i, 1);
    companys.splice(i, 1);
    jobTitles.splice(i, 1);
    notices.splice(i, 1);
    render();
    save();
}

function save() {
    let namesAsText = JSON.stringify(names);
    localStorage.setItem('names', namesAsText);

    let phoneNumbersAsText = JSON.stringify(phoneNumbers);
    localStorage.setItem('phoneNumbers', phoneNumbersAsText);

    let emailAddressesAsText = JSON.stringify(emailAddresses);
    localStorage.setItem('emailAddresses', emailAddressesAsText);

    let companysAsText = JSON.stringify(companys);
    localStorage.setItem('companys', companysAsText);

    let jobTitlesAsText = JSON.stringify(jobTitles);
    localStorage.setItem('jobTitles', jobTitlesAsText);

    let noticesAsText = JSON.stringify(notices);
    localStorage.setItem('notices', noticesAsText);
}

function load() {
    let namesAsText = localStorage.getItem('names');
    let phoneNumbersAsText = localStorage.getItem('phoneNumbers');
    let emailAddressesAsText = localStorage.getItem('emailAddresses');
    let companysAsText = localStorage.getItem('companys');
    let jobTitlesAsText = localStorage.getItem('jobTitles');
    let noticesAsText = localStorage.getItem('notices');

    if (namesAsText && phoneNumbersAsText && emailAddressesAsText && companysAsText && jobTitlesAsText && noticesAsText) {
        names = JSON.parse(namesAsText);
        phoneNumbers = JSON.parse(phoneNumbersAsText);
        emailAddresses = JSON.parse(emailAddressesAsText);
        companys = JSON.parse (companysAsText);
        jobTitles = JSON.parse (jobTitlesAsText);
        notices = JSON.parse (noticesAsText);
    }
}