.PHONY: app
default: help

# build all theme
dev:
	yarn run docs:dev

analyz:
	yarn run analyz

build:
	yarn run docs:build

autofix:
	yarn run autofix

dll:
	yarn run build:dll
	
test:
	yarn run build:development

pro:
	yarn run docs:build

deploy:
	yarn run deploy

lint:
	yarn run lint

e2e:
	yarn run test:e2e

unit:
	yarn run test:unit

pre:
	yarn run precommit
