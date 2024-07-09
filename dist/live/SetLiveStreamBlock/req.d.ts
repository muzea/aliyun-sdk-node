export interface SetLiveStreamBlockRequest {
    "DomainName": string;
    "AppName": string;
    "StreamName": string;
    "BlockType": string;
    "LocationList": string;
    "ReleaseTime"?: string;
}
