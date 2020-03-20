# Pseudonym
Pseudonimization api for the Karnak project

## Docker
This section speak about the docker use.

### Image creation
Before use docker-compose, it's necessary to create the pseudonym image and callbacklistener image. Pseudonym image will be build with configuration made in [/config/mainzelliste.conf.default](./config/mainzelliste.conf.default). If you want change the config, it's nessary to modify this file with new config, remove image and re build the image. The callbacklistener image is only the image used to listen to all addPatient request creation tokens. The creation token addPatient request awaits a 200 response from the callback URL in the request body.

#### Build
Build pseudonym image. Run the comand below in root directory.
```sh
docker build -t pseudonym-api-img .
```

Build callbacklistener image. Execute the comand bellow in callbacklistener folder.
```sh
docker build -t callbacklistener-img .
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

