export interface ListDhcpOptionsSetsResponse {
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd********`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `0ED8D006-F706-4D23-88ED-E11ED28DCAC0`
     */
    RequestId: string;
    /**
     * DHCP选项集列表信息。
     */
    DhcpOptionsSets: {
        /**
         * DHCP选项集的描述信息。
         * @example `test`
         */
        DhcpOptionsSetDescription: string;
        /**
         * DHCP选项集的状态。取值：
         * - **Available**：可用。
         * - **InUse**：使用中。
         * - **Pending**：配置中。
         * - **Deleted**：已删除。
         * @example `Available`
         */
        Status: string;
        /**
         * DHCP选项集的ID。
         * @example `dopt-o6w0df4epg9zo8isy****`
         */
        DhcpOptionsSetId: string;
        /**
         * DHCP选项集的名称。
         * @example `test`
         */
        DhcpOptionsSetName: string;
        /**
         * DHCP选项集绑定的VPC的数量。
         * @example `2`
         */
        AssociateVpcCount: number;
        /**
         * DHCP选项集所属的阿里云账号ID。
         * @example `253460731706911258`
         */
        OwnerId: number;
        /**
         * DHCP选项配置信息。
         */
        DhcpOptions: {
            /**
             * DNS服务器IP。
             * @example `192.168.XX.XX`
             */
            DomainNameServers: string;
            /**
             * 主机名后缀。
             * @example `example.com`
             */
            DomainName: string;
            /**
             *  IPv4 DHCP选项集的租赁时间。
             * - 租赁时间设置为小时时，单位：h。取值范围：**24h~1176h**，**87600h~175200h**。   默认值：**87600h**。
             * - 租赁时间设置为天时，单位：d。取值范围： **1d~49d**，**3650d~7300d**。   默认值：**3650d** 。
             * @example `3650d`
             */
            LeaseTime: string;
            /**
             * IPv6 DHCP选项集的租赁时间。
             * - 租赁时间设置为小时时，单位：h。取值范围：**24h~1176h**，**87600h~175200h**。   默认值：**87600h**。
             * - 租赁时间设置为天时，单位：d。取值范围： **1d~49d**，**3650d~7300d**。   默认值：**3650d** 。
             * @example `3650d`
             */
            Ipv6LeaseTime: string;
        };
        /**
         * DHCP选项集所属的资源组ID。
         * @example `rg-acfmxazb4ph****`
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
    }[];
    /**
     * 列表条目数。
     * @example `10`
     */
    TotalCount: string;
}
