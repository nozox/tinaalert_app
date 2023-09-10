let sendBtn = document.getElementById("sendBtn")
let memo = document.getElementById("memo")

// localStorage.setItem("user",)

sendBtn.addEventListener("click",()=> {
    console.log("on click")
    const user = document.getElementById("user")
    const pass = document.getElementById("pass")
    console.log(`user: ${user.value}/ pass: ${pass.value}`)
    localStorage.setItem("user", user.value)
    localStorage.setItem("pass",pass.value)
    const getUser = localStorage.getItem("user")
    const getPass = localStorage.getItem("pass")
    memo.innerText = `user: ${getUser} /pass: ${getPass}`
    user.value = ""
    pass.value = ""
})