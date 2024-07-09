export interface DescribeVSwitchAttributesResponse {
    /**
     * 交换机所属的VPC ID。
     * @example `vpc-257gq642n****`
     */
    VpcId: string;
    /**
     * 交换机的状态，取值：
     * - **Pending**：配置中。
     * - **Available**：可用。
     * @example `Pending`
     */
    Status: string;
    /**
     * 交换机的创建时间。
     * @example `2021-08-22T10:40:25Z`
     */
    CreationTime: string;
    /**
     * 是否是默认交换机。取值：
     * - **true**：默认交换机。
     * - **false**：非默认交换机。
     * @example `false`
     */
    IsDefault: boolean;
    /**
     * 可用IP数量。
     * @example `12`
     */
    AvailableIpAddressCount: number;
    /**
     * 网络ACL规则。
     * @example `1`
     */
    NetworkAclId: string;
    /**
     * 资源归属的阿里云账号ID。
     * @example `28768383240243****`
     */
    OwnerId: number;
    /**
     * 交换机的ID。
     * @example `vsw-25b7pv15t****`
     */
    VSwitchId: string;
    /**
     * 请求ID。
     * @example `7B48B4B9-1EAD-469F-B488-594DAB4B6A1A`
     */
    RequestId: string;
    /**
     * 交换机的私网地址范围。
     * @example `192.168.0.1/24`
     */
    CidrBlock: string;
    /**
     * 交换机的描述。
     * @example `abc`
     */
    Description: string;
    /**
     * 资源组ID。
     * @example `rg-acfmxazb4ph****`
     */
    ResourceGroupId: string;
    /**
     * 交换机的所属可用区。
     * @example `cn-beijing-a`
     */
    ZoneId: string;
    /**
     * 交换机的IPv6网段。
     * @example `2408:XXXX:3c5:44e::/64`
     */
    Ipv6CidrBlock: string;
    /**
     * 交换机名称。
     * @example `test`
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
     * 是否为交换机开启IPv6网段并配置交换机的IPv6网段。取值：
     * - **true**：开启。
     * - **false**：不开启。
     * @example `true`
     */
    EnabledIpv6: boolean;
    /**
     * 交换机的路由表信息。
     */
    RouteTable: {
        /**
         * 交换机关联的路由表ID。
         * @example `vtb-bp145q7glnuzdv****`
         */
        RouteTableId: string;
        /**
         * 路由表类型。取值：
         * - **System**：系统路由表。
         * - **Custom**：自定义路由表。
         * @example `System`
         */
        RouteTableType: string;
    };
    Tags: {
        /**
         * 标签列表信息。
         */
        Tag: {
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
    };
}
