export interface DescribeVulDefendCountStatisticsResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `CE500770-42D3-442E-9DDD-156E0F9F3B45`
     */
    RequestId: string;
    /**
     * 已防护的漏洞数。
     * @example `10`
     */
    RaspDefendedCount: number;
    /**
     * 可防护的漏洞数。
     * @example `100`
     */
    RaspDefensibleCount: number;
}
