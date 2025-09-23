import EmployeeForm from "../components/EmployeeForm";
import { createEmployee } from "../services/employeeServices";
import { useNavigate } from "react-router-dom";

export default function CreateEmployeePage() {
  const navigate = useNavigate();

  const handleCreate = async (data) => {
    try {
      await createEmployee(data);
      alert("Employee created successfully");
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-center">Create Employee</h1>
      <EmployeeForm onSubmit={handleCreate} />
    </div>
  );
}
