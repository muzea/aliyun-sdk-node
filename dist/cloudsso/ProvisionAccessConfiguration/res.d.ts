export interface ProvisionAccessConfigurationResponse {
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
         * @example `t-shqlhd8uvt280rtm****`
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
         * 部署目标ID。
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
         * 任务类型。取值：ProvisionAccessConfiguration，表示部署访问配置任务。
         * @example `ProvisionAccessConfiguration`
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
     * @example `DFDC16B2-4509-5FA6-9FA5-3CD35E4292FB`
     */
    RequestId: string;
}
