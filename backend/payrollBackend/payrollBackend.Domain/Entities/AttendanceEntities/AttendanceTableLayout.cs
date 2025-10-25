using System.ComponentModel.DataAnnotations;
using payrollBackend.Domain.Entities.PostEntities;

namespace payrollBackend.Domain.Entities.AttendanceEntities;

public class AttendanceTableLayout
{
    public int AttendanceTableLayoutId { get; set; }
    [Required]
    public int ColumnNumber { get; set; }
    [Required]
    public required int DutyTypeId { get; set; }
    [Required]
    public required int PostId { get; set; }

    public required Post Post { get; set; }
    public required DutyType DutyType { get; set; }
}
