import React, { useEffect, useState } from "react";
import { Icon, Menu, Table, Header } from 'semantic-ui-react'
import {JobTitleService} from '../services'


export default function JobTitleList() {

    const [jobTitles, setJobTitles] = useState([])

    useEffect(() => {
        let jobTitleService = new JobTitleService()
        jobTitleService.getJobTitles().then(result => setJobTitles(result.data.data))
    }, [])

    return (
        <div>
            <Header as="h1">
                <Icon name="briefcase" />
                <Header.Content> Job Titles </Header.Content>
            </Header>
            <Table celled textAlign="center">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Job Title</Table.HeaderCell>
                        <Table.HeaderCell>Job Advertisements</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body> {

                        jobTitles.map((jobTitle) => (
                        <Table.Row key={jobTitle.id}>
                            <Table.Cell>{jobTitle.title}</Table.Cell>
                            <Table.Cell>Show Advertisements</Table.Cell>
                        </Table.Row>
                    ))

                }
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
    )

}