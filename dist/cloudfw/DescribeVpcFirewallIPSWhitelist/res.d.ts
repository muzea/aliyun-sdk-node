export interface DescribeVpcFirewallIPSWhitelistResponse {
    /**
     * 返回结果的请求ID。
     * @example `B5EE02F9-4F21-56CA-AA49-F9F8D69483C1`
     */
    RequestId: string;
    /**
     * VPC边界防火墙IPS白名单的详细信息。
     */
    Whitelists: {
        /**
         * VPC边界防火墙的实例ID。
         * @example `vfw-57431e9abe424852a578`
         */
        VpcFirewallId: string;
        /**
         * 白名单类型。取值：
         *  - **1**：目的类型
         * - **2**：源类型
         * @example `1`
         */
        WhiteType: number;
        /**
         * 对应列表类型的值。
         * @example `10.10.200.4/32,10.10.200.25/32`
         */
        ListValue: string;
        /**
         * 列表类型。取值：
         *  - **1**：用户自定义类型
         * - **2**：地址簿类型
         * @example `1`
         */
        ListType: number;
        /**
         * 列表类型数组的内容。
         */
        WhiteListValue: string[];
    }[];
}
