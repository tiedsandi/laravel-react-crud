<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Employee;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(Employee::orderBy('created_at', 'desc')->get());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name'  => 'required|string|min:5',
            'email' => 'required|email|unique:employees,email',
        ]);


        $employee = Employee::create(array_merge($validated, [
            'position' => $request->input('position', null),
        ]));

        return response()->json($employee, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Employee $employee)
    {
        return response()->json($employee);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Employee $employee)
    {
        $validated = $request->validate([
            'name'  => 'required|string|min:5',
            'email' => 'required|email|unique:employees,email,' . $employee->id,

        ]);

        $employee->update(array_merge($validated, [
            'position' => $request->has('position') ? $request->input('position') : $employee->position,
        ]));

        return response()->json($employee);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Employee $employee)
    {
        $employee->delete();

        return response()->json([
            'message' => 'Employee deleted successfully'
        ], 200);
    }
}
