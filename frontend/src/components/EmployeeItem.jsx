export default function EmployeeItem({ emp, onDelete, onEdit }) {
  return (
    <tr>
      <td className="border border-gray-300 p-2">{emp.id}</td>
      <td className="border border-gray-300 p-2">{emp.name}</td>
      <td className="border border-gray-300 p-2">{emp.position}</td>
      <td className="border border-gray-300 p-2">
        <button className="text-blue-600 hover:underline mr-2" onClick={onEdit}>
          Edit
        </button>
        <button
          className="text-red-600 hover:underline"
          onClick={() => onDelete(emp.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
