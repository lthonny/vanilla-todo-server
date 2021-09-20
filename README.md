# vanilla-todo-server
Back-end for the repository vanilla-todo-client(https://github.com/lthonny/vanilla-todo-client)

Requirements: 
  - docker
  - node

If you have something missing below there are links to settings

### 1) To download all project dependencies, write:
  
  `npm ci`

### 2) Prepare db:

#### POSTGRESQL

- `docker container run -d --name=pg-todo -p 5431:5432 -e POSTGRES_PASSWORD=secret -e PGDATA=/pgdata -v [PATH TO]:/pgdata postgres`
 
PATH TO - the path where you created the folder to store the container

- `npx run db:create` create a database inside container

- `npx run db:migrate` create tables inside container

#### MONGODB
    
    - `docker run -d -p 2717:27017 -v [PATH TO]:/data/db mongo`
    
    PATH TO - the path where you created the folder to store the container
    
    - `docker ps` check the functionality of the container and find out its names
    
    - `docker container stop [name_container]` stops mongodb
    
    - `docker container start [name_container]` starts mongodb (note that the data still exists)
 
### 3) Run npm start

  `npm run start`

Installing docker
-------
ubuntu: `https://docs.docker.com/engine/install/ubuntu/`

windows: `https://docs.docker.com/desktop/windows/install/`

mac: `https://docs.docker.com/desktop/mac/install/`


Installing Node
-------
lLink: `https://nodejs.org/en/download/`
