export interface CreateTaskGroupResponse {
    /**
     * 状态码
     * @example `OK`
     */
    Code: string;
    /**
     * 响应信息
     * @example `无`
     */
    Message: string;
    /**
     * 请求 ID
     * @example `59b0bbfe-929b-4a8c-9833-3ce70b4bad38`
     */
    RequestId: string;
    /**
     * 无
     */
    Data: {
        /**
         * 状态
         * @example `runnable`
         */
        Status: string;
        /**
         * 已完成任务数
         * @example `0`
         */
        CompletedTasks: number;
        /**
         * 总任务数
         * @example `1`
         */
        TotalTasks: number;
        /**
         * 创建时间
         * @example `2020-07-14T14:01:41.000+08:00`
         */
        CreatedAt: string;
        /**
         * 任务组名
         * @example `任务组`
         */
        Name: string;
        /**
         * ID
         * @example `59b0bbfe-929b-4a8c-9833-3ce70b4bad38`
         */
        Id: string;
        /**
         * 规则名称
         * @example `default`
         */
        RuleName: string;
        /**
         * 规则 ID
         * @example `59b0bbfe-929b-4a8c-9833-3ce70b4bad38`
         */
        RuleId: string;
        /**
         * 任务 ID 列表
         */
        TaskIds: string[];
    };
}
