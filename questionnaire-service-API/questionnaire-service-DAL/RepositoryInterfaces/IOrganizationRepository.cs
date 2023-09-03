using questionnaire_service_DAL.Entities;
using questionnaire_service_DAL.RepositoryInterfaces.Base;
using System;
using System.Collections.Generic;
using System.Text;

namespace questionnaire_service_DAL.RepositoryInterfaces
{
    public interface IOrganizationRepository : IRepositoryBase<Organization, int>
    {
        public Organization Get(int Id);
        public Organization GetByInn(string inn);
        public List<Organization> GetAllByTypeId(int typeId);
    }
}
