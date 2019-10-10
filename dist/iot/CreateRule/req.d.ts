interface CreateRuleRequest {
    "RegionId"?: string;
    "IotInstanceId"?: string;
    "Name": string;
    "Select"?: string;
    "ShortTopic"?: string;
    "Where"?: string;
    "ProductKey"?: string;
    "RuleDesc"?: string;
    "DataType"?: string;
    "TopicType"?: number;
}
export { CreateRuleRequest };