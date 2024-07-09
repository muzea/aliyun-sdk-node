export interface ModifyVSwitchAttributeRequest {
    /**
     *  交换机的ID。
     * @example `vsw-25nacdfvue4****`
     */
    "VSwitchId": string;
    /**
     * 交换机要修改的名称。
     * 名称长度为1～128个字符，不能以`http://`或`https://`开头。
     * @example `VSwitch-1`
     */
    "VSwitchName"?: string;
    /**
     * 交换机所属的地域ID。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 交换机要修改的描述信息。
     * 描述长度为1～256个字符，不能以`http://`或`https://`开头。
     * @example `This is my vswitch.`
     */
    "Description"?: string;
    /**
     * 交换机IPv6网段的最后8比特位，取值：**0**~**255**。
     * 该参数仅当交换机所属的VPC开通IPv6功能支持配置。
     * @example `10`
     */
    "Ipv6CidrBlock"?: number;
    /**
     * 交换机是否开通IPv6功能。取值：
     * - **true**：开通IPv6功能。
     * - **false**（默认值）：未开通IPv6功能。
     * @example `false`
     */
    "EnableIPv6"?: boolean;
    /**
     * 交换机所在VPC的IPv6网段。
     * 该参数仅当VPC开通IPv6功能时支持配置。
     * @example `2408:XXXX:312:3e00::/56`
     */
    "VpcIpv6CidrBlock"?: string;
}
