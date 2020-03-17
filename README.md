# Pseudonym
Pseudonimization api for the Karnak project

## Docker
This section speak about the docker use.

### Image creation
Before use docker-compose, it's necessary to create the pseudonym image. This image will be build with configuration made in [/config/mainzelliste.conf.default](./config/mainzelliste.conf.default). If you want change the config, it's nessary to modify this file with new config, remove image and re build the image. 

#### Build
Build pseudonym image
```sh
docker build -t pseudonym-api-img .
```

#### Remove
Remove pseudonym image
```sh
docker rmi pseudonym-api-img
```

### Run project
When you have created your  image for the he pseudonymization API, you can run the project with the command docker-compose. This command will execute postgres and the pseudonymization API.

#### Run
Run project
```sh
docker-compose up
```
#### Stop
Stop project
```sh
docker-compose down
```

Stop and reset the database in postgres
```sh
docker-compose down -v
```