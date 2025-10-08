namespace payrollBackend.Models;

public class Additional
{
    public required int AdditionalId { get; set; }
    public float AdditionalSalary { get; set; } = 0;
    public string? Remarks { get; set; }

    // Navigation properties
    public required Salary Salary { get; set; }
}
