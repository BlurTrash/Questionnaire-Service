import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const organizationsPlug =  [
  {
    "inn": "1111111111",
    "fullName": "ООО Вымышленная организация №1",
    "shortName": "ООО ВО №1",
    "registrationDate": "2022-05-22",
    "ogrn": "1234567891111"
  },
  {
    "inn": "2222222222",
    "fullName": "ООО Вымышленная организация №2",
    "shortName": "ООО ВО №2",
    "registrationDate": "2022-06-22",
    "ogrn": "1234567892222"
  },
  {
    "inn": "3333333333",
    "fullName": "ООО Вымышленная организация №3",
    "shortName": "ООО ВО №3",
    "registrationDate": "2022-07-22",
    "ogrn": "1234567893333"
  },
  {
    "inn": "4444444444",
    "fullName": "ООО Вымышленная организация №4",
    "shortName": "ООО ВО №4",
    "registrationDate": "2022-08-22",
    "ogrn": "1234567894444"
  },
  {
    "inn": "5555555555",
    "fullName": "ООО Вымышленная организация №5",
    "shortName": "ООО ВО №5",
    "registrationDate": "2022-09-22",
    "ogrn": "1234567895555"
  }
];

const OooFormComponent = () => {
  const navigate = useNavigate();
  const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
  const emptyErrorMessage = "Заполните поле!";
  const allowedTypesErrorMessage = "Допустимые форматы 'jpg', 'png'!";

  const [fullName, setFullName] = useState("");
  const [shortName, setShortName] = useState("");
  const [inn, setInn] = useState("");
  const [ogrn, setOgrn] = useState("");
  const [fileScanInn, setFileScanInn] = useState(null);
  const [fileScanOgrn, setFileScanOgrn] = useState(null);
  const [registerDate, setRegisterDate] = useState("");
  const [fileScanEgrip, setFileScanEgrip] = useState(null);
  const [fileScanContractOffice, setFileScanContractOffice] = useState(null);
  const [isNoContrant, setIsNoContrant] = useState(false);

  const [fullNameDirty, setFullNameDirty] = useState(false);
  const [shortNameDirty, setShortNameDirty] = useState(false);
  const [innDirty, setInnDirty] = useState(false);
  const [ogrnDirty, setOgrnDirty] = useState(false);
  const [fileScanInnDirty, setFileScanInnDirty] = useState(false);
  const [fileScanOgrnDirty, setFileScanOgrnDirty] = useState(false);
  const [registerDateDirty, setRegisterDateDirty] = useState(false);
  const [fileScanEgripDirty, setFileScanEgripDirty] = useState(false);
  const [fileScanContractOfficeDirty, setFileScanContractOfficeDirty] = useState(false);
  const [isNoContrantDirty, setIsNoContrantDirty] = useState(false);

  const [fullNameError, setFullNameError] = useState(emptyErrorMessage);
  const [shortNameError, setShortNameError] = useState(emptyErrorMessage);
  const [innError, setInnError] = useState(emptyErrorMessage);
  const [ogrnError, setOgrnError] = useState(emptyErrorMessage);
  const [fileScanInnError, setFileScanInnError] = useState(emptyErrorMessage);
  const [fileScanOgrnError, setFileScanOgrnError] = useState(emptyErrorMessage);
  const [registerDateError, setRegisterDateError] = useState(emptyErrorMessage);
  const [fileScanEgripError, setFileScanEgripError] = useState(emptyErrorMessage);
  const [fileScanContractOfficeError, setFileScanContractOfficeError] = useState("При отсутствии договора - выберите пунк 'Нет договора'");

  const [formValid, setFormValid] = useState(false);
  const [isNoCotractDisabled, setIsNoCotractDisabled] = useState(false);

  useEffect(()=> {
    if(fullNameError || shortNameError || innError || ogrnError || fileScanInnError || fileScanOgrnError || registerDateError || fileScanEgripError || fileScanContractOfficeError){
      setFormValid(false)
    }
    else {
      setFormValid(true)
    }
  }, [fullNameError, shortNameError, innError, ogrnError, fileScanInnError, fileScanOgrnError, registerDateError, fileScanEgripError, fileScanContractOfficeError, isNoContrant])

  const fullNameHandler = (e) => {
    setFullName(e.target.value)
    
    if(e.target.value.length === 0) {
      setFullNameError(emptyErrorMessage)
    }
    else if(e.target.value.length > 1000) {
      setFullNameError("Не более 1000 символов!")
    }
    else {
      setFullNameError("")
    }
  }

  const shortNameHandler = (e) => {
    setShortName(e.target.value)
    
    if(e.target.value.length === 0) {
      setShortNameError(emptyErrorMessage)
    }
    else if(e.target.value.length > 500) {
      setShortNameError("Не более 500 символов!")
    }
    else {
      setShortNameError("")
    }
  }

  const handleRegiserDateChange = (event) => {
    setRegisterDate(event.target.value);
    if(!event.target.value) {
      setRegisterDateError(emptyErrorMessage)
    }
    else {
      setRegisterDateError("")
    }
  }


  const innHandler = (e) => {
    setInn(e.target.value)
    const re = /^[0-9\b]+$/;
    if(e.target.value.length === 0) {
      setInnError(emptyErrorMessage)
    }
    else if(!re.test(e.target.value)){
      setInnError("Неккоректный ИНН!")
    }
    else if(e.target.value.length !== 10) {
      setInnError("Длинна 10 символов!")
    }
    else {
      setInnError("")
      organizationsPlug.forEach(element => {
        if(element.inn === e.target.value) {
          setFullName(element.fullName);
          setFullNameError("");
          setShortName(element.shortName);
          setShortNameError("");
          const curr = new Date(element.registrationDate);
          var date = curr.toISOString().substring(0,10);
          setRegisterDate(date);
          setRegisterDateError("");
          setOgrn(element.ogrn);
          setOgrnError("");
        }
      });
    }
  }

  const handleFileScanInnChange = (event) => {
    const selectedFile = event.target.files[0];
    setFileScanInn(selectedFile);

    if(!selectedFile) {
      setFileScanInnError(emptyErrorMessage);     
    }
    else if(!allowedTypes.includes(selectedFile?.type)) {
      setFileScanInnError("Допустимые форматы 'jpg', 'png'!");
    }
    else if(selectedFile.size > 5242880) {
      setFileScanInnError("Не более 5 МБ!");
    }
    else{
      setFileScanInnError("");
    }
  };

  const ogrnHandler = (e) => {
    setOgrn(e.target.value)
    const re = /^[0-9\b]+$/;
    if(e.target.value.length === 0) {
      setOgrnError(emptyErrorMessage)
    }
    else if(!re.test(e.target.value)){
      setOgrnError("Неккоректный ОГРН!")
    }
    else if(e.target.value.length !== 13) {
      setOgrnError("Длинна 13 символов!")
    }
    else {
      setOgrnError("")
    }
  }

  const handleFileScanOgrnChange = (event) => {
    const selectedFile = event.target.files[0];
    setFileScanOgrn(selectedFile);
    
    if(!selectedFile) {
      setFileScanOgrnError(emptyErrorMessage);     
    }
    else if(!allowedTypes.includes(selectedFile?.type)) {
      setFileScanOgrnError(allowedTypesErrorMessage);
    }
    else if(selectedFile.size > 5242880) {
      setFileScanOgrnError("Не более 5 МБ!");
    }
    else{
      setFileScanOgrnError("");
    }
  };

  const handleFileScanEgripChange = (event) => {
    const selectedFile = event.target.files[0];
    setFileScanEgrip(selectedFile);
    
    if(!selectedFile) {
      setFileScanEgripError(emptyErrorMessage);     
    }
    else if(!allowedTypes.includes(selectedFile?.type)) {
      setFileScanEgripError(allowedTypesErrorMessage);
    }
    else if(selectedFile.size > 5242880) {
      setFileScanEgripError("Не более 5 МБ!");
    }
    else{
      setFileScanEgripError("");
    }
  };

  const handleFileScanFileScanContractOfficeChange = (event) => {
    const selectedFile = event.target.files[0];
    setFileScanContractOffice(selectedFile);
    
    if(!selectedFile) {
      setIsNoCotractDisabled(false);
      setFileScanContractOfficeError("При отсутствии договора - выберите пунк 'Нет договора'");
    }
    else if(!allowedTypes.includes(selectedFile?.type)) {
      setFileScanContractOfficeError(allowedTypesErrorMessage);
      setIsNoContrant(false);
      setIsNoCotractDisabled(true);
    }
    else if(selectedFile.size > 5242880) {
      setFileScanContractOfficeError("Не более 5 МБ!");
      setIsNoContrant(false);
      setIsNoCotractDisabled(true);
    }
    else{
      setIsNoContrant(false);
      setIsNoCotractDisabled(true);
      setFileScanContractOfficeError("");
    }
  };

  const handleIsNoContractChange = (event) => {
    setIsNoContrant(state => !state)
    if(isNoContrant) {
      setFileScanContractOfficeError("При отсутствии договора - выберите пунк 'Нет договора'");
    }
    else {
      setFileScanContractOfficeError("");
    }
  };

  const onNextPageHadlerClick = (e) => {
    e.preventDefault()

    let newClient = {
      fullName: fullName,
      shortName: shortName,
      inn: inn,
      ogrn: ogrn,
      fileScanInn: fileScanInn,
      fileScanOgrn: fileScanOgrn,
      registerDate: registerDate,
      fileScanEgrip: fileScanEgrip,
      fileScanContractOffice: fileScanContractOffice,
      isNoContrant: isNoContrant,
      organizationType: 1
    };
    navigate('/bank-details', {state: {newClient}}); 
  }

  const blurHandler = (e) => {
    switch(e.target.name) {
      case 'fullName':
        setFullNameDirty(true)
        break
      case 'shortName':
        setShortNameDirty(true)
        break  
      case 'inn':
        setInnDirty(true)
        break
      case 'ogrn': 
        setOgrnDirty(true)
        break
      case 'scanInn':  
        setFileScanInnDirty(true)
        break
      case 'scanOgrn':
        setFileScanOgrnDirty(true)
        break  
      case 'registerDate':
        setRegisterDateDirty(true)
        break  
      case 'scanEgrip':
        setFileScanEgripDirty(true)  
        break
      case 'scanContractOffice':
        setFileScanContractOfficeDirty(true)  
        break
      case 'contract':
        setIsNoContrantDirty(true)
        break  
      default:  break
    }
  }

  return (
  <form>
    <p className='medium-header-p'>Общество с ограниченной ответственностью (ООО)</p>
    <div className='container'>
      <div className='row'>
        <div className="form-group col-6">
            <label htmlFor="fullName" className='title-header'>Наименование полное*</label>
            <input type="text" onBlur={e=> blurHandler(e)} onChange={e=> fullNameHandler(e)} value={fullName} className="form-control margin-top-12" id="fullName" name="fullName" placeholder="ООО 'Московская промышленная компания'"></input>
            {(fullNameDirty && fullNameError) && <div className='error-label'>{fullNameError}</div>} 
        </div>
        <div className="form-group col-4">
            <label htmlFor="shortName" className='title-header'>Наименование сокращенное*</label>
            <input type="text" onBlur={e=> blurHandler(e)} onChange={e=> shortNameHandler(e)}  value={shortName} className="form-control margin-top-12" id="shortName" name="shortName"  placeholder="ООО 'МПК'"></input>
            {(shortNameDirty && shortNameError) && <div className='error-label'>{shortNameError}</div>} 
        </div>
        <div className="form-group col-2">
            <label htmlFor="registerDate" className='title-header'>Дата регистрации*</label>
            <input type="date" onBlur={e=> blurHandler(e)} onChange={e=> handleRegiserDateChange(e)} value={registerDate} className="form-control margin-top-12" id="registerDate" name="registerDate"></input>
            {(registerDateDirty && registerDateError) && <div className='error-label'>{registerDateError}</div>} 
        </div>
      </div>

      <div className='row'>
        <div className="form-group col-2">
            <label htmlFor="inn" className='title-header'>ИНН*</label>
            <input type="text" onBlur={e=> blurHandler(e)} onChange={e=> innHandler(e)} value={inn} className="form-control margin-top-12" id="inn" name="inn" placeholder="xxxxxxxxxx"></input>
            {(innDirty && innError) && <div className='error-label'>{innError}</div>} 
        </div>
        <div className="form-group col-4">
            <label htmlFor="scanInn" className='title-header'>Скан ИНН*</label>
            <input type="file" onBlur={e=> blurHandler(e)} onChange={handleFileScanInnChange} className="form-control margin-top-12" id="scanInn" name="scanInn"></input>
            {(fileScanInnDirty && fileScanInnError) && <div className='error-label'>{fileScanInnError}</div>} 
        </div>
        <div className="form-group col-2">
            <label htmlFor="ogrn" className='title-header'>ОГРН*</label>
            <input type="text" onBlur={e=> blurHandler(e)} onChange={e=> ogrnHandler(e)} value={ogrn} className="form-control margin-top-12" id="ogrn" name="ogrn" placeholder="xxxxxxxxxxx"></input>
            {(ogrnDirty && ogrnError) && <div className='error-label'>{ogrnError}</div>} 
        </div>
        <div className="form-group col-4">
            <label htmlFor="scanOgrn" className='title-header'>Скан ОГРН*</label>
            <input type="file" onBlur={e=> blurHandler(e)} onChange={handleFileScanOgrnChange} className="form-control margin-top-12" id="scanOgrn" name="scanOgrn"></input>
            {(fileScanOgrnDirty && fileScanOgrnError) && <div className='error-label'>{fileScanOgrnError}</div>} 
        </div>
      </div>

      <div className='row'>
        <div className="form-group col-4">
            <label htmlFor="scanEgrip" className='title-header'>Скан выписки из ЕГРИП (не старше 3 месяцев)*</label>
            <input type="file" onBlur={e=> blurHandler(e)} onChange={handleFileScanEgripChange} className="form-control margin-top-12" id="scanEgrip" name="scanEgrip"></input>
            {(fileScanEgripDirty && fileScanEgripError) && <div className='error-label'>{fileScanEgripError}</div>} 
        </div>
        <div className="form-group col-4">
            <label htmlFor="scanContractOffice" className='title-header'>Скан договора аренды помещения (офиса)*</label>
            <input onBlur={e=> blurHandler(e)} onChange={handleFileScanFileScanContractOfficeChange} type="file" className="form-control margin-top-12" id="scanContractOffice" name="scanContractOffice"></input>
            {(fileScanContractOfficeDirty && fileScanContractOfficeError) && <div className='error-label'>{fileScanContractOfficeError}</div>} 
        </div>
        <div className="check-contract col-2">
          <div className='check-contract-inner'>
            <input className="form-check-input" type="checkbox" onBlur={e=> blurHandler(e)} onChange={e=> handleIsNoContractChange(e)} checked={isNoContrant} id="contract" name="contract" disabled={isNoCotractDisabled}></input>
            <label className="form-check-label title-header margin-left-5 " htmlFor="contract">
              Нет договора
            </label>
          </div>
        </div>
      </div>

      <div className='row justify-content-end'>
        <div className='col-1'>
          <button className='btn btn-primary btn-lg' disabled={!formValid} onClick={e=>onNextPageHadlerClick(e)}>Далее</button>
        </div>
      </div>
    </div>
  </form>
  );
}

export default OooFormComponent;
