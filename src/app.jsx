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

    const [educationInfo, setEducationInfo] = useState([{
        schoolName: '',
        degreeName: '',
        endDate: ''
    }]);

    function handleInfoChange(e, sectionSetter){
        const {name, value} = e.target;

        sectionSetter((prevInfo) => ({
            ...prevInfo,
            [name]: value    
        }));
    }  

    function handleEducationChange(e, index){
        const {name, value } = e.target;

        const updatedEducation = [...educationInfo];
        updatedEducation[index][name] = value;
        setEducationInfo(updatedEducation)
    }


    const addEducationForm = () => {
        setEducationInfo(prevEducation => [...prevEducation, {schoolName: '', degreeName: '', endDate: ''}])
    }

        

    return (
        <div className="cv-application">
            <div className="cv-info">
                <PersonalInfoForm personalInfo={personalInfo} onPersonalInfoChange={(e) => handleInfoChange(e, setPersonalInfo)}/>
                <div>
                    {educationInfo.map((educationInfo, index) => (
                    <EducationForm key={index} educationInfo={educationInfo} onEducationInfoChange={(e) => handleEducationChange(e, index)}/>
                ))}
                <button onClick={addEducationForm}>Add</button>
                </div>
                

            </div>
            <div className="cv-display">
                <CVDisplay personalInfo={personalInfo} educationInfo={educationInfo}/>
            </div>
        </div>
    );

}

export default App;