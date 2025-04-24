function CVDisplay({ personalInfo }) {

    const { firstName, lastName, email, phoneNumber, summary } = personalInfo
    
    return (
        <div className="cv-preview">
            <h1>{firstName} {lastName}</h1>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Phone:</strong> {phoneNumber}</p>
            <p><strong>Summary:</strong></p>
            <p>{summary}</p>
        </div>

    );
}

export default CVDisplay