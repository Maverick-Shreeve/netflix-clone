import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'

const Home = () => {
  return (
    <>
        <Main />
        <Row rowID='1' title ='Popular' fetchURL={requests.requestPopular} />
        <Row rowID='2'title ='Trending' fetchURL={requests.requestTrending} />
        <Row rowID='3' title ='Horror' fetchURL={requests.requestHorror} />
        <Row rowID='4' title ='Up Coming' fetchURL={requests.requestUpcoming} />
        <Row rowID='5' title ='Top Rated' fetchURL={requests.requestTopRated} />
        {/* the row ids are added so the scrolling function can work correctly, if not the top row is the only one that scrolls */}


    </>
  )
}

export default Home