const AdminNavBar = () => {
  return (
    <div className="flex flex-col">
      <nav>
        <div className="bg-gray-800">
          <div className="container mx-auto">
            <div className="flex justify-between">
              <div className="flex space-x-4">
                <a href="#" className="p-4">
                  help
                </a>
                <a href="#" className="p-4">
                  About
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default AdminNavBar;
