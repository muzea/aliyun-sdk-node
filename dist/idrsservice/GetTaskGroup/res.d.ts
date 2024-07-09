export interface GetTaskGroupResponse {
    /**
     * 错误信息
     * @example `-`
     */
    Message: string;
    /**
     * 请求 ID
     * @example `59b0bbfe-929b-4a8c-9833-3ce70b4bad38`
     */
    RequestId: string;
    /**
     * -
     */
    Data: {
        /**
         * 状态
         * @example `runnable`
         */
        Status: string;
        /**
         * 已完成任务数
         * @example `1`
         */
        CompletedTasks: number;
        /**
         * 总任务数
         * @example `1`
         */
        TotalTasks: number;
        /**
         * 创建日期
         * @example `2020-07-14T14:01:41.000+08:00`
         */
        CreatedAt: string;
        /**
         * 名称
         * @example `名称`
         */
        Name: string;
        /**
         * -
         */
        TaskIds: string[];
        /**
         * ID
         * @example `59b0bbfe-929b-4a8c-9833-3ce70b4bad38`
         */
        Id: string;
        /**
         * 规则 ID
         * @example `2020-07-14T14:01:41.000+08:00`
         */
        RuleId: string;
        /**
         * 规则名称
         * @example `default`
         */
        RuleName: string;
    };
    /**
     * 状态码
     * @example `OK`
     */
    Code: string;
}
