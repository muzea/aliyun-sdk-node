export interface DescribeLiveDelayedStreamingUsageResponse {
    DelayData: {
        DelayDataItem: {
            DomainName: string;
            Duration: number;
            Region: string;
            StreamName: string;
            TimeStamp: string;
        }[];
    };
    EndTime: string;
    RequestId: string;
    StartTime: string;
}
