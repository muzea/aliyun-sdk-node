export interface DescribeDBInstanceUsageResponse {
    /**
     * 实例磁盘的使用情况，包括以下参数：
     * - disk_used：表示磁盘使用量。
     * - disk_total：表示磁盘总量。
     * - usage_rate：表示磁盘使用率。
     * @example `{\"disk_usage_record\":{\"disk_used\":\"0.9GB\",\"disk_total\":\"1156.1GB\",\"usage_rate\":\"1%\"}}`
     */
    Result: string;
    /**
     * 请求ID。
     * @example `A2D841CE-D066-53E8-B9AC-3731DCC85397`
     */
    RequestId: string;
}
