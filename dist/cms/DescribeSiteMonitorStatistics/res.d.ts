export interface DescribeSiteMonitorStatisticsResponse {
    /**
     * 状态码。
     * >200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 返回信息。
     * @example `Successful`
     */
    Message: string;
    /**
     * 统计结果。
     * @example `100`
     */
    Data: string;
    /**
     * 请求ID。
     * @example `3AD2724D-E317-4BFB-B422-D6691D071BE1`
     */
    RequestId: string;
    /**
     * 操作是否成功。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: string;
}
