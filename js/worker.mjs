import "./polyfill_performance.js";
import "./wasm_exec.js";
import mod from "../dist/app.wasm";

const go = new Go();

const readyPromise = new Promise((resolve) => {
  globalThis.ready = resolve;
});

const load = WebAssembly.instantiate(mod, go.importObject).then((instance) => {
  go.run(instance);
  return instance;
});

export default {
  async fetch(req, env, ctx) {
    await load;
    await readyPromise;
    return handleRequest(req, { env, ctx });
  }
}
