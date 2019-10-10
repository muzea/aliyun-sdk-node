interface ListDashboardRequest {
    "RegionId"?: string;
    "InstanceId": string;
    "StartDate": number;
    "EndDate": number;
    "TraceId": string;
    "SceneId": string;
    "Page"?: number;
    "Size"?: number;
}
export { ListDashboardRequest };