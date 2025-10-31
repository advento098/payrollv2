using Microsoft.EntityFrameworkCore;
using PayrollBackend.Domain.Entities.AttendanceEntities;
using PayrollBackend.Domain.Entities.EmployeeEntities;
using PayrollBackend.Domain.Entities.PostEntities;
using PayrollBackend.Domain.Entities.SalaryEntities;

namespace PayrollBackend.Infrastructure.Persistence
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Employee> Employees { get; set; }
        public DbSet<Attendance> Attendances { get; set; }
        public DbSet<AttendanceTableLayout> AttendanceTableLayouts { get; set; }
        public DbSet<AttendanceType> AttendanceTypes { get; set; }
        public DbSet<DutyType> DutyTypes { get; set; }
        public DbSet<Post> Posts { get; set; }
        public DbSet<Additional> Additionals { get; set; }
        public DbSet<FixedDeduction> FixedDeductions { get; set; }
        public DbSet<OtherDeduction> OtherDeductions { get; set; }
        public DbSet<Salary> Salaries { get; set; }
    }
}
