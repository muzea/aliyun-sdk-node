export interface QuerySplitItemBillResponse {
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
     * @example `79EE7556-0CFD-44EB-9CD6-B3B526E3A85F`
     */
    RequestId: string;
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回数据
     */
    Data: {
        /**
         * 页码，默认值为1。
         * @example `1`
         */
        PageNum: number;
        /**
         * 账单日期，格式：YYYY－MM。
         * @example `2020-03`
         */
        BillingCycle: string;
        /**
         * 账号ID。
         * @example `185xxxx3489`
         */
        AccountID: string;
        /**
         * 每页数量，默认值：20，最大值：300。
         * @example `20`
         */
        PageSize: number;
        /**
         * 总记录数。
         * @example `2`
         */
        TotalCount: number;
        /**
         * 用户账号。
         * @example `test@test.aliyunid.com`
         */
        AccountName: string;
        Items: {
            /**
             * 账单详情。
             */
            Item: {
                /**
                 * 分拆项所属账号AccountID。
                 * @example `122`
                 */
                SplitAccountID: string;
                /**
                 * 订阅类型，取值：
                 * Subscription：预付费。
                 * PayAsYouGo：后付费。
                 * 说明：必须和ProductCode参数一起使用。
                 * @example `PayAsYouGo`
                 */
                SubscriptionType: string;
                /**
                 * 实例规格。
                 * @example `ecs.sn1ne.3xlarge`
                 */
                InstanceSpec: string;
                /**
                 * 优惠券优惠金额。
                 * @example `0`
                 */
                DeductedByCoupons: number;
                /**
                 * 地域。
                 * @example `cn-hangzhou`
                 */
                Region: string;
                /**
                 * 未结清金额。
                 * @example `0`
                 */
                OutstandingAmount: number;
                /**
                 * 产品Code，与费用中心账单产品Code一致
                 * @example `rds`
                 */
                PipCode: string;
                /**
                 * 商品Code，与费用中心产品明细Code一致
                 * @example `rds`
                 */
                CommodityCode: string;
                /**
                 * 实例昵称。
                 * @example `test`
                 */
                NickName: string;
                /**
                 * 产品明细。
                 * @example `云数据库RDS`
                 */
                ProductDetail: string;
                /**
                 * 用量, 仅当isBillingItem为true时有效。
                 * @example `100`
                 */
                Usage: string;
                /**
                 * 内网IP。
                 * @example `192.xx.xx.xx`
                 */
                IntranetIP: string;
                /**
                 * 用量单位, 仅当isBillingItem为true时有效。
                 * @example `GB`
                 */
                UsageUnit: string;
                /**
                 * 分拆项商品Code。
                 * @example `rds`
                 */
                SplitCommodityCode: string;
                /**
                 * 产品类型。
                 * @example `rds`
                 */
                ProductType: string;
                /**
                 * 资源包抵扣。
                 * @example `NULL`
                 */
                DeductedByResourcePackage: string;
                /**
                 * 现金支付。
                 * @example `0`
                 */
                PaymentAmount: number;
                /**
                 * 分账月。
                 * @example `2020-06`
                 */
                SplitBillingCycle: string;
                /**
                 * 服务周期。
                 * @example `10`
                 */
                ServicePeriod: string;
                /**
                 * 分拆项名称。
                 * @example `iZ28bycvyb4Z`
                 */
                SplitItemName: string;
                /**
                 * 单价, 仅当isBillingItem为true时有效。
                 * @example `100`
                 */
                ListPrice: string;
                /**
                 * 可用区。
                 * @example `cn-hangzhou-h`
                 */
                Zone: string;
                /**
                 * 原始金额。
                 * @example `0`
                 */
                PretaxGrossAmount: number;
                /**
                 * 现金支付（不包含信用额度退款抵扣）。
                 * @example `0`
                 */
                CashAmount: number;
                /**
                 * 实例详细配置。
                 * @example `CPU:12`
                 */
                InstanceConfig: string;
                /**
                 * 账单日期，格式YYYY-MM-DD。
                 * @example `2020-01-20`
                 */
                BillingDate: string;
                /**
                 * 公网IP。
                 * @example `34.xx.x.x`
                 */
                InternetIP: string;
                /**
                 * 账单类型：
                 * SubscriptionOrder （预付订单）。
                 * PayAsYouGoBill （后付账单）。
                 * Refund （退款）。
                 * Adjustment （调账）。
                 * @example `PayAsYouGoBill`
                 */
                Item: string;
                /**
                 * 分拆项ID。
                 * @example `i-28bycvyb4`
                 */
                SplitItemID: string;
                /**
                 * 实例ID。
                 * @example `i-kjhdskjgshfdlkjfdh`
                 */
                InstanceID: string;
                /**
                 * 标签。
                 * @example `tag`
                 */
                Tag: string;
                /**
                 * 币种，取值：
                 * CNY。
                 * USD。
                 * JPY。
                 * @example `CNY`
                 */
                Currency: string;
                /**
                 * 代金券抵扣。
                 * @example `0`
                 */
                DeductedByCashCoupons: number;
                /**
                 * 计费项。
                 * @example `其他`
                 */
                BillingItem: string;
                /**
                 * 财务单元。
                 * @example `未分配`
                 */
                CostUnit: string;
                /**
                 * 单价单位, 仅当isBillingItem为true时有效。
                 * @example `元`
                 */
                ListPriceUnit: string;
                /**
                 * 资源组。
                 * @example `默认资源组`
                 */
                ResourceGroup: string;
                /**
                 * 应付金额。
                 * @example `0`
                 */
                PretaxAmount: number;
                /**
                 * 服务时长单位。
                 * @example `秒`
                 */
                ServicePeriodUnit: string;
                /**
                 * 产品名称。
                 * @example `云数据库RDS`
                 */
                ProductName: string;
                /**
                 * 分拆项产品明细名称。
                 * @example `rds`
                 */
                SplitProductDetail: string;
                /**
                 * 信用额度退款抵扣。
                 * @example `0`
                 */
                AdjustAmount: number;
                /**
                 * 子账号AccountID（多账号代付场景）。
                 * @example `169***013`
                 */
                OwnerID: string;
                /**
                 * 储值卡抵扣。
                 * @example `0`
                 */
                DeductedByPrepaidCard: number;
                /**
                 * 优惠金额。
                 * @example `0`
                 */
                InvoiceDiscount: number;
                /**
                 * 分拆项所属账号名称。
                 * @example `12@test.com`
                 */
                SplitAccountName: string;
                /**
                 * 计费方式。
                 * @example `其它`
                 */
                BillingType: string;
                /**
                 * 产品代码。
                 * @example `rds`
                 */
                ProductCode: string;
            }[];
        };
    };
}
