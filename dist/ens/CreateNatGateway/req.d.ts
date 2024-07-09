export interface CreateNatGatewayRequest {
    /**
     * NAT网关名称。长度为1~128个字符，但不能以`http://`或`https://`开头。
     * @example `name`
     */
    "Name"?: string;
    /**
     * ENS节点ID。
     * @example `cn-suzhou-telecom`
     */
    "EnsRegionId": string;
    /**
     * 网络ID。
     * @example `n-5qj7ykuxmjn7k96l090sp****`
     */
    "NetworkId": string;
    /**
     * 交换机ID。
     * @example `vsw-5savh5ngxh8sbj14bu7n****`
     */
    "VSwitchId": string;
    /**
     * NAT规格。取值：**enat.default**。
     * @example `enat.default`
     */
    "InstanceType"?: string;
}
