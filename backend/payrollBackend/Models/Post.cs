using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace payrollBackend.Models;

public class Post
{
    public int PostId { get; set; }
    [Required]
    [Column(TypeName = "varchar(50)")]
    public required string PostName { get; set; }
    public ICollection<Attendance>? Attendances { get; set; }
}
