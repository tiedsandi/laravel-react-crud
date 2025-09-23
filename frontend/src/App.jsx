import { BrowserRouter, Route, Routes } from "react-router-dom";

import CreateEmployeePage from "./pages/EmployeeCreate";
import EditEmployeePage from "./pages/EmployeeEdit";
import EmployeeLayout from "./components/Layout";
import EmployeesPage from "./pages/Employees";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EmployeeLayout />}>
          <Route index element={<EmployeesPage />} />
          <Route path="/create" element={<CreateEmployeePage />} />
          <Route path="/edit/:id" element={<EditEmployeePage />} />
          <Route path="*" element={<h1>Not Found!</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
