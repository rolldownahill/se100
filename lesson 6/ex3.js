// root.js

function WelcomeMessagesTitle() {
    return <p>Welcome Messages</p>
  }
  
// props is an object
function WelcomeMessages(props){
    return(
        <p>
            Welcome {props.name} ! from {props.country}
        </p>
    )

}
  
  function App() {
    return <div>
    
        <WelcomeMessagesTitle />
        <WelcomeMessages name = 'Tom' country = 'Singapore'/>
        <WelcomeMessages name = 'Jerry' country = 'Malaysia'/>
        <WelcomeMessages name = 'Sarah' country = 'Indonesia'/>

    </div>
  }
  
  const domContainer = document.getElementById('root');
  const root = ReactDOM.createRoot(domContainer);

  root.render(<App />)