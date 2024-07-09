export interface DescribeMeterLiveRtcDurationResponse {
    AudioSummaryDuration: number;
    Data: {
        AudioDuration: number;
        Timestamp: string;
        TotalDuration: number;
        V480Duration: number;
        V720Duration: number;
        V1080Duration: number;
    }[];
    RequestId: string;
    TotalSummaryDuration: number;
    V480SummaryDuration: number;
    V720SummaryDuration: number;
    V1080SummaryDuration: number;
}
