import React, { useEffect, useState } from 'react';
import './IpFormComponent.css';
import { useNavigate } from 'react-router-dom';

const IpFormComponent = () => {
  const navigate = useNavigate();
  
  const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
  const emptyErrorMessage = "Заполните поле!";
  const allowedTypesErrorMessage = "Допустимые форматы 'jpg', 'png'!";

  const [inn, setInn] = useState("");
  const [ogrnip, setOgrnip] = useState("");
  const [fileScanInn, setFileScanInn] = useState(null);
  const [fileScanOgrnip, setFileScanOgrnip] = useState(null);
  const [registerDate, setRegisterDate] = useState("");
  const [fileScanEgrip, setFileScanEgrip] = useState(null);
  const [fileScanContractOffice, setFileScanContractOffice] = useState(null);
  const [isNoContrant, setIsNoContrant] = useState(false);

  const [innDirty, setInnDirty] = useState(false);
  const [ogrnipDirty, setOgrnipDirty] = useState(false);
  const [fileScanInnDirty, setFileScanInnDirty] = useState(false);
  const [fileScanOgrnipDirty, setFileScanOgrnipDirty] = useState(false);
  const [registerDateDirty, setRegisterDateDirty] = useState(false);
  const [fileScanEgripDirty, setFileScanEgripDirty] = useState(false);
  const [fileScanContractOfficeDirty, setFileScanContractOfficeDirty] = useState(false);
  const [isNoContrantDirty, setIsNoContrantDirty] = useState(false);

  const [innError, setInnError] = useState(emptyErrorMessage);
  const [ogrnipError, setOgrnipError] = useState(emptyErrorMessage);
  const [fileScanInnError, setFileScanInnError] = useState(emptyErrorMessage);
  const [fileScanOgrnipError, setFileScanOgrnipError] = useState(emptyErrorMessage);
  const [registerDateError, setRegisterDateError] = useState(emptyErrorMessage);
  const [fileScanEgripError, setFileScanEgripError] = useState(emptyErrorMessage);
  const [fileScanContractOfficeError, setFileScanContractOfficeError] = useState("При отсутствии договора - выберите пунк 'Нет договора'");

  const [formValid, setFormValid] = useState(false);
  const [isNoCotractDisabled, setIsNoCotractDisabled] = useState(false);

  useEffect(()=> {
    if(innError || ogrnipError || fileScanInnError || fileScanOgrnipError || registerDateError || fileScanEgripError || fileScanContractOfficeError){
      setFormValid(false)
    }
    else {
      setFormValid(true)
    }
  }, [innError, ogrnipError, fileScanInnError, fileScanOgrnipError, registerDateError, fileScanEgripError, fileScanContractOfficeError, isNoContrant])

  const innHandler = (e) => {
    setInn(e.target.value)
    const re = /^[0-9\b]+$/;
    if(e.target.value.length === 0) {
      setInnError(emptyErrorMessage)
    }
    else if(!re.test(e.target.value)){
      setInnError("Неккоректный ИНН!")
    }
    else if(e.target.value.length !== 12) {
      setInnError("Длинна 12 символов!")
    }
    else {
      setInnError("")
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

  const ogrnipHandler = (e) => {
    setOgrnip(e.target.value)
    const re = /^[0-9\b]+$/;
    if(e.target.value.length === 0) {
      setOgrnipError(emptyErrorMessage)
    }
    else if(!re.test(e.target.value)){
      setOgrnipError("Неккоректный ОГРНИП!")
    }
    else if(e.target.value.length !== 15) {
      setOgrnipError("Длинна 15 символов!")
    }
    else {
      setOgrnipError("")
    }
  }

  const handleFileScanOgrnipChange = (event) => {
    const selectedFile = event.target.files[0];
    setFileScanOgrnip(selectedFile);
    
    if(!selectedFile) {
      setFileScanOgrnipError(emptyErrorMessage);     
    }
    else if(!allowedTypes.includes(selectedFile?.type)) {
      setFileScanOgrnipError(allowedTypesErrorMessage);
    }
    else if(selectedFile.size > 5242880) {
      setFileScanOgrnipError("Не более 5 МБ!");
    }
    else{
      setFileScanOgrnipError("");
    }
  };

  const handleRegiserDateChange = (event) => {
    setRegisterDate(event.target.value);
    if(!event.target.value) {
      setRegisterDateError(emptyErrorMessage)
    }
    else {
      setRegisterDateError("")
    }
  }

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
  }

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
  }

  const handleIsNoContractChange = (event) => {
    setIsNoContrant(state => !state)
    if(isNoContrant) {
      setFileScanContractOfficeError("При отсутствии договора - выберите пунк 'Нет договора'");
    }
    else {
      setFileScanContractOfficeError("");
    }
  }

  const onNextPageHadlerClick = (e) => {
    e.preventDefault()

    let newClient = {
      inn: inn,
      ogrnip: ogrnip,
      fileScanInn: fileScanInn,
      fileScanOgrnip: fileScanOgrnip,
      registerDate: registerDate,
      fileScanEgrip: fileScanEgrip,
      fileScanContractOffice: fileScanContractOffice,
      isNoContrant: isNoContrant,
      organizationType: 2
    };

    navigate('/bank-details', {state: {newClient}}); 
  }

  const blurHandler = (e) => {
    switch(e.target.name) {
      case 'inn':
        setInnDirty(true)
        break
      case 'ogrnip': 
        setOgrnipDirty(true)
        break
      case 'scanInn':  
        setFileScanInnDirty(true)
        break
      case 'scanOgrnip':
        setFileScanOgrnipDirty(true)
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
    <p className='medium-header-p'>Индивидуальный предприниматель (ИП)</p>
    <div className='container'>
      <div className='row'>
        <div className="form-group col-2">
            <label htmlFor="inn" className='title-header'>ИНН*</label>
            <input type="text" onBlur={e=> blurHandler(e)} onChange={e=> innHandler(e)} value={inn} className="form-control margin-top-12" id="inn" name='inn' placeholder="xxxxxxxxxxxx"></input>
            {(innDirty && innError) && <div className='error-label'>{innError}</div>} 
        </div>
        <div className="form-group col-4">
            <label htmlFor="scanInn" className='title-header'>Скан ИНН*</label>
            <input type="file" onBlur={e=> blurHandler(e)} className="form-control margin-top-12" id="scanInn" name='scanInn' onChange={handleFileScanInnChange}></input>
            {(fileScanInnDirty && fileScanInnError) && <div className='error-label'>{fileScanInnError}</div>} 
        </div>
        <div className="form-group col-2">
            <label htmlFor="ogrnip" className='title-header'>ОГРНИП*</label>
            <input type="text" onBlur={e=> blurHandler(e)} onChange={e=> ogrnipHandler(e)} value={ogrnip} className="form-control margin-top-12" id="ogrnip" name='ogrnip' placeholder="xxxxxxxxxxxxxxx"></input>
            {(ogrnipDirty && ogrnipError) && <div className='error-label'>{ogrnipError}</div>} 
        </div>
        <div className="form-group col-4">
            <label htmlFor="scanOgrnip" className='title-header'>Скан ОГРНИП*</label>
            <input type="file" onBlur={e=> blurHandler(e)} onChange={handleFileScanOgrnipChange} className="form-control margin-top-12" id="scanOgrnip" name="scanOgrnip"></input>
            {(fileScanOgrnipDirty && fileScanOgrnipError) && <div className='error-label'>{fileScanOgrnipError}</div>} 
        </div>
      </div>

      <div className='row'>
        <div className="form-group col-2">
            <label htmlFor="registerDate" className='title-header'>Дата регистрации*</label>
            <input type="date" onBlur={e=> blurHandler(e)} onChange={e=> handleRegiserDateChange(e)} value={registerDate} className="form-control margin-top-12" id="registerDate" name="registerDate"></input>
            {(registerDateDirty && registerDateError) && <div className='error-label'>{registerDateError}</div>} 
        </div>
        <div className="form-group col-4">
            <label htmlFor="scanEgrip" className='title-header'>Скан выписки из ЕГРИП (не старше 3 месяцев)*</label>
            <input type="file" onBlur={e=> blurHandler(e)} onChange={handleFileScanEgripChange} className="form-control margin-top-12" id="scanEgrip" name="scanEgrip"></input>
            {(fileScanEgripDirty && fileScanEgripError) && <div className='error-label'>{fileScanEgripError}</div>} 
        </div>
        <div className="form-group col-4">
            <label htmlFor="scanContractOffice" className='title-header'>Скан договора аренды помещения (офиса)</label>
            <input type="file" onBlur={e=> blurHandler(e)} onChange={handleFileScanFileScanContractOfficeChange} className="form-control margin-top-12" id="scanContractOffice" name="scanContractOffice"></input>
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
};


export default IpFormComponent;
