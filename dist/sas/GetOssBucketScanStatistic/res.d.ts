export interface GetOssBucketScanStatisticResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `FAC50208-E56B-5CC8-8738-2B219D1A****`
     */
    RequestId: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 有风险文件的Bucket数。
         * @example `1`
         */
        RiskBucket: number;
        /**
         * 高风险文件数。
         * @example `0`
         */
        HighRisk: number;
        /**
         * 中风险文件数。
         * @example `0`
         */
        MediumRisk: number;
        /**
         * 低风险文件数。
         * @example `0`
         */
        LowRisk: number;
        /**
         * 未检测的Bucket数。
         * @example `1`
         */
        NoScanBucket: number;
        /**
         * Bucket总数。
         * @example `1`
         */
        TotalBucket: number;
        /**
         * 检测过的文件数。
         * @example `1`
         */
        ScanObject: number;
        /**
         * 剩余授权数。
         * @example `1`
         */
        RemainAuth: number;
        /**
         * 授权数到期时间戳。
         * @example `1714442403000`
         */
        ExpireTime: number;
        /**
         * Bucket内总文件数。
         * @example `1`
         */
        TotalObject: number;
    };
}
