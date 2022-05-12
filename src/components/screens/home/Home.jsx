import React  from 'react' 
import Layout from '../../layout/Layout'
import Content from './Conten'
import Detal from './Detal'
import Nysan from './Nysan'

const Home = () =>{
    return (
    <Layout>
        <div className=''>Home
        <Content />
        <Detal />
        <Nysan />
        </div>
        </Layout>
    )
}
export default Home