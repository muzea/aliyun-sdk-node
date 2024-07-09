export interface ListEffectiveOrdersResponse {
    /**
     * 请求ID。
     * @example `A8FE12AA-300D-5FDF-806F-C2CB99161F32`
     */
    RequestId: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功
     * - **false**：请求失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用失败时，返回的错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 订单概览。
     */
    OrderSummary: {
        /**
         * DMS的商品Code。
         * <props="china">
         * - dms\_pre\_public_cn（包年包月）</props>
         * <props="china">
         * - dms\_post\_public_cn（按量付费）</props>
         * <props="intl">
         * - dms\_pre\_public_intl（包年包月）</props>
         * <props="intl">
         * - dms\_post\_public_intl（按量付费）</props>
         * @example `包年包月`
         */
        CommodityCode: string;
        /**
         * 商品类型。
         * - **VersionType**：管控模式
         * - **SensitiveDataProtection**：敏感数据保护
         * @example `VersionType`
         */
        CommodityType: string;
        /**
         * 购买商品类型为管控模式时，有以下类型可选择：
         * - **stand**：稳定变更
         * - **safety**：安全协同
         * @example `safety`
         */
        VersionType: string;
        /**
         * 订单列表中所有订单额度总和。
         * @example `12`
         */
        TotalQuota: number;
        /**
         * 订单明细
         */
        OrderList: {
            /**
             * 订单ID。
             * @example `2190037****`
             */
            OrderId: string;
            /**
             * 购买用户的UID。
             * @example `2698420314****`
             */
            BuyerId: string;
            /**
             * 购买商品的实例ID。
             * @example `rm-bp1xd1v866****`
             */
            InstanceId: string;
            /**
             * 实例的开始时间。
             * @example `2022-10-24 00:00:00`
             */
            StartTime: string;
            /**
             * 实例的到期时间。
             * @example `2022-11-24 00:00:00`
             */
            EndTime: string;
            /**
             * 已购买的管控模式或敏感数据的使用额度。
             * @example `7`
             */
            InsNum: string;
        }[];
    }[];
}
