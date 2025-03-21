// React Components must be capitalized
function Header() {
    return <p>This is a header</p>
}

const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);

const element = <h1>Hello, JSX!</h1>
// Allows your to add HTML to a JS file, to compartmentalize the different sections


root.render(
    <div>
        <h1>Welcome Messages</h1>

        <ul>
            <li>Welcome Tom from Singapore</li>
            <li>Welcome Jerry from Malaysia</li>
            <li>Welcome Sarah from Indonesia</li>
        </ul>   
    </div>
)
