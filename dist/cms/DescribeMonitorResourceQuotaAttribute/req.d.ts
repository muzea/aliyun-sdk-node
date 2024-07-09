export interface DescribeMonitorResourceQuotaAttributeRequest {
    /**
     * 返回值是否包含已使用配额。取值：
     * - true（默认值）：包含。
     * - false：不包含。
     * @example `true`
     */
    "ShowUsed"?: boolean;
}
