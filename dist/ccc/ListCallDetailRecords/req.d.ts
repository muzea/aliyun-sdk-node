interface ListCallDetailRecordsRequest {
    "RegionId"?: string;
    "InstanceId": string;
    "PageNumber": number;
    "PageSize": number;
    "PhoneNumber"?: string;
    "StartTime"?: number;
    "StopTime"?: number;
    "Criteria"?: string;
    "ContactType"?: string;
    "ContactDisposition"?: string;
    "WithRecording"?: boolean;
    "ContactId"?: string;
    "OrderBy"?: string;
}
export { ListCallDetailRecordsRequest };