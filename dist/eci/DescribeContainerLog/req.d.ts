interface DescribeContainerLogRequest {
    "RegionId": string;
    "ContainerGroupId": string;
    "ContainerName": string;
    "OwnerId"?: number;
    "StartTime"?: string;
    "Tail"?: number;
}
export { DescribeContainerLogRequest };