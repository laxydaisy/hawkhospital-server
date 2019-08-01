import React from 'react';
import axios from "axios";
import Loading from "./Loading";
import Home from "./Home";
import './App.css';
class DoctorList extends React.Component{
    render() {
        
                 const { Home, loading, error } = this.state;
        
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

                const { doctord_Id } = this.props;
                const homepageinfoPromise = axios.get(`/api/doctor/${doctord_Id}`);
            
    
            axios
            .all([homepageinfoPromise])
            .then(
                 axios.spread((doctorlistResponse) => {
                
                    this.setState({
                         Home: response.data,
                         loading: false,
                         error: false
                     });
                 })
            )
                .catch(error => {
                  this.setState({
                    Home: [],
                    loading: false,
                    error: true
                });
            
               });
            }
    }  
        
}

export default DoctorList;