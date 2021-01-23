const config = {
    // for upload bill function later
    // s3: {
    //     REGION: "YOUR_S3_UPLOADS_BUCKET_REGION",
    //     BUCKET: "YOUR_S3_UPLOADS_BUCKET_NAME",
    // },
    apiGateway: {
        REGION: "ap-northeast-1",
        URL: "https://2viuctci5e.execute-api.ap-northeast-1.amazonaws.com/dev",
    },
    cognito: {
        REGION: "ap-northeast-1",
        USER_POOL_ID: "ap-northeast-1_LKoMhIXCA",
        APP_CLIENT_ID: "5q905asn897h3lblb4qo7rndjc",
        IDENTITY_POOL_ID: "26bf39cb-895a-43fa-bde6-30bc796060e2",
    },
};

export default config;
