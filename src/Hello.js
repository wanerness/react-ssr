
import React from "react";

class Hello extends React.Component{
    state={
        data:null
    }

    
    componentDidMount(){
        this.setState({
            data:window.__INITIAL_DATA__||null
        },
        ()=>{
            if (!this.state.data) {
                fetch('https://api.github.com/repos/jasonboy/wechat-jssdk/branches')
                    .then(res => res.json())
                    .then(data => {
                        this.setState({
                            data
                        })
                    })
            }
        }
    )
       
        
    }
    render(){
        console.log(this.state.data)
        return <p>{JSON.stringify(this.state.data) }</p>;
    }
}


export default Hello