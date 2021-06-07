# docker-demo-mern

#### Environment

**Backend:** 

++ File .env.development:

NODE_ENV=development

PORT=8080
MONGO_URI=mern-mongo
MONGO_PORT=27017
MONGO_DATABASE_NAME=demo-mern

++ File .env.production:

NODE_ENV=production

PORT=6000
MONGO_URI=mern-mongo
MONGO_PORT=27017
MONGO_DATABSE_NAME=demo-mern

**Frontend:**

++ File .env.development:

REACT_APP_ENVIRONMENT=development

REACT_APP_END_POINT=http://localhost:8080

++ File .env.production:

REACT_APP_ENVIRONMENT=production

REACT_APP_END_POINT=http://localhost:6000 (use domain server instead of localhost)
