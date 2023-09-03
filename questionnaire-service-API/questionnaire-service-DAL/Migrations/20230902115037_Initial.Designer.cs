﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using questionnaire_service_DAL.EF;

namespace questionnaire_service_DAL.Migrations
{
    [DbContext(typeof(QuestionnaireServiceDbContext))]
    [Migration("20230902115037_Initial")]
    partial class Initial
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.17")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("questionnaire_service_DAL.Entities.BankDetails", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Bik")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("CalculationCheckNumber")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("CorCheckNumber")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FilialBankName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("IsActive")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bit")
                        .HasDefaultValue(true);

                    b.Property<int>("OrganizationId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("OrganizationId");

                    b.ToTable("BanksDetails");
                });

            modelBuilder.Entity("questionnaire_service_DAL.Entities.Organization", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("FullName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Inn")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("IsActive")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bit")
                        .HasDefaultValue(true);

                    b.Property<bool>("IsNoContract")
                        .HasColumnType("bit");

                    b.Property<string>("Ogrn")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("OgrnIp")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("OrganizationTypeId")
                        .HasColumnType("int");

                    b.Property<DateTime>("RegisterDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("ScanContractOfficeImageUrl")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ScanEgripImageUrl")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ScanInnImageUrl")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ScanOgrnImageUrl")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ScanOgrnIpImageUrl")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ShortName")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("OrganizationTypeId");

                    b.ToTable("Organizations");
                });

            modelBuilder.Entity("questionnaire_service_DAL.Entities.OrganizationType", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<bool>("IsActive")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bit")
                        .HasDefaultValue(true);

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("OrganizationTypes");
                });

            modelBuilder.Entity("questionnaire_service_DAL.Entities.BankDetails", b =>
                {
                    b.HasOne("questionnaire_service_DAL.Entities.Organization", "Organization")
                        .WithMany("Banks")
                        .HasForeignKey("OrganizationId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Organization");
                });

            modelBuilder.Entity("questionnaire_service_DAL.Entities.Organization", b =>
                {
                    b.HasOne("questionnaire_service_DAL.Entities.OrganizationType", "OrganizationType")
                        .WithMany("Organizations")
                        .HasForeignKey("OrganizationTypeId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("OrganizationType");
                });

            modelBuilder.Entity("questionnaire_service_DAL.Entities.Organization", b =>
                {
                    b.Navigation("Banks");
                });

            modelBuilder.Entity("questionnaire_service_DAL.Entities.OrganizationType", b =>
                {
                    b.Navigation("Organizations");
                });
#pragma warning restore 612, 618
        }
    }
}
