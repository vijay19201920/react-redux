import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
    constructor() {
        super();
        this.state = {

            data: [
                {

                    "name": "vijay",
                    "class": "btesh",
                    "age": "30"
                },
                {

                    "name": "surendra",
                    "class": "btesh",
                    "age": "33"
                }


            ]
        }



    }


    render() {
        var myStyle = {
            fontSize: 100,
            color: '#FF0000'
        }
        var check = {
            fontSize: 100,
            color: '#FF0000'

        }
        return (
            <div>
                <p data-myattributes="myvalue">hello </p>
                <p data-myattribute="somevalue">This is the content!!!</p>
                <p>{1 + 1}</p>

                <h1 style={myStyle}>Header</h1>

                <div style={check} >green </div>
                <Body />
                <Header />
                <table>
                    <tbody>
                        {this.state.data.map((person, i) => <TableRow key={i}
                            data={person} />)}
                        {this.state.data.map((person, i) => <TableRow key={person}
                            data={i} />)}

                        {//{this.state.map((person , i)=> )  }}
                        }
                    </tbody>
                </table>
                <Content />
            <h3>Array: {this.props.propArray}</h3>
            <h3>Bool: {this.props.propBool ? "True..." : "False..."}</h3>
            <h3>Func: {this.props.propFunc(3)}</h3>
            <h3>Number: {this.props.propNumber}</h3>
            <h3>String: {this.props.propString}</h3>
            <h3>Object: {this.props.propObject.objectName1}</h3>
            <h3>Object: {this.props.propObject.objectName2}</h3>
            <h3>Object: {this.props.propObject.objectName3}</h3>

            </div>

        );
    }
}

App.propTypes = {
    propArray: PropTypes.array.isRequired,
    propBool: PropTypes.bool.isRequired,
    propFunc: PropTypes.func,
    propNumber: PropTypes.number,
    propString: PropTypes.string,
    propObject: PropTypes.object,
 }
 App.defaultProps = {
    propArray:['hello','array'],
    propBool: false,
    propFunc: PropTypes.func,
    propNumber: 1234,
    propString: 'hello string',
    propObject: [{
        name : vinay,
        age :32,
        profession :bankpostMessage,
    }]
 }

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Header</h1>
            </div>
        );
    }
}
class Body extends React.Component {
    render() {
        return (
            <div>
                <h2>body</h2>
                <p>The body text!!!</p>
            </div>
        );
    }
}
class Content extends React.Component {
    render() {
        return (
            <div>
                <h2>Content</h2>
                <p>The content text!!!</p>
            </div>
        );
    }
}
class TableRow extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.age}</td>
                <td>{this.props.data.class}</td>

            </tr>
        );
    }

    
    
}



export default App;
