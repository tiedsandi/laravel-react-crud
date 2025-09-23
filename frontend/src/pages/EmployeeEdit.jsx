import { useParams } from "react-router-dom";

export default function EmployeeEdit() {
  const { id } = useParams();
  return <h1>Edit Employee {id}</h1>;
}
