export interface DescribeToutiaoLivePublishResponse {
    Description: string;
    RequestId: string;
    Content: {
        Domain: string;
        StreamName: string;
        App: string;
        Fps: number;
        Flr: number;
        Timestamp: number;
        Bitrate: number;
        BwDiff: number;
        CdnName: string;
    }[];
}
