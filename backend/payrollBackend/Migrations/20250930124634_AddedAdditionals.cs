using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace payrollBackend.Migrations
{
    /// <inheritdoc />
    public partial class AddedAdditionals : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Additional_Salaries_SalaryId",
                table: "Additional");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Additional",
                table: "Additional");

            migrationBuilder.RenameTable(
                name: "Additional",
                newName: "Additionals");

            migrationBuilder.RenameIndex(
                name: "IX_Additional_SalaryId",
                table: "Additionals",
                newName: "IX_Additionals_SalaryId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Additionals",
                table: "Additionals",
                column: "AdditionalId");

            migrationBuilder.AddForeignKey(
                name: "FK_Additionals_Salaries_SalaryId",
                table: "Additionals",
                column: "SalaryId",
                principalTable: "Salaries",
                principalColumn: "SalaryId",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Additionals_Salaries_SalaryId",
                table: "Additionals");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Additionals",
                table: "Additionals");

            migrationBuilder.RenameTable(
                name: "Additionals",
                newName: "Additional");

            migrationBuilder.RenameIndex(
                name: "IX_Additionals_SalaryId",
                table: "Additional",
                newName: "IX_Additional_SalaryId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Additional",
                table: "Additional",
                column: "AdditionalId");

            migrationBuilder.AddForeignKey(
                name: "FK_Additional_Salaries_SalaryId",
                table: "Additional",
                column: "SalaryId",
                principalTable: "Salaries",
                principalColumn: "SalaryId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
