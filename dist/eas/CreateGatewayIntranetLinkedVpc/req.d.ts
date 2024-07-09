export interface CreateGatewayIntranetLinkedVpcRequest {
    /**
     * 私有网关对应地域。
     * @example `cn-wulanchabu`
     */
    "ClusterId": string;
    /**
     * 私有网关ID。如何获取私有网关ID，请参见[ListResources](~~412133~~)接口返回结果中的private_gateway_id字段。
     * @example `gw-1uhcqmsc7x22******`
     */
    "GatewayId": string;
    /**
     * 专有网络的ID。如何获取专有网络ID，请参见[DescribeVpcs](~~448581~~)。
     * @example `vpc-uf66uio7md****`
     */
    "VpcId"?: string;
    /**
     * 虚拟交换机ID。如何获取虚拟交换机ID，请参见[DescribeVpcs](~~448581~~)。
     * @example `vsw-8vbqn2at0kljjxxxx****`
     */
    "VSwitchId"?: string;
}
