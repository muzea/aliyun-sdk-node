interface CreateTemplateRequest {
    "RegionId"?: string;
    "AppId": string;
    "MixMode": number;
    "ServiceMode": number;
    "CallBack": string;
    "MaxMixStreamCount": number;
    "MediaConfig": number;
    "LayOut": string[];
    "RecordConfig": string[];
    "LiveConfig": string[];
    "OwnerId"?: number;
}
export { CreateTemplateRequest };