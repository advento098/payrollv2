using System.ComponentModel.DataAnnotations.Schema;

namespace payrollBackend;

public class Salary
{
    public required int SalaryId { get; set; }
    public required int EmployeeId { get; set; }
    public float FirstHalf { get; set; } = 0;
    public float SecondHalf { get; set; } = 0;

    public float BasicRate { get; set; }
    public float NetSalary { get; set; } = 0;
    public float GrossSalary { get; set; } = 0;
    public DateTime EffectiveDate { get; set; }

    public required Employee Employee { get; set; }
    public required ICollection<OtherDeduction> OtherDeductions { get; set; }
    public required ICollection<Additional> Additionals { get; set; }
}
