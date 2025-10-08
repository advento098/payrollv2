using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using payrollBackend.Models;

namespace payrollBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AttendanceController(AppDbContext context) : ControllerBase
    {
        private readonly AppDbContext _context = context;

        // Get attendances for this month
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Attendance>>> GetAttendances()
        {
            var tableData = await _context.Attendances.Select(e => new
            {
                e.AttendanceId,
                e.AttendanceDate.Month
            }).ToListAsync();
            return Ok(tableData);
        }

        // GET: api/Attendance/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Attendance>> GetAttendance(int id)
        {
            var attendance = await _context.Attendances.FindAsync(id);

            if (attendance == null)
            {
                return NotFound();
            }

            return Ok(attendance);
        }
    }
}
