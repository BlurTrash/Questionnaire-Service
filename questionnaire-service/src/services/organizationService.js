const baseUrl = "https://localhost:44303";

const organizationIPPost = (registerDate, inn, scanInnImage, ogrnIp, scanOgrnIpImage, scanEgripImage, scanContractOfficeImage, isNoContract, organizationTypeId) => {
    const fullUrl = baseUrl + '/api/Organizations/CreateIp';
    const data = new FormData();
    data.append("RegisterDate", registerDate);
    data.append("Inn", inn);
    data.append("ScanInnImage", scanInnImage);
    data.append("OgrnIp", ogrnIp);
    data.append("ScanOgrnIpImage", scanOgrnIpImage);
    data.append("ScanEgripImage", scanEgripImage);
    data.append("ScanContractOfficeImage", scanContractOfficeImage);
    data.append("IsNoContract", isNoContract);
    data.append("OrganizationTypeId", organizationTypeId);

    return fetch(fullUrl, { method: 'POST', body: data });
}

const organizationOOOPost = (fullName, shortName, registerDate, inn, scanInnImage, ogrn, scanOgrnImage, scanEgripImage, scanContractOfficeImage, isNoContract, organizationTypeId) => {
    const fullUrl = baseUrl + '/api/Organizations/CreateOrganization';
    const data = new FormData();
    data.append("FullName", fullName);
    data.append("ShortName", shortName);
    data.append("RegisterDate", registerDate);
    data.append("Inn", inn);
    data.append("ScanInnImage", scanInnImage);
    data.append("Ogrn", ogrn);
    data.append("ScanOgrnImage", scanOgrnImage);
    data.append("ScanEgripImage", scanEgripImage);
    data.append("ScanContractOfficeImage", scanContractOfficeImage);
    data.append("IsNoContract", isNoContract);
    data.append("OrganizationTypeId", organizationTypeId);

    return fetch(fullUrl, { method: 'POST', body: data });
}

const organizationRequisitesPost = (bik, filialBankName, calculationCheckNumber, corCheckNumber, organizationId) => {
    const fullUrl = baseUrl + '/api/Organizations/CreateRequisites';
    const data = new FormData();
    data.append("Bik", bik);
    data.append("FilialBankName", filialBankName);
    data.append("CalculationCheckNumber", calculationCheckNumber);
    data.append("CorCheckNumber", corCheckNumber);
    data.append("OrganizationId", organizationId);
    
    return fetch(fullUrl, { method: 'POST', body: data });
}

const getAllOrganizationsIP = () => {
    const fullUrl = baseUrl + '/api/Organizations/GetAllOrganizationsIP';
    return fetch(fullUrl);
}

const getAllOrganizationsOOO = () => {
    const fullUrl = baseUrl + '/api/Organizations/GetAllOrganizationsOOO';
    return fetch(fullUrl);
}


export {organizationIPPost, organizationOOOPost, organizationRequisitesPost, getAllOrganizationsIP, getAllOrganizationsOOO};