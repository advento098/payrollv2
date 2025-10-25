using Microsoft.EntityFrameworkCore;
using payrollBackend.Domain.Entities.AttendanceEntities;
using payrollBackend.Domain.Entities.EmployeeEntities;
using payrollBackend.Domain.Entities.PostEntities;
using payrollBackend.Domain.Entities.SalaryEntities;

namespace payrollBackend.Infrastructure.Persistence;

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
