const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-light text-muted">
      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        {new Date().getFullYear()} -{" "}
        <a href="https://github.com/dinaco">Dino Marchiori</a>
      </div>
    </footer>
  );
};

export default Footer;
