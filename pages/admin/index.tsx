import {
  Admin,
  Resource,
  Datagrid,
  TextField,
  Login,
  List,
  ReferenceArrayField,
  SingleFieldList,
  ChipField,
  EditButton,
  SimpleForm,
  Edit,
  SingleForm,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  Create,
} from "react-admin";
import { useDataProvider } from "@ra-data-prisma/dataprovider";

export const UserList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="email" />
      <EditButton />
    </Datagrid>
  </List>
);
export const UserEdit = (props) => (
  <Edit title={"User - Edit"} {...props} undoable={false}>
    <SimpleForm variant="outlined" onSubmit={() => {}}>
      <TextInput source="name" />
      <TextInput source="city" />
    </SimpleForm>
  </Edit>
);

export const UserCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="city" />
    </SimpleForm>
  </Create>
);

const App = () => {
  const dataProvider = useDataProvider({
    clientOptions: { uri: "http://localhost:3000/api/graphql" },
  });

  if (!dataProvider) {
    return <div>Loading</div>;
  }

  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="User"
        list={UserList}
        edit={UserEdit}
        create={UserCreate}
      />
    </Admin>
  );
};

export default App;
