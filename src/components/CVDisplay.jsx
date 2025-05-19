import './CVDisplay.css'

function CVDisplay({ personalInfo, educationInfo, workExperienceInfo }) {

    const { firstName, lastName, email, phoneNumber, summary } = personalInfo
    return (
        <div className="cv-preview">
            <header className='cv-header'>
                <h1>{firstName} {lastName}</h1>
                <div className='cv-contact'>
                    <p><strong> Email: {email} | Phone: {phoneNumber}</strong></p>
                </div>
                <div className='cv-summary'>
                    <p><strong>Summary: </strong></p>
                    <p>{summary}</p>
                </div>
            </header>
            <section className='cv-section'>
                <h2>Education</h2>
                {educationInfo.map((education, index) => (
                <div key={index} className="cv-entry">
                    <p><strong>School Name: </strong>{education.schoolName}</p>
                    <p><strong>Degree: </strong>{education.degreeName}</p>
                    <p><strong>End Date: </strong>{education.endDate}</p>
                </div>
            ))}
            </section>
            
            <section className='cv-section'>
                <h2>Work Experience</h2>
                {workExperienceInfo.map((work, index) => (
                <div key={index} className="cv-entry">
                    <div className='cv-entry header'>
                        <p><strong>{work.jobTitle} - {work.companyName}</strong></p>
                        <p className='cv-date'>{work.startDate} - {work.endDate}</p>
                    </div>
                    <p>{work.description}</p>
                </div>
            ))}
            </section>
            
            
        </div>

    );
}

export default CVDisplay