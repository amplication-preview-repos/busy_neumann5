import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const AttachmentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="fileType" source="fileType" />
        <TextInput label="fileUrl" source="fileUrl" />
      </SimpleForm>
    </Edit>
  );
};
