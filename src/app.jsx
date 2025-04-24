import {useState} from 'react';
import './App.css'
import PersonalInfoForm from "./components/PersonalInfoForm";
import CVDisplay from "./components/CVDisplay";
function App(){
    const [personalInfo, setPersonalInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        summary: ''
    });

    function handlePersonalInfoChange(e){
        const {name, value} = e.target;

        setPersonalInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value    
        }));
    }
        

    return (
        <div className="cv-application">
            <div className="cv-info">
                <PersonalInfoForm personalInfo={personalInfo} onPersonalInfoChange={handlePersonalInfoChange}/>
            </div>
            <div className="cv-display">
                <CVDisplay personalInfo={personalInfo}/>
            </div>
        </div>
    );

}

export default App;