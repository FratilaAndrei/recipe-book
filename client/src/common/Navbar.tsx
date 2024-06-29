import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-yellow-400 h-12 flex items-center px-4 justify-between text-white">
      <Link to="/">Home</Link>
      <div className="flex gap-4">
        <Link to="/recipes">Recipes</Link>
        <Link to="/favorites">Favorites</Link>
      </div>
      <div>Login/Register</div>
    </div>
  );
};

export default Navbar;
