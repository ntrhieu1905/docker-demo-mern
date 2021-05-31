REPOSITORY=mern
ACCOUNT=hieunt98
# development environment
dev-up:
	docker-compose --context default -f docker-compose.dev.yml up --build -d

dev-down:
	docker-compose --context default -f docker-compose.dev.yml down

# production environment
prod-up:
	docker-compose --context default -f docker-compose.prod.yml up --build -d

prod-down:
	docker-compose --context default -f docker-compose.prod.yml down

prod-push:
	docker --context default tag demo-mern_nginx:latest ${ACCOUNT}/${REPOSITORY}-nginx:latest
	docker --context default tag demo-mern_backend:latest ${ACCOUNT}/${REPOSITORY}-be:latest
	docker --context default tag demo-mern_frontend:latest ${ACCOUNT}/${REPOSITORY}-fe:latest
	docker --context default push ${ACCOUNT}/${REPOSITORY}-nginx:latest
	docker --context default push ${ACCOUNT}/${REPOSITORY}-be:latest
	docker --context default push ${ACCOUNT}/${REPOSITORY}-fe:latest

# clone from doker hub
up:
	docker-compose --context default -f docker-compose.yml up --build -d

down:
	docker-compose --context default -f docker-compose.yml down

