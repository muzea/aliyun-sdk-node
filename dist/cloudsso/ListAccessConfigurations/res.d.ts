export interface ListAccessConfigurationsResponse {
    /**
     * 访问配置列表。
     */
    AccessConfigurations: {
        /**
         * 访问配置名称。
         * @example `ECS-Admin`
         */
        AccessConfigurationName: string;
        /**
         * 会话持续时间。
         * 云SSO用户使用访问配置访问RD账号时，会话最多保持的时间。
         * 单位：秒。
         * @example `900`
         */
        SessionDuration: number;
        /**
         * 访问配置的描述。
         * @example `This is an access configuration.`
         */
        Description: string;
        /**
         * 初始访问页面。
         * 云SSO用户使用访问配置访问RD账号时，初始访问的页面地址。
         * @example `https://cloudsso.console.aliyun.com`
         */
        RelayState: string;
        /**
         * 访问配置的创建时间。
         * @example `2021-11-02T08:44:23Z`
         */
        CreateTime: string;
        /**
         * 访问配置的修改时间。
         * @example `2021-11-02T08:44:23Z`
         */
        UpdateTime: string;
        /**
         * 状态通知信息。
         */
        StatusNotifications: string[];
        /**
         * 访问配置ID。
         * @example `ac-00jhtfl8thteu6uj****`
         */
        AccessConfigurationId: string;
    }[];
    /**
     * 查询返回结果下一页的令牌。
     * > 只有`IsTruncated`为`true`时，才显示该参数。
     * @example `K1c3o9K7pFxoTtxH1Nm7MMLb7zrDGvftYBQBPDVv7AD3a8yhRb3Mk8L9ivmN6bFSjfkZNTAg3h4****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `2BC0CBAC-45E1-5BD3-BF6E-F69D1D5391C2`
     */
    RequestId: string;
    /**
     * 每页的最大数据条数。
     * @example `10`
     */
    MaxResults: number;
    /**
     * 符合请求参数条件的数据总条数。
     * @example `2`
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
