import Hero from "./Hero";

const NotFoundView = () => {
  return (
    <>
      <Hero text="404 Page Not Found" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">Better luck next time!</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundView;
