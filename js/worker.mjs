import * as imports from "./shim.mjs";
import mod from "../dist/app.wasm";

imports.init(mod);

export default { fetch: imports.fetch }
