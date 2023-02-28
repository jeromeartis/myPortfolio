import React, { Component } from "react";
import Projects from "./Projects";
import SocialProfiles from "./SocialProfiles";
import profilePic from './assets/profilePic.png'

class App extends Component {
    state = { displayBio: false };

    // constructor(){
    //     super();
    //     this.state = { displayBio: false };
    //     console.log('Componet this', this);
    //     this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    // }
  
    toggleDisplayBio = () => {
        this.setState({ displayBio:!this.state.displayBio });
    }

    render() {
        return (
            <div>
                <img src={profilePic} alt='profile' className="profile" />
                <h1>Hello!</h1>
                <p>My name is Jerome. I'm a Software/DevOps Engineer</p>
                <p>I'm always looking forward to working on meaningful projects</p>
                {
                this.state.displayBio ? (<div>
                    <p>I live in Atlanta Georgia, and code mostly every day.</p>
                    <p> My favorite language to develop web applications is JavaScript,
                        and I think React.js is awesome framework to use.
                    </p>
                    <p>Besides coding, I enjoy working out and watching sports!</p>
                    <button onClick={this.toggleDisplayBio}>Show less</button>
                </div>) : (
                    <div>
                        <button onClick={this.toggleDisplayBio}>Read More</button>
                        </div>
                )
                 }
                 <hr />
                 <Projects />
                 <hr />
                 <SocialProfiles />
            </div>
        );    
    }
}

export default App;