import React from "react";
import { fetchLogin } from "../redux/action";
import { connect } from "react-redux";
import {Redirect,Link} from "react-router-dom";
import Dashboard from "../components/Dashboard";

class Login extends React.PureComponent {

    constructor(props){
        super(props)
        this.state = {
            
            password: "",
            username: ""
            
            }
        }
    
//   componentDidMount() {
//     console.log("component mounted");
//     this.props.fetchData("test");
//   }

  handleChange = (e)=>{
    this.setState({
        [e.target.name]:e.target.value
    })
  }

  render(){
    
    return (
      <React.Fragment>
         <div style={{width:"200px" ,margin:"auto",background:"green",color:"white",padding:"10px", marginTop:"200px"}}>
          <Link style={{color:"white"}} to="/Register">Register</Link>
          <div ><h2 className="text-center">Login</h2>
        
        </div>
        <div  style={{display:"flex", flexDirection:"column"}}>
        <input type="text"  placeholder="username" name="username" onChange={this.handleChange}></input >
          <input type="text"  placeholder="password" name="password" onChange={this.handleChange}></input>
          
          <br></br><hr></hr>
          <button onClick ={()=>{this.props.fetchLogin(this.state)}} className="bg-success">Login</button>
          </div>
        
          {this.props.logSuccess?
              
             
                 <Redirect to="/dashboard" />

          :!this.props.logError?<div>Register before login</div>:<div style={{ padding: 10 }}>{this.props.logError}</div>}
       
      
         </div>
      </React.Fragment>
    )
  }
}


const mapStateToProps = state => {
  return {
    logError: state.logError,
    logSuccess: state.logSuccess,
    logUser: state.logUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchLogin: (n) => dispatch(fetchLogin(n))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

