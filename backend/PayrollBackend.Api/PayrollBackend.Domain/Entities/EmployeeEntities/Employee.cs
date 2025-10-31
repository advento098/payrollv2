using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PayrollBackend.Domain.Entities.EmployeeEntities
{
    public class Employee
    {
        public required int EmployeeId { get; set; }

        [Required]
        [Column(TypeName = "varchar(50)")]
        public required string FirstName { get; set; }

        [Required]
        [Column(TypeName = "varchar(50)")]
        public required string Surname { get; set; }

        [Required]
        [Column(TypeName = "varchar(50)")]
        public string? Position { get; set; }

        // Government benefits can be null as an employee can apply without these at first
        [Column(TypeName = "varchar(20)")]
        public string? Sss { get; set; }


        [Column(TypeName = "varchar(20)")]
        public string? PagIbig { get; set; }


        [Column(TypeName = "varchar(20)")]
        public string? PhilHealth { get; set; }
    }
}