import { getLatestTime } from "../services/getLatestTime";
import { headerClicked } from "../services/headerClicked";
import "./globalStyles.css";

export function App() {

    var headerColor = "green";
    var headerClass = "green_class";
    var headerId = "my_id"

    function headerClicked(event) {
        debugger;
        alert("You Clicked: "  + event.target.dataset.other)
    }

    function headerClickedWithData(data, event) {
        alert("You Clicked: "  + data)
        alert(event?.target?.id)
    }

    function otherFunction(data) {
        alert("You Clicked: "  + data);
    }
    
    return (
        <div>
            { 1 + 1 }
            <h1 data-info={headerClass}  data-other="First"  class="First"  id="First" onClick={ function() { otherFunction(1) }}>This is First Header for the Component...</h1>
            <h1 data-info="Second" data-other="Second" class="Second" id="Second" onClick={ function(event) { headerClickedWithData(2, event)} }>This is Second Header for the Component...</h1>
            <h1 data-info="Third"  data-other="Third"  class="Third"  id="Third" onClick={ (event) => headerClickedWithData(3, event) }>This is Third Header for the Component...</h1>
            <h1 data-info="Forth"  data-other="Forth"  class="Forth"  id="Forth" onClick={ headerClicked }>This is Forth Header for the Component...</h1>
            <h1 data-info="Fifth"  data-other="Fifth"  class="Fifth"  id="Fifth" onClick={ headerClicked }>This is Fifth Header for the Component...</h1>
            <h1 data-info="Sixty"  data-other="Sixty"  class="Sixty"  id="Sixty" onClick={ headerClicked }>This is Sixth Header for the Component...</h1>
            <h1 data-info="Seven"  data-other="Seven"  class="Seven"  id="Seven" onClick={ headerClicked }>This is Seven Header for the Component...</h1>
        </div>
    )
}