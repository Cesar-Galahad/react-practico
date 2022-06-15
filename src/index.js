import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App';

ReactDOM.createRoot(
    document.getElementById('app'),
  )
  .render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );

/*import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';

ReactDom.render(<App />, document.getElementById('app'));*/