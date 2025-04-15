import {useState} from 'react';
import PersonalInfoForm from "./components/PersonalInfoForm";
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

            </div>
        </div>
    );

}

export default App;