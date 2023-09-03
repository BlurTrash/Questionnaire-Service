using questionnaire_service_API.DTOModels;
using System.Collections.Generic;

namespace questionnaire_service_API.AppServices.Interfaces
{
    public interface IOrganizationService
    {
        OrganizationOOOModelDto CreateOrganizationOOO(OrganizationOOOCreateModelDto newOrganization);
        OrganizationIPModelDto CreateOrganizationIP(OrganizationIPCreateModelDto newOrganization);
        BankDetailsModelDto CreateRequisites(BankDetailsCreateModelDto newReq);
        IEnumerable<OrganizationOOOFullModelDto> GetAllOOOOrganization(string scheme, string hostValue);
        IEnumerable<OrganizationIPFullModelDto> GetAllIPOrganization(string scheme, string hostValue);
    }
}
