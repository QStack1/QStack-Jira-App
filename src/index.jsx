import ForgeUI, { 
  render, 
  Fragment, 
  Text, 
  IssuePanel, 
  CheckboxGroup, 
  Checkbox,
  Form
} from '@forge/ui';

const App = () => {
  return (
    <Fragment>
      <Form onSubmit={() => {}}>        
        <Text>Hello Jira!</Text>
        <CheckboxGroup label="Points" name="points">
          <Checkbox value="0" label="0" />
          <Checkbox value="1" label="1" />
          <Checkbox value="2" label="2" />
          <Checkbox value="3" label="3" />
          <Checkbox value="5" label="5" />
          <Checkbox value="8" label="8" />
        </CheckboxGroup>
      </Form>
    </Fragment>
  );
};

export const run = render(
  <IssuePanel>
    <App />
  </IssuePanel>
);
