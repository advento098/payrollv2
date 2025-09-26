using Microsoft.EntityFrameworkCore;

namespace payrollBackend;

public class AppDbContext : DbContext
{
    // Constructor
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }

    

}
