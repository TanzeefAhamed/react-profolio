import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div>
      <h2>Tanzeef's Profile</h2>
      <p>Welcome to my profile page!</p>
      <p>My name is Tanzeef, I'm a Health Informatics Student at Centennial College.
        My goal is to become proficient in the field of Health Informatics
        and software development and analytics.
      </p>

      <Link to="/about">
        <button>Learn More About Me</button>
      </Link>
    </div>
  );
}
