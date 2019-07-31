import React from 'react';
import axios from "axios";
import Loading from "./Loading";
import Home from "./Home";
import './App.css';
class DoctorList extends React.Component{
    render() {
        
                 const { moviesShowing, loading, error } = this.state;
        
                 if (loading) {
                     return <Loading />;
                 }
        
                 if (error) {
                     return <Error />;
                 };

    constructor(props);{
    super();
    this.state={

homepageinfo:[],
Loading: false,
error: false        
    };
}
componentDidMount();{
   this.fetchHomepageinfo();
}
fetchHomepageinfo();{
            this.setState({ loading: true, error: false });
    
            axios
                .get("http://localhost:3000")
                .then(response => {
                    this.setState({
                         Home: response.data,
                         loading: false,
                         error: false
                     });
                 })
                .catch(error => {
                  this.setState({
                    Home: [],
                    loading: false,
                    error: true
                });
            });
        }
   };
}

export default DoctorList;