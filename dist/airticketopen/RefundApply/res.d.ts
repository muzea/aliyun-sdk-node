export interface RefundApplyResponse {
    /**
     * http 请求成功，status 值均为 200
     * @example `200`
     */
    status: number;
    /**
     * 业务错误码
     * @example `null`
     */
    error_code: string;
    /**
     * 错误信息
     * @example `null`
     */
    error_msg: string;
    /**
     * 是否正确
     * @example `true`
     */
    success: boolean;
    /**
     * 请求 RequestId
     * @example `51593418-8C73-5E47-8BA8-3F1D4A00CC0B`
     */
    RequestId: string;
    /**
     * 正确处理返回数据
     */
    data: {
        /**
         * 订单号
         * @example `4966***617111`
         */
        order_num: number;
        /**
         * 退票单申请结果列表
         */
        refund_results: {
            /**
             * 退票单号
             * @example `4966***617202`
             */
            refund_order_num: number;
            /**
             * 退票单状态 0:退票单创建成功; 1:退票单创建失败
             * @example `0`
             */
            status: number;
            /**
             * 退票申请失败原因
             * @example `desc reason`
             */
            fail_reason: string;
            /**
             * 该退票单下包含的退票乘机人列表
             */
            refund_passengers: {
                /**
                 * 乘机人名
                 * @example `SAN`
                 */
                first_name: string;
                /**
                 * 乘机人姓
                 * @example `ZHANG`
                 */
                last_name: string;
                /**
                 * 证件号
                 * @example `411***********4411`
                 */
                document: string;
            }[];
        }[];
    };
    /**
     * 错误处理携带数据
     * @example `null`
     */
    error_data: any;
}
