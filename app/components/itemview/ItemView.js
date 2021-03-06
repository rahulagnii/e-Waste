import React, { Component } from 'react'
import { Text, View, ImageBackground, TouchableOpacity, ScrollView } from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title, Card, CardItem, Content, Item ,Thumbnail} from 'native-base';
import styles from './Styles'

export default class ItemView extends Component {
    static navigationOptions = {
        drawerLabel: 'Result',
        header: null,
        drawerIcon: ({ tintColor }) => (
            <Icon name="cart" style={{ fontSize: 24, color: 'grey' }} />
        )
    }
    constructor(props) {

        super(props)
        this.state = {
          deviceList: [
            { name: "Readmi", price: "₹1000", short_desc: "phone" },
            { name: "Readmi", price: "₹1000", short_desc: "phone" },
            { name: "Readmi", price: "₹1000", short_desc: "phone" },
            { name: "Readmi", price: "₹1000", short_desc: "phone" },
            { name: "Readmi", price: "₹1000", short_desc: "phone" },
            { name: "Readmi", price: "₹1000", short_desc: "phone" },
          ]
        }
      }
    render() {
       
        return (
            <Container >
                <Header style={styles.header} iosBarStyle={"light-content"}>
                    {/* <Left >
                        <Icon style={{ width: 20 }} name='arrow-round-back' onPress={() => this.props.navigation.navigate('Result')} style={{ color: 'white' }} />
                    </Left> */}
                    <Body>
                        <Title></Title>
                    </Body>
                    <Right>
                        <View style={{ marginRight: 20 }}>
                            <Icon name='search' onPress={() => this.props.navigation.navigate('Home')} style={{ color: 'white' }} />
                        </View>
                        <View style={{ marginRight: 20 }}>
                            <Icon name='heart' onPress={() => this.props.navigation.navigate('Wishlist')} style={{ color: 'white' }} />
                        </View>
                        <Icon name='cart' onPress={() => this.props.navigation.navigate('Cart')} style={{ color: 'white' }} />
                    </Right>
                </Header>
                <ScrollView>
                {this.state.deviceList.map((single_data, key) => (
              <Container key={key} style={styles.card} >
                    <Content>
                    <Card>
            <CardItem cardBody>
              <ImageBackground source={require('../../img/image.png')} style={styles.image}>
              <Button 
              onPress={() => this.props.navigation.navigate('Wishlist')}
              transparent rounded style={{alignSelf:'flex-end',marginTop:10}}>
                  <Icon name='heart' style={{ fontSize:20,color: 'grey'}}/>
              </Button>
              </ImageBackground>
            </CardItem>
            <CardItem>
                <Text style={styles.itemName}>{single_data.name}</Text>
            </CardItem>
          </Card>
          <Text style={styles.textDescripition}>{single_data.short_desc}</Text>
          <Text style={styles.textAmount}>{single_data.price}</Text>
        </Content>
                    </Container>
                     ))}
                </ScrollView>
                <View style={{flexDirection:'row',alignSelf:'center'}}>
                    <Button style={{width:'50%',alignItems:'center',justifyContent:'center',backgroundColor:'orange',height:60}}>
                        <Text style={{fontSize:18,color:'white'}}>Add to cart</Text>
                    </Button>
                    <Button
                    onPress={() => this.props.navigation.navigate('Payment')}
                    style={{width:'50%',alignItems:'center',justifyContent:'center',height:60}}>
                        <Text style={{fontSize:18,color:'white'}}>Buy Now</Text>
                    </Button>
                </View>
            </Container>
               
        )
    }
}
