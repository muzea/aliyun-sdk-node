interface SetLiveStreamDelayConfigRequest {
    "RegionId"?: string;
    "OwnerId"?: number;
    "DomainName": string;
    "HlsDelay"?: number;
    "HlsLevel"?: string;
    "FlvDelay"?: number;
    "FlvLevel"?: string;
    "RtmpDelay"?: number;
    "RtmpLevel"?: string;
}
export { SetLiveStreamDelayConfigRequest };