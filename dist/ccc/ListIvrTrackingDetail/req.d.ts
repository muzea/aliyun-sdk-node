interface ListIvrTrackingDetailRequest {
    "RegionId"?: string;
    "InstanceId": string;
    "PageNumber": number;
    "PageSize": number;
    "ContactId"?: string;
    "StartTime"?: number;
    "StopTime"?: number;
    "CallingNumber"?: string;
    "CalledNumber"?: string;
}
export { ListIvrTrackingDetailRequest };