export const environment = {
  'production': true,
  'url': 'https://api.us.apiconnect.ibmcloud.com/shared-resources-uat/pys/ibk/sendtemplate/template',
  'mimes': [
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.ms-excel'
  ],
  'extensions': [
    '.csv'
  ],
  'subscriptionKey': '3b8700ab20814ee58e07ffc89e16c86d',
  'OrdersCategoryURL': 'http://34.27.160.80:8080/perico/v1/backend/orders/categories',
  'CategoryProductsURL': 'http://34.27.160.80:8080/perico/v1/backend/orders/products?categoryId={categoryId}',
  'PriceDetailsURL': 'http://34.27.160.80:8080/perico/v1/backend/priceDetails',
  'RegisterOrderURL': 'http://34.27.160.80:8080/perico/v1/backend/orders',
  'RegisterNewClientURL': 'http://34.27.160.80:8080/perico/v1/backend/persons',
  'LoginURL': 'http://34.27.160.80:8080/perico/v1/backend/users/login',
  'OrderDetailsURL': 'http://34.27.160.80:8080/perico/v1/backend/orders',
  'ProductSuppliesURL': 'http://34.27.160.80:8080/perico/v1/backend/orders/product-details',
};
