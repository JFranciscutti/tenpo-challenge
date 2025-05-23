import { useAuth } from "../../contexts/AuthContext";

const HomePage = () => {
  const { logout } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">HomePage</h1>
      <button
        type="button"
        className="px-4 py-2 bg-primary hover:bg-primary-focus text-white rounded-md mt-4 font-medium"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
};

export default HomePage;
