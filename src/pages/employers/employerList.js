import React, { useEffect, useState } from "react";
import { Icon, Menu, Table, Header } from 'semantic-ui-react'
import {EmployerService} from "../../services"


export default function EmployerList() {

    const [employers, setEmployers] = useState([])

    useEffect(() => {
        let employerService = new EmployerService()
        employerService.getEmployers().then(result => setEmployers(result.data.data))
    }, [])

    return (
        <div>   
            <Header as="h1">
                <Icon name="building outline" color="blue"/>
                <Header.Content> Employers </Header.Content>
            </Header>
            <Table celled textAlign="center">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Company Name</Table.HeaderCell>
                        <Table.HeaderCell>Web Address</Table.HeaderCell>
                        <Table.HeaderCell>Phone No</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body> {

                    employers.map((employer) => (
                        <Table.Row key={employer.id}>
                            <Table.Cell>{employer.companyName}</Table.Cell>
                            <Table.Cell>{employer.webAddress}</Table.Cell>
                            <Table.Cell>{employer.phoneNo}</Table.Cell>
                            <Table.Cell>{employer.email}</Table.Cell>
                        </Table.Row>
                    ))

                }
                </Table.Body>

                <Table.Footer >
                    <Table.Row>
                        <Table.HeaderCell colSpan='10'>
                            <Menu pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' color="purple" />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' color="purple" />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )

}