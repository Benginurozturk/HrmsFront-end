import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import { Segment, Divider, Header, List, ListContent, Icon } from "semantic-ui-react";
import { ResumeMainService } from "../../services";

export default function ResumeList() {

    const [resumeMains, setResumeMains] = useState([])

    useEffect(() => {
        let ResumeMainService = new ResumeMainService()
        ResumeMainService.getAll().then(response => setResumeMains(response.data.data))
       
    }, [])

  return (
    <div>
      <Segment color="violet">
        <Header as="h2" floated="left">
          Resume Main's CV
        </Header>

        <Divider clearing />
        {resumeMains.map((resumeMain) => (
            <Segment key={resumeMain.resumeMainId} color="grey">
            <Header as="h3">{resumeMain.firstName + " " + resumeMain.lastName}</Header>
            <List as={NavLink} to={`/resumes/${resumeMain.resumeMainId}`}>
              <List.Item as="a">
                <List.Content>

                  <List.Header>ResumeSkills <Icon name="check"/></List.Header>
                  <List.Description>
                    {resumeMain.resumeSkills[0]}
                  </List.Description>
                  <br />
                  <List.Header>Cover Letter <Icon name="pencil alternate"/></List.Header>
                  <List.Description>
                    {resumeMain.coverLetter}
                  </List.Description>
                    <br />
                  <List.Header>Social <Icon name="at"/></List.Header>
                  <List.Description>
                    <p><Icon name="github"/><b>{resumeMain.githubLink}</b></p>
                    <Icon name="linkedin"/><b>{resumeMain.linkedinLink}</b>
                  </List.Description>
                </List.Content>
        
              </List.Item>
            </List>
          </Segment>
  
        ))}
      </Segment>
    </div>
  );
}