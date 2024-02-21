const Navbar = () => {
  return (
    <div className="bg-yellow-400 h-12 flex items-center px-4 justify-between text-white">
      <div>Home</div>
      <div className="flex gap-2">
        <div>Favorites</div>
        <div>Login/Register</div>
      </div>
    </div>
  );
};

export default Navbar;
