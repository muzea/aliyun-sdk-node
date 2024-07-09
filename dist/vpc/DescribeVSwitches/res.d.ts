export interface DescribeVSwitchesResponse {
    /**
     * 每页包含的条目数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `9A572171-4E27-40D1-BD36-D26C9E71E29E`
     */
    RequestId: string;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 列表条目数。
     * @example `1`
     */
    TotalCount: number;
    VSwitches: {
        /**
         * 交换机的详细信息。
         */
        VSwitch: {
            /**
             * 交换机所属VPC的ID。
             * @example `vpc-257gcdcdq64****`
             */
            VpcId: string;
            /**
             * 交换机的状态，取值：
             * - **Pending**：配置中。
             * - **Available**：可用。
             *
             * @example `Available`
             */
            Status: string;
            /**
             * 交换机的创建时间。
             * @example `2022-01-18T12:43:57Z`
             */
            CreationTime: string;
            /**
             * 是否是默认交换机。取值：
             * - **true**：是默认交换机。
             * - **false**：非默认交换机。
             * @example `true`
             */
            IsDefault: boolean;
            /**
             * 交换机中可用的IP地址数量。
             * @example `1`
             */
            AvailableIpAddressCount: number;
            /**
             * 网络ACL的ID。
             * @example `nacl-a2do9e413e0spzasx****`
             */
            NetworkAclId: string;
            /**
             * 资源归属的阿里云账号ID。
             * @example `25346073170691****`
             */
            OwnerId: number;
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
             * 交换机的描述信息。
             * @example `VSwitchDescription`
             */
            Description: string;
            /**
             * 交换机所属的资源组ID。
             * @example `rg-acfmxazb4ph6aiy****`
             */
            ResourceGroupId: string;
            /**
             * 交换机所属的可用区。
             * @example `cn-hangzhou-d`
             */
            ZoneId: string;
            /**
             * 交换机的IPv6网段。
             * @example `2408:4002:10c4:4e03::/64`
             */
            Ipv6CidrBlock: string;
            /**
             * 交换机的名称。
             * @example `vSwitch`
             */
            VSwitchName: string;
            /**
             * 交换机的共享类型。
             * - 取值为空时，表示该交换机为普通交换机。
             * - 取值为**Shared**时，表示该交换机为共享交换机。
             * - 取值为**Sharing**时，表示该交换机正在被他人共享。
             * @example `Shared`
             */
            ShareType: string;
            /**
             * 是否为交换机开启IPv6网段并配置交换机的IPv6网段。取值如下：
             * - **true**：开启。
             * - **false**：不开启。
             * @example `true`
             */
            EnabledIpv6: boolean;
            Tags: {
                /**
                 * 交换机标签信息。
                 */
                Tag: {
                    /**
                     * 交换机绑定的标签键。
                     * @example `department`
                     */
                    Key: string;
                    /**
                     * 交换机绑定的标签值。
                     * @example `dev`
                     */
                    Value: string;
                }[];
            };
            /**
             * 路由表信息。
             */
            RouteTable: {
                /**
                 * 交换机关联的路由表ID。
                 * @example `vrt-bp145q7glnuzdv****`
                 */
                RouteTableId: string;
                /**
                 * 交换机关联的路由表的类型：
                 * - **System**：系统路由表。
                 * - **Custom**：自定义路由表。
                 * @example `System`
                 */
                RouteTableType: string;
            };
        }[];
    };
}
