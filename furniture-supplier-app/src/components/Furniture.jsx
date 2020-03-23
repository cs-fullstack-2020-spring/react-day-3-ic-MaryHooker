import React,{Component} from 'react';
import Chairs from './Chairs';
import Tables from './Tables';

class Furniture extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return ( 
            <div className='container'>
                <div className='header'>
                <h1> This is a list of our furniture</h1>
                </div>
                <div className='chairs'>
                    <h2>Chairs</h2>
                    <Chairs/>
                </div>
                <div className='tables'>
                    <h2>Tables</h2>
                    <Tables/>
                </div>  
            </div>
         );
    }
}
 
export default Furniture;