using questionnaire_service_DAL.Entities;
using questionnaire_service_DAL.RepositoryInterfaces.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace questionnaire_service_DAL.RepositoryInterfaces
{
    public interface IOrganizationTypeRepository : IRepositoryBase<OrganizationType, int>
    {
        public OrganizationType Get(int Id);
    }
}
