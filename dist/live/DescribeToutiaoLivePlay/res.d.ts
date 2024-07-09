export interface DescribeToutiaoLivePlayResponse {
    Description: string;
    RequestId: string;
    Content: {
        Domain: string;
        Bandwidth: number;
        StreamName: string;
        App: string;
        PlayNum: number;
        Timestamp: number;
        CdnName: string;
    }[];
}
