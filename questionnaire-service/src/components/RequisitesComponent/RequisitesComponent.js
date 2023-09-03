import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './RequisitesComponent.css';
import { organizationIPPost, organizationOOOPost, organizationRequisitesPost } from 'services/organizationService';

const requisitesPlug = [
  {
    "bik": "111111111",
    "bankName": "ОАО СуперТинекБанк",
    "corCheck": "11111222223333355555"
  },
  {
    "bik": "222222222",
    "bankName": "ООО Село Банк",
    "corCheck": "99999111115555577777"
  },
  {
    "bik": "333333333",
    "bankName": "ОАО Скербанк",
    "corCheck": "33333000001111122222"
  },
  {
    "bik": "444444444",
    "bankName": "ОАО Банк Русский нестандарт",
    "corCheck": "66666222229999911111"
  },
  {
    "bik": "555555555",
    "bankName": "ОАО Кваспром банк",
    "corCheck": "33333444446666655555"
  }
];

const RequisitesComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const emptyErrorMessage = "Заполните поле!";
  const [resultMessage, setResultMessage] = useState("Объект сохранен!");

  const [bik, setBik] = useState("");
  const [bankName, setBankName] = useState("");
  const [calculationCheck, setCalculationCheck] = useState("");
  const [corCheck, setCorCheck] = useState("");

  const [bikDirty, setBikDirty] = useState(false);
  const [bankNameDirty, setBankNameDirty] = useState(false);
  const [calculationCheckDirty, setCalculationCheckDirty] = useState(false);
  const [corCheckDirty, setCorCheckDirty] = useState(false);

  const [bikError, setBikError] = useState(emptyErrorMessage);
  const [bankNameError, setBankNameError] = useState(emptyErrorMessage);
  const [calculationCheckError, setCalculationCheckError] = useState(emptyErrorMessage);
  const [corCheckError, setCorCheckError] = useState(emptyErrorMessage);

  const [formValid, setFormValid] = useState(false);

  useEffect(()=> {
    if(bikError || bankNameError || calculationCheckError || corCheckError){
      setFormValid(false);
    }
    else {
      setFormValid(true);
    }
  }, [bikError, bankNameError, calculationCheckError, corCheckError])

  const bikHandler = (e) => {
    setBik(e.target.value)
    const re = /^[0-9\b]+$/;
    if(e.target.value.length === 0) {
      setBikError(emptyErrorMessage)
    }
    else if(!re.test(e.target.value)){
      setBikError("Неккоректный БИК!")
    }
    else if(e.target.value.length !== 9) {
      setBikError("Длинна 9 символов!")
    }
    else {
      setBikError("");
      requisitesPlug.forEach(element => {
        if(element.bik === e.target.value) {
          setBankName(element.bankName);
          setBankNameError("");
          setCorCheck(element.corCheck);
          setCorCheckError("");
        }
      });
    }
  }

  const bankNameHandler = (e) => {
    setBankName(e.target.value)
    
    if(e.target.value.length === 0) {
      setBankNameError(emptyErrorMessage)
    }
    else if(e.target.value.length > 500) {
      setBankNameError("Не более 1000 символов!")
    }
    else {
      setBankNameError("")
    }
  }

  const calculationCheckHandler = (e) => {
    setCalculationCheck(e.target.value)
    const re = /^[0-9\b]+$/;
    if(e.target.value.length === 0) {
      setCalculationCheckError(emptyErrorMessage)
    }
    else if(!re.test(e.target.value)){
      setCalculationCheckError("Неккоректный номер счета!")
    }
    else if(e.target.value.length !== 20) {
      setCalculationCheckError("Длинна счета 20 символов!")
    }
    else {
      setCalculationCheckError("")
    }
  }

  const corCheckHandler = (e) => {
    setCorCheck(e.target.value)
    const re = /^[0-9\b]+$/;
    if(e.target.value.length === 0) {
      setCorCheckError(emptyErrorMessage)
    }
    else if(!re.test(e.target.value)){
      setCorCheckError("Неккоректный номер кор-счета!")
    }
    else if(e.target.value.length !== 20) {
      setCorCheckError("Длинна счета 20 символов!")
    }
    else {
      setCorCheckError("")
    }
  }

  const blurHandler = (e) => {
    switch(e.target.name) {
      case 'bik':
        setBikDirty(true)
        break
      case 'bankName': 
        setBankNameDirty(true)
        break
      case 'calculationCheck':  
        setCalculationCheckDirty(true)
        break
      case 'corCheck':
        setCorCheckDirty(true)
        break  
      default:  break
    }
  }

  const onCreateClientClick = (e) => {
    e.preventDefault()

    let org = location.state.newClient;
    let requisites = {
      bik: bik,
      filialBankName: bankName,
      calculationCheckNumber: calculationCheck,
      corCheckNumber: corCheck
    };

    if(org.organizationType === 1) {
      organizationOOOPost(org.fullName, org.shortName, org.registerDate, org.inn, org.fileScanInn, org.ogrn, org.fileScanOgrn, org.fileScanEgrip, org.fileScanContractOffice, org.isNoContrant, org.organizationType)
      .then(res => { return res.json() })
      .then(json=> {
        let id = json.id;
        organizationRequisitesPost(requisites.bik, requisites.filialBankName, requisites.calculationCheckNumber, requisites.corCheckNumber, id)
        .then(res => {
          const mwb = document.getElementById('modal_window_border');
          const mw = document.getElementById('modal_window');
          mwb.style.display = 'block';
          mw.style.display = 'block';
        })
        .catch(ex => {
          console.log(ex);
          setResultMessage(`Ошибка сохранения реквизитов!`);
          const mwb = document.getElementById('modal_window_border');
          const mw = document.getElementById('modal_window');
          mwb.style.display = 'block';
          mw.style.display = 'block';
        })
      })
      .catch(ex => {
        console.log(ex);
        setResultMessage(`Ошибка сохранения организации!`);
        const mwb = document.getElementById('modal_window_border');
        const mw = document.getElementById('modal_window');
        mwb.style.display = 'block';
        mw.style.display = 'block';
      })
    }
    else if(org.organizationType === 2) {
      organizationIPPost(org.registerDate, org.inn, org.fileScanInn, org.ogrnip, org.fileScanOgrnip, org.fileScanEgrip, org.fileScanContractOffice, org.isNoContrant, org.organizationType)
      .then(res => { return res.json() })
      .then(json => {
        let id = json.id;
        organizationRequisitesPost(requisites.bik, requisites.filialBankName, requisites.calculationCheckNumber, requisites.corCheckNumber, id)
        .then(res => {
          const mwb = document.getElementById('modal_window_border');
          const mw = document.getElementById('modal_window');
          mwb.style.display = 'block';
          mw.style.display = 'block';
        })
        .catch(ex => {
          console.log(ex);
          setResultMessage(`Ошибка сохранения реквизитов!`);
          const mwb = document.getElementById('modal_window_border');
          const mw = document.getElementById('modal_window');
          mwb.style.display = 'block';
          mw.style.display = 'block';
        })
      })
      .catch(ex => {
        console.log(ex);
        setResultMessage(`Ошибка сохранения организации!`)
        const mwb = document.getElementById('modal_window_border');
        const mw = document.getElementById('modal_window');
        mwb.style.display = 'block';
        mw.style.display = 'block';
      })
    }
  }

  const closeModalWindowHandler = (e) => {
    const mwb = document.getElementById('modal_window_border');
    const mw = document.getElementById('modal_window');
    mwb.style.display = 'none';
    mw.style.display = 'none';
    navigate('/', {state: null});
  }

  if(location.state) {
    return (
      <div className='App-body'>
        <div className='load_spinner' id='load_spinner'>Загрузка...</div>
        <div className='header-content' id='header-content'>
          <p className='medium-header-p'>Банковские реквезиты</p>
          <div className='margin-top-32'>
            <form>
              <div className='container'>
                <div className='row'>
                  <div className="form-group col-3">
                      <label htmlFor="bik" className='title-header'>БИК*</label>
                      <input type="text" onBlur={e=> blurHandler(e)} onChange={e=> bikHandler(e)} value={bik} className="form-control margin-top-12" id="bik" name='bik' placeholder="xxxxxxxxx"></input>
                      {(bikDirty && bikError) && <div className='error-label'>{bikError}</div>} 
                  </div>
                  <div className="form-group col-9">
                      <label htmlFor="bankName" className='title-header'>Название филиала банка*</label>
                      <input type="text" onBlur={e=> blurHandler(e)} onChange={e=> bankNameHandler(e)} value={bankName} className="form-control margin-top-12" id="bankName" name='bankName' placeholder="ООО 'Московская промышленная компания'"></input>
                      {(bankNameDirty && bankNameError) && <div className='error-label'>{bankNameError}</div>} 
                  </div>
                </div>

                <div className='row'>
                  <div className="form-group col-4">
                      <label htmlFor="calculationCheck" className='title-header'>Расчетный счет*</label>
                      <input type="text" onBlur={e=> blurHandler(e)} onChange={e=> calculationCheckHandler(e)} value={calculationCheck} className="form-control margin-top-12" id="calculationCheck" name="calculationCheck" placeholder='xxxxxxxxxxxxxxxxxxxx'></input>
                      {(calculationCheckDirty && calculationCheckError) && <div className='error-label'>{calculationCheckError}</div>} 
                  </div>
                  <div className="form-group col-6">
                      <label htmlFor="corCheck" className='title-header'>Корреспондентский счет*</label>
                      <input type="text" onBlur={e=> blurHandler(e)} onChange={e=> corCheckHandler(e)} value={corCheck} className="form-control margin-top-12" id="corCheck" name="corCheck" placeholder='xxxxxxxxxxxxxxxxxxxx'></input>
                      {(corCheckDirty && corCheckError) && <div className='error-label'>{corCheckError}</div>} 
                  </div>
                </div>

                <div className='row justify-content-end'>
                  <div className='col-1'>
                    <button className='btn btn-primary btn-lg' disabled={!formValid} onClick={e=>onCreateClientClick(e)}>Далее</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div id='modal_window_border' className='modal_window_border' onClick={e => closeModalWindowHandler(e)}></div>
        <div id='modal_window' className="modal_window">
          <div>
            <p>{resultMessage}</p>
            <button className='btn btn-primary' onClick={e => closeModalWindowHandler(e)}>Ok</button>
          </div>
        </div>
      </div>
    );
  }
  else {
    return (
      <div>
        <div>Страница не доступна!</div>
      </div>
    );
  }
};

export default RequisitesComponent;
