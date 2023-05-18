
import './MainPage.css';

function MainPage() {
  return (
    <div className='MainPage'>
      <div className="phoBox">
        <img  src={require('./phone.png')} alt="Mobile phone showcasing the Hydrospark Mobile App"></img>
      </div>
      <div className='Aside'>
        <h1>Witaj w Hydrospark</h1>
        <p>Hydrospark to innowacyjne rozwiązanie, która umożliwia wytwarzanie energii elektrycznej z wody za pomocą turbiny wodnej w domowym zaciszu. Dzięki tej aplikacji użytkownicy mogą zainstalować turbinę wodną w pobliżu źródła wody, monitorować produkcję energii, kontrolować zużycie oraz oszczędzać na rachunkach za energię elektryczną, wykorzystując potencjał wody jako czystego źródła energii odnawialnej. To innowacyjne rozwiązanie przyczynia się do zrównoważonej i ekologicznej przyszłości, umożliwiając jednostkom produkowanie i kontrolowanie własnej energii elektrycznej.</p>
        <div className="buttonCont">
          <img src={require('./ios.png')} alt="Download on Appstore Button"></img>
          <img src={require('./gplay.png')} alt="Download on Google Play Button"></img>
        </div>
      </div>
    </div>
  );
}

export default MainPage;