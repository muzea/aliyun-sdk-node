export interface ListJoinedGroupsForUserResponse {
    /**
     * 查询返回结果下一页的令牌。
     * > 只有`IsTruncated`为`true`时，才显示该参数。
     * @example `K1c3o9K7pFxoTtxH1Nm7MMLb7zrDGvftYBQBPDVv7AD3a8yhRb3Mk8L9ivmN6bFSjfkZNTAg3h4****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `E9BBB45F-7877-5DE9-96A5-20E6CFA48929`
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
     * 加入的用户组列表。
     */
    JoinedGroups: {
        /**
         * 用户组的名称。
         * @example `TestGroup`
         */
        GroupName: string;
        /**
         * 用户组的描述。
         * @example `This is a group.`
         */
        Description: string;
        /**
         * 用户ID。
         * @example `u-00q8wbq42wiltcrk****`
         */
        UserId: string;
        /**
         * 用户组的类型。取值：
         * - Manual：手动创建。
         * - Synchronized：外部同步。
         * @example `Manual`
         */
        ProvisionType: string;
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
