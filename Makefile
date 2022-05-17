.PHONY: dev
dev:
	wrangler dev

.PHONY: build
build:
	mkdir -p dist
	tinygo build -o ./dist/app.wasm -target wasm ./main.go

.PHONY: publish
publish:
	wrangler publish
