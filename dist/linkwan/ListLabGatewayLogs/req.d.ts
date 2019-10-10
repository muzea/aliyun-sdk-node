interface ListLabGatewayLogsRequest {
    "RegionId"?: string;
    "GwEui": string;
    "BeginMillis": number;
    "EndMillis": number;
    "PageNumber": number;
    "PageSize": number;
    "DevEui"?: string;
}
export { ListLabGatewayLogsRequest };