import { BrowserRouter, Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
import {useState, useEffect} from "react";
import Axios from "axios"

export default function AppHome() {
    return (
        <div style={{margin: "10px"}}>
            <h1>TechnoFunnel - Training and Technology</h1>
            <nav>
                <a style={{marginRight: "10px"}} href="/">Home</a>
                <a style={{marginRight: "10px"}} href="/help">Help</a>
                <a style={{marginRight: "10px"}} href="/about">About</a>
                <a style={{marginRight: "10px"}} href="/contact">Contact</a>
            </nav><hr/>

            <BrowserRouter>
                <h2>Navgation for Single Page Application</h2>
                <nav>
                    <Link style={{marginRight: "10px"}} to="/">Home</Link>
                    <Link style={{marginRight: "10px"}} to="/help">Help</Link>
                    <Link style={{marginRight: "10px"}} to="/about">About</Link>
                    <Link style={{marginRight: "10px"}} to="/contact">Contact</Link>
                    <Link style={{marginRight: "10px"}} to="/employee">Employee</Link>
                </nav>

                <div style={{marginTop: "20px", height: "200px", width: "98%", border: "1px solid black", padding: "10px"}}>
                    <Routes>
                        <Route path="/" element={<HomeComponent></HomeComponent>} />
                        <Route path="/about" element={<AboutComponent></AboutComponent>} />
                        <Route path="/help" element={<HelpComponent></HelpComponent>} />
                        <Route path="/contact" element={<ContactComponent></ContactComponent>} />
                        <Route path="/employee" element={<EmployeeComponent></EmployeeComponent>} />
                        <Route path="*" element={<NotFoundComponent></NotFoundComponent>} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    )

    function HomeComponent() {

        var navigationLink = useNavigate();

        function navigateToAbout() {
            navigationLink("/employee/1");
        }

        return (
            <div>
                <h2>Home</h2>
                <p>Welcome to the Home page!</p>
                <input type="button" onClick={navigateToAbout} value="Go to Employee" />
            </div>
        );
    }

    function AboutComponent() {
        return (
            <div>
                <h2>About</h2>
                <p>Welcome to the About page!</p>
            </div>
        );
    }

    function HelpComponent() {
        return (
            <div>
                <h2>Help</h2>
                <p>Welcome to the Help page!</p>
            </div>
        );
    }

    function ContactComponent() {
        return (
            <div>
                <h2>Contact</h2>
                <p>Welcome to the Contact page!</p>
            </div>
        );
    }

    function EmployeeComponent() {
        return (
            <div>
                <h1>Employee Details:</h1>
                <Routes>
                    <Route path="/:empId" element={<EmployeeComponentDetails></EmployeeComponentDetails>} />
                </Routes>
                
            </div>
        );
    }

    function EmployeeComponentDetails() {

        var [employeeData, setEmployeeData] = useState({});
        var employeeId = useParams().empId;

        useEffect(() => {
            Axios.get("http://localhost:8000/employees/" + employeeId).then((response) => {
                setEmployeeData(response.data);
            })
        }, [employeeId])
        
        return (
            <div>
                <h2>Employee with the Id: {employeeData.id} have Name: {employeeData.empName}</h2>
                <p>Welcome to the Employee Details page!</p>
                
            </div>
        );
    }

    function NotFoundComponent() {
        return (
            <div>
                <h2>OOPS !!!!</h2>
                <p>No Such Component Exist</p>
            </div>
        );
    }
}