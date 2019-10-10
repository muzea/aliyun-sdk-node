interface ModifyScalingRuleRequest {
    "RegionId": string;
    "ScalingRuleId": string;
    "ClusterId": string;
    "HostGroupId": string;
    "RuleName": string;
    "AdjustmentType"?: string;
    "AdjustmentValue"?: number;
    "Cooldown"?: number;
    "LaunchTime"?: string;
    "LaunchExpirationTime"?: number;
    "RecurrenceType"?: string;
    "RecurrenceValue"?: string;
    "RecurrenceEndTime"?: string;
    "SchedulerTrigger"?: string[];
    "CloudWatchTrigger"?: string[];
}
export { ModifyScalingRuleRequest };