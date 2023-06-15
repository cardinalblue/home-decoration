import logo from "../assets/logo.svg";

function Header() {
  return (
    <header className="w-full py-2 pl-12 pr-8 flex items-center justify-between">
      <img src={logo} alt="logo" />
      <div className="mr-8 flex gap-8 uppercase text-[#CC7541] font-semibold cursor-pointer">
        <h2 className="hover:underline">about us</h2>
        <h2 className="hover:underline">show examples</h2>
      </div>
    </header>
  );
}

export default Header;
