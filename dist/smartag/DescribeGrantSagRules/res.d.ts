interface DescribeGrantSagRulesResponse {
    "GrantRules": {
        "GrantRule": {
            "CcnInstanceId": string;
            "CcnUid": number;
            "CreateTime": number;
            "InstanceId": number;
            "SmartAGId": string;
        }[];
    };
    "PageNumber": number;
    "PageSize": number;
    "RequestId": string;
    "TotalCount": number;
}
export { DescribeGrantSagRulesResponse };