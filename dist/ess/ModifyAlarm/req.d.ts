interface ModifyAlarmRequest {
    "RegionId": string;
    "AlarmTaskId": string;
    "OwnerId"?: number;
    "Name"?: string;
    "Description"?: string;
    "AlarmAction"?: string[];
    "MetricName"?: string;
    "MetricType"?: string;
    "Period"?: number;
    "Statistics"?: string;
    "Threshold"?: number;
    "ComparisonOperator"?: string;
    "EvaluationCount"?: number;
    "GroupId"?: number;
    "Dimension"?: string[];
}
export { ModifyAlarmRequest };