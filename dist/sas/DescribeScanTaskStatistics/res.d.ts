export interface DescribeScanTaskStatisticsResponse {
    /**
     * 总任务数量。
     * @example `11`
     */
    TotalTaskNum: number;
    /**
     * 用户的风险数量。
     * @example `11`
     */
    UserNum: number;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `765EDBDE-1686-5DBA-B76F-2E0XXXXXXX`
     */
    RequestId: string;
    /**
     * 用户已处理的风险数量。
     * @example `11`
     */
    DealedRiskNum: number;
    /**
     * 用户的总任务数量。
     * @example `11`
     */
    PersonalTaskNum: number;
}
