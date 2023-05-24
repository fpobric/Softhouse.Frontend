This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started and step to follow in order to run the project

Execute commands in you terminal as follows:

- git clone https://github.com/fpobric/frontend-next-js-example.git
- navigate to your project
- run command in terminal "yarn install" or "npm i"
- before you run it make sure example back-end project is running
- run command in terminal "yarn build" or "npm run build"
- after successfull build run "yarn dev" or "npm run dev"

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Project functionalities and features

- index page - loads some commands from public rest API (original comments)
- clicking on some comment will activate/show form for updating comments
- Saving changes will store comments in JSON file locally onto your machine
- Clicking on navigation link at the header "Updated comments" will switch user to other page and display comments from stored JSON file
- Clicking on "Log in" link user should be popped with google login form and user should be able to log in with google account
- User informations are stored in session cookie
- Username will appear in upper right corner
- Clicking on username will log out currently logged user

---- User logged ----

- visiblity of "Updated comments" link in header and ability to navigete to it
- initially updated comment list is empty
- ability to click on comment and activate edit form, make changes within selected comment and save it
- navigate to "Updated comments page"
- list loaded from api should be stored on the disk in folder "Example.Api" project, in file named Comments.json

---- User logged out ----

- load comments from rest API
- login to google account
