Performance Testing
=======================================


## Setup
Install:
* [Docker](https://docs.docker.com/install/)
* [Docker Compose](https://docs.docker.com/compose/install/)


## Usage

* Set the following environments:
  * RUN_ENVIRONMENT # Normally this will be `test`
  * SCRIPT_FILE # script file used to run performance test inside the config directory, eg: `test.yml`
  * ASIA_QUOTE_API_KEY
* Running the Artillery:
```
./bin/run
```
