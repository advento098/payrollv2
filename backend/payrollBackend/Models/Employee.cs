namespace payrollBackend;

public class Employee
{
    public required int EmployeeId { get; set; }
    public required string FirstName { get; set; }
    public required string Surname { get; set; }
    public string? Position { get; set; }
    public string? Sss { get; set; }
    public string? PagIbig { get; set; }
    public string? PhilHealth { get; set; }
    public required int SalaryId { get; set; }

    public ICollection<Attendance>? Attendances { get; set; }
    public required Salary Salary { get; set; }
}
