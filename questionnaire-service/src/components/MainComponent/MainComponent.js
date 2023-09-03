import React from 'react';
import './MainComponent.css';
import { useEffect, useState } from 'react';
import IpFormComponent from 'components/IpFormComponent/IpFormComponent';
import OooFormComponent from 'components/OooFormComponent/OooFormComponent';


function MainComponent() {
  const [selectedType, setSelectedType] = useState("typeIp");
  const [ipFormVisibile, setIpFormVisibile] = useState(false);
  const [oooFormVisibile, setOooFormVisibile] = useState(false);

  function handleOnChange(e) {
    setSelectedType(e.target.value);
  }

  useEffect(()=> {
    selectedType === "typeIp" ? setIpFormVisibile(true):setIpFormVisibile(false);
    selectedType === "typeOOO" ? setOooFormVisibile(true):setOooFormVisibile(false);
  }, [selectedType]);

  return (
    <div className='App-body'>
      <div className='header-content'>
          <p className='medium-header-p'>Форма собственности</p>

          <div className='margin-top-32 width-512'>
              <p className='title-header'>Вид деятельности*</p>
              <select className='margin-top-12 form-select' name="organizationTypes" value={selectedType} onChange={handleOnChange}>
                <option value="typeIp">Индивидуальный предприниматель (ИП)</option>
                <option value="typeOOO">Общество с ограниченной ответственностью (ООО)</option>
              </select>
          </div>
      </div>
      {ipFormVisibile && <IpFormComponent/>}
      {oooFormVisibile && <OooFormComponent/>}
    </div>
  );
}

export default MainComponent;
