using Microsoft.EntityFrameworkCore;
using questionnaire_service_DAL.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace questionnaire_service_DAL.EF
{
    public class QuestionnaireServiceDbContext : DbContext
    {
        public DbSet<OrganizationType> OrganizationTypes { get; set; }
        public DbSet<Organization> Organizations { get; set; }
        public DbSet<BankDetails> BanksDetails { get; set; }

        public QuestionnaireServiceDbContext(DbContextOptions<QuestionnaireServiceDbContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.Entity<Organization>()
                .HasMany(a => a.Banks)
                .WithOne(c => c.Organization)
                .OnDelete(DeleteBehavior.Cascade);

            builder.Entity<OrganizationType>()
                .HasMany(a => a.Organizations)
                .WithOne(c => c.OrganizationType)
                .OnDelete(DeleteBehavior.Cascade);

            builder.Entity<Organization>().Property(u => u.IsActive).HasDefaultValue(true);
            builder.Entity<OrganizationType>().Property(u => u.IsActive).HasDefaultValue(true);
            builder.Entity<BankDetails>().Property(u => u.IsActive).HasDefaultValue(true);
        }
    }
}
