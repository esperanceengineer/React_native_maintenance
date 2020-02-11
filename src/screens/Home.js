import React ,{Component} from 'react';
import { Text, View, StyleSheet,FlatList,ActivityIndicator } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {connect} from 'react-redux';
import {ListItem,SearchBar} from 'react-native-elements';
import {watchItems} from '../actions';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading:false,
            items:[]
        }
        this.filteredItems = [];
        this.props.dispatch(watchItems());
    }
    componentDidMount() {
        //this.filteredItems = [...this.props.items];
    }
    searchFilterItems = val => {
        let newItems = this.filteredItems.filter(item => item.title.indexOf(val) > -1);
        //this.props.items = [...newItems];
    }
    navigateToDetails = (item) => {
        this.props.navigation.navigate('Details',{item})
    }
    _keyExtractor = (item,index) => index.toString();

    renderItem = ({item}) => {
        return (
            <ListItem
                title={item.type}
                subtitle={item.jour}
                leftAvatar={{
                    source:{uri:item.image},
                    showEditButton:true,
                    title:item.type[0]
                    }}
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

    render() {
        const {items} = this.props
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
