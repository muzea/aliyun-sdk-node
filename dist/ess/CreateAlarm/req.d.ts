interface CreateAlarmRequest {
    "RegionId": string;
    "ScalingGroupId": string;
    "MetricName": string;
    "Threshold": number;
    "OwnerId"?: number;
    "Name"?: string;
    "Description"?: string;
    "AlarmAction"?: string[];
    "MetricType"?: string;
    "Period"?: number;
    "Statistics"?: string;
    "ComparisonOperator"?: string;
    "EvaluationCount"?: number;
    "Dimension"?: string[];
    "GroupId"?: number;
}
export { CreateAlarmRequest };