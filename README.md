# vanilla-todo-server
Back-end for the repository vanilla-todo-client(https://github.com/lthonny/vanilla-todo-client)

To download all project dependencies, write:
`npm install || npm i`

1.Installing docker
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
- `npm run db:create` create a database inside container 
- `nmp run db:migrate` create tables inside container
- `docker container stop pg` stops postgres
- `docker container start pg` starts pg (note that the data still exists)
  
3.Creating a database in pgadmin4. The database is named the same as we specified in the config file
-------
![image](https://user-images.githubusercontent.com/58366884/132207796-c3193cd4-9da3-4473-beb7-cd581ed880b4.png)

