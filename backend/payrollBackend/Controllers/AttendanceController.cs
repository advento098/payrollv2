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
                attendance = e.AttendanceId,
                firstName = e.Employee.FirstName,
                day = e.AttendanceDate.Day
            }).ToListAsync();
            return Ok(tableData);
        }

        // GET: api/Attendance/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Attendance>> GetAttendance(int id)
        {
            var employeeAttendances = await _context.Employees
                .Where(emp => emp.EmployeeId == id)
                .Select(emp => new
                {
                    emp.EmployeeId,
                    EmployeeName = emp.FirstName + " " + emp.Surname,
                    Attendances = emp.Attendances!.Select(a => new
                    {
                        a.AttendanceId,
                        a.AttendanceDate.Day,
                        a.DutyType,
                        a.AttendanceStatus
                    }).ToList()
                })
                .FirstOrDefaultAsync();
            if (employeeAttendances == null)
            {
                return NotFound();
            }

            return Ok(employeeAttendances);
        }
    }
}
