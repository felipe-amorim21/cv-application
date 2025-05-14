import {use, useState} from 'react';
import './App.css'
import PersonalInfoForm from "./components/PersonalInfoForm";
import CVDisplay from "./components/CVDisplay";
import EducationForm from './components/EducationForm';
import WorkExperienceForm from './components/WorkExperienceForm';
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

    const [workExperienceInfo, setWorkExperienceInfo] = useState([{
        jobTitle: '',
        companyName: '',
        startDate: '',
        endDate: '',
        description: ''
    }])

    const [personalInfoVisible, setPersonalInfoVisible] = useState(true);
    const [educationInfoVisible, setEducationInfoVisible] = useState(true);
    const [workExperienceInfoVisible, setWorkExperienceVisible] = useState(true);

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

    function handleWorkExperienceChange(e, index){
        const {name, value} = e.target;

        const updatedWorkExperience = [...workExperienceInfo];
        updatedWorkExperience[index][name] = value
        setWorkExperienceInfo(updatedWorkExperience);
    }


    const addEducationForm = () => {
        setEducationInfo(prevEducation => [...prevEducation, {schoolName: '', degreeName: '', endDate: ''}])
    }

    const removeEducationForm = (indexRemove) => {
        const updatedEducationForm = educationInfo.filter((education, index) => index !== indexRemove)
        setEducationInfo(updatedEducationForm);
    }

    const addWorkExperienceForm = () => {
        setWorkExperienceInfo(prevWorkExperience => [...prevWorkExperience, {
            jobTitle: '',
            companyName: '',
            startDate: '',
            endDate: '',
            description: ''
        }])
    }

    const togglePersonalInfo = () => setPersonalInfoVisible(!personalInfoVisible);
    const toggleEducationInfo = () => setEducationInfoVisible(!educationInfoVisible);
    const toggleWorkExperienceInfo = () => setWorkExperienceVisible(!workExperienceInfoVisible);

    const removeWorkExperience = (indexRemove) => {
        const updatedWorkExperience = workExperienceInfo.filter((work, index) => index !== indexRemove);
        setWorkExperienceInfo(updatedWorkExperience);
    }

        

    return (
        <div className="cv-application">
            <div className="cv-info">
                <button onClick={togglePersonalInfo}>{personalInfoVisible ? "Hide" : "Show"} Personal Info</button>
                {personalInfoVisible && <PersonalInfoForm personalInfo={personalInfo} onPersonalInfoChange={(e) => handleInfoChange(e, setPersonalInfo)}/> } 
                <div className='education'>
                    <button onClick={toggleEducationInfo}>{educationInfoVisible ? "Hide" : "Show"} Education Info</button>
                    {educationInfoVisible && <div className='education-conteiner'>
                    {educationInfo.map((educationInfo, index) => (
                    <div key={index}>
                        <EducationForm educationInfo={educationInfo} onEducationInfoChange={(e) => handleEducationChange(e, index)}/>
                        <button onClick={() => removeEducationForm(index)}>Delete</button>
                    </div>
                    
                ))}
                    </div>}
                    
                <button onClick={addEducationForm}>Add</button>
                </div>

                <div className='work'>
                    <button onClick={toggleWorkExperienceInfo}>{workExperienceInfoVisible ? "Hide" : "Show"} Work Experience</button>
                    {workExperienceInfoVisible && <div className='work-container'>
                        {workExperienceInfo.map((workExperienceInfo, index) => (
                            <div key={index}>
                                <WorkExperienceForm workExperienceInfo={workExperienceInfo} onWorkExperienceChange={(e) => handleWorkExperienceChange(e, index)}/>
                                <button onClick={() => removeWorkExperience(index)}>Delete</button>
                            </div>
                        ))}
                    </div>}
                    <button onClick={addWorkExperienceForm}>Add</button>
                </div>
                

            </div>
            <div className="cv-display">
                <CVDisplay personalInfo={personalInfo} educationInfo={educationInfo} workExperienceInfo={workExperienceInfo}/>
            </div>
        </div>
    );

}

export default App;