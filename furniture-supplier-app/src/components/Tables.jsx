import React,{Component} from 'react';

class Tables extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            tableArray: [],
         }
    }

    componentWillMount(){
        console.log('The Tables component has mounted')
    }

    render() { 

        this.state.tableArray = ['Desk', 'End', 'Coffee']

        return ( 
            <div>
                 {
                        this.state.tableArray.map((table, index) => {
                            return (
                                <div key={index}>
                                    <p>{table}</p>
                                </div>
                            )
                        }

                        )
                    }
            </div>
         );
    }
}
 
export default Tables;