function WorkExperienceForm({workExperienceInfo, onWorkExperienceChange}){
    return (
        <>
        <label>
            Job Title
            <input type="text" name="jobTitle" value={workExperienceInfo.jobTitle} onChange={onWorkExperienceChange}/>
        </label>
        <label>
            Company Name
            <input type="text" name="companyName" value={workExperienceInfo.companyName} onChange={onWorkExperienceChange}/>
        </label>
        <label>
            Start Date
            <input type="date" name="startDate" value={workExperienceInfo.startDate} onChange={onWorkExperienceChange}/>
        </label>
        <label>
            End Date
            <input type="date" name="endDate" value={workExperienceInfo.endDate} onChange={onWorkExperienceChange}/>
        </label>
        <label>
            Description
            <textarea name="description" value={workExperienceInfo.description} onChange={onWorkExperienceChange}></textarea>
        </label>
        </>
    );
}

export default WorkExperienceForm