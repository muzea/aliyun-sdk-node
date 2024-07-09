export interface HotLiveRtcStreamRequest {
    "DomainName": string;
    "AppName": string;
    "StreamName": string;
    "RegionCode": string;
    "AudioMsid": string;
    "VideoMsid": string;
    "ConnectionTimeout"?: string;
    "MediaTimeout"?: string;
}
