import React, { useState } from "react";
import * as Components from "./Components";
import "./Homepage.css";

function Homepage() {
  const [signIn, toggle] = useState(true);
const [name, setname] = useState("");
const [email, setEmail] = useState("")
const [password, setPasssword] = useState("")

  return (
    <div className="Homepage">
    <div className="title">
    <h1>Chatlite</h1>
  </div>
    <Components.Container>
      <Components.SignUpContainer signingIn={signIn}>
        <Components.Form>
          <Components.Title>Create Account</Components.Title>
          <Components.Input value={name} type="text" placeholder="Name" onChange={(e) => setname(e.target.value)}/>
          <Components.Input value={email} type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
          <Components.Input value={password} type="password" placeholder="Password" onChange={(e) => setPasssword(e.target.value)}/>
          <Components.Button>Sign Up</Components.Button>
        </Components.Form>
      </Components.SignUpContainer>
      <Components.SignInContainer signingIn={signIn}>
        <Components.Form>
          <Components.Title>Log in</Components.Title>
          <Components.Input value={email} type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
          <Components.Input value={password} type="password" placeholder="Password" onChange={(e) => setPasssword(e.target.value)}/>
          <Components.Anchor href="#">Forgot your password?</Components.Anchor>
          <Components.Button>Log In</Components.Button>
          <Components.Button onClick={() => {
            setEmail("guest@example.com")
            setPasssword("123456")
          }}>Guest User</Components.Button>
        </Components.Form>
      </Components.SignInContainer>
      <Components.OverlayContainer signingIn={signIn}>
        <Components.Overlay signingIn={signIn}>
          <Components.LeftOverlayPanel signingIn={signIn}>
            <Components.Title>Welcome Back!</Components.Title>
            <Components.Paragraph>
              To keep connected with us please login with your personal info
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(true)}>
              Log In
            </Components.GhostButton>
          </Components.LeftOverlayPanel>
          <Components.RightOverlayPanel signingIn={signIn}>
            <Components.Title>Hello, Friend!</Components.Title>
            <Components.Paragraph>
              Enter your personal details and start journey with us
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(false)}>
              Sign Up
            </Components.GhostButton>
          </Components.RightOverlayPanel>
        </Components.Overlay>
      </Components.OverlayContainer>
    </Components.Container>
    </div>
  );
}

export default Homepage;

