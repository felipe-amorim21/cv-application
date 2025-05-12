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
            <p><strong>School Name: </strong>{schoolName}</p>
            <p><strong>Degree: </strong>{degreeName}</p>
            <p><strong>End Date: </strong>{endDate}</p>
        </div>

    );
}

export default CVDisplay