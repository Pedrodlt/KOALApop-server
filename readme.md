Base URL/products

HTTP METHOD   | URL PATH             | DESCRIPTION           | 
------------- | -------------        | ------------          | 
GET           | `/getAllProducts`    | PRODUCTS LISTPAGE     |
POST          | `/saveProduct`       | PRODUCTS CREATEPG     |
POST          | `/:id/shipment`      | PRODUCTS SHIPMENT     |
GET           | `/:id`               | PRODUCT DETAIL        |
PUT           | `/:id/edit`          | PRODUCTS EDIT         |
DELETE        | `/:id/delete`        | PRODUCTS DELETE       |


Base URL/users

HTTP METHOD   | URL PATH       | DESCRIPTION         | 
------------- | -------------  | ------------        | 
GET           | `/getAllUsers` | USERS LISTPAGE      |
POST          | `/saveUser`    | USERS CREATEPG      |
POST          | `/:id/products`| USER PRODUCTS LIST  |
GET           | `/:id`         | USERS PROF          |
PUT           | `/:id/edit`    | USERS EDIT PROF     |
DELETE        | `/:id/delete`  | USERS DELETE PROF   |


Base URL /auth

HTTP METHOD   | URL PATH                 | DESCRIPTION     | 
------------- | -------------            | ------------    | 
POST           | `/login`                | LOGIN PAGE      |
POST           | `/register`             | REGISTER PAGE   |
GET            | `/verify`               | INDEX PAGE      |
