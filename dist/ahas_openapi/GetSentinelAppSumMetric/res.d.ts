export interface GetSentinelAppSumMetricResponse {
    Message: string;
    RequestId: string;
    Code: string;
    Success: boolean;
    MetricData: {
        AppName: string;
        PassCount: number;
        MachineCount: number;
        AvgRt: number;
        UserId: string;
        Namespace: string;
        TotalCount: number;
        BlockCount: number;
    };
}
