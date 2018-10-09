import React from 'react';
import PropTypes from 'prop-types';



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        //this.incBtn = this.incBtn.bind(this);
    }


    ClickBtn() {
        alert('button clicked');
    }
    incBtn() {
        this.setstate = ({
            count: this.state.count + 1

        });
        console.log(this.state.count);
    }
    render() {

        return (
            <div>
                {/* printing all props */}
                <h1>
                    {this.props.arrayProp}
                    <br />

                    {this.props.stringProp}
                    <br />

                    {this.props.numberProp}
                    <br />

                    {this.props.boolProp}
                    <br />
                    {this.props.hey}

                </h1>
                <h2>{this.props.myname}</h2>


                <div>
                    <button onClick={this.ClickBtn}>what a button</button>
                </div>

                <br />
                <div>
                    <button onClick={this.incBtn.bind(this)}>increament by 1</button>

                    <Content myNumber={this.state.count}></Content>
                </div>
            </div>
        );
    }
}

class Content extends React.Component {
    ComponentWillMount() {
        console.log('component will mount');
    }
    ComponentDidMount() {
        console.log('component did mount');
    }
    ComponentwillReceiveProps() {
        console.log('ComponentwillReceiveProps ');
    }
    render() {
        return (
            <div>
                <h2>Content</h2>
                <p>{this.props.count}</p>
            </div>
        );
    }

}

App.propTypes = {

    arrayProp: PropTypes.array,
    stringProp: PropTypes.string,
    numberProp: PropTypes.number,
    boolProp: PropTypes.bool,
    checkstring: PropTypes.string,
    hey: PropTypes.string,
    myname: PropTypes.string

};

App.defaultProps = {
    heyProp: "uncle",
    arrayProp: ['Ram', 'Shyam', 'Raghav'],
    stringProp: "GeeksforGeeks",
    numberProp: "10",
    boolProp: true,
    hey: "way to go",
    myname: ['vijay', 'kumar'],
    button: 'button and win thousands',



}



export default App;