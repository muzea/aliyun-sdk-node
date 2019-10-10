interface DescribeContainerGroupsRequest {
    "RegionId": string;
    "OwnerId"?: number;
    "ZoneId"?: string;
    "VSwitchId"?: string;
    "NextToken"?: string;
    "Limit"?: number;
    "Tag"?: string[];
    "ContainerGroupIds"?: string;
    "ContainerGroupName"?: string;
    "Status"?: string;
}
export { DescribeContainerGroupsRequest };