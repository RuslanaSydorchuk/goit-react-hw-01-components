import PropTypes from 'prop-types';
import FriendListItem from './FriendListItems';
import css from './FriendList.css';

export default function FriendList({friends}){
    return(
        <ul className = {css.friendList}>
            {friends.map(friend => (
                <li className = {css.item} key = {friend.id}>
                    <FriendListItem friend= {friend}/>
                </li>
            ))}
        </ul>
    )
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    )
}