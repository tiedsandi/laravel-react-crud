const BASE_URL = "http://127.0.0.1:8000/api/employees";

export const getEmployees = async () => {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error("Failed to fetch employees");
  return res.json();
};

export const deleteEmployee = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error("Failed to delete employee");
  return res.json();
};
