interface GetOpLogRequest {
    "RegionId"?: string;
    "Tid": number;
    "StartTime": string;
    "EndTime": string;
    "PageSize": number;
    "PageNumber": number;
    "Module"?: string;
}
export { GetOpLogRequest };