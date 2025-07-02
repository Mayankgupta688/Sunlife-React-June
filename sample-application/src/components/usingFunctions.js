import { OtherApp } from "./OtherApp";
import { generateRandom } from "../services/generateRandom";
import { getLatestTime } from "../services/getLatestTime";

export function App() {
    return (
        <div>
            <h1>The Current time generated oustside is: { generateRandom() }</h1>
            <h2>This is Another Header with Time: { getLatestTime() }</h2>
            <OtherApp></OtherApp>
        </div>
    )
}