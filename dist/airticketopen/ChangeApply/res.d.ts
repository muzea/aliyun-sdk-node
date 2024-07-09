export interface ChangeApplyResponse {
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
         * @example `4988430***950`
         */
        order_num: number;
        /**
         * 改签单申请结果列表
         */
        change_orders: {
            /**
             * 改签单号
             * @example `49884*****950`
             */
            change_order_num: number;
            /**
             * 改签单状态。 0:改签单创建成功; 5:改签单创建失败
             * @example `0`
             */
            change_order_status: number;
            /**
             * 改签单创建失败的原因
             * @example `desc reason`
             */
            fail_reason: string;
            /**
             * 改签单乘机人信息
             */
            passengers: {
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
