import React from "react";
import {
    Container,
    Grid,
    Header,
    Icon,
    List,
    Segment,
} from "semantic-ui-react";

export default function Footer() {
    return (
        <div 
        
        style={{marginLeft:320}} className="footer">
            <Segment vertical style={{ padding: "7em 1em" }}>
                <Container>
                    <Grid divided stackable>
                        <Grid.Row>
                            <Grid.Column width={5}>
                                <Header as="h2" content="About HRMS"/>
                                <List link >
                                    <List.Item as="a">Help</List.Item>
                                    <List.Item as="a">Guide</List.Item>
                                    <List.Item as="a">Sitemap</List.Item>
                                    <List.Item as="a">About Us</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column width={5}>
                                <Header as="h2" content="Our Services" />
                                <List link >
                                    <List.Item as="a">Advertise</List.Item>
                                    <List.Item as="a">Partnership</List.Item>
                                    <List.Item as="a">Privacy Policy</List.Item>
                                    <List.Item as="a">Communication</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column width={5}>
                                <Header as="h2" content=" By Benginur Öztürk 2021 © HRMS SİSTEMİ " />
                                <List link>
                                    <List.Item>Contact Me:</List.Item>
                                    <List.Item>
                                        <a href="bngozturk07@gmail.com">
                                            <Icon name="mail outline" /> Email
                                        </a>
                                    </List.Item>
                                    <List.Item>
                                        <a href="https://github.com/Benginurozturk">
                                            <Icon name="github" /> Github
                                        </a>
                                    </List.Item>
                                    <List.Item>
                                        <a href="https://github.com/Benginurozturk">
                                            <Icon name="linkedin" /> Linkedin
                                        </a>
                                    </List.Item>
                                </List>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
        </div>
    );
}