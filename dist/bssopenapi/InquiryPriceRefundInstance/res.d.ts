export interface InquiryPriceRefundInstanceResponse {
    /**
     * 执行结果说明
     * @example `success`
     */
    Message: string;
    /**
     * 执行链路追踪字符串，排查问题时，可以提供给平台。
     * @example `UUID`
     */
    RequestId: string;
    /**
     * data
     */
    Data: {
        /**
         * 执行主机所在站点
         * @example `cn`
         */
        HostId: string;
        /**
         * 实例id
         * @example `i-bp1etb69sqxgl4*******`
         */
        InstanceId: string;
        /**
         * 币种
         * @example `退款金额本币币种： CNY：人民币。 USD：美元。 JPY：日元。`
         */
        Currency: string;
        /**
         * 金额
         * @example `12.34`
         */
        RefundAmount: number;
    };
    /**
     * 响应码
     * @example `200`
     */
    Code: string;
    /**
     * success=true代表调用执行完成。success=false代表执行出现错误。
     * @example `true`
     */
    Success: boolean;
}
