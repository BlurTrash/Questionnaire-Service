using questionnaire_service_DAL.Entities;
using questionnaire_service_DAL.RepositoryInterfaces.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace questionnaire_service_DAL.RepositoryInterfaces
{
    public interface IBankDetailsRepository : IRepositoryBase<BankDetails, int>
    {
        public BankDetails Get(int Id);
        public List<BankDetails> GetAllByOrganizationId(int organizationId);
        public BankDetails GetFirstByOrganizationId(int organizationId);
        public BankDetails GetByCalculationCheck(string calculationCheck);
    }
}
