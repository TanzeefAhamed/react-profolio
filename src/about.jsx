//This is my about me that contains my legal name, a profile image, a short paragraph about myself, and a link to my resume.
//i used a button for the resume link to make it more visually appealing.

export default function About() {
  return (
    <div>
      {/* Legal Name */}
      <h1>About Me - Tanzeef</h1>

      {/* Profile Image */}
      <img 
        src="/me.png" 
        alt="Tanzeef" 
        width="200" 
      />

      {/* Short Paragraph */}
      <p>
        Hello! My name is Tanzeef. I am a Health Informatics student at Centennial College. 
        I enjoy learning about both healthcare and technology, and I am working toward 
        becoming skilled in health informatics, software development, and analytics. 
        I am passionate about using technology to improve patient care and data management.
      </p>

      {/* Resume Link */}
      <a 
        href="/resume.pdf" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <button>View My Resume</button>
      </a>
    </div>
  );
}
