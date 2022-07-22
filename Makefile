install:
    npm ci
brain-games:
	node brain/brain-games.js
publish:
	npm publish --dry-run