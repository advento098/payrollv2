using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Security.AccessControl;

namespace payrollBackend.Models.AttendanceModels;

public class AttendanceType
{
    public int AttendanceTypeId { get; set; }

    [Required]
    [Column(TypeName = "varchar(5)")]
    public required string AttendanceDateType { get; set; }
}
