interface BatchForbidVsStreamRequest {
    "RegionId"?: string;
    "Channel": string;
    "LiveStreamType": string;
    "OwnerId"?: number;
    "ShowLog"?: string;
    "DomainName": string;
    "Oneshot"?: string;
    "ControlStreamAction"?: string;
    "ResumeTime"?: string;
}
export { BatchForbidVsStreamRequest };