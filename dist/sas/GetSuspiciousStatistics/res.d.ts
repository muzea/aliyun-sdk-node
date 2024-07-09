export interface GetSuspiciousStatisticsResponse {
    /**
     * 告警级别为可疑的安全告警的数量。
     * @example `8`
     */
    SuspiciousCount: number;
    /**
     * 告警级别为提醒的安全告警的数量。
     * @example `0`
     */
    RemindCount: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `84092B42-1A59-4F34-8DF8-1D93520990A5`
     */
    RequestId: string;
    /**
     * 告警级别为紧急的安全告警的数量。
     * @example `1`
     */
    SeriousCount: number;
    /**
     * 安全告警的总数量。
     * @example `9`
     */
    TotalCount: number;
}
