export interface ModifyFlowControlTaskRequest {
    /**
     * 实例ID。
     * @example `airec-cn-****`
     */
    "instanceId"?: string;
    /**
     * 流量调控任务ID。
     * @example `1667297014460`
     */
    "taskId"?: string;
    /**
     * 请求Body参数。
     */
    "body"?: {
        /**
         * 流量调控任务名称。
         * @example `testname`
         */
        TaskName: string;
        /**
         * 流量调控描述信息。
         * @example `描述`
         */
        description: string;
        /**
         * 结束时间秒级时间戳。
         * @example `1639519200`
         */
        endTime: number;
        /**
         * 流量调控Meta类型，固定值FlowControlTask。
         * @example `FlowControlTask`
         */
        metaType: string;
        /**
         * 场景ID，支持多个，英文,分割即可。
         * @example `all,sy101`
         */
        sceneIds: string;
        /**
         * 选品规则参数列表。
         */
        selectionParams: {
            /**
             * 选品规则过滤条件类型。
             * @example `invalidItem`
             */
            selectType: string;
            /**
             * 选品规则过滤条件具体数值。
             * @example `20`
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
         * @example `1638460800`
         */
        startTime: number;
        /**
         * 物品曝光配置。
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
    };
}
