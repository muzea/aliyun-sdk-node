export interface GetRealTimeConcurrencyResponse {
    /**
     * 请求ID
     * @example `E6E61E1A-D2DC-5ACF-AED4-A115B6691F98`
     */
    RequestId: string;
    /**
     * 查询时间戳
     * @example `1661584255029`
     */
    Timestamp: number;
    /**
     * 实时并发数
     * @example `1`
     */
    RealTimeConcurrency: number;
    /**
     * 最大并发数
     * @example `2`
     */
    MaxConcurrency: number;
}
