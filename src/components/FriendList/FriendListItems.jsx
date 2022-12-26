import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export default function FriendListItem({friend}){
    let bgColor = 'red';
    if (friend.isOnline) {
    bgColor = 'green';}
    return(
        
        <>
            <span className = {css.status} style={{ backgroundColor: bgColor}}>{friend.isOnline}</span>
            <img className={css.avatar} src= {friend.avatar} alt= {friend.name} width="48" />
            <p className={css.name}>{friend.name}</p>
        </>
    )
};

FriendListItem.propTypes ={
    friend: PropTypes.shape({
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }),
}