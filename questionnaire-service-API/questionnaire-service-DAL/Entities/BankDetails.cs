using questionnaire_service_DAL.Entities.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace questionnaire_service_DAL.Entities
{
    public class BankDetails : BaseEntity<int>
    {
        /// <summary>
        /// Бик банка
        /// </summary>
        public string Bik { get; set; }

        /// <summary>
        /// Наименование филиала банка
        /// </summary>
        public string FilialBankName { get; set; }

        /// <summary>
        /// Расчетный счет
        /// </summary>
        public string CalculationCheckNumber { get; set; }

        /// <summary>
        /// КОР счет
        /// </summary>
        public string CorCheckNumber { get; set; }

        /// <summary>
        /// Какая организация-клиент
        /// </summary>
        public virtual Organization Organization { get; set; }

        /// <summary>
        /// Id организации-клиента
        /// </summary>
        public virtual int OrganizationId { get; set; }
    }
}
