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
  'OrdersCategoryURL': 'http://35.184.8.78:8080/perico/v1/backend/orders/categories',
  'CategoryProductsURL': 'http://35.184.8.78:8080/perico/v1/backend/orders/products?categoryId={categoryId}',
  'PriceDetailsURL': 'http://35.184.8.78:8080/perico/v1/backend/priceDetails',
  'RegisterOrderURL': 'http://35.184.8.78:8080/perico/v1/backend/orders'
};
