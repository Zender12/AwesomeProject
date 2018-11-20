import React, {Component} from 'react';
import {Platform, StyleSheet, View, ImageBackground, TextInput} from 'react-native';
import { Spinner, ListItem, List, TabHeading, Tabs, Tab, Root, Card, CardItem, Text, Body, Toast, Content, Form, Item, Input, Label, Container, Header, Button, Right, Icon } from "native-base";
import Geolocation from './Geolocation'


type Props = {};
export default class LoginScreen extends Component<Props> {
    constructor(props) {
        super(props);
        this.logPass = {
            login: 'admin',
            pass: 'admin'
        };
        this.state = {
            login: '',
            pass: '',
            isLogged: false,
        };
    }
    onLoginClick() {
        if (this.state.login === this.logPass.login
        && this.state.pass === this.logPass.pass) {
            this.setState({isLogged: true})
            Toast.show({
                text: 'Welcome!',
                position: 'top',
                type: 'success'
            });
        } else {
            Toast.show({
                text: 'Incorrect login or password.',
                position: 'top',
                type: 'danger'
            });
        }
    }

    renderView() {
        if (this.state.isLogged) {
            console.log(1);
            return this.renderHome();
        } else {
                    console.log(2);

            return this.renderLogin();
        }
    }

    renderHome() {
     var items = [
          'Simon Mignolet',
          'Nathaniel Clyne',
          'Dejan Lovren',
          'Mama Sakho',
          'Emre Can'
        ];
      return (
        <Container>
          <Tabs>
            <Tab heading={ <TabHeading><Icon name="camera" /><Text>List</Text></TabHeading>}>
               <Container>
                 <Content>
                   <List dataArray={items}
                     renderRow={(item) =>
                       <ListItem>
                         <Text>{item}</Text>
                       </ListItem>
                     }>
                   </List>
                 </Content>
               </Container>
            </Tab>
            <Tab heading={ <TabHeading><Icon name="apps" /><Text>Geolocation</Text></TabHeading>}>
                <Geolocation />
            </Tab>
           </Tabs>
        </Container>
      );
    }

    renderLogin() {
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
                           <Label>Login</Label>
                       <Input  onChangeText={(inputValue) => this.setState({login: inputValue})} />
                       </Item>
                       <Item floatingLabel last>
                           <Label>Password</Label>
                       <Input onChangeText={(inputValue) => this.setState({pass: inputValue})} />
                       </Item>
                       <View  style={{paddingTop: 50}} >
                           <Button block success onPress={() => this.onLoginClick()}>
                           <Text>Login</Text>
                           </Button>
                       </View>
                   </Form>
                </Content>
            </Container>
        );
    }





  render() {
    return (
      <Root>
          { this.renderView() }
      </Root>
    );
  }
}
