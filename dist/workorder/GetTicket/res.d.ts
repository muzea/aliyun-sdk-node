export interface GetTicketResponse {
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `C499BB0F-630D-5BE6-B3EA-5FCD95B85503`
     */
    RequestId: string;
    /**
     * 调用接口返回是否成功,true代表调用正常
     * @example `True`
     */
    Success: boolean;
    /**
     * 接口请求结果返回码
     * @example `0`
     */
    Code: number;
    /**
     * 错误信息, 当success=false的时候, 可以取到message
     * @example `success`
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
     * @example `108`
     */
    TotalCount: number;
    /**
     * 接口调用成功后，返回的业务数据
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
         * 工单问题描述, 目前只支持纯文本格式
         * @example `ecs无法启动`
         */
        Description: string;
        /**
         * 工单创建时间的时间戳
         * @example `1623396736000`
         */
        CreateTime: number;
        /**
         * 工单创建人uid
         * @example `1168025`
         */
        CreatorId: string;
        /**
         * 工单问题分类ID
         * @example `7161`
         */
        CategoryId: string;
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
             * 状态枚举文本
             * @example `已完成`
             */
            Label: string;
            /**
             * 状态枚举值
             * @example `6`
             */
            Value: string;
        };
        /**
         * 紧急度枚举值, 1 代表一般问题, 2 代表紧急问题
         */
        Severity: {
            /**
             * 枚举文本
             * @example `一般问题`
             */
            Label: string;
            /**
             * 枚举值
             * @example `1`
             */
            Value: string;
        };
    };
}
