This is the client side, a server side exists [Stytch Demo Server](https://github.com/BrentonPhoenix/Stytch_Server_Demo)

This project is not currently deployed.


This project is intended to represent a basic competence with Stytch Authentication. It could benefit from some expansion in functionality, but I have other skills to pick up at this time so expansion has been tabled for now.

Future Expansion:
- Styling
- Connecting the routes so you don't have to manually change the url to test the project


To test this code

Complete the server setup found [here](https://github.com/BrentonPhoenix/Stytch_Server_Demo)

And have the server running.

Run
---

```
git clone https://github.com/BrentonPhoenix/Stytch_Demo_Client
```

and then navigate into the Stytch_Server_Demo directory then

Run
---
```
npm install
```


Run
---
```
npm start
```

A browser tab will open to localhost:3000

You will need to change it to localhost:3000/login

- After you have changed the URL you will need to enter 
  **The email you used to Sign Up for Stytch. API calls for any other email will fail unless you have enabled a paid account.**

 - Click submit and check your email. You will have recieved a magic link and clicking it will result in a new tab opening for localhost:3000 
 - press the button to make a request of the server
 - an alert will pop up telling you that you are authenticated.
 - right click to inspect
 - go to the application tab
 - select the cookies tab under storage
 - verify that the cookie is correctly stored.

 You have completed a basic test of this project.

 *please remember to ``ctrl + c`` to kill the applications after you have finished with the project.* 