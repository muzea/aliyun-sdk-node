export interface ModifyBgpPeerAttributeRequest {
    /**
     * 要修改属性的BGP邻居所在BGP组的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 要修改属性的BGP邻居的ID。
     * @example `bgp-m5eoyp2mwegk8ce9v****`
     */
    "BgpPeerId": string;
    /**
     * 要修改属性的BGP邻居所在BGP组的ID。
     * @example `bgpg-m5eo12jxuw2hc0uqq****`
     */
    "BgpGroupId"?: string;
    /**
     * 要修改的BGP邻居的IP地址。
     * @example `116.62.XX.XX`
     */
    "PeerIpAddress"?: string;
    /**
     * 是否开启BFD功能，取值：
     * - **true**：开启BFD功能。
     * - **false**（默认值）：不开启BFD功能。
     * @example `false`
     */
    "EnableBfd"?: boolean;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * BFD跳数。取值范围：**1**~**255**。
     * 选择开启BFD功能时，需要配置此参数。
     * 输入BFD跳数，即数据从源端到目标端传输时经过的最大设备数量。您可以根据真实的物理链路因素配置不同的跳数。
     * @example `3`
     */
    "BfdMultiHop"?: number;
}
