import prof_style from '../styles/profile.module.css';
import default_profile from "../img/pet_and_owner.jpg";
import default_pet from "../img/f'luffy.jpg";


const Profile = (props) => {
  return (
    <>
    
    <div className={`${prof_style.profile_contents}`}>

      {/*User Profile*/}
      <div className={`${prof_style.user_profile} `}>
        <div className={`${prof_style.profile_bg} `}>
          <div className={`${prof_style.profile_img}`}>
            <img src={props.user_pic} alt="user_profile_picture"/> 
          </div>
          <div className={`${prof_style.profile_cred}`}>
            <h2 className={`${prof_style.h2} `}>Name: {props.user_name}</h2>
            <h3 className={`${prof_style.h3} `}>Address: {props.user_add}</h3>
            <h3 className={`${prof_style.h3} `}>Status: {props.user_stat}</h3>
            <h3 className={`${prof_style.h3} `}>Gender: {props.user_gender}</h3>
            <h3 className={`${prof_style.h3} `}>Email: {props.user_email}</h3>
            <h3 className={`${prof_style.h3} `}>Mobile: {props.user_mobile}</h3>
          </div>
        </div>
      </div>

      {/*Pet Profile: Will need to be dynamic in order to switch info per pet owned*/}
      <div className={`${prof_style.pet_profile} `}>
        <img src={props.pet_pic} alt="pet_picture" />
        <h1>This is pet profile</h1>
      </div>
    </div>
    </>
  );
}

Profile.defaultProps = {
  //User defaults
  user_pic: default_profile,
  user_name: "GUEST NAME",
  user_add: "Cebu City",
  user_stat: "Administrator",
  user_gender: "Male",
  user_email: "hello@gmail.com",
  user_mobile: "01234234534",

  //Pet Profile defaults
  pet_pic: default_pet
}

export {Profile}