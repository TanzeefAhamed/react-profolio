export default function Projects() {
  return (
    <div>
      <h1>My Projects</h1>
      <p>Here are a few projects I have worked on. Each one helped me practice and improve my skills.</p>

      {/* Project 1 */}
      <div>
        <img src="/project1.png" alt="Project 1" width="500" />
        <h2>Bug Squasher Game</h2>
        <p>
          <b>My Role:</b> I built this interactive game using JavaScript, HTML, and CSS. 
          <br />
          <b>Outcome:</b> It was a fun game to make and play that improved my coding skills.
        </p>
      </div>

      <hr />

      {/* Project 2 */}
      <div>
        <img src="/project2.png" alt="Project 2" width="500" />
        <h2>Payment Form</h2>
        <p>
          <b>My Role:</b> I made a payment form using HTML, JavaScript, and CSS.
          <br />
          <b>Outcome:</b> It collects user payment info and helped me learn about form validation.
        </p>
      </div>

      <hr />

      {/* Project 3 */}
      <div>
        <img src="/project3.png" alt="Project 3" width="500" />
        <h2>Java Programmig Quiz Gui</h2>
        <p>
          <b>My Role:</b> I created a quiz application using Java Swing AND JOptionPane. 
          <br />
          <b>Outcome:</b> It tests users' Java knowledge and improved my Java skills.
        </p>
      </div>
    </div>
  );
}
