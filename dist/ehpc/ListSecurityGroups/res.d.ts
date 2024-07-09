export interface ListSecurityGroupsResponse {
    /**
     * 集群加入的安全组总个数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `6D9A3378-61CA-4415-BEB0-1168C2A15975`
     */
    RequestId: string;
    SecurityGroups: {
        /**
         * 安全组ID。
         */
        SecurityGroup: string[];
    };
}
