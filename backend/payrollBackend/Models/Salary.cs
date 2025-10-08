using System.ComponentModel.DataAnnotations.Schema;

namespace payrollBackend.Models;

public class Salary
{
    public required int SalaryId { get; set; }
    public float FirstHalf { get; set; } = 0;
    public float SecondHalf { get; set; } = 0;

    public float BasicRate { get; set; }
    public int AdditionalId { get; set; }
    public int OtherDeductionId { get; set; }
    public float NetSalary { get; set; } = 0;
    public float GrossSalary { get; set; } = 0;
    public DateTime EffectiveDate { get; set; }
    public required ICollection<OtherDeduction> OtherDeductions { get; set; }
    public required ICollection<Additional> Additionals { get; set; }
}
