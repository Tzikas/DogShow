import { Component } from 'react'
import axios from 'axios'


//https://dog.ceo/api/breed/retriever/images

class Dogs extends Component {

    state = {
        dogs: []
    }


    componentDidMount() {
        axios
            .get(`https://dog.ceo/api/breed/retriever/images`)
            .then(res => {
                this.setState({ dogs: res.data.message })
            })
    }

    showTheDogs = () => {
        return this.state.dogs.map(eachDog => {
            return <img key={eachDog} src={eachDog} />
        })
    }

    render() {
        console.log(this.state)
        return (
            <>
                <h1>Dogs</h1>
                {this.showTheDogs()}

            </>
        )
    }
}

export default Dogs