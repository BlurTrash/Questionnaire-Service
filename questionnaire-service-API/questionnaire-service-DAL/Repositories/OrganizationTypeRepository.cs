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
    public class OrganizationTypeRepository : BaseRepository<OrganizationType, int>, IOrganizationTypeRepository
    {
        public OrganizationTypeRepository(QuestionnaireServiceDbContext _dbContext) : base(_dbContext)
        {
        }

        public OrganizationType Get(int Id)
        {
            OrganizationType result = _dbContext.OrganizationTypes.FirstOrDefaultAsync(x => x.Id == Id && x.IsActive == true).Result;
            return result;
        }
    }
}
