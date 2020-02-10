import React ,{Component} from 'react';
import { Text, View, StyleSheet,FlatList,ActivityIndicator } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {connect} from 'react-redux';
import {ListItem,SearchBar} from 'react-native-elements';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading:false,
            items:[
                {
                    title:'Java',
                    type:'jdk',
                    details:`
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
                    image: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
                },
                {
                    title:'Javascript',
                    type:'js',
                    details:'sdk',
                    image: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'
                },
                {
                    title:'Python',
                    type:'py',
                    details:'sdk',
                    image: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
                }
            ]
        }
        this.filteredItems = [];
    }
    componentDidMount() {
        this.filteredItems = [...this.state.items];
    }
    searchFilterItems = val => {
        let newItems = this.filteredItems.filter(item => item.title.indexOf(val) > -1);
        this.setState({items:newItems})
    }
    navigateToDetails = (item) => {
        this.props.navigation.navigate('Details',{item})
    }
    _keyExtractor = (item,index) => index.toString()
    renderItem = ({item}) => {
        return (
            <ListItem
                title={item.title}
                subtitle={item.type}
                leftAvatar={{source:{uri:item.image}}}
                onPress={() => this.navigateToDetails(item)}
                chevron
            />
        );
    }
    renderHeader = () => (
        <SearchBar
            placeholder='Rechercher'
            placeholderTextColor='#fff'
            lightTheme
            round
            autoCorrect={false}
            onChangeText={text => this.searchFilterItems(text)}
        />
    )
    renderSeparator = () => {
        return (
          <View
            style={{
              height: 3,
              backgroundColor: "#eee",
              marginLeft: "14%"
            }}
          />
        );
    }
    renderEmptyComponent = () => (
        <View style={{ height: 40, alignItems: "center", justifyContent: "center" }}>
            <Text style={{fontSize:20,color:"black"}}>Aucun résultat</Text>
        </View>
    )

    renderFooter = () => {
        if(this.state.loading) {
            return(
            <View style={{ height: 50, alignItems: "center", justifyContent: "center" }}>
                <ActivityIndicator
                    animating={true}
                    size='large'
                    color="skyblue"
                />
            </View>

            )
        }
        return null
    }

    render() {
        console.log("Home",this.props.items);
        const {items} = this.state
        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={items}
                    renderItem={this.renderItem}
                    keyExtractor={this._keyExtractor}
                    ListHeaderComponent={this.renderHeader}
                    ListFooterComponent={this.renderFooter}
                    ListEmptyComponent={this.renderEmptyComponent}
                    ItemSeparatorComponent={this.renderSeparator}
                />
            </SafeAreaView>
        )
    }
}

const mapStateToProps = (state) => ({
    items:state.items
})


export default connect(mapStateToProps)(HomeScreen);


const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})
