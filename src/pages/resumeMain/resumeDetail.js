import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {ResumeMainService} from '../../services'
import { Grid, GridColumn,Image, Container, Header, Icon, Divider,Segment, Rating } from 'semantic-ui-react'

export default function ResumeDetail() {

    let {resumeMainId} = useParams()

    const [resumeMain, setResume] = useState({})
    useEffect(() => {
        let resumeMainService = new ResumeMainService()
        resumeMainService.getByResumeMainId(resumeMainId).then(response => setResume(response.data.data))
       
    }, [])

    return (
        <div>
           <Grid>
                <Grid.Row>
                    <GridColumn width={5}>
                        <Container style={{background:"teal", height:"100%"}}>
                            <Image src="https://www.socialbusinesstr.com/wp-content/uploads/2015/11/Linkedin_Profil_Fotografi_Nasil_Olmali.jpg" size="medium" circular />
                            
                            <Header as="h3">Personal</Header>
                            <Container style={{paddingLeft:"10px"}} textAlign="left">
                                <Header as="h4"><Icon name="user"/> Name</Header>
                                <p><b>{resumeMain.jobSeeker.firstName} {resumeMain.jobSeeker.lastName}</b></p>
                                <Header as="h4"> <Icon name="calendar alternate outline"/> Birthday</Header>
                                <p><b>{resumeMain.jobSeeker.birthDate}</b></p>
                                <Header as="h4"><Icon name="at"/> Social</Header>
                                <ul>
                                    <li><b>{resumeMain.githubLink}</b></li>
                                    <li><b>{resumeMain.linkedinLink}</b></li>
                                </ul>
                            </Container>
                        </Container>
                    </GridColumn>

                    <GridColumn width={11}>
                        <Header as="h2"> {resumeMain.jobSeeker.firstName} {resumeMain.jobSeeker.lastName} </Header>
                        <Divider />
                        <Header style={{marginTop:"10px"}} floated="left" as="h3"><Icon name="graduation" /> Education</Header>
                        <br/>
                        <Segment style={{marginTop:"30px"}}>
                            <Grid>
                                {resumeMain.resumeEducations.map((resumeEducation) => (
                                    <Grid.Row>
                                        <Grid.Column width="4">{resumeEducation.startedDate}-{resumeEducation.endedDate}</Grid.Column>
                                        {/* <Grid.Column width="12"><b> {resumeEducation.department} - {school.schoolName} </b></Grid.Column> */}
                                    </Grid.Row>
                                ) )}
                                
                            </Grid>
                        </Segment>

                        <Header style={{marginTop:"10px"}} floated="left" as="h3"><Icon name="briefcase" /> Job Experience</Header>
                        <br/>
                        <Segment style={{marginTop:"30px"}}>
                            <Grid>
                                {resumeMain.resumeExperiences.map((resumeExperience) => (
                                    <Grid.Row>
                                        <Grid.Column width="5">{resumeExperience.startedDate}-{resumeExperience.endedDate}</Grid.Column>
                                        <Grid.Column width="11"><b> {resumeExperience.compnayName} - {resumeExperience.position} </b></Grid.Column>
                                    </Grid.Row>
                                ) )}
                            </Grid>
                        </Segment>
                        <Header style={{marginTop:"10px"}} floated="left" as="h3"><Icon name="code" /> Abilities</Header>
                        <br/>
                        <Segment style={{marginTop:"30px"}} textAlign="left">
                            <ul>
                                {resumeMain.resumeSkills.map((resumeSkill) => (
                                    <li><b>{resumeSkill.skillName}</b></li>
                                ))}
                            </ul>
                        </Segment>

                        <Header style={{marginTop:"10px"}} floated="left" as="h3"><Icon name="language" /> Languages</Header>
                        <br/>
                        <Segment style={{marginTop:"30px"}} textAlign="left">
                            <Grid>
                                {resumeMain.resumeLanguages.map((resumeLanguage) => (
                                    <Grid.Row>
                                        <Grid.Column width="5"><li><b>{resumeLanguage.languageName}</b></li></Grid.Column>
                                        <Grid.Column width="11"><Rating defaultRating={resumeLanguage.level} maxRating={5} disabled /></Grid.Column>
                                    </Grid.Row>
                                ) )}
                            </Grid>
                        </Segment>

                        <Header style={{marginTop:"10px"}} floated="left" as="h3"><Icon name="tag" /> About Me</Header>
                        <br />
                        <Segment style={{marginTop:"30px"}}>
                            
                            <p>{resumeMain.coverLetter}</p>
                    
                        </Segment>
                    </GridColumn>
                </Grid.Row>
           </Grid>
        </div>
    )
}