export interface DescribeVSwitchesResponse {
    /**
     * 请求ID。
     * @example `9A572171-4E27-40D1-BD36-D26C9E71E29E`
     */
    RequestId: string;
    /**
     * 列表条目数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 每页包含的条目数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 交换机列表。
     */
    VSwitchs: {
        /**
         * 交换机的IPv4网段。
         * @example `172.16.0.0/24`
         */
        CidrBlock: string;
        /**
         * 交换机的描述信息。
         * @example `vSwitchDescription
        `
         */
        Description: string;
        /**
         * 是否是默认交换机，取值：
         * - **true**：是默认交换机。
         * - **false**：非默认交换机。
         * @example `true`
         */
        IsDefault: boolean;
        /**
         * NAT网关所属的可用区。
         * @example `cn-hangzhou-b
        `
         */
        IzNo: string;
        /**
         * 交换机的状态，取值：
         * - **Pending**：配置中。
         * - **Available**：可用。
         * @example `Available`
         */
        Status: string;
        /**
         * 交换机的ID。
         * @example `vsw-25bcdxs7pv1****
        `
         */
        VSwitchId: string;
        /**
         * 交换机的名称。
         * @example `vSwitch`
         */
        VSwitchName: string;
        /**
         * 交换机中可用的IP地址数量。
         * @example `1`
         */
        AvailableIpAddressCount: number;
    }[];
}
