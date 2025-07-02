export function App() {
    return <h1>This is the Exported Component</h1>
}

export function GetData() {
    alert("Hello");
    for(var i = 0; i< 10; i++ ) {
        let j = i;
        setTimeout(() => {
            console.log(j);
        }, ((i + 1) * 1000))
    }
}