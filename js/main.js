(function () {
    let newUsersList = document.querySelector('.new-users-list');

    // READ THE PDF BEFORE STARTING
    // Step 1-5 is read the pdf.


    // Add your code here
    const usernameElement = document.querySelector("#username-element");
    const username = document.querySelector("#username");
    
    const cityElement = document.querySelector("#city");
    const provinceElement = document.querySelector("#province");

    usernameElement.addEventListener("input", onHandleUsername);
    
    function onHandleUsername(e) {
        const username = e.currentTarget.text;
        render(username, document.querySelector("#username-element"));
    }

    console.log(usernameElement);
function render(data, container) {
    const template = `<p class="border py-8 px-6"></p>`
    container.insertAdjacentHTML("beforeend", template)
}
    
    

    // the isValueNotEmpty function: 
    // returns true if value not empty
    // returns false if the value is empty
    function isValueNotEmpty(value) {
        if (value !== '') {
            return true;
        }
        return false;
    }
    // function renderTemplate(username) {
    //     const template = `
    //     <li class="w-full py-2 px-3 border-b border-zinc-300 bg-white">
    //         ${username}
    //     </li>
    //     `;
    //     // insert htmlish into the DOM
    //     // element.innerHTML wherever you instert it will blow away any markup
    //     // element.insertAdjacentHTML('4 options', htmlish string)
    //     document.querySelector("#username-element").insertAdjacentHTML('beforeend', template);
    // }
    // the hasWhiteSpace function
    // returns true if s has whitespace
    // returns false if s does not have whitespace
    function hasWhiteSpace(s) {
        return (/\s/).test(s);
    }

    // adds user to the page.
    function addUser(username, city, province) {
        let newUser = `<li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <div class="fw-bold">${username}</div>
                ${city}, ${province}
            </div>
            </li>`;
        newUsersList.innerHTML = newUsersList.innerHTML + newUser;
    }
})();