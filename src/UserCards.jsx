import PropTypes from "prop-types";

const UserData = [
  {
    name: "Amy",
    city: "New York",
    description: "Front-end developer",
    skills: ["HTML", "CSS", "Javascript", "Reactjs", "UI/UX", "Angular"],
    online: true,
    profile: "images/image2.jpg",
  },
  {
    name: "James",
    city: "France",
    description: "Back-end developer",
    skills: ["Java", "SpringBoot", "Microservices", "Mysql", "Spring Security"],
    online: true,
    profile: "images/images3.jpg",
  },
  {
    name: "Carle",
    city: "Califronia",
    description: "Database Administartor",
    skills: ["Mssql", "Mssql", "PostfreSQL", "server back-up", "installation"],
    online: false,
    profile: "images/images4.jpg",
  },
];

function User(props) {
  return (
    <div className="card-container">
      <span className={props.online ? "pro online" : "pro offline"}>
        {props.online ? "ONLINE" : "OFFLINE"}
      </span>
      <img src={props.profile} className="img" alt="user" />
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
          {props.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export const UserCards = () => {
  return (
    <>
      {UserData.map((user, index) => (
        <User
          key={index}
          name={user.name}
          city={user.city}
          description={user.description}
          skills={user.skills}
          online={user.online}
          profile={user.profile}
        />
      ))}
    </>
  );
};

User.propTypes = {
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  online: PropTypes.bool.isRequired,
  profile: PropTypes.string.isRequired,
};

{
  /* <User
      name="Sam"
      city="New York"
      description="Front-end developer"
      skills={["HTML", "CSS", "Javascript", "Reactjs", "UI/UX"]}
      online={true}
      profile="images/image2.jpg"
    /> */
}
