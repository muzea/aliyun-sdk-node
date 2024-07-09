export interface DescribeLiveGrtnDurationResponse {
    RequestId: string;
    StreamDetailData: {
        StreamData: {
            AppId: string;
            Duration: number;
            MediaProfile: string;
            MediaType: string;
            TimeStamp: string;
        }[];
    };
}
