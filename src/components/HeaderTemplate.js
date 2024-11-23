export default function HeaderTemplate({title, description}) {
    return (
      <div className="d-flex flex-column justify-content-center text-center">
        <h1 className="display-5 fw-bold text-white my-4">
          {title}
        </h1>
  
        <p className="lead mb-4 text-white">
          {description}
        </p>
      </div>
    );
  }