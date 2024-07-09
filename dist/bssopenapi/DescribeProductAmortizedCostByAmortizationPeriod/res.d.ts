export interface DescribeProductAmortizedCostByAmortizationPeriodResponse {
    /**
     * 请求ID。
     * @example `79EE7556-0CFD-44EB-9CD6-B3B526E3A85F
    `
     */
    RequestId: string;
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 状态码。
     * @example `200
    `
     */
    Code: string;
    /**
     * 消息说明。
     * @example `Successful！
    `
     */
    Message: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 用来表示当前调用开始读取的位置，参数值必须为空或者使用返回结果中的NextToken设值，否则会报错。空代表从头开始读取。
         * @example `CAESEgoQCg4KCmdtdF9jcmVhdGUEARgBIkgKCQBwhGmPcAEAAAo7AzYAAAAxTDgwMDcxMjg3ZDJhNmM3ZDguTDgwMDAwMDAwMDAwMzE1MTIuTDgwMDcyZDMyZTJkYzg3N2U
        `
         */
        NextToken: string;
        /**
         * 账号ID。
         * @example `185766xxxx`
         */
        AccountID: string;
        /**
         * 用户账号。
         * @example `test@test.aliyunid.com
        `
         */
        AccountName: string;
        /**
         * 本次请求所返回的最大记录条数。
         * @example `100`
         */
        MaxResults: number;
        /**
         * 总记录数。
         * @example `100`
         */
        TotalCount: number;
        /**
         * 数据条目。
         */
        Items: {
            /**
             * 账期。
             * 格式：YYYYMM。
             * @example `202210`
             */
            ConsumePeriod: string;
            /**
             * 摊销状态，取值：
             * - amortized 已摊销
             * - unAmortized 未摊销
             * @example `amortized`
             */
            AmortizationStatus: string;
            /**
             * 摊销月。
             * 格式：YYYYMM。
             * @example `202210`
             */
            AmortizationPeriod: string;
            /**
             * 账单所属账号ID。
             * @example `185xxxxx489`
             */
            BillAccountID: number;
            /**
             * 账单所属账号名称。
             * @example `test@test.aliyunid.com
            `
             */
            BillAccountName: string;
            /**
             * 资源所属账号ID。
             * @example `185xxxxx489`
             */
            BillOwnerID: number;
            /**
             * 资源所属账号名称。
             * @example `test@test.aliyunid.com
            `
             */
            BillOwnerName: string;
            /**
             * 产品代码。
             * @example `rds`
             */
            ProductCode: string;
            /**
             * 产品名称。
             * @example `云数据库RDS
            `
             */
            ProductName: string;
            /**
             * 产品明细code。
             * @example `rds`
             */
            ProductDetailCode: string;
            /**
             * 产品明细。
             * @example `云数据库RDS
            `
             */
            ProductDetail: string;
            /**
             * 业务类型。
             * @example `trusteeship
            `
             */
            BizType: string;
            /**
             * 订阅类型，取值：
             * - Subscription：预付费。
             * - PayAsYouGo：后付费。
             * @example `PayAsYouGo`
             */
            SubscriptionType: string;
            /**
             * 官网价。
             * @example `0`
             */
            PretaxGrossAmount: number;
            /**
             * 优惠金额。
             * @example `0`
             */
            InvoiceDiscount: number;
            /**
             * 抹零金额。
             * @example `0`
             */
            RoundDownDiscount: number;
            /**
             * 应付金额。
             * @example `0`
             */
            PretaxAmount: number;
            /**
             * 代金券抵扣。
             * @example `0`
             */
            DeductedByCashCoupons: number;
            /**
             * 优惠券抵扣。
             * @example `0`
             */
            DeductedByCoupons: number;
            /**
             * 储值卡支付金额。
             * @example `0`
             */
            DeductedByPrepaidCard: number;
            /**
             * 消费金额（可开票）。
             * @example `0`
             */
            ExpenditureAmount: number;
            /**
             * 期初已摊-官网价。
             * @example `0`
             */
            PreviouslyAmortizedPretaxGrossAmount: number;
            /**
             * 期初已摊-优惠金额。
             * @example `0`
             */
            PreviouslyAmortizedInvoiceDiscount: number;
            /**
             * 期初已摊-抹零金额。
             * @example `0`
             */
            PreviouslyAmortizedRoundDownDiscount: number;
            /**
             * 期初已摊-应付金额。
             * @example `0`
             */
            PreviouslyAmortizedPretaxAmount: number;
            /**
             * 期初已摊-代金券抵扣。
             * @example `0`
             */
            PreviouslyAmortizedDeductedByCashCoupons: number;
            /**
             * 期初已摊-优惠券抵扣。
             * @example `0`
             */
            PreviouslyAmortizedDeductedByCoupons: number;
            /**
             * 期初已摊-储值卡支付金额。
             * @example `0`
             */
            PreviouslyAmortizedDeductedByPrepaidCard: number;
            /**
             * 期初已摊-消费金额（可开票）。
             * @example `0`
             */
            PreviouslyAmortizedExpenditureAmount: number;
            /**
             * 本期摊销-官网价。
             * @example `0`
             */
            CurrentAmortizationPretaxGrossAmount: number;
            /**
             * 本期摊销-优惠金额。
             * @example `0`
             */
            CurrentAmortizationInvoiceDiscount: number;
            /**
             * 本期摊销-抹零金额。
             * @example `0`
             */
            CurrentAmortizationRoundDownDiscount: number;
            /**
             * 本期摊销-应付金额。
             * @example `0`
             */
            CurrentAmortizationPretaxAmount: number;
            /**
             * 本期摊销-代金券抵扣。
             * @example `0`
             */
            CurrentAmortizationDeductedByCashCoupons: number;
            /**
             * 本期摊销-优惠券抵扣。
             * @example `0`
             */
            CurrentAmortizationDeductedByCoupons: number;
            /**
             * 本期摊销-储值卡支付金额。
             * @example `0`
             */
            CurrentAmortizationDeductedByPrepaidCard: number;
            /**
             * 本期摊销-消费金额（可开票）。
             * @example `0`
             */
            CurrentAmortizationExpenditureAmount: number;
            /**
             * 期末待摊-官网价。
             * @example `0`
             */
            RemainingAmortizationPretaxGrossAmount: number;
            /**
             * 期末待摊-优惠金额。
             * @example `0`
             */
            RemainingAmortizationInvoiceDiscount: number;
            /**
             * 期末待摊-抹零金额。
             * @example `0`
             */
            RemainingAmortizationRoundDownDiscount: number;
            /**
             * 期末待摊-应付金额。
             * @example `0`
             */
            RemainingAmortizationPretaxAmount: number;
            /**
             * 期末待摊-代金券抵扣。
             * @example `0`
             */
            RemainingAmortizationDeductedByCashCoupons: number;
            /**
             * 期末待摊-优惠券抵扣。
             * @example `0`
             */
            RemainingAmortizationDeductedByCoupons: number;
            /**
             * 期末待摊-储值卡支付金额。
             * @example `0`
             */
            RemainingAmortizationDeductedByPrepaidCard: number;
            /**
             * 期末待摊-消费金额（可开票）。
             * @example `0`
             */
            RemainingAmortizationExpenditureAmount: number;
        }[];
    };
}
