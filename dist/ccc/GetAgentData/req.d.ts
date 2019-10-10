interface GetAgentDataRequest {
    "RegionId"?: string;
    "InstanceId": string;
    "StartDay": string;
    "EndDay": string;
    "PageNumber": number;
    "PageSize": number;
    "UserId"?: string;
}
export { GetAgentDataRequest };