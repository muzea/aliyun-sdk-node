export interface DescribeBackupPlanBillingResponse {
    /**
     * 错误码值。
     * @example `400`
     */
    HttpStatusCode: number;
    /**
     * 请求ID。
     * @example `DD7BC7F5-4E3A-5DF3-BFF9-831503C4D9E3`
     */
    RequestId: string;
    /**
     * 错误码字符串。
     * @example `InvalidParameter`
     */
    ErrCode: string;
    /**
     * 请求成功状态。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误信息。
     * @example `This backupPlan can't support this action`
     */
    ErrMessage: string;
    /**
     * 备份计划计费信息列表。
     */
    Item: {
        /**
         * 实例购买时间，格式为时间戳。
         * @example `1658372830000`
         */
        BuyCreateTimestamp: number;
        /**
         * 实例全量备份数据内置存储量，单位为字节（B）。
         * @example `151`
         */
        FullStorageSize: number;
        /**
         * 实例到期时间，格式为时间戳。
         * > 该参数仅在BuyChargeType选择PREPAY时显示。
         * @example `1661097600000`
         */
        BuyExpiredTimestamp: number;
        /**
         * 实例规格。
         * @example `micro`
         */
        BuySpec: string;
        /**
         * 免费备份流量计费周期结束时间，格式为时间戳。
         * @example `1659283200000`
         */
        QuotaEndTimestamp: number;
        /**
         * 实例是否过期。
         * > 该参数仅在BuyChargeType选择PREPAY时显示。
         * @example `true`
         */
        IsExpired: boolean;
        /**
         * 免费备份流量计费周期开始时间，格式为时间戳。
         * @example `1656604800000`
         */
        QuotaStartTimestamp: number;
        /**
         * 当月免费备份总流量，单位为字节（B）。
         * > 该参数仅在BuyChargeType选择PREPAY且IsFreeBytesUnlimited为false时显示。
         * @example `858993459200`
         */
        TotalFreeBytes: number;
        /**
         * 当月付费备份流量合计，单位为字节（B）。
         * @example `0`
         */
        PaiedBytes: number;
        /**
         * 当月付费全量备份流量，单位为字节（B）。
         * @example `0`
         */
        UsedFullBytes: number;
        /**
         * 实例是否为无备份流量上限规格。
         * @example `true`
         */
        IsFreeBytesUnlimited: boolean;
        /**
         * 实例增量备份数据内置存储量，单位为字节（B）。
         * @example `10437039`
         */
        ContStorageSize: number;
        /**
         * 购买费用类型，返回值如下：
         * - **PREPAY**：预付费（包年包月）
         * - **POSTPAY**：后付费（按量付费）
         * @example `PREPAY`
         */
        BuyChargeType: string;
        /**
         * 当月付费增量备份流量，单位为字节（B）。
         * @example `9406734`
         */
        UsedIncrementBytes: number;
    };
}
