using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using payrollBackend.Domain.Entities.EmployeeEntities;
using payrollBackend.Infrastructure.Persistence;

namespace payrollBackend.Api.Controllers;

[Route("api/[controller]")]
[ApiController]
public class ProfileController(AppDbContext context) : ControllerBase
{
    private readonly AppDbContext _context = context;

    [HttpPost("Add")]
    public async Task<ActionResult<Employee>> AddEmployee(Employee employee)
    {
        var employeeExist = await _context.Employees.AnyAsync(e => e.EmployeeId == employee.EmployeeId);

        if (employeeExist)
        {
            return BadRequest(new { message = "Employee already exist" });
        }

        try
        {
            var newEmployee = _context.Employees.Add(employee);
            await _context.SaveChangesAsync();
            return Ok(newEmployee);
        }
        catch (DbUpdateException ex)
        {
            if (ex.InnerException?.Message.Contains("Duplicate") == true)
            {
                return Conflict(new { message = "Employee exists" });
            }
            throw;
        }
    }
}

