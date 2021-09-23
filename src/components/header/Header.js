import React, { useState } from 'react';
import Item from './Item';

const Header = () => {
    const [item, setItem] = useState([
        { name: "home" },
        { name: "service" },
        { name: "blog" },
        { name: "about" },
    ]);
    return (
        <div id="header" className="root-bg container-fruid">
            <div className="container">
                <div className="row">
                    <div className="col-sm-3">

                    </div>
                    <div id="list-header" className="dp-flex col-sm-9">
                        <Item name={item[0].name} link="#" />
                        <Item name={item[1].name} link="#" />
                        <Item name={item[2].name} link="#" />
                        <Item name={item[3].name} link="#" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;