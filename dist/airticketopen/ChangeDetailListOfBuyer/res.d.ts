export interface ChangeDetailListOfBuyerResponse {
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
     *
     * @example `51593418-8C73-5E47-8BA8-3F1D4A00CC0B`
     */
    RequestId: string;
    /**
     * 正确处理返回数据
     */
    data: {
        /**
         * 数据列表
         */
        list: {
            /**
             * 改签单号
             * @example `4988430***950`
             */
            change_order_num: number;
            /**
             * 订单号
             * @example `4988430***971`
             */
            order_num: number;
            /**
             * 申请单状态 0:初始状态; 1:待支付; 2:付款成功; 3:改签成功; 4:改签关闭
             * @example `2`
             */
            order_status: number;
            /**
             * 支付状态 0:初始状态; 1:待支付; 2:支付成功; 3:转交易成功; 4:关闭已支付订单成功; 5:关闭未支付订单成功
             * @example `2`
             */
            pay_status: number;
            /**
             * 交易流水号
             * @example `hkduendkd-2023-dj0`
             */
            transaction_no: string;
            /**
             * 订单创建时间 UTC时间戳
             * @example `1677415274000`
             */
            utc_create_time: number;
        }[];
        /**
         * 分页信息
         */
        pagination: {
            /**
             * 总数量
             * @example `5`
             */
            total_count: number;
            /**
             * 共几页
             * @example `1`
             */
            total_page: number;
            /**
             * 当前第几页
             * @example `1`
             */
            current_page: number;
            /**
             * 每页数量
             * @example `10`
             */
            page_size: number;
        };
    };
    /**
     * 错误处理携带数据
     * @example `null`
     */
    error_data: any;
}
