export interface RefundDetailListResponse {
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
         * 数据列表
         */
        list: {
            /**
             * 退票单号
             * @example `49884*****950`
             */
            refund_order_num: number;
            /**
             * 订单号
             * @example `49884*****2345`
             */
            order_num: number;
            /**
             * 退票单状态  0:申请退票; 1:退票受理中; 2:退票失败; 3:退票成功
             * @example `1`
             */
            refund_order_status: number;
            /**
             * 交易流水号
             * @example `49884**tde-95za`
             */
            transaction_no: string;
            /**
             * 创建时间 UTC时间戳
             * @example `1677229002000`
             */
            utc_create_time: number;
            /**
             * 是否是补退单
             * @example `true`
             */
            is_multi_refund: boolean;
            /**
             * 该补退单号关联的原单退票单号 补退单才会有，表示关联原单的退票单ID
             * @example `49884*****2387`
             */
            related_refund_order_num: string;
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
