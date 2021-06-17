import React, {useEffect, useState} from 'react';
import {Formik} from "formik";
import {Button, Checkbox, Dimmer, Form, Header, Icon, Input, Label, Select, TextArea} from "semantic-ui-react";
import SemanticFormikField from "../../src/components/SemanticFormikField";
import yup from "../../src/configurasyon/yup";
import {CityService,JobTitleService,JobTypeService,JobAdvertisementService} from "../services"



let schema = yup.object().shape({
    description: yup.string().required().label('İş Tanımı'),
    openTitleCount: yup.number().required().positive().integer().label('Pozisyon Sayısı'),
    minSalary: yup.number().label('Min Maaş'),
    maxSalary: yup.number().label('Max Maaş'),
    remote: yup.boolean(),
    deadline: yup.date().required().min(new Date()).label('Son Başvuru Tarihi'),
    jobTitleId: yup.number().required().label('İş Pozisyonu'),
    jobTypeId: yup.number().required().label('İş Türü'),
    cityId: yup.number().required().positive().integer().label('Şehir'),
});

let initialValues = {
    description: '',
    openTitleCount: '',
    minSalary: '',
    maxSalary: '',
    remote: false,
    deadline: '',
    jobTitleId: '',
    jobTypeId: '',
    cityId: ''
};

function CreateAdvertisement() {

    const [active, setActive] = useState(false);
    const [jobTitleOptions, setJobTitleOptions] = useState([]);
    const [jobTypeOptions, setJobTypeOptions] = useState([]);
    const [cityOptions, setCityOptions] = useState([]);

    useEffect(() => {
        let jobTitleService = new JobTitleService();
        jobTitleService.getAll().then(result => {
            setJobTitleOptions(result.data.data.map(jp => ({key: jp.id, value: jp.id, text: jp.name})));
        })

        let jobTypeService = new JobTypeService();
        jobTypeService.getAll().then(result => {
            setJobTypeOptions(result.data.data.map(jt => ({key: jt.id, value: jt.id, text: jt.name})));
        })

        let cityService = new CityService();
        cityService.getAll().then(result => {
            setCityOptions(result.data.data.map(c => ({key: c.id, value: c.id, text: c.name})));
        })
    }, []);


    return (
        <div>

            <Header as='h1'>İş İlanı Ekle</Header>

            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values, {setSubmitting, resetForm}) => {
                    let jobAdvertisementService= new JobAdvertisementService();
                    jobAdvertisementService.add(values)
                        .then(result => {
                            if (result.data.success) {
                                setActive(true);
                                setSubmitting(false);
                                resetForm()
                            } else {
                                alert(result.data.message)
                            }
                        })
                        .catch((error) => {
                            alert(error.response?.data?.message ?? error)
                        });
                }}
            >
                {({
                      values,
                      touched,
                      errors,
                    
                      isSubmitting,
                      handleSubmit,
                      handleReset,
                      setFieldValue,
                      handleChange
                  }) => (

                    <Form onSubmit={handleSubmit}>

                        <Form.Group widths='equal'>

                            <SemanticFormikField
                                control={Select}
                                options={jobTitleOptions}
                                label={{children: 'İş Pozisyonu', htmlFor: 'form-select-control-job-position'}}
                                placeholder='İş Pozisyonu'
                                search
                                searchInput={{id: 'form-select-control-job-position'}}
                                className="required"
                                name="jobTitleId"
                                value={values.jobTitleId}
                            />

                            <SemanticFormikField
                                control={Select}
                                options={jobTypeOptions}
                                label={{children: 'İş Türü', htmlFor: 'form-select-control-job-type'}}
                                placeholder='İş Türü'
                                search
                                searchInput={{id: 'form-select-control-job-type'}}
                                className="required"
                                name="jobTypeId"
                                value={values.jobTypeId}
                            />

                            <SemanticFormikField
                                control={Select}
                                options={cityOptions}
                                label={{children: 'Şehir', htmlFor: 'form-select-control-city'}}
                                placeholder='Şehir'
                                search
                                searchInput={{id: 'form-select-control-city'}}
                                className="required"
                                name="cityId"
                                value={values.cityId}
                            />

                        </Form.Group>

                        <Form.Group widths='equal'>

                            <SemanticFormikField
                                control={Input}
                                label='Pozisyon Sayısı'
                                placeholder='Pozisyon Sayısı'
                                className="required"
                                type="number"
                                name="numberOfPositions"
                                value={values.numberOfPositions}
                            />

                            <Form.Field error={!!(touched.minSalary && errors.minSalary)}>
                                <label>Min Maaş</label>
                                <Input
                                    label={{basic: true, content: '₺'}}
                                    labelPosition='right'
                                    placeholder='Min Maaş'
                                    type='number'
                                    name="minSalary"
                                    value={values.minSalary}
                                    onChange={handleChange}
                                />
                                {touched.minSalary && errors.minSalary && (
                                    <Label pointing prompt>{errors.minSalary}</Label>
                                )}
                            </Form.Field>

                            <Form.Field error={!!(touched.maxSalary && errors.maxSalary)}>
                                <label>Max Maaş</label>
                                <Input
                                    label={{basic: true, content: '₺'}}
                                    labelPosition='right'
                                    placeholder='Min Maaş'
                                    type='number'
                                    name="maxSalary"
                                    value={values.maxSalary}
                                    onChange={handleChange}
                                />
                                {touched.maxSalary && errors.maxSalary && (
                                    <Label pointing prompt>{errors.maxSalary}</Label>
                                )}
                            </Form.Field>

                        </Form.Group>

                        <SemanticFormikField
                            control={TextArea}
                            label='İş Tanımı'
                            placeholder='İş Tanımı'
                            className="required"
                            name="description"
                            value={values.description}
                        />

                        <Form.Group widths='equal'>

                            <SemanticFormikField
                                control={Input}
                                label='Son Başvuru Tarihi'
                                placeholder='Son Başvuru Tarihi'
                                className="required"
                                type="date"
                                name="closingDate"
                                value={values.closingDate}
                            />

                            <Form.Field/>

                            <Form.Field style={{display: 'flex', justifyContent: 'flex-end'}}>
                                <Form.Field
                                    control={Input}
                                    label='Uzaktan'
                                >
                                    <Checkbox
                                        id='form-input-control-remote'
                                        toggle
                                        name="remote"
                                        checked={values.remote}
                                        onChange={handleChange}
                                    />
                                </Form.Field>

                            </Form.Field>

                        </Form.Group>

                        <Button
                            type="submit"
                            name="active"
                            primary
                            disabled={isSubmitting}
                            onClick={() => {
                                setFieldValue('active', false);
                            }}
                        >
                            Taslak Olarak Kaydet
                        </Button>
                        <Button
                            type="submit"
                            name="approve"
                            disabled={isSubmitting}
                            onClick={() => {
                                setFieldValue('active', true);
                            }}
                        >
                            Onaya Gönder
                        </Button>
                    </Form>
                )}
            </Formik>

            <Dimmer active={active} onClickOutside={() => setActive(false)} page>
                <Header as='h2' icon inverted>
                    <Icon name='check'/>
                    İşlem Başarılı!
                </Header>
            </Dimmer>

        </div>
    );
}

export default CreateAdvertisement;