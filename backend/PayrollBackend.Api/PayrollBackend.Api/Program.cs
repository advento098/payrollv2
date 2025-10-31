using dotenv.net;
using Microsoft.OpenApi.Models;
using PayrollBackend.Application;
using PayrollBackend.Infrastructure;

DotEnv.Load();
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Configuration.AddEnvironmentVariables();
builder.Services.AddApplicationDI().AddInfrastructureDI(builder.Configuration);

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

builder.Services.AddSwaggerGen(options =>
{
    options.SwaggerDoc("v1", new OpenApiInfo
    {
        Title = "Payroll Backend API",
        Version = "v1",
        Description = "API documentation for PayrollBackend using Clean Architecture"
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(options =>
    {
        options.SwaggerEndpoint("/swagger/v1/swagger.json", "PayrollBackend API v1");
        options.RoutePrefix = string.Empty; // Makes Swagger UI load at root (e.g., https://localhost:5001)
    });
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
