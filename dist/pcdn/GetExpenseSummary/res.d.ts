export interface GetExpenseSummaryResponse {
    /**
     * 业务码，成功返回0。
     * @example `0`
     */
    Code: number;
    /**
     * 请求ID。
     * @example `450CFF96-32FE-4229-85CA-EC588DAB0888`
     */
    RequestId: string;
    /**
     * 数据信息。
     */
    Data: {
        /**
         * 参考流畅率。
         * @example `98`
         */
        ForecastFluency: number;
        /**
         * 总峰值带宽。
         * @example `414344`
         */
        TopBandwidth: number;
        /**
         * 总流量。
         * @example `12419172`
         */
        TotalTraffic: number;
        /**
         * 覆盖率。
         * @example `0`
         */
        CoverRate: number;
        /**
         * 分享率。
         * @example `0`
         */
        ShareRate: number;
        /**
         * 总访问人数。
         * @example `21723058`
         */
        TotalUV: number;
    };
}
