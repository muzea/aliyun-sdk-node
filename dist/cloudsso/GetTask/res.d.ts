export interface GetTaskResponse {
    /**
     * 任务信息。
     */
    Task: {
        /**
         * 任务状态。取值：
         * - InProgress：任务执行中。
         * - Success：任务执行成功。
         * - Failed：任务执行失败。
         * @example `Success`
         */
        Status: string;
        /**
         * 任务ID。
         * @example `t-shfqw1u1edszvxw5****`
         */
        TaskId: string;
        /**
         * 任务结束时间。
         * @example `2021-11-05T02:58:08Z`
         */
        EndTime: string;
        /**
         * 云SSO身份ID。
         * @example `u-00q8wbq42wiltcrk****`
         */
        PrincipalId: string;
        /**
         * 任务目标在资源目录中的路径ID。
         * @example `rd-3G****​/r-Wm****​/114240524784****`
         */
        TargetPath: string;
        /**
         * 任务开始时间。
         * @example `2021-11-05T02:58:07Z`
         */
        StartTime: string;
        /**
         * 云SSO身份名称。
         * @example `Alice`
         */
        PrincipalName: string;
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
         * 任务类型。取值：
         * - ProvisionAccessConfiguration：部署访问配置。
         * - DeprovisionAccessConfiguration：解除访问配置部署。
         * - CreateAccessAssignment：在RD账号上授权。
         * - DeleteAccessAssignment：移除RD账号上的授权。
         * @example `DeleteAccessAssignment`
         */
        TaskType: string;
        /**
         * 任务失败原因。
         * > 只有`Status`为`Failed`，才会显示该参数。
         * @example `No Permission.`
         */
        FailureReason: string;
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
        /**
         * 云SSO身份类型。取值：
         * - User：用户。
         * - Group：用户组。
         * @example `User`
         */
        PrincipalType: string;
    };
    /**
     * 请求ID。
     * @example `923CA5E8-57BF-5E15-8BA6-E75A966B7E3F`
     */
    RequestId: string;
}
