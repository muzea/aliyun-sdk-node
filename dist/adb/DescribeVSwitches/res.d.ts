export interface DescribeVSwitchesResponse {
    /**
     * 请求ID。
     * @example `D65A809F-34CE-4550-9BC1-0ED21ETG380`
     */
    RequestId: string;
    /**
     * 交换机列表。
     */
    VSwitches: {
        /**
         * 交换机信息。
         */
        VSwitch: {
            /**
             * 交换机的状态，取值：
             * **Pending**：配置中。
             * **Available**：可用。
             * @example `Available`
             */
            Status: string;
            /**
             * 是否为默认交换机，取值：
             * **true**：是默认交换机。
             * **false**：不是默认交换机。
             * @example `false`
             */
            IsDefault: boolean;
            /**
             * 交换机的ID。
             * @example `vsw-25bcdxs7pv1****`
             */
            VSwitchId: string;
            /**
             * 交换机的IPv4网段。
             * @example `172.16.0.0/24`
             */
            CidrBlock: string;
            /**
             * 交换机所属的地域ID。
             * @example `cn-hangzhou`
             */
            RegionNo: string;
            /**
             * 交换机的创建时间。
             * @example `2022-01-18T12:43:57Z`
             */
            GmtCreate: string;
            /**
             * RAM账号ID。
             * @example `195813423043****`
             */
            AliUid: string;
            /**
             * 交换机的修改时间。
             * @example `2022-01-22T12:43:57Z`
             */
            GmtModified: string;
            /**
             * 用户渠道ID。
             * @example `2****`
             */
            Bid: string;
            /**
             * 交换机所属的可用区ID。
             * @example `cn-hangzhou-k`
             */
            IzNo: string;
            /**
             * 交换机的名称。
             * @example `vswitch`
             */
            VSwitchName: string;
        }[];
    };
}
