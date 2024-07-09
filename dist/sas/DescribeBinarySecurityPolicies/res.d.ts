export interface DescribeBinarySecurityPoliciesResponse {
    /**
     * 唯一请求ID。
     * @example `1EE7B150-D67E-53FD-A52D-3E8E669A****`
     */
    RequestId: string;
    /**
     * 分页信息。
     */
    PageInfo: {
        /**
         * 分页查询时，显示的当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页查询时，显示每页数据的最大条数。
         * @example `20`
         */
        PageSize: number;
        /**
         * 分页查询时，显示的总数据条数。
         * @example `218`
         */
        TotalCount: number;
        /**
         * 分页查询时，显示的总数据条数。
         * @example `20`
         */
        Count: number;
    };
    /**
     * 安全策略信息。
     */
    BinarySecurityPolicies: {
        /**
         * 策略状态。取值：
         * - **enabled**：启用。
         * - **disabled**：已禁用。
         * @example `enabled`
         */
        Status: string;
        /**
         * 策略内容。JSON格式，Key取值：
         * - **policyMode**：策略类型，默认requireAttestor。
         * - **requiredAttestors**：需要的证明者。
         * @example `{\"PolicyMode\":\"requireAttestor\",\"RequiredAttestors\":[\"test-xcs-04-11-hhht\"]}`
         */
        Policy: string;
        /**
         * 策略名称。
         * @example `logtail`
         */
        Name: string;
        /**
         * 备注。
         * @example `test`
         */
        Remark: string;
        /**
         * 集群信息。
         */
        Clusters: {
            /**
             * 集群ID。
             * @example `c316702acdf5f45e1a9dc7fc52f21****`
             */
            ClusterId: string;
            /**
             * 命名空间。
             */
            Namespaces: string[];
        }[];
    }[];
}
