using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using payrollBackend.Infrastructure.Persistence;

namespace payrollBackend.Api.Controllers;

[Route("api/[controller]")]
[ApiController]
public class AttendanceController(AppDbContext context) : ControllerBase
{
    private readonly AppDbContext _context = context;
}