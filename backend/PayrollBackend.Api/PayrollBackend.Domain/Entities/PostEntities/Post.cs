using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PayrollBackend.Domain.Entities.PostEntities
{
    public class Post
    {
        public int PostId { get; set; }
        [Required]
        [Column(TypeName = "varchar(50)")]
        public required string PostName { get; set; }

    }
}