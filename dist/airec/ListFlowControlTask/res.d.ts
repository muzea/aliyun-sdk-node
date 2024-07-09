export interface ListFlowControlTaskResponse {
    /**
     * 请求ID。
     * @example `6E427B10-30FC-1873-922F-FC176D3398D4`
     */
    requestId: string;
    /**
     * 返回参数。
     */
    result: {
        /**
         * 创建时间，单位为UTC时间。
         * @example `2022-08-06T06:14:01.000Z`
         */
        gmtCreate: string;
        /**
         * 最后修改时间，单位为UTC时间。
         * @example `2022-08-06T06:14:01.000Z`
         */
        gmtModified: string;
        /**
         * 流量调控Meta。
         */
        meta: {
            /**
             * 流量调控描述信息。
             * @example `这是一个测试任务`
             */
            description: string;
            /**
             * 结束时间秒级时间戳。
             * @example `1621267200`
             */
            endTime: number;
            /**
             * 流量调控Meta类型，固定值FlowControlTask。
             * @example `metaType`
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
                 * @example `selectType`
                 */
                selectType: string;
                /**
                 * 选品规则过滤条件具体数值。
                 * @example `selectValue`
                 */
                selectValue: string;
                /**
                 * 选品规则过滤条件操作。
                 * @example `selectionOperation`
                 */
                selectionOperation: string;
            }[];
            /**
             * 开始时间秒级时间戳。
             * @example `1621267200`
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
                 * @example `50`
                 */
                value: number;
            };
            /**
             * 流量调控任务名称。
             * @example `testtaskname`
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
         * 流量调控任务ID。
         * @example `1661506482`
         */
        TaskId: string;
    }[];
}
