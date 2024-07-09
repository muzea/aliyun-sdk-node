export interface RefundInstanceResponse {
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
         * 退订成功的情况下，返回退款订单id
         * @example `2100000000***`
         */
        OrderId: number;
    };
    /**
     * 响应码
     * @example `ResourceNotExists`
     */
    Code: string;
    /**
     * success=true代表调用执行完成。success=false代表执行出现错误。
     * @example `false`
     */
    Success: boolean;
}
