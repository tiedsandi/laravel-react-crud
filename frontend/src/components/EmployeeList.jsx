import { Link, useNavigate } from "react-router-dom";

import EmployeeItem from "./EmployeeItem";

export default function EmployeeList({ data, loading, onDelete }) {
  const navigate = useNavigate();

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Employees</h1>
        <Link
          to="/create"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Create
        </Link>
      </div>

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">ID</th>
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Position</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={4} className="text-center p-4">
                No employees found.
              </td>
            </tr>
          ) : (
            data.map((emp) => (
              <EmployeeItem
                key={emp.id}
                emp={emp}
                onDelete={onDelete}
                onEdit={() => navigate(`/edit/${emp.id}`)}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
