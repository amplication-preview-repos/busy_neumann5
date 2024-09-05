import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ConversationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
