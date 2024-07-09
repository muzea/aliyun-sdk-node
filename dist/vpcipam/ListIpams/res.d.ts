export interface ListIpamsResponse {
    /**
     * IPAM实例列表。
     */
    Ipams: {
        /**
         * IPAM的实例ID。
         * @example `ipam-ccxbnsbhew0d6t****`
         */
        IpamId: string;
        /**
         * IPAM的名称。
         * @example `test`
         */
        IpamName: string;
        /**
         * IPAM的描述信息。
         * @example `test description`
         */
        IpamDescription: string;
        /**
         * IPAM的生效地域列表。
         */
        OperatingRegionList: string[];
        /**
         * 创建IPAM后，系统默认创建的私网IPAM作用范围。
         * @example `ipam-scope-okoerbco6unqfr****`
         */
        PrivateDefaultScopeId: string;
        /**
         * 创建IPAM后，系统默认创建的公网IPAM作用范围。
         * @example `ipam-scope-ovb76p1g1m19dr****`
         */
        PublicDefaultScopeId: string;
        /**
         * IPAM作用范围的个数。取值范围：**2~5**。
         * @example `2`
         */
        ScopeCount: number;
        /**
         * IPAM实例的状态。取值：
         * - **Creating**：表示创建中。
         * - **Created**：表示创建完成。
         * - **Deleting**：表示删除中。
         * - **Deleted**：表示已删除。
         * @example `Created`
         */
        IpamStatus: string;
        /**
         * IPAM的资源组ID。
         * @example `rg-aek2dbprgpt****`
         */
        ResourceGroupId: string;
        /**
         * IPAM创建的时间。
         * @example `2022-07-01T02:05:23Z`
         */
        CreateTime: string;
        /**
         * 标签列表。
         */
        Tags: {
            /**
             * 标签键
             * @example `FinanceDept`
             */
            Key: string;
            /**
             * 标签值。
             * @example `FinanceJoshua`
             */
            Value: string;
        }[];
        /**
         * 查询到的IPAM实例的地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * IPAM实例资源拥有者的阿里云主账号。
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
     * 列表条目数。
     * @example `10`
     */
    TotalCount: number;
    /**
     * 分批次查询时每次显示的条目数。取值范围：1~100，默认值为10。
     * @example `20`
     */
    MaxResults: number;
    /**
     * 请求ID。
     * @example `23CA0A0B-B0F5-5495-B355-7D9A9203A46B`
     */
    RequestId: string;
}
