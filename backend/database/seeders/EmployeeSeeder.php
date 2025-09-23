<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Employee;

class EmployeeSeeder extends Seeder
{
    public function run(): void
    {
        Employee::create([
            'name' => 'Fachran Sandi',
            'email' => 'sandi@example.com',
            'position' => 'Developer',
        ]);

        Employee::create([
            'name' => 'John Wick',
            'email' => 'Wick@example.com',
            'position' => 'UI/UX Designer',
        ]);

        Employee::create([
            'name' => 'John Cena',
            'email' => 'Cena@example.com',
            'position' => 'Product Manager',
        ]);
    }
}
