export interface ListVpcEndpointSecurityGroupsResponse {
    /**
     * 安全组信息集合。
     */
    SecurityGroups: {
        /**
         * 终端节点已加入的安全组ID。
         * @example `sg-hp33bw6ynvm2yb0e****`
         */
        SecurityGroupId: string;
        /**
         * 安全组关联状态，取值：
         * - Attaching：关联中。
         * - Attached：已关联。
         * - Detaching：分离中。
         * @example `Attached`
         */
        SecurityGroupStatus: string;
    }[];
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `caeba0bbb2be03f84eb48b699f0a4883`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `0ED8D006-F706-4D23-88ED-E11ED28DCAC0`
     */
    RequestId: string;
    /**
     * 分页大小。
     * @example `50`
     */
    MaxResults: number;
    /**
     * 总记录数。
     * @example `12`
     */
    TotalCount: number;
}
