import React from "react";
import { fetchRegister } from "../redux/action";
import { connect } from "react-redux";
import {Link} from "react-router-dom"
 
class Register extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            value:"",
            name: "",
            email: "",
            password: "",
            username: "",
            mobile: "",
            description: ""
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

    console.log("props are"+this.props)
    console.log("props are"+this.props.regSuccess.message)
    
    return (
      <React.Fragment>
        <div style={{width:"150px" ,margin:"auto"}}>
        <Link to="/">Login</Link>
        <div><h2>Register</h2></div>
        <div  style={{display:"flex", flexDirection:"column",width:"150px" ,margin:"auto"}}>
          <input type="text"  placeholder="name" name="name" onChange={this.handleChange}></input>
          <input type="text"  placeholder="email" name="email" onChange={this.handleChange}></input>
          <input type="text"  placeholder="password" name="password" onChange={this.handleChange}></input>
          <input type="text"  placeholder="username" name="username" onChange={this.handleChange}></input>
          <input type="text"  placeholder="description" name="description" onChange={this.handleChange}></input>
          <input type="text"  placeholder="mobile" name="mobile" onChange={this.handleChange}></input><br></br><hr></hr>
          <button onClick ={()=>{this.props.fetchRegister(this.state)}} className="bg-success">Register</button>
          </div>
          </div>
        
       
      {!this.props.error ? (
          !this.props.isLoading ? (
            <div style={{ padding: 10 }}>{this.props.regSuccess.message}</div>
          ) : (
            <div>...Loading</div>
          )
        ) : (
          <div>error: {this.props.regError}</div>
        )}
      </React.Fragment>
    )
  }
}


const mapStateToProps = state => {
  return {
    regError: state.error,
    regSuccess: state.regSuccess
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchRegister: (n) => dispatch(fetchRegister(n))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);

   