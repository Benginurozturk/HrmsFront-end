import React from 'react';
import {useField} from "formik";
import {Form} from "semantic-ui-react";

function SemanticFormikField(props) {

    const [field, meta, helpers] = useField(props.name);

    return (
        <Form.Field
            {...field}
            {...props}
            onChange={(e, v) => helpers.setValue(v.value)}
            error={meta.touched && meta.error && (meta.error)}
        />
    );
}

export default SemanticFormikField;