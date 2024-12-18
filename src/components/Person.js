import React, { Component } from 'react'

export default class Person extends Component {
    constructor (props) {
        super(props)
        this.person = {
            fullName:"Lena",
            bio:"Student",
            imgSrc:"https://static.vecteezy.com/system/resources/previews/025/755/100/non_2x/graduate-student-cartoon-avatar-on-white-background-elements-graduating-student-illustration-people-illustration-vector.jpg",
            profession:"Web Developer"
        };
        this.state = {
            count:0
        }
    }

    componentDidMount () {
        setInterval(() => {
            this.setState((prevState) => ({
                count:prevState.count+1
            }));
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.state);
    }
    render() {
    return (
        <div>
            <h1>{this.person.fullName}</h1>
            <h2>{this.person.bio}</h2>
            <h2>{this.person.profession}</h2>
            <img src={this.person.imgSrc} alt='img personne' />
            <div>counter: {this.state.count}</div>

        </div>
    )
    }
}
