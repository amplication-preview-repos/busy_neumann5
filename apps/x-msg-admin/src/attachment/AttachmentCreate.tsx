import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const AttachmentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="fileType" source="fileType" />
        <TextInput label="fileUrl" source="fileUrl" />
      </SimpleForm>
    </Create>
  );
};
