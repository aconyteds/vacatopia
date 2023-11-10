import { join } from "path";
import { readFileSync } from "fs";
import { buildModule } from "../../utils/buildModule";
import { default as AirBnbModule } from "./air-bnb.resolver";

export default buildModule(
  readFileSync(join(__dirname, "./air-bnb.schema.graphqls"), "utf-8"),
  AirBnbModule
);
