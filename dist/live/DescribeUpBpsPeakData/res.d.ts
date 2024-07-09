export interface DescribeUpBpsPeakDataResponse {
    RequestId: string;
    DescribeUpPeakTraffics: {
        DescribeUpPeakTraffic: {
            QueryTime: string;
            BandWidth: string;
            StatName: string;
            PeakTime: string;
        }[];
    };
}
