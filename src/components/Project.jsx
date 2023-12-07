import "../styles/project.css"

export function Project(props) {
  return (
    <div className='project-card'>
      <div className="project-img">
      <img src={`../public/projectimg/${props.image}`} alt='project' />
      </div>
        <h3>{props.name}</h3>
      <p>{props.description}</p>
      
      
      <div className='project-techs'>
        {props.technology.map((title) => {
          return <div key={title}>{title}</div>;
        })}
      </div>
      <div className='project-github'>
        <img src='ikona githuba' alt='git' />
        <p>
          <a href='#'>{props.github}</a>
        </p>
      </div>
      <div className='project-website'>
        <img src='ikona web' alt='' />
        <p>
          <a href='#'>{props.webpage}</a>
        </p>
      </div>
    </div>
  );
}


