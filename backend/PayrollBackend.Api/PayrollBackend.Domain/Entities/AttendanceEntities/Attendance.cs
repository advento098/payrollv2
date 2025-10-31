using PayrollBackend.Domain.Entities.EmployeeEntities;
using System.ComponentModel.DataAnnotations;

namespace PayrollBackend.Domain.Entities.AttendanceEntities
{
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
}