using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace questionnaire_service_API.DTOModels
{
    public class OrganizationIPCreateModelDto
    {
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
        public IFormFile? ScanInnImage { get; set; }

        ///<summary>
        /// Номер ОГРНИП
        /// </summary>
        public string OgrnIp { get; set; }

        ///<summary>
        /// Скан ОГРНИП
        /// </summary>
        public IFormFile? ScanOgrnIpImage { get; set; }

        ///<summary>
        /// Скан выписки из ЕГРИП
        /// </summary>
        public IFormFile? ScanEgripImage { get; set; }

        ///<summary>
        /// Скан договора аренды помещения-офиса
        /// </summary>
        public IFormFile? ScanContractOfficeImage { get; set; }

        ///<summary>
        /// Нету договара?
        /// </summary>
        public bool IsNoContract { get; set; }

        /// <summary>
        /// Id типа организации
        /// </summary>
        public int OrganizationTypeId { get; set; }
    }
}
