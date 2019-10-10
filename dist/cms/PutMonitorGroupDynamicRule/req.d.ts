interface PutMonitorGroupDynamicRuleRequest {
    "RegionId"?: string;
    "GroupRules": string[];
    /**
    * 应用分组ID。
    * @example `1234`
    */ "GroupId": number;
}
export { PutMonitorGroupDynamicRuleRequest };