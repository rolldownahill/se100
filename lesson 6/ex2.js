// React Components must be capitalized

function WelcomeHeader(){
    return (
    <h1> Welcome Message </h1>
    )
}

function WelcomeMessages(){
    return(
        <ul>
        <li>Welcome Tom from Singapore</li>
        <li>Welcome Jerry from Malaysia</li>
        <li>Welcome Sarah from Indonesia</li>
         </ul>
    )
}

function App(){
    return(
    <>
    
    <WelcomeHeader />
    <WelcomeMessages />
    
    </>
    )
}

const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);

const element = <h1>Hello, JSX!</h1>
// Allows your to add HTML to a JS file, to compartmentalize the different sections

root.render(
    <App />
)
