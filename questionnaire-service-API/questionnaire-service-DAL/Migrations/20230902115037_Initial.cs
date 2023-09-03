using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace questionnaire_service_DAL.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "OrganizationTypes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IsActive = table.Column<bool>(type: "bit", nullable: false, defaultValue: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OrganizationTypes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Organizations",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FullName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ShortName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    RegisterDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Inn = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ScanInnImageUrl = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    OgrnIp = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ScanOgrnIpImageUrl = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Ogrn = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ScanOgrnImageUrl = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ScanEgripImageUrl = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ScanContractOfficeImageUrl = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IsNoContract = table.Column<bool>(type: "bit", nullable: false),
                    OrganizationTypeId = table.Column<int>(type: "int", nullable: false),
                    IsActive = table.Column<bool>(type: "bit", nullable: false, defaultValue: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Organizations", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Organizations_OrganizationTypes_OrganizationTypeId",
                        column: x => x.OrganizationTypeId,
                        principalTable: "OrganizationTypes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "BanksDetails",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Bik = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FilialBankName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CalculationCheckNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CorCheckNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    OrganizationId = table.Column<int>(type: "int", nullable: false),
                    IsActive = table.Column<bool>(type: "bit", nullable: false, defaultValue: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BanksDetails", x => x.Id);
                    table.ForeignKey(
                        name: "FK_BanksDetails_Organizations_OrganizationId",
                        column: x => x.OrganizationId,
                        principalTable: "Organizations",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_BanksDetails_OrganizationId",
                table: "BanksDetails",
                column: "OrganizationId");

            migrationBuilder.CreateIndex(
                name: "IX_Organizations_OrganizationTypeId",
                table: "Organizations",
                column: "OrganizationTypeId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BanksDetails");

            migrationBuilder.DropTable(
                name: "Organizations");

            migrationBuilder.DropTable(
                name: "OrganizationTypes");
        }
    }
}
