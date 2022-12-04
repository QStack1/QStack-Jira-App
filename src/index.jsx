import ForgeUI, { render, IssuePanel } from '@forge/ui';
import api, { route } from '@forge/api';
import { Checks } from "./components/checkBoxes/CheckBoxes";

export const runChecks = render(
    <IssuePanel>
      <Checks />
    </IssuePanel>);

export const runValidator = async ({ issue, transition: { from, to } }) => {
  const response = await api.asApp().requestJira(route `/rest/api/3/issue/${issue.key}`);
  const data = await response.json();

  // const userResponse = await api.asUser().requestJira(route`/rest/api/3/user?accountId=61ccb72dce3652006a6ec2a2`, {
  //   headers: {
  //     'Accept': 'application/json'
  //   }
  // });
  // const userData = await userResponse.json();

  const allUsersResponse = await api.requestJira(route`/rest/api/3/users`, {
    headers: {
      'Accept': 'application/json'
    }
  });
  const allUsersData = await allUsersResponse.json();

  // JSON.stringify(usersEmail);


  var bodyData = `{
    "visibility": "public",
    "isEnabled": true,
    "isDismissible": false,
    "message": "This is a public, enabled, non-dismissible banner, set using the API.  Configured by QStack."
  }`;
  

  const bannerResponse = await api.asUser().requestJira(route`/rest/api/3/announcementBanner`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: bodyData
  });
  // let bannerData = await bannerResponse.json();
  let overrunPercentage = ((data.fields.timespent - data.fields.timeoriginalestimate) / data.fields.timeoriginalestimate) * 100;

  if (overrunPercentage >= 10){
    return {
      result: false,
      errorMessage: `Issue ${issue.key} exceeds it's estimate by ${overrunPercentage}%. User Data: ${allUsersData[0]}`,
    }
  }
};