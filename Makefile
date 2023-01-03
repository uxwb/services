SHELL=/bin/bash

install:
	yarn install --force --ignore-scripts

start:
	yarn run start

new_lib:
	@read -p "Enter Library Name: " LIB && \
	read -p "Enter Library Prefix: " PREFIX && \
	ng generate library $$LIB --prefix=$$PREFIX && \
	ng generate @angular-eslint/schematics:add-eslint-to-project $$LIB

######################################################################

release_fix: lint patch build publish

release_component: lint minor build publish

release_current: lint build publish

######################################################################

lint:
	yarn run lint

build:
	yarn run build

patch:
	cd projects/lib && yarn version --patch --no-git-tag-version --no-commit-hooks

minor:
	cd projects/lib && yarn version --minor --no-git-tag-version --no-commit-hooks

major:
	cd projects/lib && yarn version --major --no-git-tag-version --no-commit-hooks

publish:
	cd dist/lib && yarn pack
#    		yarn publish --access public





