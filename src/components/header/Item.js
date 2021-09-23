import React from 'react';

const Item = (props) => {
    return (
        <div>
            <div className="header-item">
                <a className="center-all pr-20 pl-20 pbt-15 pt-15 center-all text-white a-hover-none bg-white-hover root-color-hover" href="#">
                    {props.name}
                </a>
            </div>
        </div>
    );
};

export default Item;