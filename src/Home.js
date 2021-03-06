import { Component } from 'react'
import axios from 'axios'

class Home extends Component {

    state = {
        catUrl: ''
    }

    componentDidMount() {
        axios
            .get(`https://api.thecatapi.com/v1/images/search`)
            .then(res => {
                console.log(res.data[0].url)
                this.setState({
                    catUrl: res.data[0].url
                })
            })
    }

    render() {
        return (
            <>
                <h1>Home</h1>
                <img width="500px" src={this.state.catUrl} />
            </>
        )
    }
}

export default Home