export interface DescribeRdsVSwitchsResponse {
    /**
     * 请求ID。
     * @example `B0BA251D-6854-5A99-A964-3C**********`
     */
    RequestId: string;
    /**
     * vSwitch列表。
     */
    VSwitches: {
        /**
         * vSwith信息。
         */
        VSwitch: {
            /**
             * vSwitch状态。**Available**表示可用。
             * @example `Available`
             */
            Status: string;
            /**
             * 是否是默认交换机。取值说明：
             * - **true**：是
             * - **false**：否
             * @example `false`
             */
            IsDefault: boolean;
            /**
             * vSwitch ID。
             * @example `vsw-bp*******************`
             */
            VSwitchId: string;
            /**
             * vSwitch的网段。
             * @example `192.**.**.0/24`
             */
            CidrBlock: string;
            /**
             * 该参数已废弃，故不会返回参数值。
             * @example `null`
             */
            RegionNo: string;
            /**
             * 该参数已废弃，故不会返回参数值。
             * @example `null`
             */
            GmtCreate: string;
            /**
             * 该参数已废弃，故不会返回参数值。
             * @example `null`
             */
            AliUid: string;
            /**
             * 该参数已废弃，故不会返回参数值。
             * @example `null`
             */
            GmtModified: string;
            /**
             * 该参数已废弃，故不会返回参数值。
             * @example `null`
             */
            Bid: string;
            /**
             * 可用区ID。
             * @example `cn-hangzhou-h`
             */
            IzNo: string;
            /**
             * vSwitch名称。
             * @example `vsw-name`
             */
            VSwitchName: string;
        }[];
    };
}
