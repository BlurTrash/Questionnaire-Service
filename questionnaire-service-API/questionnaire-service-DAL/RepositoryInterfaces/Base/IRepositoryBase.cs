using questionnaire_service_DAL.Entities.Base;
using System.Linq;

namespace questionnaire_service_DAL.RepositoryInterfaces.Base
{
    public interface IRepositoryBase<T, TId> where T : BaseEntity<TId>
    {
        IQueryable<T> GetAll();
        TId Create(T entity);
        TId Update(T entity);
        void Delete(TId entityId);
    }
}
