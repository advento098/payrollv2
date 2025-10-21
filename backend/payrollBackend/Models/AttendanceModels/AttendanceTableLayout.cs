using System.ComponentModel.DataAnnotations;
using payrollBackend.Models.PostModels;

namespace payrollBackend.Models.AttendanceModels;

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
