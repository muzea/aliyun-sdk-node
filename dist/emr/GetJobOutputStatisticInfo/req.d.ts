interface GetJobOutputStatisticInfoRequest {
    "RegionId": string;
    "ClusterId": string;
    "FromDatetime": string;
    "ToDatetime": string;
    "PageSize"?: number;
    "PageNumber"?: number;
}
export { GetJobOutputStatisticInfoRequest };