using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace payrollBackend.Models;

public class Employee
{
    public required int EmployeeId { get; set; }
    [Required]
    [Column(TypeName = "varchar(50)")]
    public required string FirstName { get; set; }
    [Required]
    [Column(TypeName = "varchar(20)")]
    public required string Surname { get; set; }
    [Required]
    [Column(TypeName = "varchar(15)")]
    public string? Position { get; set; }
    [Required]
    [Column(TypeName = "varchar(20)")]
    public string? Sss { get; set; }
    [Required]
    [Column(TypeName = "varchar(20)")]
    public string? PagIbig { get; set; }
    [Required]
    [Column(TypeName = "varchar(20)")]
    public string? PhilHealth { get; set; }
    public int SalaryId { get; set; }

    // Navigational properties
    public ICollection<Attendance>? Attendances { get; set; }
    public required Salary Salary { get; set; }
}
