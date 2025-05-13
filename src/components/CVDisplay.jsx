function CVDisplay({ personalInfo, educationInfo, workExperienceInfo }) {

    const { firstName, lastName, email, phoneNumber, summary } = personalInfo
    return (
        <div className="cv-preview">
            <h1>{firstName} {lastName}</h1>
            <p><strong>Email: </strong> {email}</p>
            <p><strong>Phone: </strong> {phoneNumber}</p>
            <p><strong>Summary: </strong></p>
            <p>{summary}</p>
            <h2>Education</h2>
            {educationInfo.map((education, index) => (
                <div key={index} className="education-entry">
                    <p><strong>School Name: </strong>{education.schoolName}</p>
                    <p><strong>Degree: </strong>{education.degreeName}</p>
                    <p><strong>End Date: </strong>{education.endDate}</p>
                </div>
            ))}
            <h2>Work Experience</h2>
            {workExperienceInfo.map((work, index) => (
                <div key={index} className="work-entry">
                    <p><strong>Job Title: </strong>{work.jobTitle}</p>
                    <p><strong>Company Name: </strong>{work.companyName}</p>
                    <p><strong>Start Date: </strong>{work.startDate}</p>
                    <p><strong>End Date: </strong>{work.endDate}</p>
                    <p><strong>Description: </strong></p>
                    <p>{work.description}</p>
                </div>
            ))}
            
        </div>

    );
}

export default CVDisplay