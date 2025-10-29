import { IsPlayer } from "../interfaces/IsPlayer.js";

class Player implements IsPlayer {
  constructor(
    public name: string,
    public age: number,
    readonly country: string
  ) {}

  play() {
    console.log(`${this.name} from ${this.age}`);
  }
}

//export default Sccoccer; // ECMAScript imports and exports cannot be written in a CommonJS file under 'verbatimModuleSyntax'. Adjust the 'type' field in the nearest 'package.json' to make this file an ECMAScript module, or adjust your 'verbatimModuleSyntax', 'module', and 'moduleResolution' settings in TypeScript.
