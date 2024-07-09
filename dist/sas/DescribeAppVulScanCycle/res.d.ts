export interface DescribeAppVulScanCycleResponse {
    /**
     * 应用漏洞扫描周期。
     * - 1week
     * - 2weeks
     * - 3days
     * @example `1week`
     */
    Cycle: string;
    /**
     * 本次访问请求的ID。
     * @example `934E6D2A-0123-5A99-88BA-80DC27634E22`
     */
    RequestId: string;
}
