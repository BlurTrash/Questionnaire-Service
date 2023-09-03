using questionnaire_service_API.DTOModels.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace questionnaire_service_API.DTOModels
{
    public class OrganizationOOOFullModelDto : BaseEntityDto<int>
    {
        public OrganizationOOOFullModelDto()
        {
            BanksRequisites = new List<BankDetailsModelDto>();
        }

        ///<summary>
        /// Название полное
        /// </summary>
        public string FullName { get; set; }

        ///<summary>
        /// Название сокращенное
        /// </summary>
        public string ShortName { get; set; }

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
        /// Номер ОГРН
        /// </summary>
        public string Ogrn { get; set; }

        ///<summary>
        /// Скан ОГРН
        /// </summary>
        public string ScanOgrnImageUrl { get; set; }

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
