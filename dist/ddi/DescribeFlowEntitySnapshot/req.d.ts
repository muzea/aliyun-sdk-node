export interface DescribeFlowEntitySnapshotRequest {
    "RegionId": string;
    "Limit"?: number;
    "PageNumber"?: number;
    "PageSize"?: number;
    "CurrentSize"?: number;
    "PageCount"?: number;
    "OrderField"?: string;
    "OrderMode"?: string;
    "CommitterId"?: string;
    "EntityType"?: string;
    "EntityGroupId"?: string;
    "EntityId"?: string;
    "Revision"?: string;
}
