export interface ListUsersResponse {
    /**
     * 查询返回结果下一页的令牌。
     * > 只有`IsTruncated`为`true`时，才显示该参数。
     * @example `K1c3o9K7pFxoTtxH1Nm7MMLb7zrDGvftYBQBPDVv7AD3a8yhRb3Mk8L9ivmN6bFSjfkZNTAg3h4****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `734D9AAC-9A8E-5DF6-A633-ADE70FF2A9B1`
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
    /**
     * 用户列表。
     */
    Users: {
        /**
         * 用户的状态。取值：
         * - Enabled：启用。
         * - Disabled：禁用。
         * @example `Enabled`
         */
        Status: string;
        /**
         * 用户名称。
         * @example `AliceLee@example.onmicrosoft.com`
         */
        UserName: string;
        /**
         * 用户的电子邮箱。
         * @example `AliceLee@example.onmicrosoft.com`
         */
        Email: string;
        /**
         * 用户的描述。
         * @example `This is a user.`
         */
        Description: string;
        /**
         * 用户ID。
         * @example `u-00bikzkuzbb58luh****`
         */
        UserId: string;
        /**
         * 用户的名。
         * @example `Alice`
         */
        FirstName: string;
        /**
         * 用户的创建时间（UTC时间）。
         * @example `2021-06-30T09:20:08Z`
         */
        CreateTime: string;
        /**
         * 用户的类型。取值：
         * - Manual：手动创建。
         * - Synchronized：外部同步。
         * @example `Synchronized`
         */
        ProvisionType: string;
        /**
         * 用户的显示名称。
         * @example `AliceLee`
         */
        DisplayName: string;
        /**
         * 用户的修改时间（UTC时间）。
         * @example `2021-06-30T09:20:08Z`
         */
        UpdateTime: string;
        /**
         * 用户的姓。
         * @example `Lee`
         */
        LastName: string;
        /**
         * 外部身份提供商的用户标识符信息。
         */
        ExternalId: {
            /**
             * 外部身份提供商的用户标识符。
             * @example `c73******a5fdd5
            `
             */
            Id: string;
            /**
             * 外部身份同步渠道，当前仅支持SCIM同步。
             * @example `SCIM`
             */
            Issuer: string;
        };
    }[];
}
