using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using payrollBackend.Domain.Entities.EmployeeEntities;


namespace payrollBackend.Domain.Entities.SalaryEntities;

public class Salary
{
    public required int SalaryId { get; set; }

    [Column(TypeName = "decimal(8, 3)")]
    public double FirstHalf { get; set; } = 0;

    [Column(TypeName = "decimal(8, 3)")]
    public double SecondHalf { get; set; } = 0;

    [Column(TypeName = "decimal(8, 3)")]
    public double NetSalary { get; set; } = 0;

    [Column(TypeName = "decimal(8, 3)")]
    public double GrossSalary { get; set; } = 0;

    [Required]
    public required DateTime? EffectiveDate { get; set; }

    [Required]
    public DateTime LastUpdated { get; set; } = DateTime.Now;

    [Required]
    public required int EmployeeId { get; set; }

    [Required]
    public required int FixedDeductionId { get; set; }

    public required Employee Employee { get; set; }
    public required FixedDeduction FixedDeduction { get; set; }
}
