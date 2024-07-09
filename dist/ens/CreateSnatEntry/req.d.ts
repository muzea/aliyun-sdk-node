export interface CreateSnatEntryRequest {
    /**
     *  NAT网关的ID。
     * @example `nat-5tawjw5j7sgd2deujxuk0****`
     */
    "NatGatewayId": string;
    /**
     * SNAT条目中的EIP，多个EIP之间用半角逗号（,）隔开。
     * @example `120.XXX.XXX.71`
     */
    "SnatIp": string;
    /**
     * 需要公网访问的交换机的ID。该参数表示该交换机内的ENS实例均可以通过SNAT规则访问公网。
     * > **SourceVSwitchId**和**SourceCIDR**同时配置时，**SourceVSwitchId**参数会被忽略，**SourceCIDR**优先级更高。
     * @example `vsw-bp1hwx7gi495q260p****`
     */
    "SourceVSwitchId"?: string;
    /**
     * 网络、交换机或实例的网段，还可以输入任意网段。该网段下的所有实例均可以通过SNAT服务访问互联网或者外部网络。
     * > **SourceVSwitchId**和**SourceCIDR**同时配置时，**SourceVSwitchId**参数会被忽略，**SourceCIDR**优先级更高。
     * @example `10.0.0.0/24`
     */
    "SourceCIDR"?: string;
    /**
     * SNAT条目的名称。长度为1~128个字符，但不能以`http://`或`https://`开头。
     * @example `test0`
     */
    "SnatEntryName"?: string;
    /**
     * 网络ID。该参数表示该网络内的ENS实例均可以通过SNAT规则访问公网。
     * > **SourceNetworkId**和**SourceVSwitchId**或**SourceCIDR**同时配置时，**SourceNetworkId**参数会被忽略，**SourceCIDR**优先级更高。优先级：**SourceCIDR**＞**SourceVSwitchId**＞ **SourceNetworkId**。
     * @example `n-2zeuphj08tt7q3brd****`
     */
    "SourceNetworkId"?: string;
    /**
     * SNAT条目中的备用EIP，多个备用EIP之间用半角逗号（,）隔开。
     * @example `101.XXX.XXX.7`
     */
    "StandbySnatIp"?: string;
}
