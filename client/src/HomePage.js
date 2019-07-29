import React from 'react';
import './App.css';

class Homepage extends React.Component{
    constructor (props){
        super (props);
        this.state = {
            content:[
                {
                    name: "Daisy Johnson",
                    d_image: "",
                    count: 1

                },
                {
                    name: "Maria Kim",
                    p_image:"",
                    count: 2
                }
            ],
            content:[],
            loading: false,
            error:false,
        };
    }
    componentDidMount(){
        this.fetchHomepage();
    }
    fetchHomepage(){
        this.setState({loading: true, error: false});

        axios
        .get("http://localhost:3000/api/Homepage")
        .get("/api/Homepage")
        .then(response => {
            this.setState({
                Homepage: response.data,
                loading: false,
                error:false
            });
        })
        .catch(error => {
            this.setState({
                Homepage: [],
                loading:false,
                error: true
            });
        })
    }

    render() {
        const { Homepage, loading, error } = this.state;
        if (loading){
        return <Loading />
        }
        if (error) {
            return <Error />
        }
        return (
            <div className="-container">
                <div className="">
                    {Homepage.map(h =>(
                        <Homepage key={h.id} Homepage ={h}/>
                    ))}
                </div>
            </div>
        )
    }
}
export default Homepage;