interface QueryEdgeInstanceHistoricDeploymentRequest {
    "RegionId"?: string;
    "CurrentPage": number;
    "PageSize": number;
    "InstanceId": string;
    "IotInstanceId"?: string;
    "StartTime"?: number;
    "EndTime"?: number;
}
export { QueryEdgeInstanceHistoricDeploymentRequest };