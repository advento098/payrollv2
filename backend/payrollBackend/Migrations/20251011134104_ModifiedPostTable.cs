using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace payrollBackend.Migrations
{
    /// <inheritdoc />
    public partial class ModifiedPostTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Attendances_Posts_PostId",
                table: "Attendances");

            migrationBuilder.DropIndex(
                name: "IX_Attendances_PostId",
                table: "Attendances");

            migrationBuilder.DropColumn(
                name: "PostId",
                table: "Attendances");

            migrationBuilder.AddColumn<int>(
                name: "AttendanceId",
                table: "Posts",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "EmployeeId",
                table: "Posts",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Posts_AttendanceId",
                table: "Posts",
                column: "AttendanceId");

            migrationBuilder.CreateIndex(
                name: "IX_Posts_EmployeeId",
                table: "Posts",
                column: "EmployeeId");

            migrationBuilder.AddForeignKey(
                name: "FK_Posts_Attendances_AttendanceId",
                table: "Posts",
                column: "AttendanceId",
                principalTable: "Attendances",
                principalColumn: "AttendanceId");

            migrationBuilder.AddForeignKey(
                name: "FK_Posts_Employees_EmployeeId",
                table: "Posts",
                column: "EmployeeId",
                principalTable: "Employees",
                principalColumn: "EmployeeId");
        }
    }
}
