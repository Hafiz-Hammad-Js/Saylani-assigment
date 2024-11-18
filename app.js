let root = document.getElementById("root")
let inp = document.getElementById("inp")

let userInput = "Rizwanjamal"

function sentvalue(e) {
    console.log(userInput)
    userInput = e.target.value
}

var userData;

function callApi() {


    fetch(`https://api.github.com/users/${userInput}`)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data)
            userData = data

            if (data.message === "Not Found") {
                root.innerHTML = `User "Not Found"`
                inp.value = ""
            } else {
                root.innerHTML = `
                <div>
                    <div>
                        <img src=${userData.avatar_url}/>
                        <h1>${userData.name}</h1>
                        <h4>followers :${userData.followers} / following : ${userData.following}</h4>
                        <p>Bio :${userData.bio}</p>
                        <h5>user view type: ${userData.user_view_type}</h5>
                        <h5>location:${userData.location}</h5>
                    </div>
                </div>

     `
                inp.value = ""
            }

        })
        .catch((error) => {
            console.log("not found")
        })

}

setTimeout(() => {
    callApi()
}, 1000)

