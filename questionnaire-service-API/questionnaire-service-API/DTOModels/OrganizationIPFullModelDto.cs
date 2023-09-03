using questionnaire_service_API.DTOModels.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace questionnaire_service_API.DTOModels
{
    public class OrganizationIPFullModelDto : BaseEntityDto<int>
    {
        public OrganizationIPFullModelDto()
        {
            BanksRequisites = new List<BankDetailsModelDto>();
        }
        ///<summary>
        /// Дата регистрации
        /// </summary>
        public DateTime RegisterDate { get; set; }

        ///<summary>
        /// Номер ИНН
        /// </summary>
        public string Inn { get; set; }

        ///<summary>
        /// Скан ИНН
        /// </summary>
        public string ScanInnImageUrl { get; set; }

        ///<summary>
        /// Номер ОГРНИП
        /// </summary>
        public string OgrnIp { get; set; }

        ///<summary>
        /// Скан ОГРНИП
        /// </summary>
        public string ScanOgrnIpImageUrl { get; set; }

        ///<summary>
        /// Скан выписки из ЕГРИП
        /// </summary>
        public string ScanEgripImageUrl { get; set; }

        ///<summary>
        /// Скан договора аренды помещения-офиса
        /// </summary>
        public string ScanContractOfficeImageUrl { get; set; }

        ///<summary>
        /// Нету договара?
        /// </summary>
        public bool IsNoContract { get; set; }

        /// <summary>
        /// Id типа организации
        /// </summary>
        public int OrganizationTypeId { get; set; }

        public List<BankDetailsModelDto> BanksRequisites { get; set; }
    }
}
