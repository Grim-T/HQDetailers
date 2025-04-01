import logo from "HQDetailers/src/assets/images/Image.jpeg"; // Adjust path if needed

function Header() {
  return (
    <header>
      <img src={logo} alt="HQ Detailers Logo" style={{ width: "150px", height: "auto" }} />
    </header>
  );
}

export default Header;

