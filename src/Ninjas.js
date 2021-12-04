import React from 'react';

const Ninjas = ({ ninjas }) => {
    const ninjaList = ninjas.map(ninja => {
        return (ninja.age > 20) ? (
            <div className="ninja" key={ninja.id}>
                <div>Name: {ninja.name}</div>
                <div>Age: {ninja.age}</div>
                <div>Belt: {ninja.belt}</div>
            </div>
        ) : null;
    })
    return (
        <div className="ninja-list">
            {ninjaList}
            {/* <p>Value of state: {this.state.one}</p> */}
        </div>
    )
}

export default Ninjas