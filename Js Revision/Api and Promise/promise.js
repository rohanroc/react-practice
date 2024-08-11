const myPromise = new Promise(function (reslove, reject) {
    setTimeout(() => {
        console.log("promise exicuted")
        reslove()
    }, 1000);
})
myPromise.then(function () {
    console.log("myPromise resolved");
})

new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("promice exicuted1");
        resolve();
    }, 1000)
}).then(function () {
    console.log("promise consumed");
})

const myPromise3 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("Async task3 is completed")
        resolve({ username: "rohan", email: "abc@example.com" });
    }, 1000);
})

myPromise3.then(function (user) {
    console.log(user.username)
})

const myPromise4 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ username: "rohanrock", password: "123456" })
        }
        else {
            reject("Something went wrong!!404")
        }
    }, 1000);
})

myPromise4.then(function (user) {
    console.log(user)
    return user.username
}).then(
    function (username) {
        console.log(username)
    }
).catch(function (er) {
    console.log(er)
}).finally(function () {
    console.log("Finally the promise is either resolved or rejected")
})

// Api call

fetch("https://api.github.com/users/rohanroc")
    .then(function (responce) {
        return responce.json();
    }).then(function (data) {
        console.log(data);
    }).catch(function (error) {
        console.log(error)
    })
