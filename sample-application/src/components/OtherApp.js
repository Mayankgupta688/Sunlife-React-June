import { generateRandom } from "../services/generateRandom";

export function OtherApp() {
    return <h3>This is Another App... { generateRandom() } </h3>
}