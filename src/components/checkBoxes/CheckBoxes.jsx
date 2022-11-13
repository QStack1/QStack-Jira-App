import ForgeUI, { useAction, Fragment,
    Text, CheckboxGroup, Checkbox, Form, Button
  } from '@forge/ui';
    
  export const Checks = () => {
    const [count, setCount] = useAction(
      (currentCount, step) => currentCount + step,
      0
    );
    // BASE_URL: 'https://qsServer.kemalsekic1.repl.co'
    
    return (
      <Fragment>
        <Text content={`Count is ${count}`}></Text>
        <Button text="Add one" onClick={() => {}}></Button>
        <Form onSubmit={() => {}}>        
          <Text>Hello Jira!</Text>
          <CheckboxGroup label="Points" name="points">
            <Checkbox value="0" label="0" />
            <Checkbox value="1" label="1" />
            <Checkbox value="2" label="2" />
          </CheckboxGroup>
          <Button text="Add One" onClick={() => {
            setCount(1);
          }}></Button>
        </Form>
      </Fragment>
    );
  };
  
//   export const run = render(
//     <IssuePanel>
//       <App />
//     </IssuePanel>
//   );
  