import React, { Component } from 'react';
import classes from './Layout.module.css';
import Container from '../Container/Container';
import Form from '../Form/Form';
import Intro from '../IntroTips/Intro';
import CurrentCondition from '../CurrentCondition/CurrentCondition';
import ForeCast from '../ForeCast/ForeCast';
import Skeletons from '../Skeletons/Skeletons';
import Errors from '../Errors/Errors';
import {reactLocalStorage} from 'reactjs-localstorage';

class layout extends Component {
    state = {
        intro: {
            showing: true,
            firstTime: true,
            step: 0
        },
        searched: false,
        fetchLoading: false,
        errors: {
            found: false,
            type: null
        },
        cityData: null,
        currentConditionData: null,
        foreCastData: null
    }
    closeIntroHandler = () => {
        this.setState(prevState => {
            return prevState.intro.showing = false
        });
        reactLocalStorage.set('firstTime', true);
    }
    introStepIncrementHandler = () => {
        const newIntroObject = {
            ...this.state.intro
        }
        newIntroObject.step = newIntroObject.step + 1;
        this.setState({intro: newIntroObject})
    }

    // Form submit
    formSubmitHandler = (term, e) => {
        e.preventDefault();
        
        this.cityLocationDataFetcher(term);
        this.setState(prevState => (prevState.searched = true, prevState.fetchLoading = true, prevState.errors.found = false));
        e.target.searchbar.value = '';
    }

    // Data fetchers
    cityLocationDataFetcher = (term) => {
        const city = term;
        const url = `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${process.env.REACT_APP_WEATHER_API_KEY}&q=${city}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                if(data.length !== 0){
                    const newCityData = {
                        ...data[0]
                    }
                    // console.log(newCityData);
                    this.setState({
                        cityData: {
                            ...newCityData
                        }
                    })
                    this.currentConditionDataFetcher(data[0].Key);
                    this.foreCastDataFetcher(data[0].Key);
                }else{
                    this.setState({
                        currentConditionData: null,
                        foreCastData: null,
                        searched: false,
                        errors: {
                            found: true,
                            type: 404
                        }
                    })
                }
            })
            .catch(err => console.log(err));
    }
    currentConditionDataFetcher = (code) => {
        const apiKey = 'd8Oi7nJm2UBP54GXU80eNwAHSRby5z1v';
        const cityCode = code;
        const url = `https://dataservice.accuweather.com/currentconditions/v1/${cityCode}?apikey=${apiKey}&details=true`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                const newCurrentConditionData = {
                    ...data[0]
                };
                // console.log(newCurrentConditionData);
                this.setState({
                    currentConditionData: {
                        ...newCurrentConditionData
                    }
                })
            })
            .catch(err => {
                console.log(err);
                this.setState((prevState) => {
                    return prevState.currentConditionData = null;
                })
            });
    }
    foreCastDataFetcher = (code) => {
        const apiKey = 'd8Oi7nJm2UBP54GXU80eNwAHSRby5z1v';
        const cityCode = code;
        const url = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityCode}?apikey=${apiKey}&metric=true`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                const newForeCastData = [...data.DailyForecasts];
                newForeCastData.shift();
                console.log(newForeCastData);
                
                this.setState({
                    foreCastData: [
                        ...newForeCastData
                    ],
                    fetchLoading: false
                })
            })
            .catch(err => console.log(err));
    }
    errorCloserHandler = () => {
        this.setState(prevState => (prevState.errors.found = false))
    }
    componentDidUpdate(){
        if(this.state.errors.found){
            setTimeout(() => {
                this.setState(prevState => (prevState.errors.found = false))    
            }, 3500);
        }
    }
    render(){
        console.log(this.state);
        return(
            <div className={classes.Layout}>
                {
                    !reactLocalStorage.get('firstTime')
                    ?
                        <Intro 
                            showing={this.state.intro.showing}
                            backDropCloser={this.closeIntroHandler}
                            addStep={this.introStepIncrementHandler}
                            step={this.state.intro.step}/>
                    : 
                        null
                }
                <section className={classes.Search}>
                    <h1>WEATHER APP</h1>
                    <Container maxWidth="600px" margin="0 auto" padding="0 1rem">
                        <Form submit={this.formSubmitHandler}/>
                    </Container>
                </section>
                <section className={classes.Weather}>
                    <Container maxWidth="1200px" margin="0 auto" padding="0 1rem">
                        <div className={classes.WeatherWrapper}>
                            {
                            this.state.searched
                            ?
                                (
                                    this.state.fetchLoading
                                    ?
                                        <React.Fragment>
                                            <Skeletons />
                                        </React.Fragment>
                                    :
                                        
                                        this.state.cityData && this.state.currentConditionData
                                        ?
                                        <React.Fragment>
                                            <CurrentCondition
                                                weatherData={this.state.currentConditionData}
                                                cityInfo={this.state.cityData}/>
                                            <ForeCast weatherData={this.state.foreCastData}/>
                                        </React.Fragment>
                                        :
                                        null
                                )
                            :
                                (
                                    this.state.errors.found
                                    ?
                                        <Errors
                                            found={this.state.errors.found}
                                            type={this.state.errors.type}
                                            closer={this.errorCloserHandler}/>
                                    :
                                        null
                                )
                            }
                        </div>
                    </Container>
                </section>
            </div>
        )
    }
}

export default layout;