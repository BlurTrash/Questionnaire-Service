import './App.css';
import HeaderComponent from 'components/HeaderComponent/HeaderComponent';
import MainComponent from 'components/MainComponent/MainComponent';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import NotFoundComponent from 'components/NotFoundComponent/NotFoundComponent';
import RequisitesComponent from 'components/RequisitesComponent/RequisitesComponent';
import OrganizationsListComponent from 'components/OrganizationsListComponent/OrganizationsListComponent';

/* function App() {
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
    <div className="App">
      <header className="App-header">
        <a href='#'>Сервис заполнения анкет Юр-лиц</a>
      </header>
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
    </div>
  );
} */

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <HeaderComponent/>
        <Routes>
          <Route path="/" element={<MainComponent/>} />
          <Route path="/bank-details" element={<RequisitesComponent/>} />
          <Route path="/organizations-list" element={<OrganizationsListComponent/>} />
          <Route path="*" element={<NotFoundComponent/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
