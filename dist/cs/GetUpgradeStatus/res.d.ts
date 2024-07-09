export interface GetUpgradeStatusResponse {
    /**
     * 集群升级中的错误信息。
     * @example `subject to actual return`
     */
    error_message: string;
    /**
     * 预检查返回ID。
     * @example `be4c8eb72de94d459ea7ace7c811d119`
     */
    precheck_report_id: string;
    /**
     * 集群目前升级的状态。取值：
     * - `success` : 升级成功。
     * - `fail` : 升级失败。
     * - `pause` : 升级暂停。
     * - `running` : 升级进行中。
     * @example `running`
     */
    status: string;
    /**
     * 集群目前升级的阶段。取值：
     * - `not_start` : 暂未开始。
     * - `prechecking` : 预检查中。
     * - `upgrading`:  升级中。
     * - `pause` : 暂停中。
     * - `success` : 升级成功。
     * @example `prechecking`
     */
    upgrade_step: string;
    /**
     * 升级任务详情。
     */
    upgrade_task: {
        /**
         * 升级任务状态。取值：
         * - `running`: 执行中。
         * - `Success`: 执行成功。
         * - `Failed`: 执行失败。
         * @example `running`
         */
        status: string;
        /**
         * 升级任务描述信息。
         * @example `subject to actual return`
         */
        message: string;
    };
}
