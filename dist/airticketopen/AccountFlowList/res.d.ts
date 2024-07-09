export interface AccountFlowListResponse {
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
             * 流水ID
             * @example `1627239841225842666`
             */
            flow_id: number;
            /**
             * 创建时间
             * @example `1676799185000`
             */
            gmt_create: number;
            /**
             * 修改时间
             * @example `1676966530000`
             */
            gmt_modified: number;
            /**
             * 操作类型 1:付款; 2:退款; 3:充值
             * @example `2`
             */
            op_type: number;
            /**
             * 操作金额(元)
             * @example `950.5`
             */
            op_amount: number;
            /**
             * 操作前可用余额(元)
             * @example `1950.5`
             */
            before_available_amount: number;
            /**
             * 操作后可用余额(元)
             * @example `1000`
             */
            after_available_amount: number;
            /**
             * 正向订单号
             * @example `4988430***971`
             */
            order_num: number;
            /**
             * 正向外部订单号
             * @example `4988430***971`
             */
            out_order_num: string;
            /**
             * 改签单号，如果是改签的流水，这个值不为空
             * @example `49880***971`
             */
            change_order_num: number;
            /**
             * 退票单号。如果是退款的流水，这个值不为空
             * @example `48430***971`
             */
            refund_order_num: number;
            /**
             * 订单类型 0：正向交易 1：改签单支付 2：退款
             * @example `1`
             */
            order_type: number;
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
