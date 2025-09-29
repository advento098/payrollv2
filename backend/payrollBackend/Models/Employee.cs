using System.ComponentModel.DataAnnotations.Schema;
using System.Runtime.ConstrainedExecution;

namespace payrollBackend;

public class Employee
{
    public int EmployeeId { get; set; }
    public string? FirstName { get; set; }
    public string? Surname { get; set; }
    public string? Position { get; set; }
    public string? Sss { get; set; }
    public string? PagIbig { get; set; }
}
