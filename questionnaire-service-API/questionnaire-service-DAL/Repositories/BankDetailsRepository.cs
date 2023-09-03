using Microsoft.EntityFrameworkCore;
using questionnaire_service_DAL.EF;
using questionnaire_service_DAL.Entities;
using questionnaire_service_DAL.Repositories.Base;
using questionnaire_service_DAL.RepositoryInterfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace questionnaire_service_DAL.Repositories
{
    public class BankDetailsRepository : BaseRepository<BankDetails, int>, IBankDetailsRepository
    {
        public BankDetailsRepository(QuestionnaireServiceDbContext _dbContext) : base(_dbContext)
        {
        }

        public BankDetails Get(int Id)
        {
            BankDetails result = _dbContext.BanksDetails.FirstOrDefaultAsync(x => x.Id == Id && x.IsActive == true).Result;
            return result;
        }

        public List<BankDetails> GetAllByOrganizationId(int organizationId)
        {
            var result = _dbContext.BanksDetails.Where(x => x.OrganizationId == organizationId && x.IsActive == true).ToList();
            return result;
        }

        public BankDetails GetFirstByOrganizationId(int organizationId)
        {
            BankDetails result = _dbContext.BanksDetails.FirstOrDefaultAsync(x => x.OrganizationId == organizationId && x.IsActive == true).Result;
            return result;
        }

        public BankDetails GetByCalculationCheck(string calculationCheck)
        {
            BankDetails result = _dbContext.BanksDetails.FirstOrDefaultAsync(x => x.CalculationCheckNumber == calculationCheck && x.IsActive == true).Result;
            return result;
        }
    }
}
