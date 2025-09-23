import { getEmployeeById, updateEmployee } from "../services/employeeServices";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import EmployeeForm from "../components/EmployeeForm";

export default function EmployeeEditPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const emp = await getEmployeeById(id);
        setInitialData(emp);
      } catch (err) {
        alert(err.message);
      }
    };
    fetchEmployee();
  }, [id]);

  const handleUpdate = async (data) => {
    try {
      await updateEmployee(id, data);
      alert("Employee updated successfully");
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };

  if (!initialData) return <p className="text-center py-10">Loading...</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-center">Edit Employee</h1>
      <EmployeeForm onSubmit={handleUpdate} initialData={initialData} />
    </div>
  );
}
