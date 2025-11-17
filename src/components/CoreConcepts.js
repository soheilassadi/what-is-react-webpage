function CoreConcepts(props) {
  const { title, description, image } = props;
  return (
    <li>
      <img src={image} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

export default CoreConcepts;
