import React from 'react';
import 'tachyons';
import './signin.css';


class SignIn extends React.Component {

    constructor(){

        super();
        this.state = {

            SignInEmail : '',
            SignInPass:''
        }
    }

    onEmailChange = (event) =>{

        this.setState({SignInEmail:event.target.value});
    }

    onPassChange = (event) =>{

        this.setState({SignInPass:event.target.value});
    }

onSubmitSignIn = () =>{
    fetch('https://guarded-brook-68451.herokuapp.com/signin',{
        method:'post',
        headers : {'Content-Type':'application/json'},
        body:JSON.stringify({
            email:this.state.SignInEmail,
            pass:this.state.SignInPass
        })

    }).then(response => response.json())
    .then(user=>{

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
         <legend className="center white f2 fw8 ph0 mh0">Sign In</legend>
    <div className="mt3 pa2 cent">
        <input onChange={this.onEmailChange} placeholder="Email" className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
    </div>
    <div className="mv3 pa2 cent">
        <input onChange = {this.onPassChange} placeholder="Password" className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
    </div>
    <label className="pa0 ma2 lh-copy f6 pointer"><input type="checkbox"/> Remember me</label>
    </fieldset>
    <div className="center">
    <input onClick = {this.onSubmitSignIn} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in"/>
    </div>
    <div className="lh-copy mt3 center">
    <a  onClick = {()=>onRouteChange('register')} href="#0" className="f6 link dim black db pointer">Register</a>

    </div>

        </div>
    </main>
</article>
    );
  }
}

export default SignIn;
