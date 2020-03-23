import React,{Component} from 'react';
import Furniture from './Furniture';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Furniture/>
            </div>
         );
    }
}
 
export default AppContainer;