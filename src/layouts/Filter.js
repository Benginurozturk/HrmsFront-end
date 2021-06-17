import React, { useState, useEffect } from "react";
import { Nav, Sidenav, Dropdown, Icon } from "rsuite";
import CityService from "../services/cityService";
import { JobTitleService } from "../services";


export default function Filter() {
  const [citys, setCitys] = useState([]);
  const [jobTitles, setJobTitles] = useState([]);
  useEffect(() => {
    let cityService = new CityService();
    let jobTitleService = new JobTitleService();
    cityService.getAll().then((res) => setCitys(res.data.data));
    jobTitleService
      .getJobTitles()
      .then((res) => setJobTitles(res.data.data));
  }, []);

  return (
    <div style={{ width: 250 }}>
      <Sidenav activeKey="1">
        <Sidenav.Body>
          <Nav>
            <Nav.Item id="filter" eventKey="1" icon={<Icon icon="filter" />}>
              Filtrele
            </Nav.Item>

            <Dropdown
              eventKey="2"
              title="Şehirler"
              icon={<Icon icon="globe2" />}
            >
              {citys.map((city) => (
                <Dropdown.Item key={city.id} eventKey={'"3-' + city.id + '"'}>
                  {city.name}
                </Dropdown.Item>
              ))}
            </Dropdown>

            <Dropdown
              eventKey="3"
              title="Pozisyon"
              icon={<Icon icon="vcard-o" />}
            >
              {jobTitles.map((job) => (
                <Dropdown.Item key={job.id} eventKey={'"3-' + job.id + '"'}>
                  {job.title}
                </Dropdown.Item>
              ))}
            </Dropdown>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
}