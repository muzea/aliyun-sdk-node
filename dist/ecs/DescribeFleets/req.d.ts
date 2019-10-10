interface DescribeFleetsRequest {
    "RegionId": string;
    "OwnerId"?: number;
    "PageNumber"?: number;
    "PageSize"?: number;
    "FleetName"?: string;
    "FleetId"?: string[];
    "FleetStatus"?: string[];
}
export { DescribeFleetsRequest };