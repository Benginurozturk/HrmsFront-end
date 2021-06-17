import React, { useState } from 'react'
import { Container, Menu, Icon,Image,GridColumn } from 'semantic-ui-react'
import { useHistory } from 'react-router'
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'
import { NavLink } from 'react-router-dom'

export default function Navi() {
    
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const history = useHistory()

    function handleSignOut() {
        setIsAuthenticated(false)
        history.push("/")
    }

    function handleSignIn() {
        setIsAuthenticated(true)
    }

    return (
        <div> 
           <Menu.Item>
           
           <GridColumn width={5}>
                        <Container style={{background:"white", height:"200%"}}> 
                        
           
                            <Image src="https://www.socialbusinesstr.com/wp-content/uploads/2015/11/Linkedin_Profil_Fotografi_Nasil_Olmali.jpg" size="medium" circular />  </Container>
                            <Icon loading name='asterisk' color="black" /> HUMAN RESOURCE MANAGEMENT SYSTEM  </GridColumn>
          </Menu.Item>
            <Menu fixed="top" size="large">
                <Container>

                    <Menu.Item as={NavLink} to="/home"> <Icon name="home" color="purple" /> Home </Menu.Item>
                    <Menu.Item as={NavLink} to="/"> <Icon name="building" color="purple"/> Employers </Menu.Item>
                    <Menu.Item as={NavLink} to="/"> <Icon name="announcement" color="purple"/> JobsOfEmployer </Menu.Item>
                    <Menu.Item as={NavLink} to="/"> <Icon name="edit" color="purple"/> Create Advertisement </Menu.Item>
                    <Menu.Item as={NavLink} to="/"> <Icon name="search" color="purple"/> Find Job </Menu.Item>
                    <Menu.Item as={NavLink} to="/" ><Icon name="user outline" color="purple"/>ResumeMains</Menu.Item>

                    <Menu.Menu position='right'>
                        {isAuthenticated ?
                            <SignedIn signOut={handleSignOut} /> :
                            <SignedOut signIn={handleSignIn} />}
                    </Menu.Menu>
                </Container>
            </Menu>
        </div >
    );
    }
