export interface ListGroupMembersResponse {
    /**
     * 查询返回结果下一页的令牌。
     * > 只有`IsTruncated`为`true`时，才显示该参数。
     * @example `K1c3o9K7pFxoTtxH1Nm7MMLb7zrDGvftYBQBPDVv7AD3a8yhRb3Mk8L9ivmN6bFSjfkZNTAg3h4****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `BB759F84-2C64-5C36-B6C6-253172C5C370`
     */
    RequestId: string;
    /**
     * 符合请求参数条件的数据总条数。
     * @example `2`
     */
    TotalCounts: number;
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
     * 用户组中的用户列表。
     */
    GroupMembers: {
        /**
         * 用户的状态。取值：
         * - Enabled：启用。
         * - Disabled：禁用。
         * @example `Enabled`
         */
        Status: string;
        /**
         * 用户名称。
         * @example `Alice`
         */
        UserName: string;
        /**
         * 用户的电子邮箱。
         * @example `AliceLee@example.com`
         */
        Email: string;
        /**
         * 用户的描述。
         * @example `This is a user.`
         */
        Description: string;
        /**
         * 用户ID。
         * @example `u-00q8wbq42wiltcrk****`
         */
        UserId: string;
        /**
         * 用户的类型。取值：
         * - Manual：手动创建。
         * - Synchronized：外部同步。
         * @example `Manual`
         */
        ProvisionType: string;
        /**
         * 用户的显示名称。
         * @example `Alice`
         */
        DisplayName: string;
        /**
         * 用户加入用户组的时间。
         * @example `2021-11-01T06:58:18Z`
         */
        JoinTime: string;
        /**
         * 用户组ID。
         * @example `g-00jqzghi2n3o5hkh****`
         */
        GroupId: string;
    }[];
}
