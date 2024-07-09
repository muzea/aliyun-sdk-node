export interface ListVpcEndpointServiceUsersResponse {
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
     * 服务白名单阿里云账号集合。
     */
    Users: {
        /**
         * 服务白名单阿里云账号ID。
         * @example `12345678`
         */
        UserId: number;
    }[];
    /**
     * ARN格式的用户白名单列表。
     */
    UserARNs: {
        /**
         * ARN格式的用户白名单。
         * @example `acs:ram:*::*`
         */
        UserARN: string;
    }[];
    /**
     * 总记录数。
     * @example `3`
     */
    TotalCount: string;
}
