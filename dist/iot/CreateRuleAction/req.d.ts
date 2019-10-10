interface CreateRuleActionRequest {
    "RegionId"?: string;
    "Type": string;
    "Configuration": string;
    "IotInstanceId"?: string;
    "RuleId": number;
    "ErrorActionFlag"?: boolean;
}
export { CreateRuleActionRequest };