export interface CreateSecurityProxyRequest {
    /**
     * 接收消息的语言类型。取值：
     * - **zh**（默认）：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * NAT防火墙名称。支持大小写英文字母、中文、数字、下划线（_）、长度为4~50个字符，且不能以下划线开头。
     * @example `nat-防火墙名称`
     */
    "ProxyName": string;
    /**
     * VPC所在的地域ID。
     * > 关于云防火墙支持地域的详细信息，请参见[支持的地域](~~195657~~)。
     * @example `cn-hangzhou`
     */
    "RegionNo": string;
    /**
     * VPC实例ID。
     * @example `vpc-uf6b5lyul0x******`
     */
    "VpcId": string;
    /**
     *  NAT网关的ID。
     * @example `nat-bp1okz6k7******`
     */
    "NatGatewayId": string;
    /**
     * 是否使用交换机自动模式。取值：
     * - **true**：自动模式
     * - **false**：手动模式
     * @example `true`
     */
    "VswitchAuto"?: string;
    /**
     * 交换机ID。交换机手动模式时必填。
     * @example `vsw-bp1sqg9w******`
     */
    "VswitchId"?: string;
    /**
     * NAT网关待切换路由列表。
     */
    "NatRouteEntryList": {
        /**
         * 原NAT网关下一跳转地址。
         * @example `ngw-bp1okz6******`
         */
        NextHopId: string;
        /**
         * 默认路由目的网段。
         * @example `0.0.0.0/0`
         */
        DestinationCidr: string;
        /**
         * 下一跳的网络类型。取值：NatGateway。
         * @example `NatGateway`
         */
        NextHopType: string;
        /**
         * NAT网关默认路由所在路由表。
         * @example `vtb-2ze1******`
         */
        RouteTableId: string;
    }[];
    /**
     * 安全防护开关。取值：
     * - **open**：打开
     * - **close**：关闭
     * @example `close`
     */
    "FirewallSwitch"?: string;
    /**
     * 是否启用严格模式
     * -  1：启用严格模式
     * -  0：禁用严格模式
     * @example `0`
     */
    "StrictMode"?: number;
    /**
     * 虚拟交换机的网段。交换机自动模式时必填。
     * @example `0.0.0.0/0`
     */
    "VswitchCidr"?: string;
}
