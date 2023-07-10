import React from "react";
import schema from "./schema.json";
import Metaform from "mui-forms";

function RadioButtonField() {
    return (
        <Metaform
            schema={schema}
            onSubmit={() => {
                // do nothing
            }}
        />
    );
}

export default RadioButtonField;
