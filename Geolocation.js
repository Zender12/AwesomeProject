import React, {Component} from 'react';
import {Platform, StyleSheet, View, ImageBackground, TextInput} from 'react-native';
import { Left, Switch, Spinner, ListItem, List, TabHeading, Tabs, Tab, Root, Card, CardItem, Text, Body, Toast, Content, Form, Item, Input, Label, Container, Header, Button, Right, Icon } from "native-base";

type Props = {};
export default class Geolocation extends Component<Props> {
    constructor(props) {
        super(props);

        this.state = {
            geolocationLoading: false,
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 1000

        };
    }
    watchID: ?number = null;
    componentDidMount = () => {
    this.setState({geolocationLoading: true});
//    alert('componentDidMount');
      navigator.geolocation.getCurrentPosition(
         (position) => {
            this.setState({geolocationLoading: false});
            alert('done');
            const initialPosition = JSON.stringify(position);
            console.log(initialPosition);
            this.setState({ initialPosition });
         },
         (error) => {
            alert('error ' + error.message),''
            this.setState({geolocationLoading: false});
         },
         { enableHighAccuracy: this.state.enableHighAccuracy, timeout: this.state.timeout, maximumAge: this.state.maximumAge }
      );
      this.watchID = navigator.geolocation.watchPosition((position) => {
         const lastPosition = JSON.stringify(position);
         this.setState({ lastPosition });
      });
    }
    componentWillUnmount = () => {
      navigator.geolocation.clearWatch(this.watchID);
    }
//onValueChange  style={{paddingTop: 40 }}  placeholder='set maximumAge in ms'
    render() {
        return (
                <Content style={{paddingTop: 40 }}>
                    <Form>
                        <Item floatingLabel>
                          <Label>Username</Label>
                          <Input />
                        </Item>
                        <Item floatingLabel last>
                          <Label>Password</Label>
                          <Input />
                        </Item>
                    </Form>
                    <ListItem icon>
                        <Left>
                          <Button style={{ backgroundColor: "#FF9501" }}>
                            <Icon active name="plane" />
                          </Button>
                        </Left>
                        <Body>
                          <Text>enableHighAccuracy</Text>
                        </Body>
                        <Right>
                          <Switch
                            value={this.state.enableHighAccuracy}
                            onValueChange={(value) => {this.setState(enableHighAccuracy: value)}}
                            />
                        </Right>
                    </ListItem>
                </Content>
        );
    }
}
//<Spinner color='green' />