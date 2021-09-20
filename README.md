# vanilla-todo-server
Back-end for the repository vanilla-todo-client(https://github.com/lthonny/vanilla-todo-client)

Requirements: 
  - docker
  - node

1) To download all project dependencies, write:
  `npm ci`

2) Prepare db:
  a) postgresql
  
  b) mongodb
  - `docker run -d -p 2717:27017 -v `[path to]` :/data/db mongo`
  path to - the path where you created the folder to store the container
  - `docker ps` check the functionality of the container and find out its names
  - `docker container stop [name_container]` stops mongodb
  - `docker container start [name_container]` starts mongodb (note that the data still exists)
 
3) Run npm start
4) 

Installing docker
-------
ubuntu: `https://docs.docker.com/engine/install/ubuntu/`

windows: `https://docs.docker.com/desktop/windows/install/`

mac: `https://docs.docker.com/desktop/mac/install/`

2.Running postgresql in docker container
-------
- `docker container ls` ( -a - include stopped containers )
- `docker container run -d --name=pg-todo -p 5431:5432 -e POSTGRES_PASSWORD=secret -e PGDATA=/pgdata -v` _(copy the path to the created pgdata folder, which lies in the project)_ `:/pgdata postgres` (-p <host machine free port>:<container port>)
pgdata folder contains postgres files
- `psql -h localhost -p 5431 -U postgres` (password would be 'secret', note the port 5431, not 5432)
- `update config to contain 5431 port`
- `npx run db:create` create a database inside container 
- `npx run db:migrate` create tables inside container
- `docker container stop pg-todo` stops postgres
- `docker container start pg-todo` starts pg (note that the data still exists)
  
3.Running mongodb in docker container
-------
- `sudo docker run -d -p 2717:27017 -v` _(copy the path to the created data folder, which lies in the project)_ `:/data/db mongo`
mgdata folder contains mongodb files
- `docker container stop <name_container>` stops mongodb
- `docker container start <name_container>` starts mongodb (note that the data still exists)

