import Amplify, { API } from 'aws-amplify';

Amplify.configure({
    API: {
        endpoints: [
            {
                name: "iAccountingApi",
                endpoint: "https://b3g4ozaf1k.execute-api.ap-northeast-1.amazonaws.com/Prod"
            }
        ]
    }
});