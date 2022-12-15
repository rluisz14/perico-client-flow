// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  'production': false,
  'url': 'https://api.us.apiconnect.ibmcloud.com/shared-resources-uat/pys/ibk/sendtemplate/template',
  'mimes': [
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.ms-excel'
  ],
  'extensions': [
    '.csv'
  ],
  'subscriptionKey': '3b8700ab20814ee58e07ffc89e16c86d',
  'OrdersCategoryURL': 'http://localhost:8080/perico/v1/backend/orders/categories',
  'CategoryProductsURL': 'http://localhost:8080/perico/v1/backend/orders/products?categoryId={categoryId}',
  'PriceDetailsURL': 'http://localhost:8080/perico/v1/backend/priceDetails',
  'RegisterOrderURL': 'http://localhost:8080/perico/v1/backend/orders',
  'RegisterNewClientURL': 'http://localhost:8080/perico/v1/backend/persons',
  'LoginURL': 'http://localhost:8080/perico/v1/backend/users/login',
  'OrderDetailsURL': 'http://localhost:8080/perico/v1/backend/orders',
  'ProductSuppliesURL': 'http://localhost:8080/perico/v1/backend/orders/product-details',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
