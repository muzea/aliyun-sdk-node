export interface ModifyFlowControlTaskResponse {
    /**
     * 请求ID。
     * @example `8F81A922-6C81-46D6-B78C-CC35E16B1691`
     */
    requestId: string;
    /**
     * 返回参数。
     */
    result: {
        /**
         * 创建时间的UTC时间。
         * @example `2018-12-07T02:24:26.000Z`
         */
        gmtCreate: string;
        /**
         * 最后修改数据源的UTC时间。
         * @example `2020-11-11T09:47:43.000Z`
         */
        gmtModified: string;
        /**
         * 流量调控Meta。
         */
        meta: {
            /**
             * 流量调控描述信息。
             * @example `tst`
             */
            description: string;
            /**
             * 结束时间秒级时间戳。
             * @example `1656518399`
             */
            endTime: number;
            /**
             * 流量调控Meta类型，固定值FlowControlTask。
             * @example `FlowControlTask`
             */
            metaType: string;
            /**
             * 场景ID，支持多个，英文,分割即可。
             * @example `1,2,3`
             */
            sceneIds: string;
            /**
             * 选品规则参数列表。
             */
            selectionParams: {
                /**
                 * 选品规则过滤条件类型。
                 * @example `QUERY_PUB_TIME`
                 */
                selectType: string;
                /**
                 * 选品规则过滤条件具体数值。
                 * @example `10000`
                 */
                selectValue: string;
                /**
                 * 选品规则过滤条件操作。
                 * @example `OPERATOR_HIGHER`
                 */
                selectionOperation: string;
            }[];
            /**
             * 开始时间（秒级时间戳）。
             * @example `1640739600`
             */
            startTime: number;
            /**
             * 曝光配置。
             */
            target: {
                /**
                 * 曝光类型。
                 * 取值：
                 * - **EXPOSE_PERCENT**：每日曝光百分比。
                 * - **EXPOSE_COUNT**：曝光总量。
                 * @example `EXPOSE_PERCENT`
                 */
                type: string;
                /**
                 * 曝光值。
                 * @example `20`
                 */
                value: number;
            };
            /**
             * 流量调侃任务名称。
             * @example `活动用户测试`
             */
            taskName: string;
        };
        /**
         * 任务状态。
         * 取值：
         * - **DRAFT**：草稿。
         * - **READY**：待生效。
         * - **RUNNING**：运行中。
         * - **ENDED**：结束。
         * @example `DRAFT`
         */
        status: string;
        /**
         * 流量调侃任务ID。
         * @example `1661506482`
         */
        TaskId: string;
    };
}
