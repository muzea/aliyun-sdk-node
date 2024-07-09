export interface PageableQueryExperimentTaskByClusterIdRequest {
    "ClusterId"?: string;
    "Page"?: number;
    "Size"?: number;
    "Namespace"?: string;
    "RegionId"?: string;
    "AhasRegionId"?: string;
    "IncludeInvalidHost"?: boolean;
}
