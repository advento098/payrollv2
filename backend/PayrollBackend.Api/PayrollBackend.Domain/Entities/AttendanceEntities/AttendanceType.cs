using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PayrollBackend.Domain.Entities.AttendanceEntities
{
    public class AttendanceType
    {
        public int AttendanceTypeId { get; set; }

        [Required]
        [Column(TypeName = "varchar(5)")]
        public required string AttendanceDateType { get; set; }
    }
}