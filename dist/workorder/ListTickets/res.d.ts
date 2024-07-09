export interface ListTicketsResponse {
    /**
     * 接口请求的唯一ID, 每次调用requestID唯一
     * @example `AC0AB2EC-AFBC-44BA-AE77-132A5A1EC0AD`
     */
    RequestId: string;
    /**
     * 调用接口返回是否成功, true代表调用正常
     * @example `true`
     */
    Success: boolean;
    /**
     * 接口请求结果返回码
     * @example `0`
     */
    Code: number;
    /**
     * 错误信息, 当success=false的时候, 可以取到message
     * @example `入参解析失败`
     */
    Message: string;
    /**
     * 分页查询参数的页码
     * @example `1`
     */
    PageNumber: number;
    /**
     * 分页查询参数的每页条数
     * @example `10`
     */
    PageSize: number;
    /**
     * 查询结果总数, 即我的工单记录总条数
     * @example `99`
     */
    TotalCount: number;
    /**
     * 返回值为我的工单列表数据
     */
    Data: {
        /**
         * 工单编号
         * @example `0005PYGCW`
         */
        TicketId: string;
        /**
         * 工单标题
         * @example `ecs续费失败啥原因`
         */
        Title: string;
        /**
         * 工单状态, 参考值如下
         * 1, "assigned", "待响应",
         * 2, "dealing", "处理中",
         * 3, "wait_feedback", "待反馈",
         * 4, "feedback", "已反馈",
         * 5, "wait_confirm", "待确认",
         * 6, "confirmed", "已完成"
         */
        Status: {
            /**
             * 状态描述, 如已完成
             * @example `已完成`
             */
            Label: string;
            /**
             * 状态值, 如6, 代表已完成
             * @example `6`
             */
            Value: string;
        };
    }[];
}
