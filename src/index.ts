import { add, sleep } from "./utils";
import * as _ from "lodash";

console.log("add", add(1, 2));

const c = { x: 1, y: 2, z: 3 };

console.log(_.add(1, 2));

(async () => {
  await sleep(1000);
  const { y, ...rest } = c;
  console.log(rest);
})();
