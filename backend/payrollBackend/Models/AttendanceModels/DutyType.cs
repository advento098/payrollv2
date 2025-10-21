using System.ComponentModel.DataAnnotations;

namespace payrollBackend.Models.AttendanceModels;

public class DutyType
{
    public int DutyTypeId { get; set; }
    [Required]
    public required string AttendanceDutyType { get; set; }
}
