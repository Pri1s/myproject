docker build -t myproject .

Docker ps -a

docker run -p80:8000 --name gpacalc myproject

docker rm  gpacalc

To ssh to container: docker exec -it gpacalc /bin/bash

If you change a file , you need to do below steps

- Remove container [docker rm  gpacalc]
- Remove Image [docker image rm <IMAGE-ID>]
- Now build image [docker build -t myproject .]
- Run container [docker run -p80:8000 --name gpacalc myproject]

