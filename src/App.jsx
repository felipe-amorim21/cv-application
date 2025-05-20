import {use, useState} from 'react';
import './App.css'
import PersonalInfoForm from "./components/PersonalInfoForm";
import CVDisplay from "./components/CVDisplay";
import EducationForm from './components/EducationForm';
import WorkExperienceForm from './components/WorkExperienceForm';
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
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

    const handleDownload = () => {
        html2canvas(document.querySelector("#cv-download")).then((canvas) => {
            document.body.appendChild(canvas); // if you want see your screenshot in body.
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF();
            pdf.addImage(imgData, "PNG", 0, 0);
            pdf.save("download.pdf");
        });
    };



        

    return (
        <>
        <div className='btn-container'>
            <button onClick={handleDownload} className="btn-download">
                Baixar Currículo
            </button>
        </div>
        <div>
            <div className="cv-application">
            <div className="cv-info">
                <div className={`cv-card ${!personalInfoVisible ? 'hidden' : ''}`}>
                    <div className='card-title'>
                        <strong><p>Personal Info</p></strong>
                        <button onClick={togglePersonalInfo}>{personalInfoVisible ? "Hide" : "Show"}</button>
                    </div>
                
                    {personalInfoVisible && <PersonalInfoForm personalInfo={personalInfo} onPersonalInfoChange={(e) => handleInfoChange(e, setPersonalInfo)}/> }
                </div>
                <div className={`cv-card ${!educationInfoVisible ? 'hidden' : ''}`}>
                    <div className='card-title'>
                    <strong><p>Educational Info</p></strong>
                    <button onClick={toggleEducationInfo}>{educationInfoVisible ? "Hide" : "Show"}</button>
                    </div>
                    
                    {educationInfoVisible && <div className='education-conteiner'>
                    {educationInfo.map((educationInfo, index) => (
                    <div key={index}>
                        <EducationForm educationInfo={educationInfo} onEducationInfoChange={(e) => handleEducationChange(e, index)}/>
                        <button className='delete-button' onClick={() => removeEducationForm(index)}>Delete</button>
                    </div>
                    
                ))}
                    <button className='add-button' onClick={addEducationForm}>Add</button>
                    </div>}
                    
                    
                </div>

                <div className={`cv-card ${!workExperienceInfoVisible ? 'hidden' : ''}`}>
                    <div className='card-title'>
                        <strong><p>Word Experience Info</p></strong>
                        <button onClick={toggleWorkExperienceInfo}>{workExperienceInfoVisible ? "Hide" : "Show"}</button>
                    </div>
                    
                    {workExperienceInfoVisible && <div className='work-container'>
                        {workExperienceInfo.map((workExperienceInfo, index) => (
                            <div key={index}>
                                <WorkExperienceForm workExperienceInfo={workExperienceInfo} onWorkExperienceChange={(e) => handleWorkExperienceChange(e, index)}/>
                                <button className='delete-button' onClick={() => removeWorkExperience(index)}>Delete</button>
                            </div>
                        ))}
                        <button className='add-button' onClick={addWorkExperienceForm}>Add</button>
                    </div>}
                    
                </div>
                

            </div>
            <div className="cv-display" id='cv-download'>
                <CVDisplay personalInfo={personalInfo} educationInfo={educationInfo} workExperienceInfo={workExperienceInfo}/>
            </div>
        </div>
        </div>
        </>
        
    );

}

export default App;