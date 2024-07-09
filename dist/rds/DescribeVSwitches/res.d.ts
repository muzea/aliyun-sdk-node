export interface DescribeVSwitchesResponse {
    /**
     * 请求ID。
     * @example `8A68AEA1-AFBD-53F8-9BBB-06555EAE5C0E`
     */
    RequestId: string;
    /**
     * 总记录数。
     * @example `2`
     */
    TotalCount: number;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 每页记录数。与请求参数**PageSize**中传入的值对应。
     * @example `30`
     */
    PageSize: number;
    /**
     * 交换机信息列表。
     */
    VSwitchs: {
        /**
         * 交换机网段。
         * @example `172.16.XX.XX/24`
         */
        CidrBlock: string;
        /**
         * 交换机的描述信息。
         * @example `VSwitchDescription`
         */
        Description: string;
        /**
         * 是否是默认交换机。
         * * **true**：是
         * * **false**：否
         * @example `true`
         */
        IsDefault: boolean;
        /**
         * 交换机所属可用区ID。
         * @example `cn-hangzhou-j`
         */
        IzNo: string;
        /**
         * 交换机状态。取值：
         * * **Pending**：配置中。
         * * **Available**：可用。
         * @example `Available`
         */
        Status: string;
        /**
         * 交换机ID。
         * @example `vsw-bp1pnaz94xc****`
         */
        VSwitchId: string;
        /**
         * 交换机名称。
         * @example `test`
         */
        VSwitchName: string;
        /**
         * 交换机中可用的IP地址数量。
         * @example `1`
         */
        AvailableIpAddressCount: string;
    }[];
}
