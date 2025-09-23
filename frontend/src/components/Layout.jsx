import { Link, Outlet } from "react-router-dom";

export default function EmployeeLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-blue-600 text-white py-6 text-center">
        <Link to={"/"} className="text-2xl font-bold uppercase">
          Employee Management
        </Link>
      </header>

      <main className="flex-grow flex justify-center items-start py-8 px-4">
        <div className="w-full max-w-5xl bg-white shadow-md rounded-lg p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
