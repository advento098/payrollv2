using System.ComponentModel.DataAnnotations.Schema;

namespace payrollBackend.Models;

public class Attendance
{
    public required int AttendanceId { get; set; }
    public required int EmployeeId { get; set; }
    public required DutyType DutyType { get; set; }
    public AttendanceStatus AttendanceStatus { get; set; } = AttendanceStatus.Present;
    public required DateTime AttendanceDate { get; set; }

    // Navigation Properties
    public required Employee Employee { get; set; }
    public required Post Post { get; set; }
}

public enum DutyType
{
    Day,
    Night
}

public enum AttendanceStatus
{
    Present,
    Absent,
    Leave
}