import React, {useState} from 'react';
import {Container, Grid, Menu} from "semantic-ui-react";
import Navbar from "../Navi";
import {Link, Route, Switch, useRouteMatch, useLocation} from "react-router-dom";
import JobsOfEmployer from '../../pages/jobsOfEmployer'

import CreateAdvertisement from '../../pages/createAdvertisement';

import Login from '../../pages/auth/Login';
import Register from '../../pages/auth/Register'
import Filter from '../Filter';
function EmployerDashboard(props) {

    const location = useLocation();
    const {url, path} = useRouteMatch();
    const [activeItem, setActiveItem] = useState(location.pathname);
    const handleItemClick = (e, {name}) => setActiveItem(name);

    return (
        <div>
            <Navbar/>

            <Container style={{marginTop: '7em'}}>

                <Grid>
                    <Grid.Column mobile={16} tablet={6} computer={4}>
                        <Menu pointing secondary vertical>
                            <Menu.Item as={Link} to={`${url}`}
                                       name={url}
                                       active={activeItem === url}
                                       onClick={handleItemClick}>
                            <div style={{color:'#fff'}}>Profil</div>
                            </Menu.Item>

                            <Menu.Item >
                                <Menu.Header>İlanlarım</Menu.Header>
                                <Menu.Menu >
                                    <Menu.Item as={Link} to={`${url}/active-job-postings`}
                                               name={`${url}/active-job-postings`}
                                               active={activeItem === `${url}/active-job-postings`}
                                               onClick={handleItemClick}>
                                               
                            <div style={{color:'#fff'}}>Aktif</div>
                                    </Menu.Item>
                                    <Menu.Item as={Link} to={`${url}/job-postings-pending-approval`}
                                               name={`${url}/job-postings-pending-approval`}
                                               active={activeItem === `${url}/job-postings-pending-approval`}
                                               onClick={handleItemClick}>
                            <div style={{color:'#fff'}}>Onay Bekleyen</div>
                                    </Menu.Item>
                                    <Menu.Item as={Link} to={`${url}/passive-job-postings`}
                                               name={`${url}/passive-job-postings`}
                                               active={activeItem === `${url}/passive-job-postings`}
                                               onClick={handleItemClick}>
                            <div style={{color:'#fff'}}>Pasif</div>
                                    </Menu.Item>
                                    <Menu.Item as={Link} to={`${url}/post-job`}
                                               name={`${url}/post-job`}
                                               active={activeItem === `${url}/post-job`}
                                               onClick={handleItemClick}>
                            <div style={{color:'#fff'}}>Yeni İlan Oluştur</div>
                                    </Menu.Item>
                                </Menu.Menu>
                            </Menu.Item>
                        </Menu>
                    </Grid.Column>
                    <Grid.Column mobile={16} tablet={10} computer={12}>
                        <Switch>
                            <Route path={`${path}/active-job-postings`} component={JobsOfEmployer}/>
                            <Route path={`${path}/post-jobAdvertisement`} component={CreateAdvertisement}/>
                            <Route path={`${path}/giris-yap`} component={Login}/>
                            <Route path={`${path}/kayıt-ol`} component={Register}/>
                            <Route exact path="/filter" component={Filter}/>
                        </Switch>
                    </Grid.Column>
                </Grid>
            </Container>
        </div>
    );
}

export default EmployerDashboard;