export interface DescribeSplitItemBillResponse {
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
         * @example `CAESEgoQCg4K`
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
         * @example `185xxxx3489`
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
             * 分拆项所属账号AccountID
             * @example `12**122`
             */
            SplitAccountID: string;
            /**
             * 账单所属账号名称。
             * @example `test@test.aliyunid.com`
             */
            BillAccountName: string;
            /**
             * 订阅类型，取值：
             * Subscription：预付费。
             * PayAsYouGo：后付费。
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
             * @example `杭州`
             */
            Region: string;
            /**
             * 未结清金额。
             * @example `0.1`
             */
            OutstandingAmount: number;
            /**
             * 产品Code，与费用中心账单产品Code一致
             * @example `rds`
             */
            PipCode: string;
            /**
             * 商品Code，与费用中心产品明细Code一致。
             * @example `rds`
             */
            CommodityCode: string;
            /**
             * 实例昵称。
             * @example `nick`
             */
            NickName: string;
            /**
             * 产品明细。
             * @example `云数据库RDS`
             */
            ProductDetail: string;
            /**
             * 用量。
             * @example `100`
             */
            Usage: string;
            /**
             * 内网IP。
             * @example `192.xx.xx.xx`
             */
            IntranetIP: string;
            /**
             * 用量单位。
             * @example `GB`
             */
            UsageUnit: string;
            /**
             * 分拆项商品code。
             * @example `rds`
             */
            SplitCommodityCode: string;
            /**
             * 账单所属账号ID。
             * @example `185xxxx3489`
             */
            BillAccountID: string;
            /**
             * 产品类型。
             * @example `rds`
             */
            ProductType: string;
            /**
             * 资源包抵扣。
             * @example `0`
             */
            DeductedByResourcePackage: string;
            /**
             * 现金支付（含信用额度退款抵扣）。
             * @example `0`
             */
            PaymentAmount: number;
            /**
             * 分账月。
             * @example `2021-06`
             */
            SplitBillingCycle: string;
            /**
             * 服务时长。
             * @example `20`
             */
            ServicePeriod: string;
            /**
             * 分拆项名称。
             * @example `iZ28bycvyb4Z`
             */
            SplitItemName: string;
            /**
             * 单价。
             * @example `0.12`
             */
            ListPrice: string;
            /**
             * 可用区。
             * @example `华北1`
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
             * 账单日期，格式YYYY-MM-DD。暂未支持。
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
             * SubscriptionOrder（预付订单）。
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
             * 资源标签。资源上标签变更时，则存续期间产生的账单会有此标签。
             * @example `key:testKey value:testValue; key:testKey1 value:testValues1`
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
             * 业务类型
             * @example `trusteeship`
             */
            BizType: string;
            /**
             * 计费项。
             * @example `带宽`
             */
            BillingItem: string;
            /**
             * 计费项。
             * @example `disk`
             */
            BillingItemCode: string;
            /**
             * 财务单元。
             * @example `未分配`
             */
            CostUnit: string;
            /**
             * 单价单位。
             * @example `元/GB`
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
             * @example `小时`
             */
            ServicePeriodUnit: string;
            /**
             * 分账天。
             * @example `2021-06-01`
             */
            SplitBillingDate: string;
            /**
             * 产品名称。
             * @example `云数据库RDS`
             */
            ProductName: string;
            /**
             * 分拆项产品明细名称。
             * @example `云数据库`
             */
            SplitProductDetail: string;
            /**
             * 信用额度退款抵扣。
             * @example `0`
             */
            AdjustAmount: number;
            /**
             * 资源Owner账号AccountID（多账号代付场景）。
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
             * @example `test**1122`
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
            /**
             * 项目名称。
             * @example `iZ28bycvyb4Z`
             */
            ItemName: string;
        }[];
    };
}
