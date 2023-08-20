import Logo from './Logo';
import NumResults from './NumResults';
import SearchInput from './SearchInput';

function Navbar() {
  return (
    <nav className="nav-bar">
      <Logo />
      <SearchInput />
      <NumResults />
    </nav>
  );
}
export default Navbar;
