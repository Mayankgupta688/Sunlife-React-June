import { useState, useEffect, createContext, use, useContext } from "react";

const AppContext = createContext();

export default function ParentComponent() {
    var [employee, setEmployee] = useState({
        empName: "John Doe = Mayank Guipta Data from Parent",   
        age: 20,
        designation: "Developer",
        count: 100
    });

    // useEffect(function() {
    //     setTimeout(() => {
    //         setEmployee({
    //             count: employee.count + 1
    //         })
    //     }, 1000)
    // }, [employee])

    function updateName() {
        setEmployee({
            ...employee,
            empName: "Mayank Gupta"
        })
    }

    return (
        <AppContext.Provider value={{ employee: employee, updateName: updateName }}>
            <h1>This is User {employee.empName}</h1>
            <h2>User Age is {employee.age}</h2>
            <h3>User Designation {employee.designation}</h3>
            <h3>User Count {employee.count}</h3><hr/>
            <ChildComponent></ChildComponent>
        </AppContext.Provider>
    )
}

function ChildComponent() {
    return (
        <>
            <h1>This is Child Component</h1>
            <h2>This is User: TechnoFunnel</h2>
            <h3>User Age is 2</h3>
            <h4>User Designation Company</h4><hr/>
            <GrandChildComponent></GrandChildComponent>
        </>
    )
}   

function GrandChildComponent() {
    return (
        <>
            <h1>This is Grand Child Component</h1>
            <h2>This is User: dsfsdfsdf</h2>
            <h3>User Age is 2</h3>
            <h4>User Designation Company</h4>
            <h3>User Count 24525</h3><hr/>
            <GrandGrandChildComponent></GrandGrandChildComponent>
        </>
    )
}  

function GrandGrandChildComponent() {
    var contextData = useContext(AppContext);
    return (
        <>
            <h1>This is Grand Grand Child Component</h1>
            <h2>This is User: {contextData.employee.empName}</h2>
            <h3>User Age is 2</h3>
            <h4>User Designation Company</h4>
            <h3>User Count {contextData.employee.count}</h3>
            <input type="button" onClick={contextData.updateName} value="Update Name FOR pARENT" /><hr/>
        </>
    )
}  