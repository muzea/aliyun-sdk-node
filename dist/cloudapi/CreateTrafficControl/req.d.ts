interface CreateTrafficControlRequest {
    "RegionId"?: string;
    "TrafficControlUnit": string;
    "ApiDefault": number;
    "TrafficControlName": string;
    "UserDefault"?: number;
    "AppDefault"?: number;
    "Description"?: string;
}
export { CreateTrafficControlRequest };