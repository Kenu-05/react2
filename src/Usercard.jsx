import PropTypes from "prop-types";

const UserData=[
  { name:"Helena",
    city:"New York",
    description:"Font-end developer",
    skills:["UI/UX","Full Stack","HTML","CSS","JavaScript","Reat","Node"],
    online:false,
    profile:"images/image.png"

  },
    {name:"Andriya",
    city:"UK",
    description:"Senior Software Developper",
    skills:["UI/UX","HTML","CSS","JavaScript","Reat","Node","MERN"],
    online:true,
    profile:"images/img2.jpg"
    }
]
function User(props){
  return(
    <div className="card-container">
      <span className={props.online?"pro online":"pro offline"}>{props.online?"Online":"Offline"}</span>
      <img src={props.profile} className="img"alt="user"></img>
      <h3>{props.name}</h3>
      <h3>{props.city}</h3>
      <p>{props.description}</p>
      <div className="buttons">
        <button className="primary">Message</button>
        <button className="primary outline">Following</button>
      </div>
         <div className="skills">
          <h6>Skills</h6>
          <ul>
            
              {props.skills.map((skill,index)=>(<li key={index}>{skill}</li>))
            }
          </ul>
         </div>

    </div>
  )
}
export const Usercard = () => {
  return (
    
     UserData.map((user,index)=>(
      <User key={index} 
      name={user.name}
      city={user.city}
      description={user.description}
      online={user.online}
      profile={user.profile}
      skills={user.skills}/>
     ))
     
  )
}
 User.propTypes={
  name:PropTypes.string.isRequired,
  city:PropTypes.string.isRequired,
  description:PropTypes.string.isRequired,
  skills:PropTypes.arrayOf(PropTypes.string).isRequired,
  online:PropTypes.bool.isRequired,
  profile:PropTypes.string.isRequired
 }


// props endrathu oru object mathiri oru function kulla use panra data ellam oru object ah edukirathuku use aakum. 