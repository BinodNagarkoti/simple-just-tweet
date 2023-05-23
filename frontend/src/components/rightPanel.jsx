/** @format */

import React from 'react';
import { faker } from '@faker-js/faker/locale/en';

const RightPanel = () => {
    const [users, setUsers] = React.useState([
        {
            id: 1,
            name: 'User 1',
            handle: '@user1',
            follow: false,
            avater: faker.image.url({ height: 100, width: 100 }),
        },
        {
            id: 2,
            name: 'User 2',
            handle: '@user2',
            follow: false,
            avater: faker.image.url({ height: 100, width: 100 }),
        },
        {
            id: 3,
            name: 'User 3',
            handle: '@user3',
            follow: false,
            avater: faker.image.url({ height: 100, width: 100 }),
        },
        {
            id: 4,
            name: 'User 4',
            handle: '@user4',
            follow: true,
            avater: faker.image.url({ height: 100, width: 100 }),
        },
    ]);

    return (
        <div className='right-panel py-5 px-2 bg-white'>
            <h3>Who to follow</h3>
            <ul className='list-group bg-white'>
                {users.map((user) => (
                    <li key={user.id} className='list-group-item'>
                        <div className='user d-flex'>
                            <div className='user-avatar'>
                                <img
                                    className='rounded-circle'
                                    src={user.avater} // Replace with the actual path to avatar images
                                    alt={`${user.name}'s Avatar`}
                                />
                            </div>
                            <div className='px-4'>
                                <div className='user-details d-flex'>
                                    <h5 className='user-name'>{user.name}</h5>&nbsp;&nbsp;
                                    <p className='user-handle'>{user.handle}</p>
                                </div>
                                <button
                                    className='btn btn-outline-primary border-1 rounded-pill px-5 py-1'
                                    onClick={() =>
                                        setUsers((prevUsers) =>
                                            prevUsers.map((preUser) => {
                                                if (preUser.id === user.id)
                                                    return {
                                                        ...preUser,
                                                        follow: !preUser.follow,
                                                    };
                                                return preUser;
                                            })
                                        )
                                    }
                                >
                                    {user.follow ? 'Follow' : 'Unfollow'}
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RightPanel;
