import {useState} from 'react';
import './App.css'
import PersonalInfoForm from "./components/PersonalInfoForm";
import CVDisplay from "./components/CVDisplay";
import EducationForm from './components/EducationForm';
function App(){
    const [personalInfo, setPersonalInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        summary: ''
    });

    const [educationInfo, setEducationInfo] = useState({
        schoolName: '',
        degreeName: '',
        endDate: ''
    });

    function handleInfoChange(e, sectionSetter){
        const {name, value} = e.target;

        sectionSetter((prevInfo) => ({
            ...prevInfo,
            [name]: value    
        }));
    }

        

    return (
        <div className="cv-application">
            <div className="cv-info">
                <PersonalInfoForm personalInfo={personalInfo} onPersonalInfoChange={(e) => handleInfoChange(e, setPersonalInfo)}/>
                <EducationForm educationInfo={educationInfo} onEducationInfoChange={(e) => handleInfoChange(e, setEducationInfo)}/>
            </div>
            <div className="cv-display">
                <CVDisplay personalInfo={personalInfo}/>
            </div>
        </div>
    );

}

export default App;