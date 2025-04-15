import './PersonalInfoForm.css'

function PersonalInfoForm({personalInfo, onPersonalInfoChange}) {

  return (
    <>
      <form className='form'>
        <label htmlFor="">
          First Name
          <input type="text" onChange={onPersonalInfoChange} value={personalInfo.firstName} />
        </label>
        <label htmlFor="">
          Last Name
          <input type="text" onChange={onPersonalInfoChange} value={personalInfo.lastName} />
        </label>
        <label htmlFor="">
          E-mail
          <input type="email" onChange={onPersonalInfoChange} value={personalInfo.email} />
        </label>
        <label htmlFor="">
          Phone Number
          <input type="phone" onChange={onPersonalInfoChange} value={personalInfo.phoneNumber}/>
        </label>
        <label htmlFor="">
          Summary
          <textarea onChange={onPersonalInfoChange} value={personalInfo.summary}/>
        </label>
      </form>
    </>
  )
}

export default PersonalInfoForm
