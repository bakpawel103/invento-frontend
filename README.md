# EW default projectstructur

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.6.

## Build this project
### Local
For local development. This command start a local mock-api and a local dev-server. <br>
`npm run serve:local` 

This server runs onto `http://localhost:4200/`

### Test
 If you want to deploy on test-environment.<br>
 `npm run build:test`
 
### Prod
For deployment on production.<br>
 `npm run build:prod` 

## Use of default-template

### EWGlobal
The Index-file imports the EW-Global-Object. It contains the information about the current user and environment. <br>
Sample:
```json
{ 
  "IsOffline": false, 
  "User": { 
    "Account": "corp.ewa.com&#92;215831", 
    "Company": "EWA", 
    "CompanyIata": "", 
    "DisplayName": "Mustermann, Max",
    "Email": "Max.Mustermann@eurowings.com",
    "FirstName": "Max",
    "IsCabin": false,
    "IsCockpit": false,
    "IsCrew": false,
    "LastName": "Mustermann",
    "NamePrefix": "",
    "Roles": [ 
      "IT-Admin", "ADB_MasterReader", "AdbAocAll", "AdbBaseManage", "AdbContactsManage", "AdbGroundServicesManage", 
      "AdbReporting", "AdbView", "All-Aoc", "CrewInfosAllAocs", "CrewInfosCabin", "CrewInfosCockpit", "CrewInfosEditor", 
      "CrewInfosInfos", "CrewInfosOrders", "CrewInfosPublisher", "FBC Developers", "Visitors"
    ], 
    "Tlc": "XXX", 
    "UserId": "000000"
  } 
} 
```

### Default Styles
In the assets-folder you find the default flybase-styles and -fonts. 
Use Material-Components with default styles.

## Code-Styleguide
###Material-Templates
We use material-components for all 

# Generated Default Angular-Doc

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
