interface CreateConferenceRequest {
    "RegionId"?: string;
    "AppId": string;
    "ClientToken": string;
    "OwnerId"?: number;
    "ConferenceName"?: string;
    "StartTime"?: string;
    "Type"?: string;
    "RemindNotice"?: number;
}
export { CreateConferenceRequest };