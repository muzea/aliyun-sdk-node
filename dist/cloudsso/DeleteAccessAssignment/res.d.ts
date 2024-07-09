export interface DeleteAccessAssignmentResponse {
    /**
     * 任务信息。
     */
    Task: {
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
         * @example `t-shfqw1u1edszvxw5****`
         */
        TaskId: string;
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
         * 任务类型。取值：DeleteAccessAssignment，表示移除RD账号上的授权任务。
         * @example `DeleteAccessAssignment`
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
     * @example `5C9D0CF4-5CE8-5CE6-932A-826EF4ADD007`
     */
    RequestId: string;
}
