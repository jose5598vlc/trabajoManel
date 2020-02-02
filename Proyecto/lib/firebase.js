import * as firebase from 'firebase';

class Firebase {

    static init() {
        firebase.initilizeApp({
            apiKey: "AIzaSyCEHrrG7TJew8hpLmpKhtFCiGmkFIOp6gI ",
            authDomain: "react-login.firebaseapp.com",
            databaseURL: "https://react-login.firebaseio.com",
            projectId: "react-login-16176",

        })
    }



}

module.exports = Firebase