import "./polyfill_performance.js";
import "./wasm_exec.js";

const go = new Go();

let mod;

export function init(m) {
  mod = m;
}

async function run() {
  const readyPromise = new Promise((resolve) => {
    globalThis.ready = resolve;
  });
  const instance = new WebAssembly.Instance(mod, go.importObject);
  go.run(instance);
  await readyPromise;
}

export async function fetch(req, env, ctx) {
  await run();
  return handleRequest(req, { env, ctx });
}
