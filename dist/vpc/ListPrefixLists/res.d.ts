export interface ListPrefixListsResponse {
    /**
     * 请求ID。
     * @example `DF72F7BB-5DFA-529C-887E-B0BB70D89C4F`
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
     * 查询到的列表数目。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 分批次查询时每次显示的条目数。取值范围：**1**~**100**，默认值为**20**。
     * @example `20`
     */
    MaxResults: number;
    /**
     * 查询到的前缀列表的列表信息。
     */
    PrefixLists: {
        /**
         * 查询到的前缀列表ID。
         * @example `pl-m5estsqsdqwg88hjf****`
         */
        PrefixListId: string;
        /**
         * 前缀列表的名称。
         * @example `test`
         */
        PrefixListName: string;
        /**
         * 前缀列表的描述信息。
         * @example `Created with oss service by system.`
         */
        PrefixListDescription: string;
        /**
         * 前缀列表的IP版本。取值：
         * - **IPV4**：IPv4版本。
         * - **IPV6**：IPv6版本。
         * @example `IPV4`
         */
        IpVersion: string;
        /**
         * 前缀列表的创建时间。
         * @example `2022-07-12T14:22:32Z`
         */
        CreationTime: string;
        /**
         * 前缀列表的CIDR地址块信息。
         */
        CidrBlocks: string[];
        /**
         * 前缀列表的共享类型。取值：
         * - **Shared**：表示该前缀列表为共享的前缀列表。
         * - 空：表示该前缀列表不是共享的前缀列表。
         * @example `Shared`
         */
        ShareType: string;
        /**
         * 前缀列表中CIDR地址块的最大条目数。
         * @example `10`
         */
        MaxEntries: number;
        /**
         * 前缀列表的状态。取值：
         * - **Created**：已创建。
         * - **Deleted**：已删除。
         * - **Modifying**：修改中。
         * @example `Created`
         */
        Status: string;
        /**
         * 前缀列表所属的阿里云账号（主账号）。
         * @example `1210123456123456`
         */
        OwnerId: string;
        /**
         * 前缀列表的状态。取值：
         * - **Created**：已创建。
         * - **Deleted**：已删除。
         * - **Modifying**：修改中。
         * > 该参数与**Status**含义和取值相同。
         * @example `Created`
         */
        PrefixListStatus: string;
        /**
         * 查询到的前缀列表信息的地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 前缀列表所属的资源组ID。
         * @example `rg-bp67acfmxazb4ph****`
         */
        ResourceGroupId: string;
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
             * @example `FinanceJoshua`
             */
            Value: string;
        }[];
        /**
         * 前缀列表类型
         * @example `Custom`
         */
        PrefixListType: string;
    }[];
}
