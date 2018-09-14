import React from 'react';
import { connect } from 'react-redux';

class DummyIntro extends React.Component {
    componentDidMount() {
        //setTimeout(this.props.next,5000);
    }
    render() {
        return (
            <div>
                Loading.....
            </div>
        );
    }
}
function mapStateToProps(state) {
    //console.log(state.rootRecuer);
    return ({
        data: state.rootRecuer.data,
        counter: state.rootRecuer.counter
    })
}
function mapDispatchToPropsCsat(dispatch) {
    return ({
        next: () => {
            console.log("CLICK DUMMY");
            dispatch({ type: "NEXT" })
        }
    });
}


export default connect(mapStateToProps, mapDispatchToPropsCsat)(DummyIntro);