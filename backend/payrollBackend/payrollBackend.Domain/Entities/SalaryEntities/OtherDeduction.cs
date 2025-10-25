using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace payrollBackend.Domain.Entities.SalaryEntities;

public class OtherDeduction
{

    public required int OtherDeductionId { get; set; }

    [Required]
    [Column(TypeName = "decimal(8, 3)")]
    public required double DeductionAmount { get; set; }

    [Required]
    public required string? Remarks { get; set; }

    [Required]
    public required DateTime EffectiveDate { get; set; }

    [Required]
    public required int SalaryId { get; set; }
    public required Salary Salary { get; set; }
}
