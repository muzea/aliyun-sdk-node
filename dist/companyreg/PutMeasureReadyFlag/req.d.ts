export interface PutMeasureReadyFlagRequest {
    /**
     * 业务类型
     * @example `esp.bookkeeping`
     */
    "BizType": string;
    /**
     * 数据维度，包括：
     * 1. 原始 r/raw
     * 2. 小时 h/hour
     * 3. 天 d/day
     * 4. 月 m/month
     * @example `d`
     */
    "DataType": string;
    /**
     * 周期开始时间
     * @example `1634969692175`
     */
    "StartTime": string;
    /**
     * 周期结束时间
     * @example `1634784240000`
     */
    "EndTime": string;
    /**
     * 推送标记：开始推送-0；完成推送出账-1
     * @example `1`
     */
    "ReadyFlag": string;
}
