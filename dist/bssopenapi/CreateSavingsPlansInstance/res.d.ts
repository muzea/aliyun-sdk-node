export interface CreateSavingsPlansInstanceResponse {
    /**
     * 错误信息
     * @example `参数不能为空`
     */
    Message: string;
    /**
     * 请求ID
     * @example `26dabb0c-8ca0-4aa0-8143-30499f3fe304`
     */
    RequestId: string;
    /**
     * 返回结果
     */
    Data: {
        /**
         * 订单号
         * @example `202110260001`
         */
        OrderId: number;
    };
    /**
     * 错误码
     * @example `PARAM_ERROR`
     */
    Code: string;
    /**
     * 是否调用成功
     * @example `true`
     */
    Success: boolean;
}
