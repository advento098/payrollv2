using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Reflection.Metadata;
using Microsoft.EntityFrameworkCore;
using payrollBackend.Models.EmployeeModels;

namespace payrollBackend.Models.AttendanceModels;

public class Attendance
{
    public int AttendanceId { get; set; }

    [Required]
    public DateTime AttendanceDate { get; set; }
    [Required]
    public required int AttendanceTypeId { get; set; }
    [Required]
    public required int AttendanceTableId { get; set; }
    [Required]
    public required int EmployeeId { get; set; }

    public required Employee Employee { get; set; }
    public required AttendanceType AttendanceType { get; set; }
    public required AttendanceTableLayout AttendanceTableLayout { get; set; }
}