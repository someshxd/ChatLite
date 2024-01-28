import React, { useState } from "react";
import * as Components from "./Components";
import "./Homepage.css";
import { useToast } from '@chakra-ui/react';
import axios from "axios";
import {useHistory} from "react-router-dom";

function Homepage() {
  const [signIn, toggle] = useState(true);
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPasssword] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast()
  const history = useHistory();

  const submitSignUp = async() => {
    setLoading(true);
    if (!name || !email || !password) {
      toast({
        title: 'Please Fill all the Feilds',
        status: 'warning',
        duration: 5000,
        isClosable: true,
        position: 'bottom',
      })
      setLoading(false);
      return;
    }

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const {data} = await axios.post("/api/user", {name, email, password}, config);
      toast({
        title: 'Registration Successful',
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'bottom',
      });

      localStorage.setItem("userInfo", JSON.stringify(data));

      setLoading(false);
      history.pushState("/chats");
    } catch (error) {
      toast({
        title: 'Error Occured!',
        description: error.response.data.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'bottom',
      });
      setLoading(false);
    }
  }

  const submitLogIn = async() => {
    setLoading(true);
    if (!email || !password) {
      toast({
        title: 'Please Fill all the Feilds',
        status: 'warning',
        duration: 5000,
        isClosable: true,
        position: 'bottom',
      })
      setLoading(false);
      return;
    }

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const {data} = await axios.post("/api/user/login", {email, password}, config);
      toast({
        title: 'Registration Successful',
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'bottom',
      });

      localStorage.setItem("userInfo", JSON.stringify(data));

      setLoading(false);
      history.pushState("/chats");
    } catch (error) {
      toast({
        title: 'Error Occured!',
        description: error.response.data.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'bottom',
      });
      setLoading(false);
    }
  }

  return (
    <div className="Homepage">
      <div className="title">
        <h1>Chatlite</h1>
      </div>
      <Components.Container>
        <Components.SignUpContainer signingIn={signIn}>
          <Components.Form>
            <Components.Title>Create Account</Components.Title>
            <Components.Input value={name} type="text" placeholder="Name" onChange={(e) => setname(e.target.value)} />
            <Components.Input value={email} type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <Components.Input value={password} type="password" placeholder="Password" onChange={(e) => setPasssword(e.target.value)} />
            <Components.Button onClick={submitSignUp} loading={loading} type="button">Sign Up</Components.Button>
          </Components.Form>
        </Components.SignUpContainer>
        <Components.SignInContainer signingIn={signIn}>
          <Components.Form>
            <Components.Title>Log in</Components.Title>
            <Components.Input value={email} type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <Components.Input value={password} type="password" placeholder="Password" onChange={(e) => setPasssword(e.target.value)} />
            <Components.Anchor href="#">Forgot your password?</Components.Anchor>
            <Components.Button onClick={submitLogIn}loading={loading} type="button">Log In</Components.Button>
            <Components.Button onClick={() => {
              setEmail("guest@example.com")
              setPasssword("123456")
            }}type="button">Guest User</Components.Button>
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

