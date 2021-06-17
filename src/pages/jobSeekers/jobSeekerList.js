import React, {useEffect, useState} from 'react';
import { JobSeekerService} from '../../services'
import { Icon, Menu, Table, Header } from 'semantic-ui-react'

export default function JobSeekerList() {

    const [jobSeekers, setJobSeekers] = useState([]);

    useEffect(() => {
        let jobSeekerService = new JobSeekerService();
        jobSeekerService.getAll().then(result => setJobSeekers(result.data.data));
    }, []);

    return (
        <div>
        <Header as="h1">
            <Icon name="users" />
            <Header.Content> JobSeekers </Header.Content>
        </Header>
        <Table celled textAlign="center">
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>First Name</Table.HeaderCell>
                    <Table.HeaderCell>Last Name</Table.HeaderCell>
                    <Table.HeaderCell>Email</Table.HeaderCell>
                    <Table.HeaderCell>Birth Date</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {jobSeekers.map((jobSeeker) => (
                    <Table.Row key={jobSeeker.id}>
                        <Table.Cell>{jobSeeker.firstName}</Table.Cell>
                        <Table.Cell>{jobSeeker.lastName}</Table.Cell>
                        <Table.Cell>{jobSeeker.email}</Table.Cell>
                        <Table.Cell>{jobSeeker.birthDate}</Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
            <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='10'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer> 
        </Table>
        </div>
    );
}