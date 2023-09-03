using questionnaire_service_DAL.Entities.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace questionnaire_service_DAL.Entities
{
    /// <summary>
    /// Типы организаций, на данный момент ООО или ИП
    /// </summary>
    public class OrganizationType : BaseEntity<int>
    {
        public OrganizationType()
        {
            this.Organizations = new List<Organization>();
        }

        ///<summary>
        /// Название типа
        /// </summary>
        public string Name { get; set; }

        public virtual List<Organization> Organizations { get; set; }
    }
}
