# AtomicAngularDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

## Contents

- [Setup](#setup)
  - [Recommended](#recommended)
  - [Docker](#docker)
  - [Non-Docker](#non-docker)
  - [Default](#default)

# Setup

## Recommended

*Makefile usage is recommended for unix system setup*

1. Initial setup

```bash
make setup
```

2. Run local dockerized instance

```bash
make start
```

3. Additional rebuilds (after pulling changes)

```bash
make rebuild
```

4. Navigate to [http://localhost:4200/](http://localhost:4200/)


## Docker

1. Initial setup

```bash
docker-compose build
docker-compose run atomic-angular-demo npm install
```

2. Run local dockerized instance

```bash
docker-compose up
```

3. Additional rebuilds (after pulling changes)

```bash
docker-compose build
docker-compose run atomic-angular-demo npm install
```

4. Navigate to [http://localhost:4200/](http://localhost:4200/)

## Non-Docker

1. Initial setup

```bash
npm install
```

2. Run local instance

```bash
npm start
```

3. Re-install dependencies (after pulling changes)

```bash
npm install
```

4. Navigate to [http://localhost:4200/](http://localhost:4200/)

## Default

### Development server

Run `ng serve` for a dev server. Navigate to [http://localhost:4200/](http://localhost:4200/). The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).





