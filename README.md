# Questionnaire-Service - это сервис по добавлению данных о юридических и физических лицах с банковскими реквизитами  (тестовое задание). 
Реализация:  
Структура проекта - Клиент на React.js и сервис ASP.Net WEB API 5  

Сервисная часть приложения разбита на 2 слоя:  
1.Слой WEB Api с моделями DTO и сервисами.  
2.Слой DAL, в котором хранятся файлы репозиториев, контекст и структура БД.  
  
База данных лежит в папке \questionnaire-service-API\DataBase\QuestionnaireServiceDB.mdf  
БД заполнена данными. При запуске проекта путь к ней подставится автоматически.  
БД реализована на MS SQL Server Express  
  
Клиентская часть:  
Спа приложение на REACT.js, использовались в основном функциональные компоненты и один классовый компонент.  
  
!!!Важно!!!  
!!!На клиенте строка подключения к АПИ хранится как переменная в файле сервиса services\organizationService.js  "const baseUrl = 'https://localhost:44303'"   
!!!После запуска АПИ вам нужно посмотреть, на каком порту запустился сервис, и заменить строку в этом файле. У меня, к примеру, адрес локалхоста с портом был "https://localhost:44303"!!!  
  
Автозаполнение при вводе ИНН организании и БИК банка - данные берутся из коллекций заглушек.  
  
При скачивании проекта, возможно, нужно будет выполнить команду в консоли "npm install" (в корне проекта клиента) для установки недостающих пакетов.  
  
Использовались:  
-Asp.Net WebApi  
-Swagger  
-Mapper  
-EntityFramework  
-MS Sql express  
-React.js  
  
Заполнение данных для ИП  
![ipmain](https://github.com/BlurTrash/Questionnaire-Service/assets/69421015/a313a3cc-07d8-4782-aa69-40245d6aba65)  
  
  
Заполнение данных для ООО  
![ooomain](https://github.com/BlurTrash/Questionnaire-Service/assets/69421015/b8cbff69-20ee-413b-a1c2-ba1d1f76d66f)  
Предусмотрено автозаполнении полей - «Наименование полное», «Наименование сокращенное», «Дата регистрации», «ОГРН» при вводе поля ИНН (в качестве иммитации какого то сервиса по поиску данных об организации, используется коллекция заглушка)  
  
Предусмотрены различные валидации и проверки полей  
![validation](https://github.com/BlurTrash/Questionnaire-Service/assets/69421015/0c403a7a-cc36-4a3a-80c2-8f06ba26ec6c)  
  
Далее переходим на страницу заполнения банковских реквизитов  
![bankdetails](https://github.com/BlurTrash/Questionnaire-Service/assets/69421015/df1ce472-7315-4d04-9812-78e510b946ed)  
Предусмотрено автозаполнении полей - Кор.Счет, Название Банка, при вводе поля Бик (в качестве иммитации какого то сервиса по поиску данных об организации, используется коллекция заглушка)  
  
При нажатии далее - данные отправляются и сохраняются в сервисе и бд, и происходит редирект на главную страницу.  

Маршрут для просмотра внесенных данных  
![list](https://github.com/BlurTrash/Questionnaire-Service/assets/69421015/2b400c0d-5bbc-4cc2-8c04-ef854fbb232f)  
