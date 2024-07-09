export interface QueryRefundApplicationDetail4DistributionResponse {
    /**
     * 每次请求操作对应的操作日志号，由系统自动生成，返回给租户，可用于排查问题，双方日志中统一透出此标识
     * @example `1`
     */
    LogsId: string;
    /**
     * POP请求流水号，建议租户日志中也输出此流水号，双方排查问题方便
     * @example `64ACF32E-5B78-5DDD-89D0-ACFA0B4BFF38`
     */
    RequestId: string;
    /**
     * 错误子代码。一般用于显示业务类的错误代码，一般建议关注此类错误
     * @example `1004`
     */
    SubCode: string;
    /**
     * 业务处理相关的错误信息，一般建议关注此类错误
     * @example `SUCCESS`
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
     * @example `1`
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
         * 当前买家申请退款说明
         * @example `拍多不想要`
         */
        ApplyDisputeDesc: string;
        ApplyReason: {
            ReasonTextId: number;
            ReasonTips: string;
        };
        /**
         * 退款类型。1 仅退款, 3 退货退款
         * @example `1`
         */
        BizClaimType: number;
        /**
         * 逆向发起时间
         */
        DisputeCreateTime: string;
        /**
         * 申请逆向描述
         */
        DisputeDesc: string;
        /**
         * 逆向结束时间
         */
        DisputeEndTime: string;
        /**
         * 纠纷ID，通过查询订单逆向申请详情接⼝获取
         * @example `155816643598654055`
         */
        DisputeId: number;
        /**
         * 逆向退款的状态
         * @example `1`
         */
        DisputeStatus: number;
        /**
         * 逆向发生的类型
         * @example `0`
         */
        DisputeType: number;
        /**
         * 对应主分销订单号
         * @example `123498124`
         */
        DistributionOrderId: string;
        RefundFeeData: {
            MaxRefundFee: number;
            MinRefundFee: number;
        };
        /**
         *  当前的订单的物流状态，1，标识未发货
         * @example `1`
         */
        OrderLogisticsStatus: number;
        /**
         * 实际买家收到的⾦额
         * @example `2900`
         */
        RealRefundFee: number;
        /**
         * 退款⾦额(含退平台补贴的⾦额)
         * @example `2900`
         */
        RefundFee: number;
        /**
         * 商家退货地址，卖家同意退货后才会显示
         */
        RefunderAddress: string;
        /**
         * 退货收货人，卖家同意退货后才会显示
         */
        RefunderName: string;
        /**
         * 退货联系方式，卖家同意退货后才会显示
         */
        RefunderTel: string;
        /**
         * 退货地址邮编，卖家同意退货后才会显示
         */
        RefunderZipCode: string;
        /**
         * 退货数量
         * @example `1`
         */
        ReturnGoodCount: number;
        /**
         * 退货物流状态
         * @example `1`
         */
        ReturnGoodLogisticsStatus: number;
        /**
         * 卖家同意退货说明,真实的退货地址会在这个字段进⾏返回
         * @example `同意退款`
         */
        SellerAgreeMsg: string;
        /**
         * 卖家拒绝的留⾔说明
         * @example `商品没问题，买家举证无效`
         */
        SellerRefuseAgreementMessage: string;
        /**
         * 卖家拒绝原因
         * @example `商品没问题，买家举证无效`
         */
        SellerRefuseReason: string;
        /**
         * 子分销订单号
         * @example `12131234`
         */
        SubDistributionOrderId: string;
    };
}
