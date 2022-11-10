# Cooking-Now

## Description

Coocking Now es una aplicación que nos ayuda a cocinar aportando recetas por distintos tipos de alimentación, tipos de platos, ingredientes, dificultad...

## DB Schemas


### USERS
KEY        | TYPE             | REFERENCE | REQUIRED | VALIDATION                   |
-----------|------------------|-----------|----------|------------------------------|
NAME       | String           | -         | YES      |                              |
USERNAME   | String           | -         | YES      | Unique                       |
EMAIL      | String           | -         | YES      | Unique                       |
PASSWORD   | String           | -         | YES      |                              |
ROLE       | enum             | -         | YES      | Usuario, Administrador       |
DIET       | enum             | -         | NO       | Vegano, Vegetariano, omnivoro|

### RECIPES
KEY        | TYPE             | REFERENCE | REQUIRED | VALIDATION                                            |
-----------|------------------|-----------|----------|-------------------------------------------------------|
NAME       | String           | -         | YES      |                                                       |
DIET       | enum             | -         | YES      | Vegano, Vegetariano, omnivoro                         |
DISHTYPE   | enum             | -         | YES      | Primer plato, segundo plato, aperitivo, postre, "salsa|
INGREDIENTS| [Objects]        |Ingredients| YES      | Unique                                                |
TIME       | String           | -         | YES      |                                                       |
DIFFICULTY | enum             | -         | YES      | Facil, medio, dificil                                 |
PREPARATION| enum             | -         | YES      | Vegano, Vegetariano, omnivoro                         |

###INGREDIENTS
KEY        | TYPE             | REFERENCE | REQUIRED | VALIDATION                   |
-----------|------------------|-----------|----------|------------------------------|
NAME       | String           | -         | YES      |                              | 


## ENDPOINTS

### User Signup/Login

METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                                                                   | RETURNS
-------|------------------|-------|------|--------------------------|-----------------------------------------------------------------------------------------------|--------------------
POST   | /auth/signup     | YES   | Admin| User Signup              | `name`, `username`, `email`, `password`, `diet`								  | `token`
POST   | /auth/login      | -     | User | User Login               | `email`, `username`, `password`                                                               | `token`



### User Endpoints
METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                                                                   | RETURNS
-------|------------------|-------|------|--------------------------|-----------------------------------------------------------------------------------------------|--------------------
GET    | /user/		  | YES   | Admin| Get all users	        |         				                                                              | `Users list`
GET    | /user/:id        | YES   | Admin| Get one user by id	  | `userId`														  | `name`, `username`, `email`, `password`, `role`, `diet`
POST   | /user/		  | YES   |	Admin| Create user		  | `name`, `username`, `email`, `password`, `role`, `diet`							  | `name`, `username`, `email`, `password`, `role`, `diet`
PUT	 | /user/:id	  | YES   | User | Update User		  | `userId`														  | `name`, `username`, `email`, `password`, `role`, `diet`
DELETE | /user/:id	  | YES   | User | Delete User		  | `userId`														  | `name`, `username`, `email`, `password`, `role`, `diet`



### Recipes Endpoints
METHOD | ENDPOINT            | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                                                | RETURNS
-------|---------------------|-------|------|--------------------------|----------------------------------------------------------------------------|--------------------
GET    | /recipe             |       |      | See recipes              | -                                                                          | `recipe list`
GET    | /recipe/dish/:dish  | YES   | User | Recipes by dish type     | `disType`                                                                  | `recipe list`
GET    | /recipe/diet/:diet  | YES   | User | Recipes by diet	     | `diet`                                                                     | `recipe list`
GET    | /recipe/ingredients | YES   | User | Recipes by ingredients   | `ingredients`                                                              | `name`, `diet`, `type`, `ingredients`, `time`, `difficulty`, `preparation`
GET    | /recipe/:id	     | YES   | User | Recipes by ingredients   | `ingredientId`                                                             | `name`, `diet`, `type`, `ingredients`, `time`, `difficulty`, `preparation`
POST   | /recipe             | YES   | Admin| Create recipes           | `recipename`, `diet`, `type`, `ingredients`, `time`, `difficulty`, `how to`| `name`, `diet`, `type`, `ingredients`, `time`, `difficulty`, `preparation`
PUT	 | /recipe/:id	     | YES   | Admin| Update recipe		     | `userId`											    | `name`, `diet`, `type`, `ingredients`, `time`, `difficulty`, `preparation`
DELETE | /recipe/:id	     | YES   | User | Delete User		     | `userId`											    | `name`, `diet`, `type`, `ingredients`, `time`, `difficulty`, `preparation`




### Ingredients Endpoints
METHOD | ENDPOINT            | TOKEN | ROLE | DESCRIPTION                    | POST PARAMS                                                                | RETURNS
-------|---------------------|-------|------|--------------------------------|----------------------------------------------------------------------------|--------------------
GET    | /ingredients/	     | YES   | User | Get all ingredients	           |         				                                              | `Ingredients list`
GET    | /ingredients/:id    | YES   | User | Get one ingredient by id	     | `ingredientId`										    | `name`
POST   | /ingredients/	     | YES   | Admin| Create ingredient              | `name`								 			    | `name`
PUT	 | /ingredients/:id    | YES   | Admin| Update ingredient		     | `ingredientId`					         				    | `name`
DELETE | /ingredients/:id    | YES   | Admin| Delete ingredient		     | `ingredientId`										    | `name`
