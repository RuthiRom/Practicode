import express from "express";

const app = express()
const api = [
    {
      "cursor": "qPjs9UlzbNVqbWlrNzI4c2Q2aWVtYWhn",
      "service": {
        "id": "srv-chgmjmik728sd6iemahg",
        "autoDeploy": "yes",
        "branch": "main",
        "buildFilter": null,
        "createdAt": "2023-05-14T23:08:11.047632Z",
        "name": "ToDoApi",
        "notifyOnFail": "default",
        "ownerId": "usr-chgem53hp8u065u1klc0",
        "repo": "https://github.com/RuthiRom/Practicode",
        "rootDir": "./ToDoApi",
        "slug": "todoapi3-kb3v",
        "suspended": "not_suspended",
        "suspenders": [],
        "type": "web_service",
        "updatedAt": "2023-05-15T13:13:16.213903Z",
        "serviceDetails": {
          "disk": null,
          "env": "docker",
          "envSpecificDetails": {
            "dockerCommand": "",
            "dockerContext": ".",
            "dockerfilePath": "Dockerfile"
          },
          "healthCheckPath": "",
          "numInstances": 1,
          "openPorts": null,
          "parentServer": null,
          "plan": "free",
          "pullRequestPreviewsEnabled": "no",
          "region": "singapore",
          "url": "https://todoapi3-kb3v.onrender.com"
        }
      }
    },
    {
      "cursor": "WODUlIXPW8w2bTY3YXZqYmJqcG1uZDJn",
      "service": {
        "id": "srv-chgh6m67avjbbjpmnd2g",
        "autoDeploy": "yes",
        "branch": "main",
        "buildFilter": null,
        "createdAt": "2023-05-14T16:59:04.597982Z",
        "name": "ToDoListReact-master",
        "notifyOnFail": "default",
        "ownerId": "usr-chgem53hp8u065u1klc0",
        "repo": "https://github.com/RuthiRom/Practicode",
        "rootDir": "./ToDoListReact-master",
        "slug": "todolistreact-master",
        "suspended": "not_suspended",
        "suspenders": [],
        "type": "static_site",
        "updatedAt": "2023-05-15T13:13:29.176834Z",
        "serviceDetails": {
          "buildCommand": "npm run build",
          "parentServer": null,
          "publishPath": "build",
          "pullRequestPreviewsEnabled": "no",
          "url": "https://todolistreact-master.onrender.com"
        }
      }
    }
  ]
const port=3000
console.log("nice!!!!!!!")
app.get('/', (req, res) => {
    res.send(api)
})
app.listen(port,()=>{
    console.log("app is running!")
})