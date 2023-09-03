using questionnaire_service_DAL.EF;
using questionnaire_service_DAL.Entities.Base;
using questionnaire_service_DAL.RepositoryInterfaces.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace questionnaire_service_DAL.Repositories.Base
{
    public abstract class BaseRepository<T, TId> : IRepositoryBase<T, TId> where T : BaseEntity<TId>
    {
        protected readonly QuestionnaireServiceDbContext _dbContext;

        public BaseRepository(QuestionnaireServiceDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public TId Create(T entity)
        {
            _dbContext.Set<T>().Add(entity);
            _dbContext.SaveChanges();
            return entity.Id;
        }

        public void Delete(TId entityId)
        {
            throw new NotImplementedException();
        }

        public IQueryable<T> GetAll()
        {
            var result = _dbContext.Set<T>();
            return result;
        }

        public TId Update(T entity)
        {
            _dbContext.Set<T>().Update(entity);
            _dbContext.SaveChanges();
            return entity.Id;
        }
    }
}
