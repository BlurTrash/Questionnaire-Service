using AutoMapper;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using questionnaire_service_API.AppServices.Interfaces;
using questionnaire_service_API.DTOModels;
using questionnaire_service_DAL.Entities;
using questionnaire_service_DAL.RepositoryInterfaces;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace WendingMachineAPI.AppServices.Services
{
    public enum OrgType
    {
        IP = 2,
        OOO = 1
    }

    public class OrganizationService : IOrganizationService
    {

        protected readonly IOrganizationRepository _organizationRepository;
        protected readonly IBankDetailsRepository _bankDetailsRepository;
        protected readonly IOrganizationTypeRepository _organizationTypeRepository;
        protected readonly IHostingEnvironment _environment;

        public OrganizationService(IOrganizationRepository organizationRepository, IBankDetailsRepository bankDetailsRepository, IOrganizationTypeRepository organizationTypeRepository, IHostingEnvironment env)
        {
            _organizationRepository = organizationRepository;
            _bankDetailsRepository = bankDetailsRepository;
            _organizationTypeRepository = organizationTypeRepository;
            _environment = env;
        }

        

        public OrganizationOOOModelDto CreateOrganizationOOO(OrganizationOOOCreateModelDto newOrganization)
        {
            var orgType = _organizationTypeRepository.Get(newOrganization.OrganizationTypeId);
            if (orgType is null)
            {
                throw new ArgumentNullException($"Тип организации с id={newOrganization.OrganizationTypeId} не найден!");
            }
            var isOrg = _organizationRepository.GetByInn(newOrganization.Inn);
            if (isOrg != null)
            {
                throw new Exception($"ООО с ИНН: {newOrganization.Inn} уже зарегестрировано!");
            }

            //Тут реализовать сохранение файла
            string ScanInnImage = CreateFile(newOrganization.ScanInnImage, newOrganization.Inn);
            string ScanOgrnImage = CreateFile(newOrganization.ScanOgrnImage, newOrganization.Inn);
            string ScanEgripImage = CreateFile(newOrganization.ScanEgripImage, newOrganization.Inn);
            string ScanContractOfficeImage = CreateFile(newOrganization.ScanContractOfficeImage, newOrganization.Inn);
            //

            var newOrg = new Organization
            {
                Id = 0,
                FullName = newOrganization.FullName,
                ShortName = newOrganization.ShortName,
                RegisterDate = newOrganization.RegisterDate,
                Inn = newOrganization.Inn,
                ScanInnImageUrl = ScanInnImage,
                Ogrn = newOrganization.Ogrn,
                ScanOgrnImageUrl = ScanOgrnImage,
                ScanEgripImageUrl = ScanEgripImage,
                ScanContractOfficeImageUrl = ScanContractOfficeImage,
                IsNoContract = newOrganization.IsNoContract,
                OrganizationTypeId = newOrganization.OrganizationTypeId
            };

            _organizationRepository.Create(newOrg);

            var mapper = new MapperConfiguration(cfg => cfg.CreateMap<Organization, OrganizationOOOModelDto>()).CreateMapper();
            var item = mapper.Map<Organization, OrganizationOOOModelDto>(newOrg);
            item.OrganizationTypeName = orgType.Name;

            return item;
        }

        public OrganizationIPModelDto CreateOrganizationIP(OrganizationIPCreateModelDto newOrganization)
        {
            var orgType = _organizationTypeRepository.Get(newOrganization.OrganizationTypeId);
            if (orgType is null)
            {
                throw new ArgumentNullException($"Тип организации с id={newOrganization.OrganizationTypeId} не найден!");
            }
            var isOrg = _organizationRepository.GetByInn(newOrganization.Inn);
            if (isOrg != null)
            {
                throw new Exception($"ИП с ИНН: {newOrganization.Inn} уже зарегестрировано!");
            }

            //Тут реализовать сохранение файла
            string ScanInnImage = CreateFile(newOrganization.ScanInnImage, newOrganization.Inn);
            string ScanOgrnIpImage = CreateFile(newOrganization.ScanOgrnIpImage, newOrganization.Inn);
            string ScanEgripImage = CreateFile(newOrganization.ScanEgripImage, newOrganization.Inn);
            string ScanContractOfficeImage = CreateFile(newOrganization.ScanContractOfficeImage, newOrganization.Inn);
            //

            var newOrg = new Organization
            {
                Id = 0,
                RegisterDate = newOrganization.RegisterDate,
                Inn = newOrganization.Inn,
                ScanInnImageUrl = ScanInnImage,
                OgrnIp = newOrganization.OgrnIp,
                ScanOgrnIpImageUrl = ScanOgrnIpImage,
                ScanEgripImageUrl = ScanEgripImage,
                ScanContractOfficeImageUrl = ScanContractOfficeImage,
                IsNoContract = newOrganization.IsNoContract,
                OrganizationTypeId = newOrganization.OrganizationTypeId
            };

            _organizationRepository.Create(newOrg);

            var mapper = new MapperConfiguration(cfg => cfg.CreateMap<Organization, OrganizationIPModelDto>()).CreateMapper();
            var item = mapper.Map<Organization, OrganizationIPModelDto>(newOrg);
            item.OrganizationTypeName = orgType.Name;

            return item;
        }

        public BankDetailsModelDto CreateRequisites(BankDetailsCreateModelDto newRequisites)
        {
            var organization = _organizationRepository.Get(newRequisites.OrganizationId);
            if (organization is null)
            {
                throw new ArgumentNullException($"Клиент с id={newRequisites.OrganizationId} не найден!");
            }
            var isBankDetails = _bankDetailsRepository.GetByCalculationCheck(newRequisites.CalculationCheckNumber);
            if (isBankDetails != null)
            {
                throw new Exception($"Расчетный счет с номером {newRequisites.CalculationCheckNumber} уже существует!");
            }

            var newReq = new BankDetails
            {
                Id = 0,
                Bik = newRequisites.Bik,
                FilialBankName = newRequisites.FilialBankName,
                CalculationCheckNumber = newRequisites.CalculationCheckNumber,
                CorCheckNumber = newRequisites.CorCheckNumber,
                OrganizationId = newRequisites.OrganizationId
            };

            _bankDetailsRepository.Create(newReq);

            var mapper = new MapperConfiguration(cfg => cfg.CreateMap<BankDetails, BankDetailsModelDto>()).CreateMapper();
            var item = mapper.Map<BankDetails, BankDetailsModelDto>(newReq);
            return item;
        }

        public IEnumerable<OrganizationOOOFullModelDto> GetAllOOOOrganization(string scheme, string hostValue)
        {
            var list = _organizationRepository.GetAllByTypeId((int)OrgType.OOO);
            var mapper = new MapperConfiguration(cfg => cfg.CreateMap<Organization, OrganizationOOOFullModelDto>()).CreateMapper();
            var fullOrgCollection = mapper.Map<List<Organization>, IEnumerable<OrganizationOOOFullModelDto>>(list);
            foreach (var item in fullOrgCollection)
            {
                item.ScanInnImageUrl = CreateFullImgUrl(item.ScanInnImageUrl, scheme, hostValue);
                item.ScanOgrnImageUrl = CreateFullImgUrl(item.ScanOgrnImageUrl, scheme, hostValue);
                item.ScanEgripImageUrl = CreateFullImgUrl(item.ScanEgripImageUrl, scheme, hostValue);
                if (!string.IsNullOrWhiteSpace(item.ScanContractOfficeImageUrl))
                {
                    item.ScanContractOfficeImageUrl = CreateFullImgUrl(item.ScanContractOfficeImageUrl, scheme, hostValue);
                }

                var banks = GetOrganizationRelationsBankDetails(item.Id);
                item.BanksRequisites = banks;
            }

            return fullOrgCollection;
        }

        public IEnumerable<OrganizationIPFullModelDto> GetAllIPOrganization(string scheme, string hostValue)
        {
            var list = _organizationRepository.GetAllByTypeId((int)OrgType.IP);
            var mapper = new MapperConfiguration(cfg => cfg.CreateMap<Organization, OrganizationIPFullModelDto>()).CreateMapper();
            var fullOrgCollection = mapper.Map<List<Organization>, IEnumerable<OrganizationIPFullModelDto>>(list);
            foreach (var item in fullOrgCollection)
            {
                item.ScanInnImageUrl = CreateFullImgUrl(item.ScanInnImageUrl, scheme, hostValue);
                item.ScanOgrnIpImageUrl = CreateFullImgUrl(item.ScanOgrnIpImageUrl, scheme, hostValue);
                item.ScanEgripImageUrl = CreateFullImgUrl(item.ScanEgripImageUrl, scheme, hostValue);
                if (!string.IsNullOrWhiteSpace(item.ScanContractOfficeImageUrl))
                {
                    item.ScanContractOfficeImageUrl = CreateFullImgUrl(item.ScanContractOfficeImageUrl, scheme, hostValue);
                }

                var banks = GetOrganizationRelationsBankDetails(item.Id);
                item.BanksRequisites = banks;
            }

            return fullOrgCollection;
        }

        private List<BankDetailsModelDto> GetOrganizationRelationsBankDetails(int organizationId)
        {
            var organization = _organizationRepository.Get(organizationId);
            if (organization is null)
            {
                throw new ArgumentNullException($"Клиент с id={organizationId} не найден!");
            }
            var banks = _bankDetailsRepository.GetAllByOrganizationId(organizationId);
            var mapper = new MapperConfiguration(cfg => cfg.CreateMap<BankDetails, BankDetailsModelDto>()).CreateMapper();
            var dtoModelsList = mapper.Map<List<BankDetails>, List<BankDetailsModelDto>>(banks);

            return dtoModelsList;
        }

        private string CreateFile(IFormFile file, string ogrInn)
        {
            long maxLengthFile5MB = 5242880;
            if (file != null)
            {
                if (file.Length > 0 && file.Length < maxLengthFile5MB)
                {
                    string DIRECTORY_PATH =   $@"OgranizationsImages\{ogrInn}\";
                    string path = Path.Combine(_environment.ContentRootPath, @"wwwroot");
                    string uploads = Path.Combine(path, DIRECTORY_PATH);
                    string imgPath = Path.Combine(uploads, file.FileName);

                    //FileInfo fi = new FileInfo(_path);
                    DirectoryInfo di = new DirectoryInfo(uploads);
                    if (!di.Exists)
                    {
                        di.Create();
                    }

                    //if (!fi.Exists)
                    //{
                    //    fi.Create().Dispose();
                    //}

                    string[] validFormat = new string[4] { "jpg", "png", "jpeg", "webp" };
                    var fileImgFormat = file.FileName.Split(".").Last().ToLower();
                    if (!validFormat.Contains(fileImgFormat))
                    {
                        throw new FormatException($"Неверный формат файла '{file.FileName}'. Допустимые форматы: .jpg, .png, .jpeg .webp!");
                    }

                    using (Stream fileStream = new FileStream(imgPath, FileMode.Create))
                    {
                        file.CopyTo(fileStream);
                    }
                    var partPath = Path.Combine(DIRECTORY_PATH, file.FileName);
                    return partPath.Replace('\\', '/');
                }
                else
                    throw new Exception($"Размер файла не должен привышать 5 МБ!");
            }
            return "";
        }

        private string CreateFullImgUrl(string filePath, string scheme, string hostValue)
        {
            var locationImg = $"{scheme}://{hostValue}/{filePath}";
            return locationImg;
        }
    }
}
