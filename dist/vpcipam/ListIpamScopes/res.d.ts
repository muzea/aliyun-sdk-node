export interface ListIpamScopesResponse {
    /**
     * IPAM作用范围列表。
     */
    IpamScopes: {
        /**
         * IPAM作用范围的创建时间。
         * @example `2022-04-18T03:12:37Z`
         */
        CreateTime: string;
        /**
         * IPAM作用范围的实例ID。
         * @example `ipam-scope-glfmcyldpm8lsy****`
         */
        IpamScopeId: string;
        /**
         * IPAM作用范围的作用域类型。取值：
         * - **public**：表示为公网类型。
         * - **private**：表示为私网类型。
         * @example `private`
         */
        IpamScopeType: string;
        /**
         * IPAM作用范围的状态。取值：
         * - **Creating**：表示创建中。
         * - **Created**：表示创建完成。
         * - **Deleting**：表示删除中。
         * - **Deleted**：表示已删除。
         * @example `Created`
         */
        Status: string;
        /**
         * IPAM的实例ID。
         * @example `ipam-ccxbnsbhew0d6t****`
         */
        IpamId: string;
        /**
         * IPAM作用范围作用域下包含的地址池的个数。
         * @example `2`
         */
        PoolCount: number;
        /**
         * IPAM作用范围的名称。
         * @example `test`
         */
        IpamScopeName: string;
        /**
         * IPAM作用范围的描述信息。
         * @example `test description`
         */
        IpamScopeDescription: string;
        /**
         * 标签列表。
         */
        Tags: {
            /**
             * 标签键。
             * @example `FinanceDept`
             */
            Key: string;
            /**
             * 标签值。
             * @example `FinanceDept`
             */
            Value: string;
        }[];
        /**
         * 是否为默认作用域，取值：
         *
         * - **true**：是默认作用域。
         * - **false**：不是默认作用域。
         * @example `true`
         */
        IsDefault: boolean;
        /**
         * 查询到的IPAM作用范围的地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * IPAM作用范围资源拥有者的阿里云主账号。
         * @example `1210123456******`
         */
        OwnerId: number;
    }[];
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    NextToken: string;
    /**
     * 查询的条目总数。
     * @example `1000`
     */
    TotalCount: number;
    /**
     * 分批次查询时每次显示的条目数。
     * @example `10`
     */
    MaxResults: number;
    /**
     * 请求ID。
     * @example `8859C501-97E7-53D4-B94B-2A9E16003B22`
     */
    RequestId: string;
}
