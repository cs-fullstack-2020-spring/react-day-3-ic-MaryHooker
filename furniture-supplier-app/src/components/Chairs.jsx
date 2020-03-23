import React, { Component } from 'react';

class Chairs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chairArray: [],
        }
    }

    componentWillMount(){
        console.log('The Chairs component has mounted')
    }
        render() {

            this.state.chairArray = ['Recliner', 'Swivel', 'Gamer']

            return (
                <div>
                    {
                        this.state.chairArray.map((chair, index) => {
                            return (
                                <div key={index}>
                                    <p>{chair}</p>
                                </div>
                            )
                        }

                        )
                    }
                </div>
            )
        }
    
}

export default Chairs;