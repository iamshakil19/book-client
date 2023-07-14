import { Toaster } from "react-hot-toast";
import MainLayout from "./layouts/MainLayout";
import useAuthCheck from "./hooks/useAuthCheck";
import { Outlet } from "react-router-dom";
function App() {
  const authChecked = useAuthCheck();
  return !authChecked ? (
    <div className="min-h-screen mx-auto container flex justify-center items-center">
      <div>
        <p className="text-center">Loading...</p>
      </div>
    </div>
  ) : (
    <>
      <Toaster />
      <Outlet />
    </>
  );
}

export default App;
