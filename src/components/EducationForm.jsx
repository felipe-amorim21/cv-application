function EducationForm({educationInfo, onEducationInfoChange}){
    return (
        <>
            <form action="">
                <label htmlFor="">
                    School Name
                    <input type="text" name="schoolName" value={educationInfo.schoolName} onChange={onEducationInfoChange}/>
                </label>
                <label htmlFor="">
                    Degree
                    <input type="text" name="degreeName" value={educationInfo.degreeName} onChange={onEducationInfoChange} />
                </label>
                <label htmlFor="">
                    End Date
                    <input type="date" name="endDate" value={educationInfo.endDate} onChange={onEducationInfoChange}/>
                </label>
            </form>
        </>
    );
}

export default EducationForm