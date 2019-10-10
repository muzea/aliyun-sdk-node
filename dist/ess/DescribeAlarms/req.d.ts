interface DescribeAlarmsRequest {
    "RegionId": string;
    "OwnerId"?: number;
    "ScalingGroupId"?: string;
    "AlarmTaskId"?: string;
    "State"?: string;
    "IsEnable"?: boolean;
    "MetricType"?: string;
    "PageSize"?: number;
    "PageNumber"?: number;
}
export { DescribeAlarmsRequest };