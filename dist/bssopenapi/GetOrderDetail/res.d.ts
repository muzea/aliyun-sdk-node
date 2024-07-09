export interface GetOrderDetailResponse {
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
     * 请求id。
     * @example `D6E068C3-25BC-455A-85FE-45F0B22ECB1F`
     */
    RequestId: string;
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 主机名。
         * @example `test`
         */
        HostName: string;
        /**
         * 页码。
         * @example `1`
         */
        PageNum: number;
        /**
         * 每页条数。
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
                 * 子订单类型：-productsuborder：产品子订单类型。-refundsuborder：退款子订单类型
                 * @example `子订单类型`
                 */
                OrderSubType: string;
                /**
                 * 创建时间。
                 * @example `2017-06-08T09:41:30Z`
                 */
                CreateTime: string;
                /**
                 * 币种。
                 * @example ` CNY：人民币。 USD：美元。 JPY：日元`
                 */
                Currency: string;
                /**
                 * 主产品的配置。
                 * @example `DBInstanceClass:[DBInstanceClass:rds.mysql.s1.small;EngineVersion:8.0;Region:cn-qingdao;]DBFlowType:[Region:cn-qingdao;]`
                 */
                Config: string;
                /**
                 * 订阅类型
                 * @example `取值：
                Subscription：预付费。
                PayAsYouGo：按量付费。`
                 */
                SubscriptionType: string;
                /**
                 * 服务开始时间。
                 * @example `2017-06-08T16:00:00Z`
                 */
                UsageStartTime: string;
                /**
                 * 服务结束时间。
                 * @example `2117-06-08T16:00:00Z`
                 */
                UsageEndTime: string;
                /**
                 * 子订单id。
                 * @example `234343`
                 */
                SubOrderId: string;
                /**
                 * 地域
                 * @example `cn-hangzhou`
                 */
                Region: string;
                /**
                 * 税后金额。
                 * @example `0`
                 */
                AfterTaxAmount: string;
                /**
                 * 支付时间。
                 * @example `2017-06-08T09:41:30Z`
                 */
                PaymentTime: string;
                /**
                 * 订单操作RAM用户对应ID，如无则留空。
                 * @example `23424243432`
                 */
                Operator: string;
                /**
                 * 订单类型
                 * @example `取值范围：-new：新购。-renew：续费。-upgrade：升级。-refund：退款。`
                 */
                OrderType: string;
                /**
                 * 支付状态
                 * @example `取值范围：-unpaid：未支付。-paid：已支付。-cancelled：已作废。`
                 */
                PaymentStatus: string;
                /**
                 * 主产品数量。
                 * @example `1`
                 */
                Quantity: string;
                /**
                 * 本币金额。
                 * @example `0`
                 */
                PretaxAmountLocal: string;
                /**
                 * 税费。
                 * @example `1`
                 */
                Tax: string;
                /**
                 * 未经标准化的模块信息。
                 * @example `DBInstanceClass:[DBInstanceClass:rds.mysql.s1.small;EngineVersion:8.0;Region:cn-qingdao;]DBFlowType:[Region:cn-qingdao;]`
                 */
                OriginalConfig: string;
                /**
                 * 订单应付金额。
                 * @example `0`
                 */
                PretaxAmount: string;
                /**
                 * 商品code
                 * @example `rds`
                 */
                CommodityCode: string;
                /**
                 * 关联订单id。
                 * @example `4353453534543`
                 */
                RelatedOrderId: string;
                /**
                 * 支付币种。
                 * @example ` CNY：人民币。 USD：美元。 JPY：日元`
                 */
                PaymentCurrency: string;
                /**
                 * 主产品类型。
                 * @example `rds`
                 */
                ProductType: string;
                /**
                 * 实例id列表。
                 * @example `["rm-bp1a2vsr018313t6o"]`
                 */
                InstanceIDs: string;
                /**
                 * 原始金额。
                 * @example `0`
                 */
                PretaxGrossAmount: string;
                /**
                 * 订单号。
                 * @example `3453425324`
                 */
                OrderId: string;
                /**
                 * 主产品代码。
                 * @example `rds`
                 */
                ProductCode: string;
                /**
                 * 订单扩展信息
                 */
                ExtendInfos: any;
            }[];
        };
    };
}
