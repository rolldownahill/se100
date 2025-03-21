// root.js

const users = [
    { name: 'Tom', country: 'Singapore' },
    { name: 'Jerry', country: 'Malaysia' },
    { name: 'Sarah', country: 'Indonesia' }
  ];
  
  function WelcomeMessagesTitle() {
    return <p>Welcome Messages</p>
  }
  
  function WelcomeMessage(props) {
    return <li>Welcome {props.name} from {props.country}</li>
  }
  
  function WelcomeMessagesList() {
    return (
        <ul>
            {users.map((user) => {
                if (user.country === "Singapore") {
                    return <li key={user.name}>Majulah Singapura</li>;
                }
                return <WelcomeMessage key={user.name} name={user.name} country={user.country} />;
            })}
        </ul>
    );
}
  function WelcomeMessagesSection() {
    return <div>
      <WelcomeMessagesTitle />
      <WelcomeMessagesList />
    </div>
  }
  
  function App() {
    return <div>
      <WelcomeMessagesSection />
    </div>
  }
  
  const domContainer = document.getElementById('root');
  const root = ReactDOM.createRoot(domContainer);
  root.render(<App />)