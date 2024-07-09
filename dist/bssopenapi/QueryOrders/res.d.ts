export interface QueryOrdersResponse {
    /**
     * 状态码。
     * @example `Success`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `Successful!`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `61293E7A-3406-4447-8620-EC88B0AA66AD`
     */
    RequestId: string;
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回信息。
     */
    Data: {
        /**
         * 主机名。
         * @example `test`
         */
        HostName: string;
        /**
         * 分页数。
         * @example `1`
         */
        PageNum: number;
        /**
         * 每页条数。建议每页最大20条，条数过多会导致超时。
         * @example `20`
         */
        PageSize: number;
        /**
         * 总记录数。
         * @example `1`
         */
        TotalCount: number;
        OrderList: {
            /**
             * 订单列表。
             */
            Order: {
                /**
                 * 订单应付金额。
                 * @example `0`
                 */
                PretaxAmount: string;
                /**
                 * 商品Code
                 * @example `ecs`
                 */
                CommodityCode: string;
                /**
                 * 关联订单ID。
                 * @example `234535345345342`
                 */
                RelatedOrderId: string;
                /**
                 * 创建时间。
                 * @example `2017-06-08T09:41:30Z`
                 */
                CreateTime: string;
                /**
                 * 币种。
                 * @example `CNY`
                 */
                Currency: string;
                /**
                 * 订阅类型。取值：
                 * - Subscription：预付费。
                 * - PayAsYouGo：后付费。
                 * @example `PayAsYouGo`
                 */
                SubscriptionType: string;
                /**
                 * 支付币种。
                 * @example `CNY`
                 */
                PaymentCurrency: string;
                /**
                 * 主产品类型。
                 * @example `rds`
                 */
                ProductType: string;
                /**
                 * 税后金额。
                 * @example `66`
                 */
                AfterTaxAmount: string;
                /**
                 * 支付时间。
                 * @example `2017-06-08T09:41:30Z`
                 */
                PaymentTime: string;
                /**
                 * 原始金额。
                 * @example `0`
                 */
                PretaxGrossAmount: string;
                /**
                 * 订单类型，取值范围
                 * - New 新购
                 * - Renew 续费
                 * - Upgrade 升级
                 * - TempUpgrade 短时升级
                 * - Downgrade 降级
                 * - Refund 退款
                 * - Convert 付费类型转换
                 * - ResizeDisk 调整磁盘大小
                 * - CompensatoryRenew 补偿续费
                 * - IncreaseUpgrade 带宽升级
                 * - Exchange 换购
                 * - ChangeOperatingSystem 更换操作系统
                 * @example `New`
                 */
                OrderType: string;
                /**
                 * 支付状态。非退款订单，取值范围：
                 * - Unpaid：未支付。
                 * - Paid：已支付。
                 * - Cancelled：已作废。
                 * > 对于退款订单可置NULL。
                 * @example `Paid`
                 */
                PaymentStatus: string;
                /**
                 * 订单号。
                 * @example `34532532`
                 */
                OrderId: string;
                /**
                 * 税费。
                 * @example `1`
                 */
                Tax: string;
                /**
                 * 本币金额。
                 * @example `0`
                 */
                PretaxAmountLocal: string;
                /**
                 * 主产品代码。
                 * @example `rds`
                 */
                ProductCode: string;
            }[];
        };
    };
}
