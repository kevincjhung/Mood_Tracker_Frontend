# Mood Tracker

## Progress
✅ done and tested
❌ broken, incomplete or haven't started yet

### Front end 
    ✅ Mood component - a component that displays a single mood
    ❌ MoodForm component - a component that allows users to create a new mood or edit an existing mood
    ✅ App - main component
    ✅❌ Order the list of moods by date or rating (it broke)

    
### Back end 
    ✅ GET /api/moods - returns all moods
    ✅ POST /api/moods - creates a new mood
    ✅ PUT /api/moods/:id - updates a mood
    ✅ DELETE /api/moods/:id - deletes a mood

### General
    ✅ Use React Proxy to be able to connect to your backend server from your frontend.

### Database
    ✅ Perist all of the data to a MySQL database.

### Deployment
    ✅❌ Deploy your app to Railway: currently, old version of app is deployed

### Testing
    ❌ Write tests for your backend
    ❌ Write tests for your frontend
s


## Overview
This assignment is due Sep 29th at 11:59pm, but I suggest you try to get it done by Sep 22nd at 11:59pm. I will be giving you access to assignment 2 on Sep 23rd, so it would be nice for you to not have to worry about two assignments at the same time.

In this assignment, you will create a mood tracker that allows users input a rating of their mood on a scale of 1-10, and a note about their current mood. This will end up being a complete CRUD app so users can create, read, update, and delete their moods. They will also be able to see a list of all of their moods and sort by date or rating.

You will need to build a React frontend, an express backend, use a MySQL database for data persistance, and deploy the entire app to Railway. All of these topics will have been covered by the time this assignment is due.

Example App: https://mood-1-production.up.railway.app/

Frontend 35%
At a minimum, the frontend should have the following components:

Mood - a component that displays a single mood
MoodForm - a component that allows users to create a new mood or edit an existing mood
App - The main component that manages which components are displayed and the state of the app and all networking
You can create more components and organize your code however you like, but at a minimum you should have the above components.

In the react app, you should be able to:

Create a new mood
Edit an existing mood
✅ Delete a mood
✅ View a list of all moods
❌ Order the list of moods by date or rating
And all of these features should work without a backend just by using useState. If you refresh the browser, all of the data will disappear, but the functionality should still work.


Backend 35%
The backend app will be a completely separate app from the frontend. You will need to create a completely separate directory for all of your backend code.

The React Proxy video shows an example of this: https://youtu.be/N4yUiQiTvwU

Create an express server with the following routes:

✅ GET /api/moods - returns all moods
✅ POST /api/moods - creates a new mood
✅ PUT /api/moods/:id - updates a mood
✅ DELETE /api/moods/:id - deletes a mood

Test these independantly of the frontend. You can do some automated testing if you like using supertest, or just test with curl, postman, or thunderclient.

https://www.youtube.com/playlist?list=PL0X6fGhFFNTd5_wsAMasuLarx_VSkqYYX

You can start by just storing the moods in memory and not worrying about the database. You can add the database later.

Use React Proxy to be able to connect to your backend server from your frontend.

https://youtu.be/N4yUiQiTvwU

All of the routes should work with the frontend. Use axios to make a request for each of the crud opperations. When the app first loads, you should use a useEffect to load the intial list of moods.

Database 15%
Perist all of the data to a MySQL database. You probably only need a moods table with the following columns:

CREATE TABLE moods (
  id integer PRIMARY KEY AUTO_INCREMENT,
  notes VARCHAR(255) NOT NULL,
  rating integer NOT NULL default 0,
  created TIMESTAMP NOT NULL DEFAULT NOW()
);
But you can get more creative if you like.

https://youtu.be/Hej48pi_lOc

Deployment 15%
Deploy your app to Railway

Rubric
Frontend works without a backend 35%
Frontend works with backend but no database 35%
Frontend works with backend and database 15%
Everything is deployed 15%
Submission
You will submit your code through github classroom repos. You will need two repos, one for your frontend and one for your backend. You should have already been tracking your changes using git, so you will already have a git history for both your frontend and backend repos. Follow these instructions to push your code to a new github repo:

➡️
Accept the following github classroom link for the frontend:


https://classroom.github.com/a/0l7hQnl0

Make sure you copy the repo url and use it in the next step.

➡️
From your frontend repo, run the following commands to merge your git history with the classroom repo and push your code:


git remote add classroom https://github.com/whatever-your-url-is-for-github-classroom # Add the classroom repo as a remote
git fetch classroom # fetch the code from the classroom repo
git config pull.rebase false # make sure you don't have rebase turned on
git pull classroom main --allow-unrelated-histories # merge the code from the classroom repo
git push classroom main # push all of your code to github classroom so i can see it
Then do pretty much the same for your backend repo:

➡️
Accept the following github classroom link for the backend:


https://classroom.github.com/a/jbTl6vXt

Make sure you copy the repo url and use it in the next step.

➡️
From your backend repo, run the following commands to merge your git history with the classroom repo and push your code:


git remote add classroom https://github.com/whatever-your-url-is-for-github-classroom # Add the classroom repo as a remote
git fetch classroom # fetch the code from the classroom repo
git config pull.rebase false # make sure you don't have rebase turned on
git pull classroom (use `main` or `master` depending on how you setup your repo) --allow-unrelated-histories # merge the code from the classroom repo
git push classroom (use `main` or `master` depending on how you setup your repo) # push all of your code to github classroom so i can see it
After you have pushed all of your code to github, send my your url in discord in the comp-3330 channel. @saM me and I will check your code and give you a grade.

## Problems to fix
- Refresh needed to make the changes show up