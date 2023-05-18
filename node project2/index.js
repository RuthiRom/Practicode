import express from "express"

const app=express()
const api=[
    {
      "cursor": "ZK0LZhaqbB9nam9yZGRsYW0yMWcxMzJn",
      "service": {
        "id": "srv-chjagjorddlam21g132g",
        "autoDeploy": "yes",
        "branch": "main",
        "buildFilter": null,
        "createdAt": "2023-05-18T22:36:00.528044Z",
        "name": "ToDoNode1",
        "notifyOnFail": "default",
        "ownerId": "usr-chgem53hp8u065u1klc0",
        "repo": "https://github.com/RuthiRom/Practicode",
        "rootDir": "./node project",
        "slug": "todonode1",
        "suspended": "not_suspended",
        "suspenders": [],
        "type": "web_service",
        "updatedAt": "2023-05-18T22:36:02.222294Z",
        "serviceDetails": {
          "disk": null,
          "env": "node",
          "envSpecificDetails": {
            "buildCommand": "yarn",
            "startCommand": "node index.js"
          },
          "healthCheckPath": "",
          "numInstances": 1,
          "openPorts": null,
          "parentServer": null,
          "plan": "free",
          "pullRequestPreviewsEnabled": "no",
          "region": "singapore",
          "url": "https://todonode1.onrender.com"
        }
      }
    },
    {
      "cursor": "ZK0LZhaqbB9lZ2IzY3YyN21ncDh1YjNn",
      "service": {
        "id": "srv-chjaegb3cv27mgp8ub3g",
        "autoDeploy": "yes",
        "branch": "main",
        "buildFilter": null,
        "createdAt": "2023-05-18T22:31:30.174671Z",
        "name": "ToDoNode3",
        "notifyOnFail": "default",
        "ownerId": "usr-chgem53hp8u065u1klc0",
        "repo": "https://github.com/RuthiRom/Practicode",
        "rootDir": "./node project",
        "slug": "todonode3",
        "suspended": "not_suspended",
        "suspenders": [],
        "type": "web_service",
        "updatedAt": "2023-05-18T22:31:32.206536Z",
        "serviceDetails": {
          "disk": null,
          "env": "node",
          "envSpecificDetails": {
            "buildCommand": "yarn",
            "startCommand": "node app.js"
          },
          "healthCheckPath": "",
          "numInstances": 1,
          "openPorts": null,
          "parentServer": null,
          "plan": "free",
          "pullRequestPreviewsEnabled": "no",
          "region": "singapore",
          "url": "https://todonode3.onrender.com"
        }
      }
    },
    {
      "cursor": "PmvvKZR84I5rcjFtYmc1NG8yMGIyNjUw",
      "service": {
        "id": "srv-chhakr1mbg54o20b2650",
        "autoDeploy": "yes",
        "branch": "main",
        "buildFilter": null,
        "createdAt": "2023-05-15T21:55:57.499462Z",
        "name": "ToDoNode",
        "notifyOnFail": "default",
        "ownerId": "usr-chgem53hp8u065u1klc0",
        "repo": "https://github.com/RuthiRom/Practicode",
        "rootDir": "./node project",
        "slug": "todonode-pv6j",
        "suspended": "not_suspended",
        "suspenders": [],
        "type": "web_service",
        "updatedAt": "2023-05-15T23:22:30.747288Z",
        "serviceDetails": {
          "disk": null,
          "env": "node",
          "envSpecificDetails": {
            "buildCommand": "yarn",
            "startCommand": "node app.js"
          },
          "healthCheckPath": "",
          "numInstances": 1,
          "openPorts": null,
          "parentServer": null,
          "plan": "free",
          "pullRequestPreviewsEnabled": "no",
          "region": "singapore",
          "url": "https://todonode-pv6j.onrender.com"
        }
      }
    },
    {
      "cursor": "cK4REeUw8A4xMXU3YXZqYmJqdWFzNG8w",
      "service": {
        "id": "srv-chh511u7avjbbjuas4o0",
        "autoDeploy": "yes",
        "branch": "main",
        "buildFilter": null,
        "createdAt": "2023-05-15T15:32:24.349122Z",
        "name": "ToDoNode2",
        "notifyOnFail": "default",
        "ownerId": "usr-chgem53hp8u065u1klc0",
        "repo": "https://github.com/RuthiRom/Practicode",
        "rootDir": "./node project",
        "slug": "todonode2",
        "suspended": "not_suspended",
        "suspenders": [],
        "type": "web_service",
        "updatedAt": "2023-05-15T22:08:28.090067Z",
        "serviceDetails": {
          "disk": null,
          "env": "node",
          "envSpecificDetails": {
            "buildCommand": "yarn",
            "startCommand": "node app.js"
          },
          "healthCheckPath": "",
          "numInstances": 1,
          "openPorts": null,
          "parentServer": null,
          "plan": "free",
          "pullRequestPreviewsEnabled": "no",
          "region": "singapore",
          "url": "https://todonode2.onrender.com"
        }
      }
    },
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