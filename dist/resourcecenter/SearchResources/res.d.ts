export interface SearchResourcesResponse {
    /**
     * 查询返回结果下一页的令牌。
     * @example `eyJzZWFyY2hBZnRlcnMiOlsiMTAwMTU2Nzk4MTU1OSJd****
    `
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `D696E6EF-3A6D-5770-801E-4982081FE4D0`
     */
    RequestId: string;
    /**
     * 每页的最大数据条数。
     * @example `10`
     */
    MaxResults: number;
    /**
     * 过滤条件。
     */
    Filters: {
        /**
         * 过滤条件键。
         * @example `RegionId`
         */
        Key: string;
        /**
         * 匹配方式。
         * @example `Equals`
         */
        MatchType: string;
        /**
         * 过滤条件值。
         */
        Values: string[];
    }[];
    /**
     * 资源信息。
     */
    Resources: {
        /**
         * 资源类型。
         * @example `ACS::VPC::RouteTable`
         */
        ResourceType: string;
        /**
         * 资源的创建时间。
         * > 资源是否返回该参数，由所属的云服务决定。
         * @example `2021-06-30T09:20:08Z`
         */
        CreateTime: string;
        /**
         * 资源组ID。
         * @example `rg-acfmzawhxxc****`
         */
        ResourceGroupId: string;
        /**
         * 可用区ID。
         * > 资源是否返回该参数，由所属的云服务决定。
         * @example `cn-hangzhou-k`
         */
        ZoneId: string;
        /**
         * 阿里云账号ID。
         * @example `151266687691****`
         */
        AccountId: string;
        /**
         * 资源ID。
         * @example `vtb-bp11lbh452fr8940s****`
         */
        ResourceId: string;
        /**
         * 资源名称。
         * @example `group1`
         */
        ResourceName: string;
        /**
         * 地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 标签。
         */
        Tags: {
            /**
             * 标签键。
             * @example `test_key`
             */
            Key: string;
            /**
             * 标签值。
             * @example `test_value`
             */
            Value: string;
        }[];
        /**
         * IP地址。
         * > 资源是否返回该参数，由所属的云服务决定。
         */
        IpAddresses: string[];
        /**
         * IP地址属性。
         */
        IpAddressAttributes: {
            /**
             * IP地址。
             * @example `192.168.1.2`
             */
            IpAddress: string;
            /**
             * 网络类型，取值：
             * - **Public**：公网。
             * - **Private**：私网。
             * @example `Public`
             */
            NetworkType: string;
            /**
             * IP地址的版本。
             * @example `Ipv4`
             */
            Version: string;
        }[];
        /**
         * 资源过期时间。
         * @example `2021-07-30T09:20:08Z`
         */
        ExpireTime: string;
    }[];
}
