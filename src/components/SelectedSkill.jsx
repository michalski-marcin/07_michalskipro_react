import '../styles/selectedskill.css';
function SelectedSkill(skill) {
  return (
    <div className='selected-skil'>
      <div className='header'>
        <img
          src={`./assets/icons/${skill.image}`}
          alt={skill.name}
        />
        <p>{skill.name}</p>
      </div>
      <div className='description'>{skill.description}</div>
      <div className='what-i-know'>
        <ul className='selected-skill-list'>
          {skill.details.map((skill) => (
            <li>{skill}</li>
          ))}
        </ul>
      </div>
      <div className='where-i-learned '>
        <p>courses</p>
        <ul className='selected-skill-list'>
          {skill.courses.map((skill) => (
            <li>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SelectedSkill;
