import React from 'react';

const Ninjas = ({ ninjas }) => {
    // console.log(props)
    // We can't use state here, because this is a function. To use we have to declare class.
    // This is best for UI Components!
    // state = {
    //     one: 'onex'
    // }
    // const { ninjas } = props;
    const ninjaList = ninjas.map(ninja => {
        return (
            <div className="ninja" key={ninja.id}>
                <div>Name: {ninja.name}</div>
                <div>Age: {ninja.age}</div>
                <div>Belt: {ninja.belt}</div>
            </div>
        )
    })
    return (
        <div className="ninja-list">
            {ninjaList}
            {/* <p>Value of state: {this.state.one}</p> */}
        </div>
    )
}

export default Ninjas