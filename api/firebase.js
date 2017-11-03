import * as firebase from "firebase";
class Firebase {
    static initialise() {
        firebase.initializeApp({
            apiKey: "AIzaSyCbVfHmBx1BO9eUkkZvl_C8SZXQG0c1hoA",
            authDomain: "bc-app-932a0.firebaseapp.com",
            databaseURL: "https://bc-app-932a0.firebaseio.com",
            projectId: "bc-app-932a0",
            storageBucket: "bc-app-932a0.appspot.com",
            messagingSenderId: "557611534328"
        });

    }
}
module.exports = Firebase;