export interface ListAccessAssignmentsResponse {
    /**
     * 查询返回结果下一页的令牌。
     * > 只有`IsTruncated`为`true`，才显示该参数。
     * @example `K1c3o9K7pFxoTtxH1Nm7MMLb7zrDGvftYBQBPDVv7AD3a8yhRb3Mk8L9ivmN6bFSjfkZNTAg3h4****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `66898413-EB80-556D-9429-06FE3548F672`
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
    /**
     * 授权信息列表。
     */
    AccessAssignments: {
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
         * 授权成功的时间。
         * @example `2021-11-04T10:03:08Z`
         */
        CreateTime: string;
        /**
         * 任务目标类型。
         * 取值：RD-Account，表示任务目标类型为RD账号。
         * @example `RD-Account`
         */
        TargetType: string;
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
        /**
         * 任务目标ID。
         * @example `114240524784****`
         */
        TargetId: string;
    }[];
}
