
import React from "react";
import { connect } from "react-redux";
class Home extends React.Component{
    render(){
        return (<div className='App-header App'>
            <button onClick={()=>{
                this.props.dispatch({
                    type:'ADD',
                    num:5
                })
            }}>add</button>
            <p>{this.props.num}</p>
            <img src={require('./test.jpg')} alt="logo" width={40} height={40}/>
        </div>)
    }
}
function mapState(state) {
    return {
        num:state.num
    }
}
export default connect(mapState)(Home)