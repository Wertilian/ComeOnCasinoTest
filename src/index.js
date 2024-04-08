import ReactDOM from 'react-dom/client';
import './index.css';
import DisplayApp from './DisplayApp';
import reportWebVitals from './reportWebVitals';

const displayroot = ReactDOM.createRoot(document.getElementById('displayroot'));
displayroot.render(<DisplayApp />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
