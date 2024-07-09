export interface DescribeDBInstanceMonitorResponse {
    /**
     * 请求ID。
     * @example `EFD65226-08CC-4C4D-B6A4-CB3C382F67B0`
     */
    RequestId: string;
    /**
     * 监控采集粒度。返回值为**5**，单位为秒。
     * @example `5`
     */
    Granularity: string;
}
