# _JIRA_ - _Github_ Smart Commit Automation

### Basic steps to use VSCode and automate the flow in _JIRA_ using _SmartCommit commands_

> <span> Before you begin make sure you download the [Atlassian _JIRA_ Extension](https://marketplace.visualstudio.com/items?itemName=Atlassian.atlascode) (Also added to our recommended list of extensions).
> </span>

## <span style="color:lightgreen">_JIRA_ Extension Settings</span>

- Click on the _JIRA_ extension and make sure you turn off _Bitbucket_ settings & leave _Jira_ settings enabled.

> ![Settings](https://i.ibb.co/zVT3VZ3/Screen-Shot-2021-03-14-at-8-20-04-PM.png)

---

## You can make changes to your _JIRA_ tasks in 2 situations/ways:

1. Make changes to your tasks (Ex: Add description, Change Status and so on...)
2. Transition stories from one column to another when pushing code changes to _GITHUB_

## 1. Make changes to JIRA tasks from VSCode

- Click on the _JIRA_ Extension and then click on _JIRA_ issues tab.
- You'll see that the tasks are arranged in a hierarchy shown below:

|     |     | <img src="https://i.ibb.co/HgrzDZv/Screen-Shot-2021-03-14-at-8-49-26-PM.png" alt="Example of Hierarchy" width="300"/> |
| :-: | :-: | :-------------------------------------------------------------------------------------------------------------------: |

---

- Select your story and it'll look something like this.

<img src="https://i.ibb.co/v15hngH/Screen-Shot-2021-03-14-at-9-10-53-PM.png" alt="JIRA View" width="800"/>

---

## 2. Transition story from column to another when pushing changes to Github

- In order to move your stories from one column to another, you can do so using the message prompt in VSCode or using command line while pushing your changes.

- ```md
  Syntax : <Task-number> #<New_Column_Name> #comment "Commit Message"

  Example:
  To transition task ATP-52 from it's current state (whatever that may be) to testing, the syntax would be.
  ATP-52 #testing #comment "Testing the changes"
  ```

- Valid values for transition columns are
  - to-do
  - in-progress
  - testing
  - done
