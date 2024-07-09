export interface RenewChangeInstanceResponse {
    /**
     * Id of the request
     * @example `79EE7556-0CFD-44EB-9CD6-B3B526E3A85F`
     */
    RequestId: string;
    /**
     * 状态码
     * @example `Success`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `Successful!`
     */
    Message: string;
    /**
     * success=true代表调用执行完成。success=false代表执行出现错误。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 创建成功的订单ID。
         * @example `202407022550621`
         */
        OrderId: string;
        /**
         * 执行主机所在站点
         * @example `100.100.64.1:8150`
         */
        HostId: string;
    };
}
