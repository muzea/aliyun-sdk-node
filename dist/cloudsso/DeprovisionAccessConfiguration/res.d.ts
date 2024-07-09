export interface DeprovisionAccessConfigurationResponse {
    /**
     * 任务信息。
     */
    Tasks: {
        /**
         * 任务状态。取值：
         * - InProgress：任务执行中。
         * - Success：任务执行成功。
         * - Failed：任务执行失败。
         * @example `InProgress`
         */
        Status: string;
        /**
         * 任务ID。
         * @example `t-sh0655wnq8pdlrlc****`
         */
        TaskId: string;
        /**
         * 任务目标在资源目录中的路径ID。
         * @example `rd-3G****​/r-Wm****​/114240524784****`
         */
        TargetPath: string;
        /**
         * 任务目标名称。
         * @example `dev-test`
         */
        TargetName: string;
        /**
         * 任务目标ID。
         * @example `114240524784****`
         */
        TargetId: string;
        /**
         * 访问配置名称。
         * @example `ECS-Admin`
         */
        AccessConfigurationName: string;
        /**
         * 任务目标在资源目录中的路径名称。
         * @example `rd-3G****​/root/dev-test`
         */
        TargetPathName: string;
        /**
         * 任务类型。取值：DeprovisionAccessConfiguration，表示解除访问配置部署任务。
         * @example `DeprovisionAccessConfiguration`
         */
        TaskType: string;
        /**
         * 任务目标类型。取值：RD-Account，表示任务目标类型为RD账号。
         * @example `RD-Account`
         */
        TargetType: string;
        /**
         * 访问配置ID。
         * @example `ac-00jhtfl8thteu6uj****`
         */
        AccessConfigurationId: string;
    }[];
    /**
     * 请求ID。
     * @example `584FE9D0-D1AC-5B19-A39C-8D244FC0538C`
     */
    RequestId: string;
}
