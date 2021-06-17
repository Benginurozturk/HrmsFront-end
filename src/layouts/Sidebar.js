import React from 'react'
import { Menu, Icon } from 'semantic-ui-react'

export default function Sidebar() {
    return (
        <div>
            <Menu icon='labeled' vertical>
                <Menu.Item
                    name='jobSeekers'
                >
                    <Icon name='users' /> JobSeekers
                </Menu.Item>
                <Menu.Item
                    name='employers'
                >
                    <Icon name='building outline' />  Employers
                </Menu.Item>

                <Menu.Item
                    name='jobsOfEmployers'
                >
                    <Icon name='announcement' /> JobsOfEmployer
                </Menu.Item>
                <Menu.Item
                    name='jobtitles'
                >
                    <Icon name='briefcase' /> Job Titles
                </Menu.Item>
            </Menu>
        </div>
    )
}