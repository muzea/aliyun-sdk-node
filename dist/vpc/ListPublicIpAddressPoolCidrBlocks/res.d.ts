export interface ListPublicIpAddressPoolCidrBlocksResponse {
    /**
     * 请求ID。
     * @example `4EC47282-1B74-4534-BD0E-403F3EE64CAF`
     */
    RequestId: string;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    NextToken: string;
    /**
     * 本次请求条件下的数据总量。
     * @example `10`
     */
    TotalCount: number;
    /**
     * IP地址池的IP地址网段数据列表。
     */
    PublicIpPoolCidrBlockList: {
        /**
         * IP地址池的实例ID。
         * @example `pippool-6wetvn6fumkgycssx****`
         */
        PublicIpAddressPoolId: string;
        /**
         * IP地址段。
         * @example `47.0.XX.XX/24`
         */
        CidrBlock: string;
        /**
         * 创建时间，格式为`YYYY-MM-DDThh:mm:ssZ`。
         * @example `2022-05-10T01:37:38Z`
         */
        CreationTime: string;
        /**
         * IP地址池中的IP地址网段状态。取值：
         * - **Created**：可用。
         * - **Deleting**：删除中。
         * - **Modifying**：修改中。
         * @example `Created`
         */
        Status: string;
        /**
         * IP地址池中IP地址网段的可用IP地址总数。
         * @example `20`
         */
        UsedIpNum: number;
        /**
         * IP地址池中IP地址网段的已用IP地址数。
         * @example `20`
         */
        TotalIpNum: number;
    }[];
}
