import React from "react";
import { fetchData,fetchProfile,logout } from "../redux/action";
import { connect } from "react-redux";
import {Link, Redirect} from "react-router-dom";

class Dashboard extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            logout:false
        }
    }
  

  handleChange = (e)=>{
    this.setState({
        value:e.target.value
    })
  }

  handleLogout = ()=>{

    this.props.history.push("/")
    
  }

  

  render() {
    console.log("props are", this.props);
    
    // const query = new URLSearchParams(this.props.location.search);
    // var items = Number(query.get('perpage'))
    // if(!items){
    //   items = this.props.data.length;
    // }
    // console.log(items)

    
        return (

      <React.Fragment>
        <div style={{width:"800px" ,margin:"auto",background:"green",color:"white",padding:"10px", marginTop:"200px"}}>
        <div style={{float:"right"}}>
          <Link to="/"><button onClick={this.props.logout}>Signout</button></Link>
          <Link to="/profile"><button >Profile</button></Link>
        </div>
          <div style={{width:"100px",margin:"auto"}}>
        <div style={{fontSize:"50px"}}>{this.props.proSuccess.username}</div>
        <div className="h1">{this.props.proSuccess.mobile}</div>
        <div className="h4">{this.props.proSuccess.email}</div>
        <div className="h4">{this.props.proSuccess.description}</div>
        <div className="h4">{this.props.proSuccess.token}</div>
        </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    data: state.data,
    error: state.error,
    logSuccess:state.logSuccess,
    proSuccess: state.proSuccess,
    logUser: state.logUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProfile: a => dispatch(fetchProfile(a)),
    logout: ()=>dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);