export interface ListTasksResponse {
    /**
     * 任务列表。
     */
    Tasks: {
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
         * @example `t-sh5k4gesm6twlrqb****`
         */
        TaskId: string;
        /**
         * 任务结束时间。
         * @example `2021-11-09T05:50:50Z`
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
         * @example `2021-11-09T05:50:50Z`
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
         * @example `CreateAccessAssignment`
         */
        TaskType: string;
        /**
         * 任务失败原因。
         * > 只有`Status`为`Failed`，才显示该参数。
         * @example `No Permission.`
         */
        FailureReason: string;
        /**
         * 任务目标类型。
         * 取值：RD-Account，表示任务目标类型为RD账号。
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
    }[];
    /**
     * 查询返回结果下一页的令牌。
     * > 只有`IsTruncated`为`true`，才显示该参数。
     * @example `K1c3o9K7pFxoTtxH1Nm7MMLb7zrDGvftYBQBPDVv7AD3a8yhRb3Mk8L9ivmN6bFSjfkZNTAg3h4****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `C0DA2DFC-EB18-59EF-BD82-C30862EBA3A3`
     */
    RequestId: string;
    /**
     * 每页的最大数据条数。
     * @example `10`
     */
    MaxResults: number;
    /**
     * 符合请求参数条件的数据总条数。
     * @example `1`
     */
    TotalCounts: number;
    /**
     * 返回结果是否被截断。取值：
     * - true：已截断。
     * - false：未截断。
     * @example `false`
     */
    IsTruncated: boolean;
}
