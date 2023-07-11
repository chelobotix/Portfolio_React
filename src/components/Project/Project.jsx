const Project = (props) => {
  const { title, image, description, techs } = props.details;
  console.log(title);
  return (
    <article>
      <h3>{title}</h3>
      <img src={image} alt="project_iamge" />
      <p>{description}</p>
      <ul>
        {techs.map((tech) => (
          <li>{tech}</li>
        ))}
      </ul>
    </article>
  );
};

export default Project;
