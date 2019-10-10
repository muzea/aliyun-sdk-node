interface ModifyTrafficControlRequest {
    "RegionId"?: string;
    "TrafficControlId": string;
    "TrafficControlName"?: string;
    "TrafficControlUnit"?: string;
    "ApiDefault"?: number;
    "UserDefault"?: number;
    "AppDefault"?: number;
    "Description"?: string;
}
export { ModifyTrafficControlRequest };