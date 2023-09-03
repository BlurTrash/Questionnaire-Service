using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace questionnaire_service_API.DTOModels.Base
{
    public abstract class BaseEntityDto<T>
    {
        public virtual T Id { get; set; }
    }
}
