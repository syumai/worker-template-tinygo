# worker-template-tinygo

* This project has been moved into [workers](https://github.com/syumai/workers/tree/main/_templates/cloudflare/worker-tinygo) repository.

---

<details>
<summary>Legacy Docmentation</summary>

- A template for starting a Cloudflare Worker project with tinygo.
- This template uses [`workers`](https://github.com/syumai/workers) package to run an HTTP server.

## Usage

- `main.go` includes simple HTTP server implementation. Feel free to edit this code and implement your own HTTP server.

## Requirements

- Node.js
- [wrangler](https://developers.cloudflare.com/workers/wrangler/)
  - just run `npm install -g wrangler`
- tinygo

## Getting Started

```
$ git clone https://github.com/syumai/worker-template-tinygo my-app
$ cd my-app
$ go mod init
$ go mod tidy
$ make dev # start running dev server
$ curl http://localhost:8787/hello
Hello!
```

- To change worker name, please edit `name` property in `wrangler.toml`.

## Development

### Commands

```
make dev     # run dev server
make build   # build Go Wasm binary
make publish # publish worker
```

### Testing dev server

- Just send HTTP request using some tools like curl.

```
$ curl http://localhost:8787/hello
Hello!
```

```
$ curl -X POST -d "test message" http://localhost:8787/echo
test message
```

</details>
