const partyList = document.querySelector("#partyList");
let parties = [];

async function fetchParties(){
    const response = await fetch("https://fsa-crud-2aa9294fe819.herokuapp.com/api/2307-ftb-et-web-ft/events");
    const json = await response.json();
    parties = json.data;
    console.log(parties);
    renderParties();
}

function renderParties(){
    const html = parties.map((party) => {
        return `
            <div>
                <h2>${party.name}</h2>
                <h3>Date/Time: ${party.date}</h3>
                <h3>Location: ${party.location}</h3>
                <p>
                    ${party.description}
                </p>
            </div>
        `;
    })
    partyList.innerHTML = html.join("");
}

fetchParties();