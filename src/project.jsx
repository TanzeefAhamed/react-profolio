export default function Projects() {
  return (
    <div>
      <h1>My Projects</h1>
      <p>Here are a few projects I have worked on. Each one helped me practice and improve my skills.</p>

      {/* Project 1 */}
      <div>
        <img src="/project1.png" alt="Project 1" width="250" />
        <h2>Weather App</h2>
        <p>
          <b>My Role:</b> I built this project as a personal practice app.  
          <br />
          <b>Outcome:</b> It shows real-time weather data for any city using an online API.
        </p>
      </div>

      <hr />

      {/* Project 2 */}
      <div>
        <img src="/project2.png" alt="Project 2" width="250" />
        <h2>Portfolio Website</h2>
        <p>
          <b>My Role:</b> I created this React-based portfolio to show my education and skills.  
          <br />
          <b>Outcome:</b> It helped me learn React routing, components, and deploying to the web.
        </p>
      </div>

      <hr />

      {/* Project 3 */}
      <div>
        <img src="/project3.png" alt="Project 3" width="250" />
        <h2>Calculator App</h2>
        <p>
          <b>My Role:</b> I designed a simple calculator using HTML, CSS, and JavaScript.  
          <br />
          <b>Outcome:</b> It performs basic arithmetic and helped me practice logical problem-solving.
        </p>
      </div>
    </div>
  );
}
