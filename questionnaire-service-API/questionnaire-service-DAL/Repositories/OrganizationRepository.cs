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
    public class OrganizationRepository : BaseRepository<Organization, int>, IOrganizationRepository
    {
        public OrganizationRepository(QuestionnaireServiceDbContext _dbContext) : base(_dbContext)
        {
        }

        public Organization Get(int Id)
        {
            Organization result = _dbContext.Organizations.FirstOrDefaultAsync(x => x.Id == Id && x.IsActive == true).Result;
            return result;
        }

        public Organization GetByInn(string inn)
        {
            Organization result = _dbContext.Organizations.FirstOrDefaultAsync(x => x.Inn == inn && x.IsActive == true).Result;
            return result;
        }

        public List<Organization> GetAllByTypeId(int typeId)
        {
            List<Organization> result = _dbContext.Organizations.Where(x => x.OrganizationTypeId == typeId && x.IsActive == true).ToList();
            return result;
        }
    }
}
