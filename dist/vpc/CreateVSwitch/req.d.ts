export interface CreateVSwitchRequest {
    /**
     * 资源的标签。
     */
    "Tag"?: {
        /**
         * 资源的标签键。最多支持输入20个标签键。如需传入该值，则不能输入空字符串。
         * 一个标签键最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `FinanceJoshua`
         */
        Key: string;
        /**
         * 资源的标签值。最多支持输入20个标签值。如需传入该值，可以输入空字符串。
         * 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `FinanceDept`
         */
        Value: string;
    }[];
    /**
     * 要创建的交换机所属的可用区ID。
     * 您可以通过调用[DescribeZones](~~36064~~)接口获取可用区ID。
     * @example `cn-hangzhou-b`
     */
    "ZoneId": string;
    /**
     * 要创建的交换机的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 交换机的网段。交换机网段要求如下：
     * - 交换机的网段的掩码长度范围为16～29位。
     * - 交换机的网段必须从属于所在VPC的网段。
     * - 交换机的网段不能与所在VPC中路由条目的目标网段相同，但可以是目标网段的子集。
     * - 交换机的网段不能是100.64.0.0/10及其子网网段。
     * @example `172.16.0.0/24`
     */
    "CidrBlock": string;
    /**
     * 交换机IPv6网段的最后8比特位，取值：**0**～**255**。
     * @example `12`
     */
    "Ipv6CidrBlock"?: number;
    /**
     * 要创建的交换机所属的VPC ID。
     * @example `vpc-257gqcdfvx6n****`
     */
    "VpcId": string;
    /**
     * 交换机的名称。
     * 名称长度为1～128个字符，不能以`http://`或`https://`开头。
     * @example `vSwitch-1`
     */
    "VSwitchName"?: string;
    /**
     * 交换机的描述信息。
     * 描述长度为1～256个字符，不能以`http://`或`https://`开头。
     * @example `vSwitch`
     */
    "Description"?: string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `0c593ea1-3bea-11e9-b96b-88e9fe63****`
     */
    "ClientToken"?: string;
    /**
     * VPC的IPv6网段。
     * @example `2408:XXXX:0:6a::/56`
     */
    "VpcIpv6CidrBlock"?: string;
}
