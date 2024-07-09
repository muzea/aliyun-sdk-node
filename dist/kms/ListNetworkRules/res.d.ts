export interface ListNetworkRulesResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `3bf02f7a-015b-4f34-be0f-cc043fda2d33`
     */
    RequestId: string;
    /**
     * 分页查询时，当前页面的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 分页查询时，每页包含网络控制规则的数量。
     * @example `10`
     */
    PageSize: number;
    /**
     * 网络控制规则的总数量。
     * @example `1`
     */
    TotalCount: number;
    NetworkRules: {
        /**
         * 网络控制规则列表。
         */
        NetworkRule: {
            /**
             * 网络类型。取值仅支持Private，即自建应用仅支持通过私网VPC访问KMS实例。
             * @example `Private`
             */
            Type: string;
            /**
             * 网络控制规则名称。
             * @example `networkrule_test`
             */
            Name: string;
        }[];
    };
}
