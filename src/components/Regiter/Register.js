import React from 'react';
import 'tachyons';
import './Register.css';

class Register extends React.Component{

    constructor(props){

        super(props);
        this.state ={

            registerName:'',
            registerEmail:'',
            registerPass:''
        }
    }

    onNameChange = (event) =>{

        this.setState({registerName:event.target.value});
    }
    
    onEmailChange = (event) =>{

        this.setState({registerEmail:event.target.value});
    }

    onPassChange = (event) =>{

        this.setState({registerPass:event.target.value});
    }

    onSubmitRegiter = () =>{

        fetch('https://guarded-brook-68451.herokuapp.com/register',{
            method : 'post',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify({
                email:this.state.registerEmail,
                pass:this.state.registerPass,
                name:this.state.registerName

            })
        }).then(response =>response.json())
        .then(user =>{
            if(user.id){
                this.props.onLoadUser(user);
                this.props.onRouteChange('home');
            }
        })
    }

    render(){

        const {onRouteChange} = this.props;

        return(

            <article className="br3 ba dark-grey b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center mt4">
            <main className = "pa4 black-80">
                <div className = "measure">
        
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                 <legend className="f2 white fw8 ph0 mh0 center">Register</legend>
                 <div className="mt3 pa2 center input-style">
                <input onChange={this.onNameChange} placeholder="Name" className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="Name"  id="Name"/>
            </div>
            <div className="mt3 pa2 center">
                <input onChange={this.onEmailChange} placeholder="Email" className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
            </div>
            <div className="mv3 pa2 center">
                <input onChange={this.onPassChange} placeholder="Create Password" className=" pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
            </div>
            </fieldset>
            <div className="center">
            <input onClick = {this.onSubmitRegiter} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register"/>
            </div>
        
                </div>
            </main>
        </article>
        );
    }
}



    


export default Register;