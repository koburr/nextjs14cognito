import { ResourcesConfig } from "aws-amplify";

const amplifyConfig: ResourcesConfig = {
    Auth: {
      Cognito: {
        userPoolClientId: '4qj21bhqutgnl458t1s51ct0ke',
        userPoolId: 'ap-southeast-2_DRajR8ukj',
        }
      }
    }

export default amplifyConfig;
