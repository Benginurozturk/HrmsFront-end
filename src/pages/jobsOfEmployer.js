import React, {useEffect, useState} from 'react';
import {Table} from "semantic-ui-react";
import {EmployerService} from "../../src/services/";

function JobsOfEmployer(props) {

    const [jobAdvertisement, setJobAdvertisement] = useState([]);

    useEffect(() => {
        let employerService = new EmployerService();
        employerService.getJobs().then(result => setJobAdvertisement(result.data.data));
    }, []);

    return (

        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Pozisyon</Table.HeaderCell>
                        <Table.HeaderCell>Açık Pozisyon Adedi</Table.HeaderCell>
                        <Table.HeaderCell>Oluşturma Tarihi</Table.HeaderCell>
                        <Table.HeaderCell>Son Başvuru</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>

                    {jobAdvertisement.map((jobAdvertisement) => (
                        <Table.Row key={jobAdvertisement.id}>
                            <Table.Cell>{jobAdvertisement.jobTitleName}</Table.Cell>
                            <Table.Cell>{jobAdvertisement.openTitleCount}</Table.Cell>
                            <Table.Cell>{jobAdvertisement.createdDate}</Table.Cell>
                            <Table.Cell>{jobAdvertisement.deadline}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
    );
}

export default JobsOfEmployer;