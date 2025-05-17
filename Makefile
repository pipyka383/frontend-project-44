install:
	npm ci

brain-games:
	node frontend-project-44/.github/bin/brain-games.js

publish:
	npm publish --dry-run