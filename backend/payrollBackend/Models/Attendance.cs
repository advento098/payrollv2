namespace payrollBackend;

public class Attendance
{
    public int Id { get; set; }
    /// <summary>
    /// Either "Morning" or "Night"
    /// </summary>
    public string? Duty { get; set; }
    public int? AttendanceLength { get; set; }
    public int[]? AttendanceSheet { get; set; }
}
