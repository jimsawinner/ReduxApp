var React = require('react-native');
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux/native';
import * as Actions from '../actions';

function mapStateToProps(state) {
    return { user: state.userReducers.user};
}

function mapDispatchToprops(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

var { View, TouchableHighlight, Text } = React;

var Login = React.createClass({
    onLoginButtonPress() {
        this.props.login({
            username: 'testuser',
            password: '123'
        });
    },

    render() {
        return  (
            <View>
                {
                    !this.props.user.loggedIn &&
                        <TouchableHighlight onPress={this.onLoginButtonPress}>
                            <Text>Log In</Text>
                        </TouchableHighlight>
                }
            </View>
        );
    },
});