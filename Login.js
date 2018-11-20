import React, {Component} from 'react';
import {Platform, StyleSheet, View, ImageBackground, TextInput} from 'react-native';
import { Card, CardItem, Text, Body, Content, Form, Item, Input, Label, Container, Header, Button, Right, Icon } from "native-base";

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.logPass = {
            login: 'admin',
            pass: 'admin'
        };


        this.state = {
            login: '',
            pass: ''
        };
    }

    onLoginClick() {
        if (this.state.login === this.logPass.login
        && this.state.pass === this.logPass.pass) {
                  alert('O kurwa');

        } else {
                  alert('Yapredloe');

        }
    }


  render() {
    return (
        <Container>
            <Header>
               <Right>
                <Icon style={{color: 'white'}} name="person" />
               </Right>
            </Header>
            <Content>
                <Form>
                    <Item floatingLabel>
                        <Label>Login {this.state.login}</Label>
                    <Input  onChangeText={(inputValue) => this.setState({login: inputValue})} />
                    </Item>
                    <Item floatingLabel last>
                        <Label>Password {this.state.pass}</Label>
                    <Input onChangeText={(inputValue) => this.setState({pass: inputValue})} />
                    </Item>
                    <Button block success onPress={() => this.onLoginClick()}>
                        <Text>Login</Text>
                    </Button>
                </Form>
            </Content>
        </Container>
    );
  }
}
export default LoginScreen;
