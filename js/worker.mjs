import "./polyfill_performance.js";
import "./wasm_exec.js";
import mod from "../dist/app.wasm";

const go = new Go();

const load = WebAssembly.instantiate(mod, go.importObject).then((instance) => {
  go.run(instance);
  return instance;
});

const readyPromise = new Promise((resolve) => {
  globalThis.ready = resolve;
});

async function processRequest(event) {
  const req = event.request;
  await load;
  await readyPromise;
  return handleRequest(req);
}

addEventListener("fetch", (event) => {
  event.respondWith(processRequest(event));
})
