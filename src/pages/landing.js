const Landing = (props) => {
  const imageUrl = `${props.book.global_field.fileConnection.edges[0].node.url}?width=300`;

  return (
    <>
      <button
        style={{
          width: "100px",
          height: "50px",
        }}
        onClick={() => props.goHome(true)}
      >
        Go back
      </button>

      <div
        style={{
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        <h1>{props.book.global_field.title}</h1>
        <img src={imageUrl} alt="book" />
        <h5>{props.book.global_field.number} pages</h5>
        <p
          style={{
            width: "400px",
            margin: "auto",
          }}
        >
          {props.book.global_field.description}
        </p>
        <h4>Author: {props.book.global_field.author}</h4>

        <a href={props.book.global_field.link.href}>Go to Amazon</a>
      </div>
    </>
  );
};

export default Landing;
