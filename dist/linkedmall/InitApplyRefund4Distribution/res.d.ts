export interface InitApplyRefund4DistributionResponse {
    /**
     * 每次请求操作对应的操作日志号，由系统自动生成，返回给租户，可用于排查问题，双方日志中统一透出此标识
     */
    LogsId: string;
    /**
     * POP请求流水号，建议租户日志中也输出此流水号，双方排查问题方便
     * @example `A7BE4356-7F92-533E-A31B-2EBF2D67****`
     */
    RequestId: string;
    /**
     * 错误子代码。一般用于显示业务类的错误代码，一般建议关注此类错误
     * @example `1004`
     */
    SubCode: string;
    /**
     * 业务处理相关的错误信息，一般建议关注此类错误
     * @example `1004`
     */
    SubMessage: string;
    /**
     * pageSize
     * @example `20`
     */
    PageSize: number;
    /**
     * 当前页
     * @example `1`
     */
    PageNumber: number;
    /**
     * 总数量
     * @example `5`
     */
    TotalCount: number;
    /**
     * 本次执行的结果成功与否
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回的执行结果码， 正确为字符串 0000
     * @example `0000`
     */
    Code: string;
    /**
     * 错误消息
     * @example `SUCCESS`
     */
    Message: string;
    /**
     * 请求结果数据
     */
    Model: {
        /**
         * 子分销订单号
         */
        SubDistributionOrderId: string;
        /**
         * 支持的订单退货方式
         * @example `1`
         */
        BizClaimType: number;
        /**
         * 是否是整单退
         * @example `false`
         */
        MainOrderRefund: boolean;
        /**
         * 本单退款金额区间
         */
        MaxRefundFeeData: {
            /**
             * 本单最大可退款金额
             * @example `100`
             */
            MaxRefundFee: number;
            /**
             * 本单最小可退款金额
             * @example `10`
             */
            MinRefundFee: number;
        };
        /**
         * 退款信息列表
         */
        RefundReasonList: {
            /**
             * 退款信息id
             * @example `12323`
             */
            ReasonTextId: string;
            /**
             * 是否要求上传凭证
             * @example `true`
             */
            ProofRequired: boolean;
            /**
             * 退款信息
             * @example `拍多不想要`
             */
            ReasonTips: string;
            /**
             * 是否要求留言
             * @example `true`
             */
            RefundDescRequired: boolean;
        }[];
    };
}
