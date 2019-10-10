interface GetUserSubmissionStatisticInfoRequest {
    "RegionId": string;
    "ClusterId": string;
    "FromDatetime": string;
    "ToDatetime": string;
    "ApplicationType"?: string;
    "FinalStatus"?: string;
}
export { GetUserSubmissionStatisticInfoRequest };