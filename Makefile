.PHONY: app
default: help

# build all theme
dev:
	pnpm run docs

analyz:
	pnpm run analyz

build:
	pnpm run docs-build

autofix:
	pnpm run autofix

dll:
	pnpm run build:dll
	
test:
	pnpm run build:development

pro:
	pnpm run docs-build

deploy:
	pnpm run deploy

lint:
	pnpm run lint

e2e:
	pnpm run test:e2e

unit:
	pnpm run test:unit

pre:
	pnpm run precommit
