import React from "react"
import "./App.css"
import FlowerCard from "./components/FlowerCard"
import axios from "axios"

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null,
            flowers: null
        }
    }
    componentDidMount() {
        axios
            .get("http://localhost:3000/")
            .then((response) => {
                this.setState({ data: response.data })
            })
            .catch((error) => console.log(error))
    }
    render() {
        let flowers = null
        if (this.state.data) {
            flowers = this.state.data.map((flower, index) => (
                <FlowerCard image={flower.image} name={flower.name} />
            ))
          }
        return (
            <div className="App">
                {flowers}
            </div>
        )
    }
}

export default App
