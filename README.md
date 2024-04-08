# Requirements
- Nodejs and npm installed
  
# Installation instructions
- Clone the repository
- Install Json Server (0.17.3) by running `npm install -g json-server@0.17.3` in the root folder
- Install dependencies by running `npm install`

# How to run
- Run the Json Server with `json-server --watch mock/mock-data.json --port 3001 --middlewares mock/mock-api.js` from the root folder
- Without closing the Json Server, run the client with `npm start` from the root folder
- If it doesn't open automatically, in the webbrowser go to [localhost:3000](http://localhost:3000/)
- Log in with one of the following test users and go from there:
```
username: rebecka
password: secret

username: eric
password: dad

username: stoffe
password: rock
```
