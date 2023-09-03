using questionnaire_service_DAL.Entities.Base;
using System;
using System.Collections.Generic;
using System.Text;

namespace questionnaire_service_DAL.Entities
{
    /// <summary>
    /// Зарегистрированный клиент-организация
    /// </summary>
    public class Organization : BaseEntity<int>
    {
        public Organization()
        {
            this.Banks = new List<BankDetails>();
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
        /// Номер ОГРНИП
        /// </summary>
        public string OgrnIp { get; set; }

        ///<summary>
        /// Скан ОГРНИП
        /// </summary>
        public string ScanOgrnIpImageUrl { get; set; }

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
        /// Какой тип организации
        /// </summary>
        public virtual OrganizationType OrganizationType { get; set; }

        /// <summary>
        /// Id типа организации
        /// </summary>
        public virtual int OrganizationTypeId { get; set; }

        public virtual List<BankDetails> Banks { get; set; }
    }
}
