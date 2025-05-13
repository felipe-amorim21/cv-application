function CVDisplay({ personalInfo, educationInfo }) {

    const { firstName, lastName, email, phoneNumber, summary } = personalInfo
    const { schoolName, degreeName, endDate } = educationInfo
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
            
        </div>

    );
}

export default CVDisplay