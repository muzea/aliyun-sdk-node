export interface DescribeRdsVpcsResponse {
    /**
     * VPC列表
     */
    Vpcs: {
        /**
         * VPC信息。
         */
        Vpc: {
            /**
             * VPC状态。 **Available**表示可用。
             * @example `Available`
             */
            Status: string;
            /**
             * VPC的名称。
             * @example `vpc-name`
             */
            VpcName: string;
            /**
             * VPC ID。
             * @example `vpc-bp*******************`
             */
            VpcId: string;
            /**
             * 是否是默认VPC。取值说明：
             * - **true**：是
             * - **false**：否
             * @example `true`
             */
            IsDefault: boolean;
            /**
             * VPC的网段。
             * @example `10.**.**.0/8`
             */
            CidrBlock: string;
            /**
             * 地域ID。
             * @example `cn-hangzhou`
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
             * vSwitch列表。
             */
            VSwitchs: {
                /**
                 * vSwitch状态。**Available**表示可用。
                 * @example `Available`
                 */
                Status: string;
                /**
                 * vSwitch ID。
                 * @example `vsw-bp*******************`
                 */
                VSwitchId: string;
                /**
                 * 是否是默认vSwitch。取值说明：
                 * - **true**：是
                 * - **false**：否
                 * @example `true`
                 */
                IsDefault: boolean;
                /**
                 * vSwitch的网段。
                 * @example `10.**.**.0/24`
                 */
                CidrBlock: string;
                /**
                 * 该参数已废弃，故不会返回参数值。
                 * @example `null`
                 */
                GmtCreate: string;
                /**
                 * 该参数已废弃，故不会返回参数值。
                 * @example `null`
                 */
                GmtModified: string;
                /**
                 * vSwitch所属的可用区。
                 * @example `cn-hangzhou-i`
                 */
                IzNo: string;
                /**
                 * vSwitch的名称。
                 * @example `vsw-name`
                 */
                VSwitchName: string;
            }[];
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
        }[];
    };
    /**
     * 请求ID。
     * @example `53924AF0-1628-5AA2-9C95-D4**********`
     */
    RequestId: string;
}
