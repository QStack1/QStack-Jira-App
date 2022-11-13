import ForgeUI, { render, IssuePanel } from '@forge/ui';
import { Checks } from "./components/checkBoxes/CheckBoxes";

export const runChecks = render(
    <IssuePanel>
      <Checks />
    </IssuePanel>);

