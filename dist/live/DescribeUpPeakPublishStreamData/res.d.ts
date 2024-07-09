export interface DescribeUpPeakPublishStreamDataResponse {
    RequestId: string;
    DescribeUpPeakPublishStreamDatas: {
        DescribeUpPeakPublishStreamData: {
            QueryTime: string;
            BandWidth: string;
            StatName: string;
            PeakTime: string;
            PublishStreamNum: number;
        }[];
    };
}
