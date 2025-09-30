using Microsoft.EntityFrameworkCore;

namespace payrollBackend;

public class AppDbContext : DbContext
{
    // Constructor
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }

    public DbSet<Attendance> Attendances { get; set; }
    public DbSet<Employee> Employees { get; set; }
    public DbSet<Salary> Salaries { get; set; }
    public DbSet<Additional> Additionals { get; set; }
    public DbSet<FixedDeduction> FixedDeductions { get; set; }
    public DbSet<OtherDeduction> OtherDeductions { get; set; }
}
