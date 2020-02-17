import React ,{Component} from 'react';
import { Text, View, StyleSheet,FlatList,ActivityIndicator } from 'react-native';
import {connect} from 'react-redux';
import {ListItem,SearchBar, colors} from 'react-native-elements';
import AnimatedItem from '../api/AnimatedItem';
import firebase from '../api/firebase';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading:true,
            items:[]
        }
        this.filteredItems = [];
    }
    componentDidMount() {
        let list = [];
        firebase.database().once('value',snapshot => {
            snapshot.forEach(data => {
                list.push(data.val())
            })
            this.setState({items:list,loading:false});
            this.filteredItems = [...list];
        })
    }
    componentWillUnmount() {
        firebase.database().off("value");;
    }
    searchFilterItems = val => {
        let items = this.filteredItems.filter(item => {
            let value = val.toUpperCase();
            let itemVal = item.type.toUpperCase();
            if (itemVal.indexOf(value) > -1) return item;
        });
        this.setState({items});
    }
    navigateToDetails = (item) => {
        this.props.navigation.navigate('Details',{item})
        }
    _keyExtractor = (item,index) => index.toString();

    renderItem = ({item,index}) => {
        return (
            <AnimatedItem delay={index * 50}>
                <ListItem
                    title={item.type}
                    subtitle={item.jour}
                    leftAvatar={{
                        source:{uri:item.image},
                        showEditButton:true,
                        title:item.type[0]
                        }}
                    onPress={() => this.navigateToDetails(item)}
                    chevron={{color:colors.primary}}
                />
            </AnimatedItem>
        );
    }
    renderHeader = () => (
        <SearchBar
            placeholder='Rechercher'
            placeholderTextColor='#fff'
            lightTheme
            autoCorrect={false}
            onChangeText={text => this.searchFilterItems(text)}
        />
    )
    renderSeparator = () => {
        return (
          <View
            style={{
              height: 1,
              backgroundColor: colors.primary,
              marginLeft: "14%"
            }}
          />
        );
    }
    renderEmptyComponent = () => (
        <View style={{ height: 40, alignItems: "center", justifyContent: "center" }}>
            <Text style={{fontSize:20,color:"black"}}>Aucune Maintenance</Text>
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
    updateState = (items) => {
        this.setState({items})
    }
    /**
     * 
     * @param {*} nextProps 
     * @param {*} nextState 
     * Cette methode est appelée pour chaque changement de props, et 
     * n'est pas appelée pour la première fois où le component est monté
     */
    shouldComponentUpdate(nextProps,nextState) {
        if(nextProps.items.length > this.props.items.length) {
            this.updateState(nextProps.items);
            return true;
        }
        return true;
    }
    render() {
        const {items} = this.state;
        return (
            <View style={styles.container}>
                <FlatList
                    data={items}
                    renderItem={this.renderItem}
                    keyExtractor={this._keyExtractor}
                    ListHeaderComponent={this.renderHeader}
                    ListFooterComponent={this.renderFooter}
                    ListEmptyComponent={this.renderEmptyComponent}
                    ItemSeparatorComponent={this.renderSeparator}
                />
            </View>
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
        backgroundColor:"#fff"
    }
})
