import React, { Component } from 'react';
import styled from 'styled-components';

import "../css/App.css";

const NavWrapper = styled.div`
  margin: 0 auto;
  padding: 16px 8px;
  display: flex;
  justify-content: space-between;
  height: 50px;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  h2 {
    align-self: center;
    font-weight: bold;
    margin-left: 24px;
  }
`;
const AccountControlGroup = styled.div`
  display: grid;
  grid-template-columns:
    1fr
    button {
    padding: 0;
  }
`;

const LoggedInUserControlGroup = styled.div`
  display: grid;
  grid-template-areas: 
    "a b";
  align-content: center;
`;

const UserProfile = styled.div`
  display: grid;
  gap: 12px;
  grid-template-columns: 40px 1fr;
  justify-content: center;
  align-content: center;
  margin-right: 12px;
`;

const ProfilePhoto = styled.img`
  width: 40px;
  margin-right: 16px;
  border-radius: 50%;
  align-self: center;
`;

const LogInOutButton = styled.button`
  background: none;
  box-shadow: none;
  text-align: left;
  color: black;
  align-self: center;
  &:hover {
    color: limegreen;
  }
  &:active {
    outline: none;
  }
`;

const Username = styled.p`
  margin: 0;
`;

interface NavProps {
  isLoggedIn: boolean
  user: any
  logOut: () => void
  logIn: () => void
}


class NavWithLogin extends Component<NavProps, {}> {
  render() {
    return (
      
      <NavWrapper>
      <h2>Move Mountains</h2>
      {this.props.isLoggedIn ? (
        <AccountControlGroup>
          <LogInOutButton onClick={this.props.logIn.bind(this)}>
            Log in
          </LogInOutButton>
        </AccountControlGroup>
      ) : (
        <AccountControlGroup>
          <LoggedInUserControlGroup>
            <UserProfile>
              <ProfilePhoto src={this.props.user.photoURL} />
              <div>
              <Username>{this.props.user.displayName}</Username>
              <LogInOutButton onClick={this.props.logOut.bind(this)}>
                Log out
              </LogInOutButton>
              </div>
            </UserProfile>
          </LoggedInUserControlGroup>
        </AccountControlGroup>
      )}
    </NavWrapper>
    );
  }
}

export default NavWithLogin;