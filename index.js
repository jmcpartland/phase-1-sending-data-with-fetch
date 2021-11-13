
function submitData(name, email) {
    // const body = document.querySelector("body")
    // const div = body.createElement("div")
    // div.innerText = object["id"]
    
    let myUser = {
      name,
      email
    }

    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(myUser),
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (object) {
        document.body.innerHTML = object["id"];
    })
    .catch(function (error) {
        document.body.innerHTML = error;
    })


};
