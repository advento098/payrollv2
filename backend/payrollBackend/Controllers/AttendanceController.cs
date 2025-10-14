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
                employeeName = e.Employee.FirstName + " " + e.Employee.Surname,
                e.DutyType,
                day = e.AttendanceDate.Day
            }).ToListAsync();

            if (tableData == null)
            {
                return NotFound();
            }

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
                    employeeName = emp.FirstName + " " + emp.Surname,
                    attendances = emp.Attendances!.Select(a => new
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

        [HttpGet("posts/{postId}")]
        public async Task<ActionResult> GetAttendancesOnPost(int postId)
        {
            var postAttendances = await _context.Attendances
                .Where(e => e.Post.PostId == postId)
                .GroupBy(e => e.Post.PostName)
                .Select(g => new
                {
                    PostName = g.Key,
                    Attendances = g.Select(e => new
                    {
                        e.AttendanceDate.Day,
                        EmployeeName = e.Employee.FirstName + " " + e.Employee.Surname,
                        e.DutyType,
                        e.AttendanceStatus
                    }).ToList()
                })
                .FirstOrDefaultAsync();

            if (postAttendances == null)
            {
                return NotFound();
            }

            return Ok(postAttendances);
        }

        [HttpGet("count")]
        public async Task<ActionResult<IEnumerable<Attendance>>> GetAttendanceCount()
        {
            var attendance = await _context.Employees.Select(e => new
            {
                e.EmployeeId,
                EmployeeName = e.FirstName + " " + e.Surname,
                DayDutyCount = e.Attendances!.Where(e => e.DutyType == 0).Count()
            }).ToListAsync();

            return Ok(attendance);
        }


        // [HttpPost]
        // public async Task<ActionResult<Attendance>> UpsertAttendance(Attendance attendance)
        // {
        //     using var transaction = await _context.Database.BeginTransactionAsync();

        //     try
        //     {
        //         var employeeExist = await _context.Attendances.FindAsync(attendance.EmployeeId);
        //         if (employeeExist == null)
        //         {
        //             return BadRequest(new { message = "Employee does not exist." });
        //         }

        //         var existingAttendance = await _context.Attendances.Where(e => e.AttendanceDate.Date == attendance.AttendanceDate.Date && e.DutyType == attendance.DutyType).FirstOrDefaultAsync();

        //         if (existingAttendance != null)
        //         {
        //             existingAttendance.EmployeeId = attendance.EmployeeId;
        //             existingAttendance.DutyType = attendance.DutyType;
        //         }

        //     }
        //     catch (Exception ex)
        //     {

        //         throw;
        //     }
        // }
    }
}
