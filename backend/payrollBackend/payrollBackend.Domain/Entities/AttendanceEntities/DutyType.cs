using System.ComponentModel.DataAnnotations;

namespace payrollBackend.Domain.Entities.AttendanceEntities;

public class DutyType
{
    public int DutyTypeId { get; set; }
    [Required]
    public required string AttendanceDutyType { get; set; }
}
