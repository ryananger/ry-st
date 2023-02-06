# st

This is an easy to use global state manager for React.

## Install

```npm install ryscott-st```

## Usage

Use the ```st.newState``` interface to create a global state.

### Parameters
```name``` 

Name of your state. The setter is camelCased based on the state name. 

```useState``` 

React useState hook with value.

### Basic use

```javascript
// IN SOME COMPONENT:
const [view, setView]           = st.newState('view', useState('home'));
const [count, setCount]         = st.newState('count', useState(0));
const [flamingos, setFlamingos] = st.newState('flamingos', useState('yes'));
```

```javascript
// IN OTHER COMPONENT:
const flamingos = st.flamingos;

st.setFlamingos('no'); // flamingos === st.flamingos === 'no';

```

### View Toggle Example

#### App.jsx
```javascript
import React, {useState} from 'react';
import st from 'ry-st';

import Home      from './Home.jsx';
import OtherPage from './OtherPage.jsx';

const App = function() {
  const [view, setView] = st.newState('view', useState('home'));

  const views = {
    home:  <Home />,
    other: <OtherPage />
  };

  // render view from global state 'view'
  return (
    <div className='app'>
      {views[view]}
    </div>
  )
};

export default App;
```

#### Home.jsx
```javascript
import React, {useState} from 'react';
import st from 'ry-st';

const Home = function() {
  var goToOther = function() {
    // updates global state 'view';
    st.setView('other');
  };

  return (
    <div>
      Welcome home.
      <br/>
      <button onClick={goToOther}>Go to the other page.</button>
    </div>
  )
};

export default Home;
```

#### OtherPage.jsx
```javascript
import React, {useState} from 'react';
import st from 'ry-st';

const OtherPage = function() {
  var goHome = function() {
    // updates global state 'view';
    st.setView('home');
  };

  return (
    <div>
      This is the other page.
      <br/>
      <button onClick={goHome}>Go home.</button>
    </div>
  )
};

export default OtherPage;
```
