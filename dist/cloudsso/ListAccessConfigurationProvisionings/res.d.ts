export interface ListAccessConfigurationProvisioningsResponse {
    /**
     * 查询返回结果下一页的令牌。
     * > 只有`IsTruncated`为`true`，才显示该参数。
     * @example `K1c3o9K7pFxoTtxH1Nm7MMLb7zrDGvftYBQBPDVv7AD3a8yhRb3Mk8L9ivmN6bFSjfkZNTAg3h4****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `6BA1BDF1-D845-5D2C-B742-74BE2970E4C1`
     */
    RequestId: string;
    /**
     * 访问配置部署列表。
     */
    AccessConfigurationProvisionings: {
        /**
         * 部署状态。取值：
         * - Provisioned：部署成功。
         * - ReprovisionRequired：需要重新部署。
         * - DeprovisionFailed：部署失败。
         * @example `Provisioned`
         */
        Status: string;
        /**
         * 在RD账号中创建的SAML身份提供商名称。
         * @example `AliyunReservedSSO-d-00fc2p61****`
         */
        SAMLProviderName: string;
        /**
         * 任务目标在资源目录中的路径ID。
         * @example `rd-3G****​/r-Wm****​/fd-pjM8oy****​/101522521960****`
         */
        TargetPath: string;
        /**
         * 首次部署成功的时间。
         * @example `2021-07-26T08:54:14Z`
         */
        CreateTime: string;
        /**
         * 任务目标名称。
         * @example `SharedServices_5009****`
         */
        TargetName: string;
        /**
         * 任务目标ID。
         * 当任务目标类型为`RD-Account`时，该参数为RD账号UID。
         * @example `101522521960****`
         */
        TargetId: string;
        /**
         * 在RD账号中创建的RAM角色名称。
         * @example `AliyunReservedSSO-VPC-Admin`
         */
        RAMRoleName: string;
        /**
         * 访问配置名称。
         * @example `VPC-Admin`
         */
        AccessConfigurationName: string;
        /**
         * 任务目标在资源目录中的路径名称。
         * @example `rd-3G****​/root/Core/SharedServices_5009****`
         */
        TargetPathName: string;
        /**
         * 任务目标类型。
         * 取值：RD-Account，表示任务目标类型为RD账号。
         * @example `RD-Account`
         */
        TargetType: string;
        /**
         * 最近一次部署成功的时间。
         * @example `2021-07-26T08:54:18Z`
         */
        UpdateTime: string;
        /**
         * 在RD账号中创建的自定义策略名称。
         */
        RAMPolicyNames: string[];
        /**
         * 访问配置ID。
         * @example `ac-00ccule7tadaijxc****`
         */
        AccessConfigurationId: string;
    }[];
    /**
     * 每页的最大数据条数。
     * @example `10`
     */
    MaxResults: number;
    /**
     * 返回结果是否被截断。取值：
     * - true：已截断。
     * - false：未截断。
     * @example `false`
     */
    IsTruncated: boolean;
    /**
     * 符合请求参数条件的数据总条数。
     * @example `2`
     */
    TotalCounts: number;
}
