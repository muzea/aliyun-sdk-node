export interface ListGroupsResponse {
    /**
     * 查询返回结果下一页的令牌。
     * > 只有`IsTruncated`为`true`时，才显示该参数。
     * @example `K1c3o9K7pFxoTtxH1Nm7MMLb7zrDGvftYBQBPDVv7AD3a8yhRb3Mk8L9ivmN6bFSjfkZNTAg3h4****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `768F908D-A66A-5A5D-816C-20C93CBBFEE3`
     */
    RequestId: string;
    /**
     * 用户组列表。
     */
    Groups: {
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
         * 用户组的创建时间。
         * @example `2021-11-01T02:38:27Z`
         */
        CreateTime: string;
        /**
         * 用户组的类型。取值：
         * - Manual：手动创建。
         * - Synchronized：外部同步。
         * @example `Manual`
         */
        ProvisionType: string;
        /**
         * 用户组的修改时间。
         * @example `2021-11-01T02:38:27Z`
         */
        UpdateTime: string;
        /**
         * 用户组的ID。
         * @example `g-00jqzghi2n3o5hkh****`
         */
        GroupId: string;
    }[];
    /**
     * 每页的最大数据条数。
     * @example `10`
     */
    MaxResults: number;
    /**
     * 符合请求参数条件的数据总条数。
     * @example `3`
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
