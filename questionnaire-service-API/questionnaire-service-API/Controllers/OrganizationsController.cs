using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using questionnaire_service_API.AppServices.Interfaces;
using questionnaire_service_API.DTOModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace questionnaire_service_API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class OrganizationsController : ControllerBase
    {
        private IWebHostEnvironment _hostingEnvironment;
        private IOrganizationService _organizationService;

        public OrganizationsController(IWebHostEnvironment environment, IOrganizationService organizationService)
        {
            _hostingEnvironment = environment;
            _organizationService = organizationService;
        }

        [HttpPost]
        public async Task<ActionResult<OrganizationOOOModelDto>> CreateOrganization([FromForm] OrganizationOOOCreateModelDto newOrg)
        {
            try
            {
                var org = _organizationService.CreateOrganizationOOO(newOrg);
                return Ok(org);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public async Task<ActionResult<OrganizationIPModelDto>> CreateIp([FromForm] OrganizationIPCreateModelDto newOrg)
        {
            try
            {
                var ip = _organizationService.CreateOrganizationIP(newOrg);
                return Ok(ip);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public async Task<ActionResult<BankDetailsModelDto>> CreateRequisites([FromForm] BankDetailsCreateModelDto newReq)
        {
            try
            {
                var req = _organizationService.CreateRequisites(newReq);
                return Ok(req);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<OrganizationOOOFullModelDto>>> GetAllOrganizationsOOO()
        {
            try
            {
                var scheme = HttpContext.Request.Scheme;
                var host = HttpContext.Request.Host.Value;
                var orgsCollection = _organizationService.GetAllOOOOrganization(scheme, host);
                return Ok(orgsCollection);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<OrganizationIPFullModelDto>>> GetAllOrganizationsIP()
        {
            try
            {
                var scheme = HttpContext.Request.Scheme;
                var host = HttpContext.Request.Host.Value;
                var orgsCollection = _organizationService.GetAllIPOrganization(scheme, host);
                return Ok(orgsCollection);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
