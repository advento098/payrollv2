using Microsoft.EntityFrameworkCore;
using payrollBackend.Models.AttendanceModels;
using payrollBackend.Models.EmployeeModels;
using payrollBackend.Models.PostModels;
using payrollBackend.Models.SalaryModels;

namespace payrollBackend.data;

public class AppDbContext : DbContext
{
    // Constructor
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }

    // Attendance Table/s
    public DbSet<Attendance> Attendances { get; set; }
    public DbSet<AttendanceTableLayout> AttendanceTableLayouts { get; set; }
    public DbSet<AttendanceType> AttendanceTypes { get; set; }
    public DbSet<DutyType> DutyTypes { get; set; }

    // Employee Table/s
    public DbSet<Employee> Employees { get; set; }

    // Salary Table/s
    public DbSet<Salary> Salaries { get; set; }
    public DbSet<Additional> Additionals { get; set; }
    public DbSet<FixedDeduction> FixedDeductions { get; set; }
    public DbSet<OtherDeduction> OtherDeductions { get; set; }

    // Post Table/s
    public DbSet<Post> Posts { get; set; }
}
