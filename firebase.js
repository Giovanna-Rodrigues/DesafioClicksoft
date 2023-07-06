    import { initializeApp } from "firebase/app";
    import { getAnalytics } from "firebase/analytics";
    
    const firebaseConfig = {
      apiKey: "AIzaSyD0q-rEStm3iE9eOuhabz8mppWr2o93zl0",
      authDomain: "clicksoftchallenge.firebaseapp.com",
      databaseURL: "https://clicksoftchallenge-default-rtdb.firebaseio.com",
      projectId: "clicksoftchallenge",
      storageBucket: "clicksoftchallenge.appspot.com",
      messagingSenderId: "369543346780",
      appId: "1:369543346780:web:379eb7f706e094aa84c499",
      measurementId: "G-97PFTV08KV"
    };
    
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
