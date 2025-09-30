namespace payrollBackend;

public class OtherDeduction
{
    public int OtherDeductionId { get; set; }
    public int SalaryId { get; set; }
    public float Deduction { get; set; }
    public string? Remarks { get; set; }
    public required Salary Salary { get; set; }
}
