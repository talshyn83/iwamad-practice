type FooterProps = {
  text: string;
};

function Footer({ text }: FooterProps) {
  return (
    <footer className="footer">
      <p>{text}</p>
    </footer>
  );
}

export default Footer;