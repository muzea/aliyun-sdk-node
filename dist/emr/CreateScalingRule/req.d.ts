interface CreateScalingRuleRequest {
    "RegionId": string;
    "ClusterId": string;
    "HostGroupId": string;
    "RuleCategory": string;
    "RuleName": string;
    "AdjustmentType": string;
    "AdjustmentValue": number;
    "Cooldown"?: number;
    "LaunchTime"?: string;
    "LaunchExpirationTime"?: number;
    "RecurrenceType"?: string;
    "RecurrenceValue"?: string;
    "RecurrenceEndTime"?: string;
    "SchedulerTrigger"?: string[];
    "CloudWatchTrigger"?: string[];
}
export { CreateScalingRuleRequest };