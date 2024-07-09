export interface GetOnlineTouchSessionListRequest {
    "ClientToken"?: string;
    "InstanceId": string;
    "GroupIds"?: number[];
    "StartDate": number;
    "EndDate": number;
    "CurrentPage": number;
    "PageSize"?: number;
}
