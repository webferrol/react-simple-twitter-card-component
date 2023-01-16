import { useState } from 'react';
import { TwitterFollowCard } from './components/TwitterFollowCard';
import users from './data';



/**
 * 
 * @param {string} username Nombre de usuario
 * @returns {string} Usuario formateado con la letra @ por delante
 */
const handleFormatSimbolAt = (username = '') => `@${username}`;


export const App = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  /**
   * Almacena la hora del sistema
   */
  const handleSetTime = () => {
    setTime(new Date().toLocaleTimeString());
  }

  return (
    <div className="app">


      {
        users && users.map( user => {
          const { id, userName, name, width, height, isFollowing } = user;
          return(
            <TwitterFollowCard
              key={id}
              userName={userName}
              name={name}
              width={width}
              height={height}
              initialIsFollowing = {isFollowing }
              onFormatSimbolAt={handleFormatSimbolAt}
               />
          )
        })
      }

      {/* Este botón y el estado "time" lo utilizamos sólo a efectos académicos para utilizar la API memo en el componente TwitterFollow */}

      <button onClick={handleSetTime}>Cambiar hora {time}</button>

    </div>
  )
}
