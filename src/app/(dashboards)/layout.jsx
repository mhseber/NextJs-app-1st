import React from 'react';

export default function DashBoardLayout({ children }) {
    return <div>
        <div className='grid grid-cols-12'>
            {/* side nav */}
            <div className='col-span-3'>
                <ul>
                    <li>User List</li>
                </ul>
            </div>
            {/* dashboard Content */}
            <div className='col-span-9'>{children}</div>
        </div>

    </div>
}