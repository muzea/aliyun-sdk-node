interface PushMessageRequest {
    "RegionId"?: string;
    "Act": string;
    "PkgContent": string;
    "ReceiverType": string;
    "ReceiverValues": string;
    "ProjectId": string;
    "AppKey": string;
    "Type": number;
    "Desc"?: string;
    "Uri"?: string;
    "CustomContent"?: string;
    "ExpiredTime"?: number;
    "Title"?: string;
    "AppPackage": string;
}
export { PushMessageRequest };