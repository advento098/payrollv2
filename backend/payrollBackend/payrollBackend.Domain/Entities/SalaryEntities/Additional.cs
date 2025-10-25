using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace payrollBackend.Domain.Entities.SalaryEntities;

public class Additional
{
    public required int AdditionalId { get; set; }


    [Required]
    [Column(TypeName = "decimal(8, 3)")]
    public required double AdditionalSalary { get; set; }

    [Required]
    public required string? Remarks { get; set; }

    [Required]
    public required DateTime EffectiveDate { get; set; }

    [Required]
    public required int SalaryId { get; set; }
    public required Salary Salary { get; set; }
}
