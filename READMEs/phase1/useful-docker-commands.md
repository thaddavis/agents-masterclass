# delete all containers

- docker rm -f $(docker ps -aq)

# delete all images

- docker rmi -f $(docker images -aq)