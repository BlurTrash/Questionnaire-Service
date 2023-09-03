using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using questionnaire_service_API.AppServices.Interfaces;
using questionnaire_service_DAL.EF;
using questionnaire_service_DAL.Repositories;
using questionnaire_service_DAL.RepositoryInterfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WendingMachineAPI.AppServices.Services;

namespace questionnaire_service_API.SevicesCollectionExtansion
{
    public static class ServicesCollectionExtansion
    {
        public static IServiceCollection AddDIServices(this IServiceCollection services, string connectionString)
        {
            var str = $"Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename={connectionString};Integrated Security=True;Connect Timeout=30";
            services.AddDbContext<QuestionnaireServiceDbContext>(options => options.UseSqlServer(str));
            services.AddTransient<IOrganizationService, OrganizationService>();
            services.AddTransient<IOrganizationRepository, OrganizationRepository>();
            services.AddTransient<IOrganizationTypeRepository, OrganizationTypeRepository>();
            services.AddTransient<IBankDetailsRepository, BankDetailsRepository>();

            //services.AddTransient<IWendingMachineRepository, WendingMachineRepository>();
            //services.AddTransient<IWendingMachineService, WendingMachineService>();
            //services.AddTransient<ICoinRepository, CoinRepository>();
            //services.AddTransient<IHelpService, HelpService>();
            //services.AddTransient<ICoinStorageRepository, CoinStorageRepository>();

            return services;
        }
    }
}
