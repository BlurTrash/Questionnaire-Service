import React from 'react';
import './OrganizationsListComponent.css';
import { getAllOrganizationsIP, getAllOrganizationsOOO } from 'services/organizationService';

class OrganizationsListComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {dataIP: [], dataOOO: []};
    }
   

  componentDidMount() {
    getAllOrganizationsIP()
      .then(res => {
        return res.json()
      })
      .then(data => {
        console.log(data);
        this.setState({dataIP: data});
      })
      .catch(ex => {
        console.log(ex);
      });
    getAllOrganizationsOOO()
      .then(res => {
        return res.json()
      })
      .then(data => {
        console.log(data);
        this.setState({dataOOO: data});
      })
      .catch(ex => {
        console.log(ex);
      });
  }

  

  render() {
    return (
      <div className='container'>
        <h4 className='margin-top-20'>Список ИП</h4>
        <div className='table-responsive'>
          <table className='table table-bordered'>
            <thead>
              <tr>
                <th className="text-center">Дата регистрации</th>
                <th className="text-center">ИНН</th>
                <th className="text-left">Скан ИНН</th>
                <th className="text-left">ОГРНИП</th>
                <th className="text-left">Скан ОГРНИП</th>
                <th className="text-center">Скан ЕГРИП</th>
                <th className="text-center">Скан Дог-Аренды</th>
                <th className="text-center">Нет договора</th>
              </tr>
            </thead>
            <tbody>
                {this.state.dataIP.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td className='text-center'>{val.registerDate}</td>
                            <td className='text-center'>{val.inn}</td>
                            <td className='text-center'>
                              <img src={val.scanInnImageUrl} alt="скан инн" className="img__thumbnail"></img>
                            </td>
                            <td className='text-center'>{val.ogrnIp}</td>
                            <td className='text-center'>
                              <img src={val.scanOgrnIpImageUrl} alt="скан огрнип" className="img__thumbnail"></img>
                            </td>
                            <td className='text-center'>
                              <img src={val.scanEgripImageUrl} alt="скан егрип" className="img__thumbnail"></img>
                            </td>
                            <td className='text-center'>
                              <img src={val.scanContractOfficeImageUrl} alt="скан договора аренды" className="img__thumbnail"></img>
                            </td>
                            <td className='text-center'> {(val.isNoContract) && <p>Да</p>} {(!val.isNoContract) && <p>Нет</p>} </td>
                        </tr>
                    )
                })}
            </tbody>
          </table>
        </div>


        <h4 className='margin-top-20'>Список ООО</h4>
        <div className='table-responsive'>
          <table className='table table-bordered'>
            <thead>
              <tr>
                <th className="text-center">Имя</th>
                <th className="text-center">Сокр. имя</th>
                <th className="text-center">Дата регистрации</th>
                <th className="text-center">ИНН</th>
                <th className="text-left">Скан ИНН</th>
                <th className="text-left">ОГРН</th>
                <th className="text-left">Скан ОГРН</th>
                <th className="text-center">Скан ЕГРИП</th>
                <th className="text-center">Скан Дог-Аренды</th>
                <th className="text-center">Нет договора</th>
              </tr>
            </thead>
            <tbody>
                {this.state.dataOOO.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td className='text-center'>{val.fullName}</td>
                            <td className='text-center'>{val.shortName}</td>
                            <td className='text-center'>{val.registerDate}</td>
                            <td className='text-center'>{val.inn}</td>
                            <td className='text-center'>
                              <img src={val.scanInnImageUrl} alt="скан инн" className="img__thumbnail"></img>
                            </td>
                            <td className='text-center'>{val.ogrnIp}</td>
                            <td className='text-center'>
                              <img src={val.scanOgrnImageUrl} alt="скан огрн" className="img__thumbnail"></img>
                            </td>
                            <td className='text-center'>
                              <img src={val.scanEgripImageUrl} alt="скан егрип" className="img__thumbnail"></img>
                            </td>
                            <td className='text-center'>
                              <img src={val.scanContractOfficeImageUrl} alt="скан договора аренды" className="img__thumbnail"></img>
                            </td>
                            <td className='text-center'> {(val.isNoContract) && <p>Да</p>} {(!val.isNoContract) && <p>Нет</p>} </td>
                        </tr>
                    )
                })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default OrganizationsListComponent;


