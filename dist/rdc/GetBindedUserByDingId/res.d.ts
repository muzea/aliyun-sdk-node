interface GetBindedUserByDingIdResponse {
    "result": {
        "isValid": boolean;
        "id": number;
        "uuid": string;
        "mainAccountType": string;
        "aliyunUser": {
            "id": number;
            "nickName": string;
            "email": string;
            "kp": string;
            "head": string;
            "taobaoNick": string;
            "codeUserName": any;
            "aliyunId": string;
            "havanaId": string;
            "accountStructure": number;
            "realname": any;
            "parentPk": string;
            "partnerPk": string;
        };
        "dingtalkUser": any;
        "antFinanialUserDTO": any;
        "userProfileDTO": {
            "userId": number;
            "name": any;
            "englishName": string;
            "nickName": string;
            "mobile": string;
            "email": string;
            "avatar": string;
            "dataSource": string;
            "codeAccount": any;
            "weibo": any;
            "aliWW": any;
            "tbWW": any;
            "qq": any;
            "userOuterId": any;
            "createdAt": number;
        };
        "ddcUser": any;
        "internalUser": any;
        "ldapUserDTO": any;
        "avatar": any;
        "nickName": string;
        "guid": string;
    };
    "success": boolean;
    "errorCode": any;
    "message": any;
}
export { GetBindedUserByDingIdResponse };