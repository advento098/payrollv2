using System.ComponentModel.DataAnnotations.Schema;

namespace payrollBackend;

public class Attendance
{
    /// <summary>
    /// Sets the user id (the owner of the data)
    /// </summary>
    /// <value>
    /// userId
    /// </value>
    public int UserId { get; set; }
    /// <summary>
    /// Sets the value of duty type
    /// </summary>
    /// <value>
    /// "Morning" or "Night"
    /// </value>
    public string? Duty { get; set; }
    /// <summary>
    /// Sets the date of the duty
    /// </summary>
    /// <remarks>
    /// Minus 1 to get the index
    /// </remarks>
    /// <value>
    /// nuumerical value 1 - ∞
    /// </value>
    public int? AttendanceDate { get; set; }
}
