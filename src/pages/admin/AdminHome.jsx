const AdminHome = () => {
  const users = [
    {
      email: "OmarHissoWhite@gmail.com",
      role: "Seller",
      registrationDate: "14/05/22 11:22AM",
      status: "Pending",
    },
    {
      email: "MalakHijjo@gmail.com",
      role: "Client",
      registrationDate: "14/05/22 09:32AM",
      status: "Pending",
    },
    {
      email: "AshrafAltazan@yahoo.fr",
      role: "Seller",
      registrationDate: "14/05/23 11:22AM",
      status: "Verified",
    },
    {
      email: "musafraloubi@gmail.com",
      role: "Client",
      registrationDate: "14/05/22 07:22AM",
      status: "Verified",
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">
        Users management (validations)
      </h1>

      <div className="flex items-center mb-4">
        <label className="mr-2">
          <input type="checkbox" className="mr-1" /> Hide verified users
        </label>
        <label>
          <input type="checkbox" className="mr-1" /> sort by state
        </label>
      </div>

      <div className="flex border-b border-gray-300 mb-2">
        <div className="w-1/4 font-bold">Email</div>
        <div className="w-1/4 font-bold">Role</div>
        <div className="w-1/4 font-bold">Registration date</div>
        <div className="w-1/4 font-bold">Status</div>
        <div className="w-1/4 font-bold">Management</div>
      </div>

      {users.map((user, index) => (
        <div
          key={index}
          className="flex items-center border-b border-gray-300 py-2"
        >
          <div className="w-1/4">{user.email}</div>
          <div className="w-1/4">{user.role}</div>
          <div className="w-1/4">{user.registrationDate}</div>
          <div className="w-1/4">{user.status}</div>
          <div className="w-1/4 flex">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2">
              Confirm user
            </button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2">
              Delete user
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Show information
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminHome;
