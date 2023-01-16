import { useState, memo } from 'react';
import './App.css';

//export const TwitterFollow = ({ 
export const TwitterFollowCard = memo(({ 
    userName = 'Sin nombre', 
    name, 
    width = 200, 
    height = 300, 
    initialIsFollowing = false,
    onFormatSimbolAt }) => {
    //const { userName = 'WebFerrol', name ='Xurxo González', isFollowing = true, width = 200, height = 300 } = props; 
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
    const src = `https://placekitten.com/g/${width}/${height}`;

    console.log('Renderizado hijo',userName);

    return (
        <article className="tw-follow-card">
            <header className="tw-follow-card-header">
                <img className="tw-follow-card-avatar" src={src} alt="El avatar" />
                <div className="tw-follow-card-info">
                    <strong>{name}</strong>
                    <span className="tw-follow-card-info-username">{onFormatSimbolAt(userName)}</span>
                </div>
            </header>
            <aside>
                <button
                    onClick={() => setIsFollowing(!isFollowing)}
                    className={isFollowing ? 'tw-follow-card-button is-following' : 'tw-follow-card-button'}>
                        <span className="tw-follow-card-button-text">
                    {
                        isFollowing ? 'Siguiendo' : 'Seguir'
                    }
                        </span>
                        <span className="tw-follow-card-button-text--hover">
                            Siguiendo
                        </span>
                </button>
            </aside>
        </article>
    )
});
//}