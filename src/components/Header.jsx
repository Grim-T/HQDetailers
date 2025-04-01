import logo from "../assets/images/Image.jpeg"; 

function Header() {
  return (
    <header>
      <img src={logo} alt="HQ Detailers Logo" style={{ width: "150px", height: "auto" }} />
    </header>
  );
}

export default Header;

