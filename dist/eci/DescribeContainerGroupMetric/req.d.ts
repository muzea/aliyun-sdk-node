interface DescribeContainerGroupMetricRequest {
    "RegionId": string;
    "ContainerGroupId": string;
    "OwnerId"?: number;
    "StartTime"?: string;
    "EndTime"?: string;
    "Period"?: string;
}
export { DescribeContainerGroupMetricRequest };