import prof_style from '../styles/profile.module.css';
import default_profile from "../img/pet_and_owner.jpg";


const Profile = () => {
  return (
    <>
    <div className={prof_style.profile_contents}>

      <div className={prof_style.user_profile}>
        <div className={prof_style.profile_bg}>
          <div className={prof_style.profile_img}>
            <img src={default_profile} alt="user_profile_picture"/> 
          </div>
          <div className={prof_style.profile_cred}>
            <h1 className={prof_style.h1}>ADAM BLACK</h1>
            <h2 className={prof_style.h2} >Address:</h2>
            <h2 className={prof_style.h2} >Status:</h2>
            <h2 className={prof_style.h2} >Gender:</h2>
          </div>
        </div>
      </div>

      <div className={prof_style.pet_profile}>
        <h1>This is pet profile</h1>
      </div>
    </div>
    </>
  );
}

export {Profile}