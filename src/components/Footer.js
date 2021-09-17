const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <div>
      <h4>Copyrighted ®{year}</h4>
    </div>
  );
};

export default Footer;
