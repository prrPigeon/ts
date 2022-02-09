import './App.css';

import { Greet } from './components/Greet'
import { Person } from './components/Person'
import { PersonList } from './components/PersonList'
import { Status } from './components/Status'
import { Heading } from './components/Heading'
import { Oscar } from './components/Oscar'

function App() {

  const personName = {
    first: 'Brus',
    last: 'Wayne'
  }

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'John',
      last: 'Doe'
    },
  ]

  // use const, because if it is let, it will trow an error
  const receivedStatus = 'loading' 

  return (
    <div className="App">

      by adding optional type ? in prop types, now you can exclude countMessages without erorr
      {/* <Greet name="Mijato" countMessages={20} isLoggedIN={true}/>       */}
      <Greet name="Mijato" isLoggedIN={true}/>
      <Person name={personName}/>
      <PersonList names={nameList}/>
      <Status status={receivedStatus}/>

      {/* Passing a child prop */}
      <Heading>Placeholder text</Heading> 

      {/* Passing a sub component  */}
      <Oscar>
        <Heading>sfasfdasf</Heading>
      </Oscar>
    </div>
  );
}

export default App;
