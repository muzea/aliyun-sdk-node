export interface ReportABMetricGroupResponse {
    /**
     * 请求ID。
     * @example `59CE7EC6-F268-5D71-9215-32922CC50D72`
     */
    RequestId: string;
    /**
     * 实验报表。
     */
    ExperimentReport: any;
    /**
     * 维度字段。
     */
    GroupDimension: string[];
}
