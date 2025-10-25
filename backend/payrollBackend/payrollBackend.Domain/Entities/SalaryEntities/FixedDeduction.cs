using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace payrollBackend.Domain.Entities.SalaryEntities;

public class FixedDeduction
{

    public required int FixedDeductionId { get; set; }

    [Required]
    [Column(TypeName = "varchar(20)")]
    public required string Name { get; set; }

    [Required]
    [Column(TypeName = "decimal(8, 3)")]
    public required double Amount { get; set; }
}

/* 

    Sss,
    Pagibig,
    PhilHealth,
    Tax

*/