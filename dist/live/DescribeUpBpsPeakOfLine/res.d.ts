export interface DescribeUpBpsPeakOfLineResponse {
    RequestId: string;
    DescribeUpBpsPeakOfLines: {
        DescribeUpBpsPeakOfLine: {
            QueryTime: string;
            StatName: string;
            BandWidth: number;
            PeakTime: string;
        }[];
    };
}
