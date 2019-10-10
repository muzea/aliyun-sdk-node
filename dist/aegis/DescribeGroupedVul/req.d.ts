interface DescribeGroupedVulRequest {
    "RegionId"?: string;
    "SourceIp"?: string;
    "Lang"?: string;
    "Type"?: string;
    "GroupId"?: string;
    "CveId"?: string;
    "Uuids"?: string;
    "Name"?: string;
    "AliasName"?: string;
    "PatchId"?: number;
    "Level"?: string;
    "LastTsStart"?: number;
    "LastTsEnd"?: number;
    "StatusList"?: string;
    "OrderBy"?: string;
    "Direction"?: string;
    "Necessity"?: string;
    "Dealed"?: string;
    "CreateTsStart"?: number;
    "CreateTsEnd"?: number;
    "CurrentPage"?: number;
    "PageSize"?: number;
}
export { DescribeGroupedVulRequest };