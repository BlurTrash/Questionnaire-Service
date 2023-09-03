using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace questionnaire_service_API.DTOModels
{
    public class OrganizationOOOCreateModelDto
    {
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
        public IFormFile? ScanInnImage { get; set; }

        ///<summary>
        /// Номер ОГРН
        /// </summary>
        public string Ogrn { get; set; }

        ///<summary>
        /// Скан ОГРН
        /// </summary>
        public IFormFile? ScanOgrnImage { get; set; }

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
