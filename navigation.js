const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');

const setupUI = (user) => {

    if(user){
        //toggle UI elements

        console.log('logged in');

        loggedInLinks.forEach(item => item.style.display = 'block');
        loggedOutLinks.forEach(item => item.style.display = 'block');
    } else{
        //toggle UI elements

        console.log('logged out');

        loggedInLinks.forEach(item => item.style.display = 'none');
        loggedOutLinks.forEach(item => item.style.display = 'block');
    }
}

firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION).then(() => {
    auth.onAuthStateChanged(function(user) {

        console.log(user);

        if(user)
        {
            console.log('logged in xx');
            setupUI(user);
        }
        else
        {
            console.log('logged out xx');
            setupUI(user);
        }
    });
});

//setupUI();
