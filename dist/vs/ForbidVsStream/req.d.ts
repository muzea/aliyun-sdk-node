interface ForbidVsStreamRequest {
    "RegionId"?: string;
    "AppName": string;
    "StreamName": string;
    "LiveStreamType": string;
    "OwnerId"?: number;
    "ShowLog"?: string;
    "DomainName": string;
    "Oneshot"?: string;
    "ControlStreamAction"?: string;
    "ResumeTime"?: string;
}
export { ForbidVsStreamRequest };