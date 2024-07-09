export interface DescribeInstanceBillResponse {
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
     * 返回数据。
     */
    Data: {
        /**
         * 用来表示当前调用返回读取到的位置，空代表数据已经读取完毕。下次调用时，需要将此设置到入参NextToken中。
         * @example `CAESEgoQCg4KCm`
         */
        NextToken: string;
        /**
         * 账单日期，格式：YYYY－MM。
         * @example `2020-03`
         */
        BillingCycle: string;
        /**
         * 本次请求所返回的最大记录条数。
         * @example `20`
         */
        MaxResults: number;
        /**
         * 账号ID。
         * @example `122`
         */
        AccountID: string;
        /**
         * 总记录数。
         * @example `20`
         */
        TotalCount: number;
        /**
         * 用户账号。
         * @example `test@test.aliyunid.com`
         */
        AccountName: string;
        /**
         * 账单详情。
         */
        Items: {
            /**
             * 账单日期，仅当Granularity为DAILY时有值，格式为YYYY-MM-DD。
             * @example `2020-03-20`
             */
            BillingDate: string;
            /**
             * 实例详细配置。
             * @example `CPU：12`
             */
            InstanceConfig: string;
            /**
             * 公网IP。
             * @example `34.xx.x.x	`
             */
            InternetIP: string;
            /**
             * 账单类型：
             * - SubscriptionOrder （预付订单）。
             * - PayAsYouGoBill （后付账单）。
             * - Refund （退款）。
             * - Adjustment （调账）。
             * @example `PayAsYouGoBill`
             */
            Item: string;
            /**
             * 资源标签。
             * @example `key:testKey value:testValue; key:testKey1 value:testValues1`
             */
            Tag: string;
            /**
             * 实例ID。
             * @example `i-dadada`
             */
            InstanceID: string;
            /**
             * 币种，取值：
             * - CNY。
             * - USD。
             * - JPY。
             * @example `CNY`
             */
            Currency: string;
            /**
             * 账单所属账号名称。
             * @example `test@test.aliyunid.com`
             */
            BillAccountName: string;
            /**
             * 代金券抵扣。
             * @example `0.1`
             */
            DeductedByCashCoupons: number;
            /**
             * 订阅类型，取值：
             * - Subscription：预付费。
             * - PayAsYouGo：后付费。
             * @example `PayAsYouGo`
             */
            SubscriptionType: string;
            /**
             * 业务类型。
             * @example `trusteeship`
             */
            BizType: string;
            /**
             * 实例规格。
             * @example `ecs.sn1ne.3xlarge	`
             */
            InstanceSpec: string;
            /**
             * 优惠券优惠金额。
             * @example `0.1`
             */
            DeductedByCoupons: number;
            /**
             * 计费项。仅当IsBillingItem=true有值。
             * @example `带宽`
             */
            BillingItem: string;
            /**
             * 计费项代码。
             * @example `disk`
             */
            BillingItemCode: string;
            /**
             * 地域。
             * @example `杭州`
             */
            Region: string;
            /**
             * 未结清金额。
             * @example `0.1`
             */
            OutstandingAmount: number;
            /**
             * 财务单元。
             * @example `未分配	`
             */
            CostUnit: string;
            /**
             * 单价单位, 仅当isBillingItem为true时有效。
             * @example `元`
             */
            ListPriceUnit: string;
            /**
             * 资源组。
             * @example `默认资源组	`
             */
            ResourceGroup: string;
            /**
             * 产品Code，与费用中心账单产品Code一致。
             * @example `rds`
             */
            PipCode: string;
            /**
             * 服务时长单位。
             * @example `秒`
             */
            ServicePeriodUnit: string;
            /**
             * 应付金额。
             * @example `0.1`
             */
            PretaxAmount: number;
            /**
             * 商品Code，与费用中心产品明细Code一致。
             * @example `rds`
             */
            CommodityCode: string;
            /**
             * 产品名称。
             * @example `云数据库RDS	`
             */
            ProductName: string;
            /**
             * 信用额度退款抵扣。
             * @example `0`
             */
            AdjustAmount: number;
            /**
             * 实例昵称。
             * @example `test`
             */
            NickName: string;
            /**
             * 产品明细。
             * @example `云数据库RDS	`
             */
            ProductDetail: string;
            /**
             * 用量。
             * > 仅当isBillingItem为true时有效。用量数据为该周期内所有账单的用量总和并非客户的实际购买量。如使用了1G的存储，每小时出账，则每小时用量为1G，按天汇总的账单用量为1G*24=24G。
             * @example `100`
             */
            Usage: string;
            /**
             * 内网IP。
             * @example `192.xx.xx.xx`
             */
            IntranetIP: string;
            /**
             * 资源Owner账号AccountID（多账号代付场景）。
             * @example `123`
             */
            OwnerID: string;
            /**
             * 储值卡抵扣。
             * @example `0.1`
             */
            DeductedByPrepaidCard: number;
            /**
             * 用量单位, 仅当isBillingItem为true时有效。
             * @example `GB`
             */
            UsageUnit: string;
            /**
             * 账单所属账号ID。
             * @example `122`
             */
            BillAccountID: string;
            /**
             * 现金支付（含信用额度退款抵扣）。
             * @example `0.1`
             */
            PaymentAmount: number;
            /**
             * 优惠金额。
             * @example `0.1`
             */
            InvoiceDiscount: number;
            /**
             * 资源包抵扣, 仅当isBillingItem为true时有效。
             * @example `0.1`
             */
            DeductedByResourcePackage: string;
            /**
             * 产品类型。
             * @example `rds`
             */
            ProductType: string;
            /**
             * 服务时长。
             * @example `3600`
             */
            ServicePeriod: string;
            /**
             * 可用区。
             * @example `杭州1`
             */
            Zone: string;
            /**
             * 单价, 仅当isBillingItem为true时有效。
             * @example `100`
             */
            ListPrice: string;
            /**
             * 原始金额。
             * @example `0.1`
             */
            PretaxGrossAmount: number;
            /**
             * 现金支付（不包含信用额度退款抵扣）。
             * @example `0`
             */
            CashAmount: number;
            /**
             * 产品代码。
             * @example `rds`
             */
            ProductCode: string;
            /**
             * 计费方式。
             * @example `其它`
             */
            BillingType: string;
            /**
             * 项目名称。
             * @example `iZ28bycvyb4Z`
             */
            ItemName: string;
        }[];
    };
}
