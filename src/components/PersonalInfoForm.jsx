import './PersonalInfoForm.css'

function PersonalInfoForm() {

  return (
    <>
      <form className='form'>
        <label htmlFor="">
          First Name
          <input type="text" />
        </label>
        <label htmlFor="">
          Last Name
          <input type="text" />
        </label>
        <label htmlFor="">
          E-mail
          <input type="mail" />
        </label>
        <label htmlFor="">
          Phone Number
          <input type="phone" />
        </label>
        <label htmlFor="">
          Summary
          <textarea></textarea>
        </label>
      </form>
    </>
  )
}

export default PersonalInfoForm
