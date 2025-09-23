import { deleteEmployee, getEmployees } from "../services/employeeServices";
import { useEffect, useState } from "react";

import EmployeeList from "../components/EmployeeList";

export default function EmployeesPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const employees = await getEmployees();
        setData(employees);
      } catch {
        alert("Failed to fetch employees.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Are you sure to delete this employee?");
    if (!confirmed) return;

    try {
      await deleteEmployee(id);
      const updated = await getEmployees();
      setData(updated);
      alert("Employee deleted successfully.");
    } catch {
      alert("Failed to delete employee.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <EmployeeList data={data} loading={loading} onDelete={handleDelete} />
    </div>
  );
}
