import React from 'react'
import { Grid } from 'semantic-ui-react'
import Login from '../../pages/auth/Login'
import Register from '../../pages/auth/Register'
import Sidebar from '../Sidebar'
import { Route } from 'react-router'
import CreateAdvertisement from '../../pages/createAdvertisement'
import JobTitleList from '../../pages/jobTitleList'
import JobsOfEmployer from '../../pages/jobsOfEmployer'
import EmployerList from '../../pages/employers/employerList'
import ResumeList from '../../pages/resumeMain/resumeList'
import ResumeDetail from '../../pages/resumeMain/resumeDetail'
import JobSeekerList from '../../pages/jobSeekers/jobSeekerList'
import Footer from '../../layouts/Footer'
import ProfileInfo from '../../pages/auth/ProfileInfo'


export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Sidebar />
                    </Grid.Column>
                    <Grid.Column width={12}>
                      
                        <Route exact path="/jobsOfEmployers" component={JobsOfEmployer} />
                        <Route exact path="/" component={CreateAdvertisement} />
                        <Route exact path="/jobSeekers" component={JobSeekerList} />
                        <Route exact path="/resumes" component={ResumeList} />
                        <Route exact path="/resumes/:jobSeekerId" component={ResumeDetail} />
                        <Route exact path="/employers" component={EmployerList} />
                        <Route exact path="/jobTitles" component={JobTitleList} />
                        <Route exact path="/giris-yap" component={Login} />
                        <Route exact path="/kayit-ol" component={Register} />
                        <Route exact path="/profil" component={ProfileInfo}/>
                        
                    </Grid.Column>
                        <Footer/>
             </Grid.Row>
             </Grid>
        </div>
    )
}