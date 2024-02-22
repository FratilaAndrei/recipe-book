const Navbar = () => {
  return (
    <div className="bg-yellow-400 h-12 flex items-center px-4 justify-between text-white">
      <div>Home</div>
      <div className="flex gap-4">
        <div>Recipes</div>
        <div>Favorites</div>
      </div>
      <div>Login/Register</div>
    </div>
  );
};

export default Navbar;
