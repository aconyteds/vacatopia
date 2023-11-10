import { join } from "path";
import { readFileSync } from "fs";
import { buildModule } from "../../utils/buildModule";
import { default as InfoModule } from "./info.resolver";

export default buildModule(
  readFileSync(join(__dirname, "./info.schema.graphqls"), "utf-8"),
  InfoModule
);
