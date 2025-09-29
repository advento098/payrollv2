namespace payrollBackend;

public class Additional
{
    public required int AdditionalId { get; set; }
    public required int SalaryId { get; set; }
    public float AdditionalSalary { get; set; } = 0;
    public string? Remarks { get; set; }
    public required Salary Salary { get; set; }
}
