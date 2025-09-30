namespace payrollBackend;

public class FixedDeduction
{
    public int FixedDeductionId { get; set; }
    public float Sss { get; set; } = 100;
    public float PagIbig { get; set; } = 100;
    public float PhilHealth { get; set; } = 100;
    public float Tax { get; set; } = 100;
}
